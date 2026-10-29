/* Static-mode API shim for GitHub Pages.
   Intercepts fetch('/api/...') and serves pre-built JSON from ./data/, applying
   the same filtering/pagination the FastAPI backend does. Loaded BEFORE app.js. */
(function () {
  const realFetch = window.fetch.bind(window);
  const cache = {};
  const base = document.baseURI;

  async function load(name) {
    if (!cache[name]) {
      cache[name] = realFetch(new URL('./data/' + name + '.json', base)).then(r => {
        if (!r.ok) throw new Error('missing ' + name);
        return r.json();
      });
    }
    return cache[name];
  }
  const J = (o) => new Response(JSON.stringify(o), { status: 200, headers: { 'Content-Type': 'application/json' } });

  function filterPublications(pubs, p) {
    let rows = pubs;
    const q = (p.get('q') || '').toLowerCase();
    const year = p.get('year') || '';
    if (q) rows = rows.filter(x => (x.title || '').toLowerCase().includes(q) || (x.abstract || '').toLowerCase().includes(q));
    if (year) rows = rows.filter(x => String(x.year) === year);
    const total = rows.length;
    const offset = parseInt(p.get('offset') || '0', 10);
    const limit = parseInt(p.get('limit') || '50', 10);
    return { total, results: rows.slice(offset, offset + limit) };
  }

  function filterSeq(rows, kind, p) {
    const gene = p.get('gene') || '', species = p.get('species') || '', q = (p.get('q') || '').toLowerCase();
    const genomesOnly = p.get('genomes_only') === '1';
    let r = rows;
    if (gene) r = r.filter(x => x.gene === gene);
    if (species) r = r.filter(x => x.species === species);
    if (genomesOnly) r = r.filter(x => x.length >= 15000);
    if (q) r = r.filter(x => x.accession.toLowerCase().includes(q) || (x.description || '').toLowerCase().includes(q));
    const total = r.length;
    r = r.slice().sort((a, b) => {
      const pa = (a.description || '').toLowerCase().includes('partial') ? 1 : 0;
      const pb = (b.description || '').toLowerCase().includes('partial') ? 1 : 0;
      if (pa !== pb) return pa - pb;
      const ga = a.gene || '~', gb = b.gene || '~';
      if (ga !== gb) return ga < gb ? -1 : 1;
      return b.length - a.length;
    });
    const offset = parseInt(p.get('offset') || '0', 10);
    const limit = parseInt(p.get('limit') || '50', 10);
    return { total, results: r.slice(offset, offset + limit) };
  }

  window.fetch = async function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url);
    let u;
    try { u = new URL(url, base); } catch (e) { return realFetch(input, init); }
    if (!u.pathname.includes('/api/')) return realFetch(input, init);
    const ep = u.pathname.split('/api/')[1].replace(/\/+$/, '');
    const p = u.searchParams;
    try {
      switch (ep) {
        case 'stats': return J(await load('stats'));
        case 'viruses': return J(await load('viruses'));
        case 'proteins': return J(await load('proteins'));
        case 'evidence-types': return J(await load('evidence-types'));
        case 'ai-ready': return J(await load('ai-ready'));
        case 'governance': return J(await load('governance'));
        case 'phylogeny': return J(await load('phylogeny'));
        case 'mutation-pathogenicity': return J(await load('mutation-pathogenicity'));
        case 'daily-summary': { const d = await load('daily-summary'); d.available = d.available !== false; return J(d); }
        case 'llm/status': return J({ configured: false, base_url: null, model: '', backend: 'static' });
        case 'ask': return J({ answer: null, status: 'not_configured', context_used: false,
          message: 'Static demo — the local Qwen model runs only on the self-hosted instance.' });
        case 'structures': {
          const c = await load('structures');
          let e = c.entries || [];
          const prot = p.get('protein'); if (prot) e = e.filter(x => x.protein === prot);
          return J({ total: e.length, entries: e });
        }
        case 'sequences/stats': return J(await load('sequences-stats'));
        case 'mutations/literature': return J(await load('mutations-literature'));
        case 'mutations/sequence': {
          let r = await load('mutations-sequence');
          const g = p.get('gene'), mf = parseFloat(p.get('min_freq') || '0');
          if (g) r = r.filter(x => x.gene === g);
          if (mf) r = r.filter(x => x.poly_freq >= mf);
          return J(r);
        }
        case 'publications': return J(filterPublications(await load('publications'), p));
      }
      if (ep.startsWith('sequence/')) {
        // no full sequences shipped; link out to NCBI
        const parts = ep.split('/'); const kind = parts[1], acc = parts.slice(2).join('/');
        const ncbi = kind === 'protein' ? 'https://www.ncbi.nlm.nih.gov/protein/' : 'https://www.ncbi.nlm.nih.gov/nuccore/';
        return J({ external: ncbi + encodeURIComponent(acc) });
      }
      if (ep.startsWith('sequences/')) {
        const kind = ep.split('/')[1];
        return J(filterSeq(await load('sequences-' + kind), kind, p));
      }
      if (ep.startsWith('publication/')) {
        const parts = ep.split('/'); const pmid = parts[1];
        if (parts[2] === 'brief') {
          const b = await load('briefs'); const rec = b[pmid];
          if (!rec) return J({ available: false, abstract: '', message: 'No open-access full text.' });
          const brief = { available: true, methods: rec.methods, results: rec.results, conclusion: rec.conclusion, abstract: rec.abstract || '' };
          if (p.get('llm')) brief.llm_brief = '[Static demo] ' + [rec.methods, rec.results, rec.conclusion].filter(Boolean).join(' ').slice(0, 700);
          return J(brief);
        }
        const pubs = await load('publications'); const rec = pubs.find(x => String(x.pmid) === pmid);
        return rec ? J(rec) : new Response('{}', { status: 404 });
      }
    } catch (e) { /* fall through */ }
    return realFetch(input, init);
  };
})();