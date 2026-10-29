/* FiloVirus Atlas — frontend. Vanilla JS, bilingual CN/EN, Nature style. */
const $ = (id) => document.getElementById(id);

/* ============================ i18n ============================ */
const I18N = {
  en: {
    "brand.subtitle": "A source-linked, sequence-integrated knowledgebase and evolutionary model for the family Filoviridae — the state of published evidence, viral protein variation, structural targets, and predicted pathogenic mutation.",
    "nav.overview": "Overview", "nav.viruses": "Viruses", "nav.evolution": "Evolution",
    "nav.mutations": "Mutation & pathogenicity", "nav.structures": "Structures", "nav.sequences": "Sequences",
    "nav.evidence": "Evidence model", "nav.literature": "Literature",
    "nav.data": "AI-Ready data", "nav.governance": "Governance", "nav.about": "About",
    "overview.title": "Overview",
    "overview.lede": "Current state of the curated corpus and its derived sequence, structural and literature analyses. Updated daily.",
    "overview.chartTitle": "Publications by year",
    "stat.publications": "Publications", "stat.with_abstract": "With abstract",
    "stat.with_fulltext": "With full text", "stat.viruses": "Virus species",
    "stat.proteins": "Viral proteins", "stat.evidence_types": "Evidence types",
    "stat.literature_mutations": "Literature mutations", "stat.sequence_mutations": "Sequence variants",
    "stat.structures": "PDB structures",
    "daily.title": "Daily update", "daily.new": "new publications indexed; corpus now",
    "daily.refresh": "Refresh now", "daily.running": "Updating…",
    "daily.newPapers": "New publications", "daily.tables": "Tables refreshed",
    "daily.lastRun": "Last run",
    "viruses.title": "Virus species",
    "viruses.lede": "Normalized Filoviridae entities mapped to ICTV taxonomy and NCBI Taxonomy identifiers.",
    "col.species": "Species", "col.short": "Short", "col.taxid": "Taxonomy ID",
    "evolution.title": "Evolutionary relationships",
    "evolution.lede": "Alignment-free phylogeny of complete filovirus genomes (k-mer/Mash distance, average-linkage tree). Each leaf is a genome; colour marks the species.",
    "evolution.nGenomes": "Genomes", "evolution.speciesN": "Species",
    "evolution.note": "Branch lengths are nucleotide k-mer distances; within-species distances are small and between-species distances large, recovering the established Filoviridae phylogeny.",
    "mutations.title": "Mutation & pathogenicity",
    "mutations.lede": "Relationship between predicted pathogenicity and observed prevalence. Mutations that are predicted highly pathogenic yet rare in circulating sequences are prioritised as risk candidates.",
    "mutations.topRisk": "Top risk candidates (high predicted effect, low prevalence)",
    "mutations.seqTitle": "Sequence-derived polymorphism",
    "col.gene": "Gene", "col.position": "Pos", "col.ref": "Ref", "col.alt": "Alt",
    "col.score": "Pathogenicity", "col.freq": "Prevalence", "col.risk": "Risk",
    "col.mutation": "Mutation", "col.mentions": "Mentions",
    "structures.title": "Structural biology",
    "structures.lede": "All filovirus protein and protein-nucleic-acid structures from the RCSB PDB, with bound ligands (candidate drug-binding sites) and curated key neutralising-antibody epitopes.",
    "structures.total": "Structures", "structures.wNucleic": "With nucleic acid",
    "structures.wLigands": "With ligands",
    "structures.epitopeTitle": "Key epitopes and candidate drug-binding sites",
    "col.pdb": "PDB", "col.protein": "Protein", "col.title": "Title",
    "col.method": "Method", "col.res": "Res (Å)", "col.year": "Year",
    "col.ligands": "Bound ligands",
    "structures.all": "All",
    "sequences.title": "Sequences",
    "sequences.lede": "Browse all filovirus amino-acid (protein) and nucleotide sequences. Filter by gene or species, then click a row to view the aligned, position-numbered sequence; copy or download FASTA.",
    "sequences.protein": "Amino acid", "sequences.nucleotide": "Nucleotide",
    "sequences.genomes": "Complete genomes",
    "sequences.allGenes": "All genes", "sequences.allSpecies": "All species",
    "sequences.genomesOnly": "complete genomes only",
    "sequences.searchPh": "Search accession or description (e.g. GP, Makona, SUDV)",
    "sequences.searchBtn": "Search", "sequences.records": "records",
    "sequences.colAcc": "Accession", "sequences.colGene": "Gene", "sequences.colSpecies": "Species",
    "sequences.colLen": "Length", "sequences.colDesc": "Description",
    "sequences.copy": "Copy", "sequences.copied": "Sequence copied",
    "sequences.positions": "residues/bases",
    "evidence.title": "Evidence model",
    "evidence.lede": "The FiloVIew ontology organises filovirus findings into five categories and twenty-one evidence types. Each record links a source-linked finding, its supporting text, and its normalized entities.",
    "literature.title": "Literature",
    "literature.lede": "The filovirus corpus retrieved from PubMed, with open-access full text from PubMed Central where available.",
    "literature.askLabel": "Ask the corpus", "literature.askBtn": "Ask",
    "literature.askPlaceholder": "e.g. Which mutations in Ebola GP affect NPC1 binding?",
    "literature.searchBtn": "Search",
    "literature.searchPlaceholder": "Search title or abstract (e.g. NPC1, A82V, Marburg)",
    "literature.results": "results", "literature.noResults": "No results.",
    "literature.thinking": "Thinking…", "literature.grounded": "grounded in",
    "literature.sources": "corpus source(s)", "literature.failed": "Request failed.",
    "literature.fulltext": "Full text", "literature.brief": "Brief",
    "literature.aiBrief": "AI brief", "literature.newestFirst": "newest first",
    "literature.secMethods": "Methods:", "literature.secResults": "Results:",
    "literature.secConclusion": "Conclusion:",
    "literature.noFulltext": "No open-access full text for this record; see the abstract above.",
    "literature.generating": "Generating brief…",
    "data.title": "AI-Ready data",
    "data.lede": "Versioned, schema-annotated datasets prepared for machine learning, with data cards describing modality, fields and provenance.",
    "data.download": "Download", "data.records": "records",
    "governance.title": "AI-Ready data governance",
    "governance.lede": "Compliance against the governance metrics of the associated talent-programme task book. Each metric reports its measured value and status (met / partial / roadmap); metrics are not silently claimed.",
    "gov.met": "Metrics met", "gov.partial": "Partial", "gov.roadmap": "Roadmap",
    "gov.queryplan": "Query plan (ms)", "gov.modalities": "Modalities",
    "gov.metric": "Metric", "gov.target": "Target", "gov.measured": "Measured", "gov.status": "Status",
    "about.title": "About",
    "about.p1": "FiloVirus Atlas is an independent, source-linked knowledgebase and computational framework for the family Filoviridae. It integrates the published literature (with open-access full text), complete-genome sequence variation, protein structures, transcriptomic and antiviral-screening resources, and a protein-language-model classifier of mutation effect.",
    "about.p2": "Its evidence model — FiloVIew — organises filovirus findings into five categories and twenty-one evidence types, tailored to mutation, pathogenicity and therapeutic dimensions, and links each record to underlying sequences.",
    "about.p3": "Per-site variation is computed by alignment of deduplicated protein sequences to the Zaire ebolavirus Mayinga reference. Phylogeny is alignment-free (k-mer distance). Mutation pathogenicity is predicted by an ESM-2 protein-language-model classifier trained on literature-curated and full-text-mined phenotype-altering substitutions.",
    "about.p4": "This resource is under active construction; counts reflect the state of the corpus at the last daily update.",
    "footer": "FiloVirus Atlas · evidence-linked filovirus knowledgebase · corpus and analyses last updated"
  },
  zh: {
    "brand.subtitle": "面向丝状病毒科（Filoviridae）的、来源可溯源且与序列一体化的知识库与进化模型——呈现已发表证据、病毒蛋白变异、结构靶点与预测的高致病性突变。",
    "nav.overview": "概览", "nav.viruses": "病毒", "nav.evolution": "进化",
    "nav.mutations": "突变与致病性", "nav.structures": "结构", "nav.sequences": "序列",
    "nav.evidence": "证据模型", "nav.literature": "文献",
    "nav.data": "AI-Ready 数据", "nav.governance": "数据治理", "nav.about": "关于",
    "overview.title": "概览",
    "overview.lede": "已整理语料库及其衍生的序列、结构与文献分析的当前状态。每日更新。",
    "overview.chartTitle": "历年发表文献数",
    "stat.publications": "文献总数", "stat.with_abstract": "含摘要",
    "stat.with_fulltext": "含全文", "stat.viruses": "病毒物种",
    "stat.proteins": "病毒蛋白", "stat.evidence_types": "证据类型",
    "stat.literature_mutations": "文献突变", "stat.sequence_mutations": "序列变异",
    "stat.structures": "PDB 结构",
    "daily.title": "每日更新", "daily.new": "篇新增文献已入库；语料库现共",
    "daily.refresh": "立即更新", "daily.running": "更新中…",
    "daily.newPapers": "新增文献", "daily.tables": "已刷新数据表",
    "daily.lastRun": "上次运行",
    "viruses.title": "病毒物种",
    "viruses.lede": "归一化的丝状病毒实体，映射至 ICTV 分类与 NCBI 分类号。",
    "col.species": "物种", "col.short": "缩写", "col.taxid": "分类号",
    "evolution.title": "进化关系",
    "evolution.lede": "基于完整丝状病毒基因组的免比对系统发育树（k-mer/Mash 距离，平均连接法）。每个叶节点为一个基因组，颜色标识物种。",
    "evolution.nGenomes": "基因组数", "evolution.speciesN": "物种数",
    "evolution.note": "枝长为核苷酸 k-mer 距离；种内距离小而种间距离大，重现了公认的丝状病毒科系统发育关系。",
    "mutations.title": "突变与致病性",
    "mutations.lede": "预测致病性与观测流行率之间的关系。预测高致病但在流行序列中罕见的突变被优先列为风险候选。",
    "mutations.topRisk": "风险候选前列（预测效应高、流行率低）",
    "mutations.seqTitle": "序列来源的位点多态性",
    "col.gene": "基因", "col.position": "位点", "col.ref": "原", "col.alt": "变",
    "col.score": "致病性", "col.freq": "流行率", "col.risk": "风险",
    "col.mutation": "突变", "col.mentions": "提及数",
    "structures.title": "结构生物学",
    "structures.lede": "来自 RCSB PDB 的全部丝状病毒蛋白及蛋白-核酸结构，含结合配体（候选药物结合位点）与整理的关键中和抗体表位。",
    "structures.total": "结构总数", "structures.wNucleic": "含核酸",
    "structures.wLigands": "含配体",
    "structures.epitopeTitle": "关键表位与候选药物结合位点",
    "col.pdb": "PDB", "col.protein": "蛋白", "col.title": "标题",
    "col.method": "方法", "col.res": "分辨率(Å)", "col.year": "年份",
    "col.ligands": "结合配体",
    "structures.all": "全部",
    "sequences.title": "序列",
    "sequences.lede": "浏览全部丝状病毒氨基酸（蛋白）与核酸序列。可按基因或物种筛选，点击行查看带位点编号的序列，并可复制或下载 FASTA。",
    "sequences.protein": "氨基酸", "sequences.nucleotide": "核酸",
    "sequences.genomes": "完整基因组",
    "sequences.allGenes": "全部基因", "sequences.allSpecies": "全部物种",
    "sequences.genomesOnly": "仅完整基因组",
    "sequences.searchPh": "检索登录号或描述（如 GP、Makona、SUDV）",
    "sequences.searchBtn": "检索", "sequences.records": "条记录",
    "sequences.colAcc": "登录号", "sequences.colGene": "基因", "sequences.colSpecies": "物种",
    "sequences.colLen": "长度", "sequences.colDesc": "描述",
    "sequences.copy": "复制", "sequences.copied": "序列已复制",
    "sequences.positions": "个残基/碱基",
    "evidence.title": "证据模型",
    "evidence.lede": "FiloVIew 本体将丝状病毒发现组织为五大类、二十一种证据类型。每条记录关联来源发现、支撑文本及归一化实体。",
    "literature.title": "文献",
    "literature.lede": "从 PubMed 检索的丝状病毒语料库，并在可得时获取 PubMed Central 的开放获取全文。",
    "literature.askLabel": "向语料库提问", "literature.askBtn": "提问",
    "literature.askPlaceholder": "例如：哪些埃博拉 GP 突变影响 NPC1 结合？",
    "literature.searchBtn": "检索",
    "literature.searchPlaceholder": "检索标题或摘要（如 NPC1、A82V、Marburg）",
    "literature.results": "条结果", "literature.noResults": "无结果。",
    "literature.thinking": "思考中…", "literature.grounded": "依据",
    "literature.sources": "篇语料来源", "literature.failed": "请求失败。",
    "literature.fulltext": "全文", "literature.brief": "简报",
    "literature.aiBrief": "AI 简报", "literature.newestFirst": "最新优先",
    "literature.secMethods": "方法：", "literature.secResults": "结果：",
    "literature.secConclusion": "结论：",
    "literature.noFulltext": "该记录暂无开放获取全文，请见上方摘要。",
    "literature.generating": "生成简报中…",
    "data.title": "AI-Ready 数据",
    "data.lede": "为机器学习准备的、带版本与模式标注的数据集，并提供描述模态、字段与来源的数据卡。",
    "data.download": "下载", "data.records": "条记录",
    "governance.title": "AI-Ready 数据治理",
    "governance.lede": "对照人才项目任务书的治理指标进行合规评估。每项指标给出实测值与状态（达标 / 部分 / 规划中），不虚报。",
    "gov.met": "已达标", "gov.partial": "部分", "gov.roadmap": "规划中",
    "gov.queryplan": "查询计划(ms)", "gov.modalities": "数据模态",
    "gov.metric": "指标", "gov.target": "目标", "gov.measured": "实测", "gov.status": "状态",
    "about.title": "关于",
    "about.p1": "FiloVirus Atlas 是面向丝状病毒科的独立知识库与计算框架，来源可溯源。它整合了已发表文献（含开放获取全文）、完整基因组序列变异、蛋白结构、转录组与抗病毒筛选资源，以及一个基于蛋白语言模型的突变效应分类器。",
    "about.p2": "其证据模型 FiloVIew 将丝状病毒发现组织为五大类、二十一种证据类型，聚焦突变、致病性与治疗维度，并将每条记录关联到对应序列。",
    "about.p3": "位点变异通过对去重蛋白序列与扎伊尔型埃博拉病毒 Mayinga 参考序列比对计算。系统发育为免比对方法（k-mer 距离）。突变致病性由 ESM-2 蛋白语言模型分类器预测，训练标签来自文献整理与全文挖掘的表型改变型替换。",
    "about.p4": "本资源仍在持续建设中；各项计数反映最近一次每日更新时的状态。",
    "footer": "FiloVirus Atlas · 来源可溯源的丝状病毒知识库 · 语料与分析最后更新于"
  }
};
let LANG = localStorage.getItem("filo_lang") || "en";
// allow ?lang=zh links to override
const urlLang = new URLSearchParams(location.search).get("lang");
if (urlLang === "zh" || urlLang === "en") LANG = urlLang;
const t = (k) => (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k] || k);

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("#langToggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === LANG);
  });
  document.documentElement.lang = LANG === "zh" ? "zh" : "en";
  // re-render dynamic views whose labels are language-dependent
  loadOverview(); loadViruses(); loadEvolution(); loadMutations();
  loadStructures(); loadSequences(); loadEvidence(); loadDataCards(); loadGovernance(); loadAbout();
}
document.querySelectorAll("#langToggle button").forEach((b) => {
  b.addEventListener("click", () => {
    LANG = b.dataset.lang; localStorage.setItem("filo_lang", LANG);
    applyI18n(); if ($("searchBox")) searchLit();
  });
});

/* ============================ nav ============================ */
function activateTab(view) {
  document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x.dataset.view === view));
  document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
  const el = $("view-" + view); if (el) el.classList.add("active");
}
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => { activateTab(tab.dataset.view); history.replaceState(null, "", "#" + tab.dataset.view); });
});

const now = new Date(); const stamp = now.toISOString().slice(0, 10);
$("datestamp").textContent = (LANG === "zh" ? "语料快照 " : "CORPUS SNAPSHOT ") + stamp;
$("footerDate").textContent = stamp;

async function getJSON(url) { const r = await fetch(url); if (!r.ok) throw new Error(url + " " + r.status); return r.json(); }
function esc(s) { return String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

/* ============================ overview ============================ */
async function loadOverview() {
  const s = await getJSON("/api/stats");
  const tiles = [["publications","stat.publications"],["with_abstract","stat.with_abstract"],
    ["with_fulltext","stat.with_fulltext"],["viruses","stat.viruses"],
    ["proteins","stat.proteins"],["evidence_types","stat.evidence_types"],
    ["literature_mutations","stat.literature_mutations"],["sequence_mutations","stat.sequence_mutations"]];
  $("stats").innerHTML = tiles.map(([k, l]) =>
    `<div class="stat"><div class="value">${(s[k]||0).toLocaleString()}</div><div class="label">${t(l)}</div></div>`).join("");
  const years = Object.entries(s.years).filter(([y]) => +y >= 1990).sort((a,b)=>+a[0]-+b[0]);
  drawYearChart(years);
}
function drawYearChart(years) {
  const svg = $("yearChart"); const W=1000,H=220,padL=44,padB=30,padT=16;
  const max = Math.max(...years.map(([,n])=>n)); const bw=(W-padL-10)/years.length;
  let bars="",xlabels="";
  years.forEach(([y,n],i)=>{ const h=(n/max)*(H-padT-padB); const x=padL+i*bw;
    bars+=`<rect class="bar" x="${x}" y="${H-padB-h}" width="${Math.max(bw-2,0.5)}" height="${h}"><title>${y}: ${n}</title></rect>`;
    if(i%2===0) xlabels+=`<text x="${x+bw/2}" y="${H-padB+14}" text-anchor="middle">${y}</text>`; });
  svg.innerHTML=`<g class="axis"><line x1="${padL}" y1="${H-padB}" x2="${W-8}" y2="${H-padB}"/><text x="${padL}" y="${padT+4}">${max.toLocaleString()}</text></g>${bars}${xlabels}`;
}
async function loadDailySummary() {
  const d = await getJSON("/api/daily-summary");
  if (!d.available) { $("dailySummary").innerHTML=`<div style="margin:12px 0"><button class="dl" style="border:1px solid var(--accent);color:var(--accent);background:#fff;font-family:var(--sans);font-size:12px;padding:5px 12px;cursor:pointer" onclick="runDaily()">${t("daily.refresh")}</button></div>`; return; }
  const terms=(d.top_terms||[]).slice(0,8).map(([x])=>`<span class="tag" style="margin-left:0;margin-right:6px">${esc(x)}</span>`).join("");
  const titles=(d.new_titles||[]).slice(0,6).map(x=>`<li style="margin:2px 0">${esc(x.title)} <span style="color:var(--muted)">(${esc(x.year||"")})</span></li>`).join("");
  const tables=(d.tables_refreshed||[]).length?`<div style="font-family:var(--sans);font-size:11px;color:var(--muted);margin-top:8px">${t("daily.tables")}: ${esc((d.tables_refreshed||[]).join(", "))}</div>`:"";
  $("dailySummary").innerHTML=`<div style="border:1px solid var(--rule);border-left:3px solid var(--accent);padding:14px 16px;background:var(--paper-alt);margin:12px 0">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div style="font-family:var(--sans);font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted)">${t("daily.title")} · ${esc(d.date)}</div>
      <button class="dl" style="border:1px solid var(--accent);color:var(--accent);background:#fff;font-family:var(--sans);font-size:11px;padding:4px 10px;cursor:pointer" onclick="runDaily()">${d.running?t("daily.running"):t("daily.refresh")}</button>
    </div>
    <div style="margin:8px 0"><b>${d.new_publications}</b> ${t("daily.new")} <b>${d.corpus_total.toLocaleString()}</b>.</div>
    ${d.narrative?`<div style="font-size:13px;color:var(--ink-soft);margin:8px 0;line-height:1.5">${esc(d.narrative)}</div>`:""}
    ${titles?`<div style="font-family:var(--sans);font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-top:8px">${t("daily.newPapers")}</div><ul style="font-size:12px;margin:4px 0 4px 18px;padding:0">${titles}</ul>`:""}
    ${terms?`<div style="margin-top:6px">${terms}</div>`:""}
    ${tables}
    <div style="font-family:var(--sans);font-size:10px;color:var(--muted);margin-top:8px">${t("daily.lastRun")}: ${esc(d.run_at||d.date)}</div>
  </div>`;
}
async function runDaily() {
  try {
    const r = await fetch("/api/daily-run?days=2", {method:"POST"}).then(x=>x.json());
    $("dailySummary").insertAdjacentHTML("afterbegin", `<div id="dlRun" style="font-family:var(--sans);font-size:11px;color:var(--accent);margin-bottom:6px">${t("daily.running")}</div>`);
    const poll = setInterval(async () => {
      const st = await getJSON("/api/daily-run/status");
      if (!st.running) { clearInterval(poll); loadDailySummary(); }
    }, 4000);
  } catch(e) {}
}

/* ============================ viruses ============================ */
async function loadViruses() {
  const vs = await getJSON("/api/viruses");
  $("viruses").innerHTML=`<table><thead><tr><th>${t("col.species")}</th><th class="num">${t("col.short")}</th><th class="num">${t("col.taxid")}</th></tr></thead>
    <tbody>${vs.map(v=>`<tr><td><i>${esc(v.name)}</i></td><td class="num">${esc(v.short)}</td><td class="num">${v.taxid}</td></tr>`).join("")}</tbody></table>`;
}

/* ============================ evolution ============================ */
async function loadEvolution() {
  $("phyloImg").src = "./figures/fig8_phylogeny.svg";
  const d = await getJSON("/api/phylogeny");
  const sp = Object.keys(d.species || {});
  $("phyloStats").innerHTML = `
    <div class="stat"><div class="value">${d.n_genomes}</div><div class="label">${t("evolution.nGenomes")}</div></div>
    <div class="stat"><div class="value">${sp.length}</div><div class="label">${t("evolution.speciesN")}</div></div>`;
  $("phyloNote").textContent = t("evolution.note");
}

/* ============================ mutations ============================ */
async function loadMutations() {
  $("pathoImg").src = "./figures/fig9_mutation_pathogenicity.svg";
  const mp = (await getJSON("/api/mutation-pathogenicity")).results || [];
  const top = [...mp].sort((a,b)=>b.score-a.score).slice(0,25);
  $("riskTable").innerHTML = `<table><thead><tr>
    <th>${t("col.mutation")}</th><th class="num">${t("col.score")}</th>
    <th class="num">${t("col.freq")}</th><th class="num">${t("col.risk")}</th><th class="num">${t("col.mentions")}</th></tr></thead>
    <tbody>${top.map(r=>`<tr><td><code>${esc(r.mutation)}</code></td>
      <td class="num">${r.score.toFixed(3)}</td><td class="num">${r.poly_freq.toFixed(3)}</td>
      <td class="num">${r.risk.toFixed(3)}</td><td class="num">${r.mentions||0}</td></tr>`).join("")}</tbody></table>`;

  const seq = await getJSON("/api/mutations/sequence");
  const genes = [...new Set(seq.map(r=>r.gene))];
  $("seqGeneFilter").innerHTML = ["All",...genes].map((g,i)=>
    `<button class="term" data-g="${g}" style="margin-right:6px;padding:4px 10px;border:1px solid var(--rule-strong);background:${i===0?'var(--accent)':'#fff'};color:${i===0?'#fff':'var(--accent)'};cursor:pointer;font-family:var(--sans);text-transform:uppercase;letter-spacing:.5px;font-size:11px" onclick="filterSeq('${g}')">${g==='All'?t('structures.all'):g}</button>`).join("");
  window._seq = seq; renderSeq(seq);
}
function renderSeq(rows) {
  const top = rows.slice(0,200);
  $("seqMutations").innerHTML = `<table><thead><tr><th>${t("col.gene")}</th><th class="num">${t("col.position")}</th>
    <th>${t("col.ref")}</th><th>${t("col.alt")}</th><th class="num">${t("col.freq")}</th></tr></thead>
    <tbody>${top.map(r=>`<tr><td>${r.gene}</td><td class="num">${r.pos}</td><td>${r.ref_aa}</td><td>${r.alt_aa}</td><td class="num">${r.poly_freq.toFixed(3)}</td></tr>`).join("")}</tbody></table>`;
}
window.filterSeq = function(g){ document.querySelectorAll("#seqGeneFilter button").forEach(b=>{b.style.background=b.dataset.g===g?'var(--accent)':'#fff';b.style.color=b.dataset.g===g?'#fff':'var(--accent)';});
  renderSeq(g==='All'?window._seq:window._seq.filter(r=>r.gene===g)); };

/* ============================ structures ============================ */
async function loadStructures() {
  const d = await getJSON("/api/structures");
  const entries = d.entries || [];
  const prots = ["GP","VP35","VP40","VP24","VP30","NP","L","MARV"];
  const have = prots.filter(p=>entries.some(e=>e.protein===p));
  $("structSummary").innerHTML = `
    <div class="stat"><div class="value">${entries.length}</div><div class="label">${t("structures.total")}</div></div>
    <div class="stat"><div class="value">${entries.filter(e=>e.has_nucleic_acid).length}</div><div class="label">${t("structures.wNucleic")}</div></div>
    <div class="stat"><div class="value">${entries.filter(e=>e.ligands&&e.ligands.length).length}</div><div class="label">${t("structures.wLigands")}</div></div>`;
  $("structFilter").innerHTML = ["ALL",...have].map((p,i)=>
    `<button class="term" data-p="${p}" style="margin-right:6px;padding:4px 10px;border:1px solid var(--rule-strong);background:${i===0?'var(--accent)':'#fff'};color:${i===0?'#fff':'var(--accent)'};cursor:pointer;font-family:var(--sans);text-transform:uppercase;letter-spacing:.5px;font-size:11px" onclick="filterStruct('${p}')">${p==='ALL'?t('structures.all'):p}</button>`).join("");
  window._struct = entries; renderStruct(entries);
  // epitope/drug annotations grouped by protein
  const byProt = {};
  entries.forEach(e=>{ if(e.epitopes&&e.epitopes.length) byProt[e.protein]=e.epitopes; });
  $("epitopes").innerHTML = Object.entries(byProt).map(([p,eps])=>
    `<div class="cat"><h3>${p}</h3>${eps.map(x=>`<div class="etype"><div class="name">${esc(x.name)}</div><div class="def">${esc(x.region)}<br><span style="color:var(--muted)">${esc(x.note)}</span></div></div>`).join("")}</div>`).join("");
}
function renderStruct(rows) {
  const top = rows.slice(0,150);
  $("structTable").innerHTML = `<table><thead><tr><th>${t("col.pdb")}</th><th>${t("col.protein")}</th>
    <th>${t("col.title")}</th><th>${t("col.method")}</th><th class="num">${t("col.res")}</th>
    <th class="num">${t("col.year")}</th><th>${t("col.ligands")}</th></tr></thead>
    <tbody>${top.map(e=>`<tr><td><a href="https://www.rcsb.org/structure/${e.pdb_id}" target="_blank">${e.pdb_id}</a></td>
      <td>${esc(e.protein)}</td><td style="max-width:280px">${esc((e.title||"").slice(0,90))}</td>
      <td class="term">${esc((e.method||"").replace("DIFFRACTION","").replace("ELECTRON","EM").trim())}</td>
      <td class="num">${e.resolution?e.resolution.toFixed(1):""}</td><td class="num">${e.year||""}</td>
      <td class="term" style="max-width:160px">${esc((e.ligands||[]).slice(0,3).join("; "))}</td></tr>`).join("")}</tbody></table>`;
}
window.filterStruct = function(p){ document.querySelectorAll("#structFilter button").forEach(b=>{b.style.background=b.dataset.p===p?'var(--accent)':'#fff';b.style.color=b.dataset.p===p?'#fff':'var(--accent)';});
  renderStruct(p==='ALL'?window._struct:window._struct.filter(e=>e.protein===p)); };

/* ============================ evidence ============================ */
async function loadEvidence() {
  const types = await getJSON("/api/evidence-types");
  const cats = {}; types.forEach(x=>{(cats[x.category]=cats[x.category]||[]).push(x);});
  $("evidenceTypes").innerHTML = Object.entries(cats).map(([cat,ts])=>
    `<div class="cat"><h3>${esc(cat)} <span class="count">(${ts.length})</span></h3>${ts.map(x=>`<div class="etype"><div class="name">${esc(x.type)}</div><div class="def">${esc(x.definition)}</div></div>`).join("")}</div>`).join("");
}

/* ============================ literature ============================ */
async function searchLit() {
  const q = ($("searchBox").value||"").trim();
  const data = await getJSON(`/api/publications?q=${encodeURIComponent(q)}&limit=50`);
  $("resultCount").textContent = `${data.total.toLocaleString()} ${t("literature.results")} · ${t("literature.newestFirst")}`;
  $("paperResults").innerHTML = data.results.map(p=>{
    const links=[];
    if(p.pubmed_url) links.push(`<a href="${p.pubmed_url}" target="_blank" rel="noopener">PubMed</a>`);
    if(p.fulltext_url) links.push(`<a href="${p.fulltext_url}" target="_blank" rel="noopener">${t("literature.fulltext")}</a>`);
    if(p.doi_url) links.push(`<a href="${p.doi_url}" target="_blank" rel="noopener">DOI</a>`);
    return `<div class="paper" id="paper-${p.pmid}">
      <div class="title"><a href="${p.pubmed_url}" target="_blank" rel="noopener" style="color:inherit">${esc(p.title)}</a>${p.has_fulltext?'<span class="tag">full text</span>':""}</div>
      <div class="meta">${esc(p.journal||"")} · ${esc(p.year)} · ${esc((p.authors||[]).join(", "))} · PMID ${p.pmid}</div>
      <div style="font-family:var(--sans);font-size:12px;margin:4px 0">${links.join(" · ")}</div>
      <div class="abstract">${esc(p.abstract)}</div>
      <div style="margin-top:6px"><button class="dl" style="border:1px solid var(--accent);color:var(--accent);background:#fff;font-family:var(--sans);font-size:11px;padding:3px 10px;cursor:pointer" onclick="toggleBrief('${p.pmid}')">${t("literature.brief")}</button></div>
      <div id="brief-${p.pmid}" style="display:none;margin-top:8px;font-size:12.5px;color:var(--ink-soft);line-height:1.5"></div>
    </div>`;
  }).join("") || `<div class="loading">${t("literature.noResults")}</div>`;
}

async function toggleBrief(pmid){
  const box=$("brief-"+pmid);
  if(box.style.display==="block"){ box.style.display="none"; return; }
  box.style.display="block";
  if(box.dataset.loaded) return;
  box.innerHTML=`<span class="loading">${t("literature.thinking")}</span>`;
  try{
    const b=await getJSON(`/api/publication/${pmid}/brief`);
    if(!b.available){ box.innerHTML=`<div style="font-style:italic;color:var(--muted)">${t("literature.noFulltext")}</div>`; box.dataset.loaded="1"; return; }
    const sec=(lab,txt)=>txt?`<div style="margin:6px 0"><b>${lab}</b> ${esc(txt)}</div>`:"";
    box.innerHTML = sec(t("literature.secMethods"), b.methods)
      + sec(t("literature.secResults"), b.results)
      + sec(t("literature.secConclusion"), b.conclusion)
      + `<div style="margin-top:8px"><button class="dl" style="border:1px solid var(--accent);color:var(--accent);background:#fff;font-family:var(--sans);font-size:11px;padding:3px 10px;cursor:pointer" onclick="aiBrief('${pmid}')">${t("literature.aiBrief")}</button></div>
         <div id="aibrief-${pmid}" style="margin-top:8px"></div>`;
    box.dataset.loaded="1";
  }catch(e){ box.innerHTML=`<span class="loading">${t("literature.failed")}</span>`; }
}
async function aiBrief(pmid){
  const box=$("aibrief-"+pmid); if(!box) return;
  box.innerHTML=`<span class="loading">${t("literature.generating")}</span>`;
  try{ const b=await getJSON(`/api/publication/${pmid}/brief?llm=1`);
    box.innerHTML = b.llm_brief? `<div style="padding:8px 10px;border-left:2px solid var(--accent);background:var(--paper-alt)">${esc(b.llm_brief).replace(/\n/g,"<br>")}</div>` : `<span class="loading">${t("literature.failed")}</span>`;
  }catch(e){ box.innerHTML=`<span class="loading">${t("literature.failed")}</span>`; }
}
$("searchBtn").addEventListener("click", searchLit);
$("searchBox").addEventListener("keydown", e=>{ if(e.key==="Enter") searchLit(); });

async function loadLlmStatus() { try { const s=await getJSON("/api/llm/status"); if($("llmModel")) $("llmModel").textContent = s.configured?`(${s.model})`:""; } catch(e){} }
async function askCorpus() {
  const q = $("askBox").value.trim(); if(!q) return;
  $("askAnswer").innerHTML = `<span class="loading">${t("literature.thinking")}</span>`;
  try { const r = await getJSON("/api/ask?q="+encodeURIComponent(q));
    if(r.status==="ok") $("askAnswer").innerHTML = `<div>${esc(r.answer).replace(/\n/g,"<br>")}</div>
      <div style="font-family:var(--sans);font-size:11px;color:var(--muted);margin-top:6px">${t("literature.grounded")} ${r.n_sources} ${t("literature.sources")}</div>`;
    else $("askAnswer").innerHTML = `<span class="loading">${esc(r.message||"")}</span>`;
  } catch(e){ $("askAnswer").innerHTML = `<span class="loading">${t("literature.failed")}</span>`; }
}
$("askBtn").addEventListener("click", askCorpus);
$("askBox").addEventListener("keydown", e=>{ if(e.key==="Enter") askCorpus(); });
if ($("seqSearchBtn")) {
  $("seqSearchBtn").addEventListener("click", () => renderSeqList());
  $("seqSearch").addEventListener("keydown", e=>{ if(e.key==="Enter") renderSeqList(); });
}

/* ============================ sequences ============================ */
let SEQ_KIND = "protein", SEQ_GENE = "", SEQ_SPECIES = "", SEQ_GENOMES = 0;
async function loadSequences() {
  const s = await getJSON("/api/sequences/stats");
  const pk = s.protein, nk = s.nucleotide;
  $("seqStats").innerHTML = `
    <div class="stat"><div class="value">${pk.total.toLocaleString()}</div><div class="label">${t("sequences.protein")}</div></div>
    <div class="stat"><div class="value">${nk.total.toLocaleString()}</div><div class="label">${t("sequences.nucleotide")}</div></div>
    <div class="stat"><div class="value">${nk.genomes.toLocaleString()}</div><div class="label">${t("sequences.genomes")}</div></div>`;
  $("seqModeToggle").innerHTML =
    `<button class="term" data-k="protein" style="${seqBtnStyle(SEQ_KIND==='protein')}" onclick="setSeqKind('protein')">${t("sequences.protein")}</button>
     <button class="term" data-k="nucleotide" style="${seqBtnStyle(SEQ_KIND==='nucleotide')}" onclick="setSeqKind('nucleotide')">${t("sequences.nucleotide")}</button>`;
  renderSeqFilters(s);
  renderSeqList();
}
function seqBtnStyle(active){return `margin-right:6px;padding:5px 12px;border:1px solid var(--rule-strong);background:${active?'var(--accent)':'#fff'};color:${active?'#fff':'var(--accent)'};cursor:pointer;font-family:var(--sans);text-transform:uppercase;letter-spacing:.5px;font-size:11px;font-weight:600`;}
window.setSeqKind = function(k){ SEQ_KIND=k; SEQ_GENE=""; SEQ_SPECIES=""; SEQ_GENOMES=0; $("seqSearch").value=""; loadSequences(); };
function renderSeqFilters(s){
  if(SEQ_KIND==="protein"){
    const genes=["",...Object.keys(s.protein.genes)];
    const gsel = genes.map(g=>`<option value="${g}" ${SEQ_GENE===g?'selected':''}>${g||t("sequences.allGenes")}</option>`).join("");
    const spp=["",...Object.keys(s.protein.species)];
    const ssel = spp.map(x=>`<option value="${x}" ${SEQ_SPECIES===x?'selected':''}>${x||t("sequences.allSpecies")}</option>`).join("");
    $("seqFilters").innerHTML=`<select id="seqGene" style="font-family:var(--serif);padding:6px 10px;border:1px solid var(--rule-strong);margin-right:8px" onchange="SEQ_GENE=this.value;renderSeqList()">${gsel}</select>
      <select id="seqSpecies" style="font-family:var(--serif);padding:6px 10px;border:1px solid var(--rule-strong)" onchange="SEQ_SPECIES=this.value;renderSeqList()">${ssel}</select>`;
  } else {
    const spp=["",...Object.keys(s.nucleotide.species)];
    const ssel = spp.map(x=>`<option value="${x}" ${SEQ_SPECIES===x?'selected':''}>${x||t("sequences.allSpecies")}</option>`).join("");
    $("seqFilters").innerHTML=`<label style="font-family:var(--sans);font-size:12px;margin-right:14px"><input type="checkbox" ${SEQ_GENOMES?'checked':''} onchange="SEQ_GENOMES=this.checked?1:0;renderSeqList()"> ${t("sequences.genomesOnly")}</label>
      <select id="seqSpecies" style="font-family:var(--serif);padding:6px 10px;border:1px solid var(--rule-strong)" onchange="SEQ_SPECIES=this.value;renderSeqList()">${ssel}</select>`;
  }
}
window.renderSeqList = async function(){
  const q=($("seqSearch").value||"").trim();
  const p=new URLSearchParams({limit:"100",q});
  if(SEQ_KIND==="protein"&&SEQ_GENE)p.set("gene",SEQ_GENE);
  if(SEQ_SPECIES)p.set("species",SEQ_SPECIES);
  if(SEQ_KIND==="nucleotide"&&SEQ_GENOMES)p.set("genomes_only","1");
  const d=await getJSON(`/api/sequences/${SEQ_KIND}?${p}`);
  const rows=d.results.map(r=>`<tr style="cursor:pointer" onclick="viewSeq('${r.accession}')">
    <td><code>${esc(r.accession)}</code></td>
    <td>${esc(r.gene||(SEQ_KIND==='protein'?'—':''))}</td>
    <td>${esc(r.species||'—')}</td>
    <td class="num">${r.length.toLocaleString()}</td>
    <td style="max-width:420px">${esc(r.description)}</td></tr>`).join("");
  $("seqTable").innerHTML=`<div class="result-count">${d.total.toLocaleString()} ${t("sequences.records")}</div>
    <table><thead><tr><th>${t("sequences.colAcc")}</th><th>${t("sequences.colGene")}</th><th>${t("sequences.colSpecies")}</th><th class="num">${t("sequences.colLen")}</th><th>${t("sequences.colDesc")}</th></tr></thead><tbody>${rows}</tbody></table>`;
  $("seqViewer").style.display="none";
};
window.viewSeq = async function(acc){
  const d=await getJSON(`/api/sequence/${SEQ_KIND}/${encodeURIComponent(acc)}`);
  if(d.external){ window.open(d.external,"_blank","noopener"); return; }
  const v=$("seqViewer"); v.style.display="block";
  v.innerHTML=`<span class="loading">${t("literature.thinking")}</span>`;
  const seq=d.sequence;
  // wrap at 60 with 1-based position ruler
  let lines=[];
  for(let i=0;i<seq.length;i+=60){
    const chunk=seq.slice(i,i+60);
    lines.push(`<div><span style="color:var(--muted);user-select:none">${String(i+1).padStart(6,' ')}</span>  ${esc(chunk)}</div>`);
  }
  const fasta=`>${d.accession} ${d.description}\n${seq.replace(/(.{1,60})/g,'$1\n').trim()}`;
  v.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
      <div><b>${esc(d.accession)}</b> <span style="color:var(--muted)">· ${esc(d.gene||'')} ${esc(d.species||'')} · ${d.length.toLocaleString()} ${t("sequences.positions")}</span>
      <div style="font-size:12px;color:var(--ink-soft)">${esc(d.description)}</div></div>
      <div><button class="term" style="border:1px solid var(--accent);color:var(--accent);background:#fff;padding:4px 10px;cursor:pointer;margin-right:6px;font-size:11px" onclick="copySeq('${d.accession}')">${t("sequences.copy")}</button>
      <button class="term" style="border:1px solid var(--accent);color:var(--accent);background:#fff;padding:4px 10px;cursor:pointer;font-size:11px" onclick="downloadSeq()">FASTA</button></div></div>
    <div class="seqview" id="seqBody" style="margin-top:10px;max-height:420px;overflow:auto;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;line-height:1.5;white-space:nowrap;background:var(--paper-alt);padding:10px;border:1px solid var(--rule)">${lines.join("")}</div>`;
  window._curSeq=fasta;
};
window.copySeq=function(){ navigator.clipboard.writeText((window._curSeq||"").split("\n").slice(1).join("")).then(()=>alert(t("sequences.copied"))); };
window.downloadSeq=function(){ const blob=new Blob([window._curSeq||""],{type:"text/plain"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="sequence.fasta"; a.click(); };

/* ============================ AI-Ready data ============================ */
async function loadDataCards() {
  const d = await getJSON("/api/ai-ready");
  $("datacards").innerHTML = d.datasets.map(ds=>`<div class="card"><h4>${esc(ds.name)}</h4>
    <span class="badge">${esc(ds.modality)}</span> <span class="badge">${esc(ds.format)}</span>
    <div class="fields"><b>${(ds.records||0).toLocaleString()}</b> ${t("data.records")}<br>${esc(ds.fields||"")}</div>
    <a class="dl" href="${ds.url}">${t("data.download")}</a></div>`).join("");
}

/* ============================ governance ============================ */
async function loadGovernance() {
  const g = await getJSON("/api/governance");
  $("govSummary").innerHTML = `
    <div class="stat"><div class="value">${g.met}</div><div class="label">${t("gov.met")}</div></div>
    <div class="stat"><div class="value">${g.partial}</div><div class="label">${t("gov.partial")}</div></div>
    <div class="stat"><div class="value">${g.roadmap}</div><div class="label">${t("gov.roadmap")}</div></div>
    <div class="stat"><div class="value">${g.query_plan_ms}</div><div class="label">${t("gov.queryplan")}</div></div>
    <div class="stat"><div class="value">${g.modalities.length}</div><div class="label">${t("gov.modalities")}</div></div>`;
  const col = s=>s==="met"?"#4a7c59":s==="partial"?"#c98a2b":"#8b1a1a";
  $("govMetrics").innerHTML = `<table><thead><tr><th>#</th><th>${t("gov.metric")}</th>
    <th>${t("gov.target")}</th><th class="num">${t("gov.measured")}</th><th>${t("gov.status")}</th></tr></thead>
    <tbody>${g.metrics.map(m=>`<tr><td>${m.id}</td><td>${esc(m.name)}</td>
      <td class="term">${esc(m.target)}</td><td class="num">${m.measured===null?"—":esc(m.measured)}</td>
      <td style="color:${col(m.status)};font-family:var(--sans);font-size:11px;text-transform:uppercase;font-weight:600">${m.status}</td></tr>`).join("")}</tbody></table>`;
}

/* ============================ about ============================ */
function loadAbout() {
  $("aboutBody").innerHTML = `<p style="max-width:760px">${t("about.p1")}</p>
    <p style="max-width:760px">${t("about.p2")}</p><p style="max-width:760px">${t("about.p3")}</p>
    <p style="max-width:760px;color:var(--muted);font-size:14px">${t("about.p4")}</p>`;
}

/* ============================ init ============================ */
applyI18n();
if (location.hash && $("view-"+location.hash.slice(1))) activateTab(location.hash.slice(1));
loadDailySummary(); loadLlmStatus(); searchLit();
loadSequences();