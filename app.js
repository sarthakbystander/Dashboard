/* ==========================================================================
   DATA MODEL
   ========================================================================== */
const PHASES = [
{ id:"foundation", num:"01", name:"Foundation", tag:"Positioning, brand & design language", sections:[
  { id:"positioning", icon:"🎯", title:"Positioning & Homepage", blurb:"Make DevSnips instantly understandable as an AI-friendly UI library.", items:[
    ["Write one clear homepage headline","P0"],
    ["Explain DevSnips in one sentence","P0"],
    ["Define target users: AI agents, frontend devs, designers, indie hackers","P0"],
    ["Explain what makes DevSnips different from a snippet gallery","P0"],
    ["List supported frameworks and styling systems","P0"],
    ["Explain the delivery model: copy files, CLI, packages or templates","P0"],
    ["Visible “Get Started” and “Browse Components” CTAs","P0"],
    ["Link GitHub, docs, CLI instructions, templates, AI setup","P0"],
    ["State license and usage permissions clearly","P0"],
    ["Remove unsupported claims such as “the best”","P0"],
    ["Run the 15-second clarity test with 5 developers","P0"],
    ["Test mobile, tablet and desktop layouts","P0"],
    ["Test keyboard navigation and every homepage link","P0"],
    ["Test empty, loading and error states","P0"]
  ]},
  { id:"design", icon:"🎨", title:"Website Design System", blurb:"A minimalist, high-contrast interface with precise typography and spacing.", items:[
    ["Establish the final visual design language","P0"],
    ["Minimalist interface with strong typography","P0"],
    ["Precise spacing, clean borders, clear hierarchy","P0"],
    ["Consistent component styling across the site","P0"],
    ["Accessible contrast and excellent readability","P0"],
    ["Subtle hover and button micro-interactions","P1"],
    ["Smooth navigation and preview transitions","P1"],
    ["Polished loading, empty and error states","P0"],
    ["Pixel review: radius, icon sizing, breakpoints, dimensions","P1"],
    ["Animations respect reduced-motion settings","P1"]
  ]},
  { id:"themes", icon:"🌓", title:"Theme System", blurb:"Three official themes — Light, Dark and Retro — all fully QA'd.", items:[
    ["Finalize light theme: contrast, borders, code blocks, cards","P0"],
    ["Finalize dark theme across every surface","P0"],
    ["Design the retro theme: type, colors, borders, states","P1"],
    ["Every page works in all three themes","P0"],
    ["Every component works in all three themes","P0"],
    ["Every template preview works in all three themes","P0"],
    ["No unreadable text, broken borders or invisible icons","P0"]
  ]},
  { id:"assets", icon:"🔷", title:"Icons, Logos & Assets", blurb:"One consistent asset language across the whole ecosystem.", items:[
    ["Use SVG logos throughout the website","P0"],
    ["Standardize logo and icon dimensions","P1"],
    ["Optimize SVGs and strip unnecessary metadata","P1"],
    ["Accessibility labels on every icon","P0"],
    ["Logos work across all three themes","P1"],
    ["Replace inconsistent raster logos","P2"],
    ["Verify every external brand logo","P1"]
  ]}
]},
{ id:"product", num:"02", name:"Product & Catalog", tag:"Components, templates, discovery & sharing", sections:[
  { id:"catalog", icon:"🧩", title:"Component Catalog", blurb:"Fast discovery, deep metadata, useful to both humans and AI agents.", items:[
    ["Unique ID, name, category, framework, styling system","P0"],
    ["File path, install command, dependencies, peer dependencies","P0"],
    ["Props, prop types, defaults and variants","P0"],
    ["Usage examples and related components","P0"],
    ["Accessibility notes, responsive and dark-mode behaviour","P0"],
    ["License, version, tags and search keywords","P0"],
    ["Preview/demo, last updated date, stability status","P0"],
    ["Cover the 26 recommended component categories","P1"],
    ["Vanilla HTML/CSS/JS, React and Tailwind examples that actually run","P0"],
    ["Never show a framework filter you cannot back up","P0"],
    ["Search by name, category, framework, purpose and tags","P0"],
    ["Synonym and misspelling tolerant search","P1"],
    ["Filters combine correctly; URLs are shareable; back/forward works","P0"],
    ["Pagination or infinite scroll correct, with no duplicates","P1"]
  ]},
  { id:"templates", icon:"🖼️", title:"Template Catalog", blurb:"A premium template experience — not just another component grid.", items:[
    ["Dedicated, visually premium template catalog","P1"],
    ["Landing, dashboard, SaaS, auth, pricing, docs, portfolio, blog, e-commerce","P1"],
    ["Large previews with clear tech and framework labels","P0"],
    ["Category filtering, search and sorting","P1"],
    ["Template detail pages with install + CLI command","P0"],
    ["Complete page templates, not isolated components","P1"],
    ["Responsive versions plus light and dark variants","P1"],
    ["Production-ready vs experimental clearly labelled","P0"],
    ["Consistent preview ratios and clean template cards","P1"]
  ]},
  { id:"discovery", icon:"🔎", title:"Discovery & Shareability", blurb:"Search that feels instant and pages worth sharing.", items:[
    ["Search feels instant","P0"],
    ["Copy button gives clear feedback","P0"],
    ["Install command is easy to copy","P0"],
    ["Shareable component URLs","P1"],
    ["Framework and variant switchers","P1"],
    ["Responsive preview sizes","P1"],
    ["Recently viewed and favourites where genuinely useful","P2"]
  ]},
  { id:"og", icon:"📣", title:"OG Images & Social Sharing", blurb:"Every important page gets a beautiful, correct social preview.", items:[
    ["OG images for homepage, docs, components, sections, templates, categories, launch","P1"],
    ["Correct dimensions, titles and descriptions","P0"],
    ["Twitter/X card metadata","P0"],
    ["Correct canonical URLs","P0"],
    ["Test shared links on major platforms","P0"]
  ]}
]},
{ id:"cli", num:"03", name:"CLI, Config & Versioning", tag:"The install path developers actually trust", sections:[
  { id:"cli-core", icon:"⌨️", title:"CLI Core Commands", blurb:"Predictable, safe, fast — usable by humans and agents alike.", items:[
    ["devsnips init · list · search · info · add · update · doctor · version · help","P0"],
    ["Only ship commands that actually work and are documented","P0"],
    ["npm, npx, global and local install paths verified","P0"],
    ["Windows, macOS and Linux tested","P0"],
    ["Clear Node version requirements","P0"],
    ["Readable errors for missing package manager, network failure, invalid names","P0"],
    ["Never silently overwrite existing files","P0"],
    ["Dry-run mode and --json output for automation","P1"],
    ["Correct exit codes and complete --help output","P0"]
  ]},
  { id:"cli-qa", icon:"⚙️", title:"CLI Production QA", blurb:"Test it like a developer who has never seen the repository before.", items:[
    ["Fresh, existing, empty, monorepo, React, vanilla and Tailwind projects","P0"],
    ["Unsupported project handled gracefully","P0"],
    ["No internet and slow internet scenarios","P0"],
    ["Invalid command, invalid component, duplicate install","P0"],
    ["Existing file conflict, interrupted install, permission error","P0"],
    ["Different operating systems and Node versions","P0"],
    ["Full clean-environment run: install → init → add → docs → run","P0"],
    ["Errors explain how to fix the problem","P0"],
    ["Logs never expose secrets; output is parseable by agents","P0"]
  ]},
  { id:"config", icon:"🔧", title:"Configuration & Agents", blurb:"A stable configuration contract for projects and agents.", items:[
    ["Finalize config.json, schema, defaults and validation","P0"],
    ["Define configuration migration path","P0"],
    ["Document every configuration option","P0"],
    ["Finalize AGENTS.md behaviour rules","P0"],
    ["Define version compatibility rules","P0"],
    ["Test configuration with supported agents","P0"]
  ]},
  { id:"versioning", icon:"🔢", title:"Versioning & Release", blurb:"Version → changes → compatibility → docs → CLI → registry → AI.", items:[
    ["Choose a semantic versioning strategy","P0"],
    ["Changelog, release notes and tagged releases","P0"],
    ["Document breaking changes and migration steps","P0"],
    ["Docs stay aligned with released versions","P0"],
    ["CLI and registry versions stay compatible","P0"],
    ["Deprecation markers for old components","P1"],
    ["Stable and experimental release channels","P1"],
    ["Public compatibility matrix","P1"],
    ["Versioned documentation with a selector","P1"],
    ["Freeze, test, tag, back up, and prepare a rollback plan","P0"]
  ]}
]},
{ id:"ai", num:"04", name:"AI-Native Layer", tag:"Make DevSnips usable by coding agents", sections:[
  { id:"agent-exp", icon:"🤖", title:"Agent Experience", blurb:"Predictable instructions, structured metadata, copy-pasteable commands.", items:[
    ["Create an agent overview page","P0"],
    ["Explain discover → install → inspect deps → adapt → verify","P0"],
    ["Document framework-specific differences","P0"],
    ["Ship both a machine-readable and human-readable guide","P0"],
    ["Document the 11-step agent workflow","P1"],
    ["Provide example prompts and successful workflows","P0"],
    ["Explain what the agent must never assume","P0"]
  ]},
  { id:"agents-md", icon:"📜", title:"AGENTS.md & Rule Files", blurb:"The instruction contract every agent reads first.", items:[
    ["Purpose, supported frameworks, install commands","P0"],
    ["Component discovery workflow, naming, file placement rules","P0"],
    ["Styling, accessibility, responsive and dependency rules","P0"],
    ["Do-not-invent-component rule","P0"],
    ["Do-not-use-unsupported-framework rule","P0"],
    ["Version compatibility and troubleshooting instructions","P0"]
  ]},
  { id:"multi-ai", icon:"🧠", title:"Multi-AI Platform Skills", blurb:"Don't ship one generic file. Optimize per agent.", items:[
    ["Support Cloud, Nanobot, Pi Agent, ChatGPT, Grok, Gemini, DeepSeek and more","P1"],
    ["A dedicated, optimized skill for each AI — not one generic file","P1"],
    ["Per tool: install steps, file names, correct folder location","P0"],
    ["Per tool: example prompt, expected output, troubleshooting","P0"],
    ["Per tool: removal instructions and security notes","P0"],
    ["Test each workflow with the actual AI","P0"],
    ["Keep skills synchronized with DevSnips versions","P1"]
  ]},
  { id:"setup-guide", icon:"🛡️", title:"Setup Guide & Trust Rules", blurb:"Transparent, reversible, and never sneaky.", items:[
    ["Publish devsnips.site/setup-guide-agent","P0"],
    ["Explain what it does, which tools it supports, which files it creates","P0"],
    ["Explicit user approval; show commands before execution","P0"],
    ["Uninstall and reset instructions","P0"],
    ["Never secretly modify user files or system prompts","P0"],
    ["Never claim to change ChatGPT memory or user preferences","P0"],
    ["Never request API keys unless genuinely required","P0"],
    ["Manual installation path for unsupported tools","P1"]
  ]},
  { id:"benchmark", icon:"📊", title:"AI-Agent Benchmark", blurb:"Measure whether agents can actually use DevSnips — not whether they say they can.", items:[
    ["Same prompt, repo, framework, time limit and criteria for every model","P0"],
    ["Record model + tool versions, internet access, instructions, CLI access","P0"],
    ["Publish methodology and limitations honestly","P0"],
    ["14 prompt types: landing page, dashboard, navbar, pricing, forms and more","P0"],
    ["Score completion, build, runtime, deps, visual, a11y and code quality","P0"],
    ["No hallucinated APIs and no exposed secrets","P0"],
    ["Publish the 100-point scorecard","P1"],
    ["Publish results, screenshots and reproducibility instructions","P0"]
  ]}
]},
{ id:"docs", num:"05", name:"Docs & Learning", tag:"Deep enough for beginners, precise enough for agents", sections:[
  { id:"documentation", icon:"📚", title:"Documentation System", blurb:"A complete, verified, version-aware documentation architecture.", items:[
    ["Intro, quick start, installation, CLI reference","P0"],
    ["Component catalog, framework, styling, theming and variant guides","P0"],
    ["Accessibility, responsive design and template guides","P0"],
    ["AI-agent guide and AGENTS.md guide","P0"],
    ["Troubleshooting, FAQ, versioning, changelog, migration guides","P0"],
    ["License, contribution guide, security policy, support","P0"],
    ["Every component page: preview, source, copy, install, props, variants","P0"],
    ["Every page: responsive, dark mode, a11y, deps, version, limits","P0"],
    ["Verify every command and code example before publishing","P0"],
    ["Check documentation on desktop and mobile","P0"]
  ]},
  { id:"rulebook", icon:"📖", title:"Repository Rulebook", blurb:"The repository is the source of truth — not three systems guessing.", items:[
    ["Component structure, metadata and naming rules","P0"],
    ["Section structure, metadata and naming rules","P0"],
    ["Template structure, metadata and naming rules","P0"],
    ["Repository → registry → CLI → website rules","P0"],
    ["Metadata, preview and README rules","P0"],
    ["AGENTS.md and versioning rules","P0"],
    ["Define what “production-ready” and “experimental” mean","P0"]
  ]},
  { id:"youtube", icon:"🎬", title:"YouTube Learning Hub", blurb:"A complete DevSnips course, wired directly into the docs.", items:[
    ["Plan the complete DevSnips YouTube course","P1"],
    ["Create 20–30 videos covering DevSnips end-to-end","P1"],
    ["Consistent structure, thumbnails, titles and descriptions","P1"],
    ["Record, edit and refine pacing, typography, music and visuals","P1"],
    ["Add chapters and DevSnips links to descriptions","P1"],
    ["Final playlist launch-ready before launch","P1"],
    ["Embed tutorials directly into documentation","P1"],
    ["Written summary and notes for every video","P1"],
    ["Mark old videos outdated after major changes","P2"]
  ]},
  { id:"marketing", icon:"🚀", title:"Marketing & Launch Announcement", blurb:"Accurate claims, real screenshots, honest benchmarks.", items:[
    ["Polished launch announcement header with npm, Cloud and GitHub logos","P0"],
    ["Launch announcement post and short product demo","P1"],
    ["Screenshots, GIFs and videos prepared","P1"],
    ["GitHub README and npm presentation finalized","P0"],
    ["Framework-specific tutorials and SEO landing pages","P1"],
    ["Benchmark post and “build a site with DevSnips” case study","P1"],
    ["Accurate claims — no fake testimonials or usage numbers","P0"],
    ["Track signups, installs and component views","P1"]
  ]}
]},
{ id:"qa", num:"06", name:"QA, Trust & Launch", tag:"Nothing ships broken", sections:[
  { id:"testing", icon:"🧪", title:"Testing & Quality Assurance", blurb:"Every component, template, CLI command and agent guide gets tested.", items:[
    ["Component renders with no console errors or missing imports","P0"],
    ["No missing dependencies; works in the advertised framework","P0"],
    ["Works with the advertised styling system","P0"],
    ["Mobile, desktop, keyboard, focus states, labels, contrast","P0"],
    ["Dark mode, loading, empty and error states work","P0"],
    ["No horizontal overflow and no obvious layout shift","P0"],
    ["Copy-paste code works and the install command works","P0"],
    ["Template installs, starts, builds, with no broken routes","P0"],
    ["Templates contain no placeholder secrets","P0"],
    ["Lint, format check, type check, unit, integration and build tests","P0"],
    ["Link checker, accessibility scan and visual regression","P1"],
    ["CLI smoke tests and clean-environment install tests","P0"],
    ["Dependency vulnerability scan","P0"],
    ["Chrome, Firefox, Safari and Android browser tested","P0"],
    ["Manual: reduced motion, zoom, slow network, screen reader, long text","P0"]
  ]},
  { id:"security", icon:"🔐", title:"Security, Privacy & Trust", blurb:"Collect less. Explain more. Never execute anything silently.", items:[
    ["Do not collect unnecessary personal data","P0"],
    ["Never request or log secrets and API keys","P0"],
    ["Sanitize input and validate package/component names","P0"],
    ["Avoid arbitrary code execution in setup scripts","P0"],
    ["Explain every command before execution","P0"],
    ["No hidden downloads; pin or verify important dependencies","P0"],
    ["Scan dependencies and check supply-chain risk","P0"],
    ["Add a security contact and vulnerability reporting path","P0"],
    ["Privacy policy plus a clear explanation of analytics","P0"],
    ["HTTPS, protected admin routes, restricted unpublished content","P0"]
  ]},
  { id:"perf", icon:"⚡", title:"Performance & SEO", blurb:"Fast on a slow phone. Findable on a search engine.", items:[
    ["Measure homepage, catalog and component page load","P0"],
    ["Optimize images, lazy-load previews, cut unnecessary JavaScript","P0"],
    ["Reduce layout shift, cache static assets, compress output","P0"],
    ["Test slow mobile networks and low-end devices","P0"],
    ["Unique titles, meta descriptions and canonical URLs per page","P0"],
    ["Sitemap, robots.txt, clean URLs and a 404 page","P0"],
    ["Structured data, OG images and internal links between related items","P1"],
    ["No duplicate content; never index drafts","P0"],
    ["Content SEO: category pages, framework pages and tutorials","P1"]
  ]},
  { id:"a11y", icon:"♿", title:"Responsive & Accessibility QA", blurb:"Works for everyone, on everything.", items:[
    ["Desktop, laptop, tablet, mobile and small mobile","P0"],
    ["Navigation, search, code blocks and previews responsive","P0"],
    ["Keyboard navigation with visible focus states","P0"],
    ["Semantic HTML and accessible labels","P0"],
    ["Contrast, reduced motion and screen-reader navigation","P0"],
    ["Form accessibility and interactive element states","P0"]
  ]},
  { id:"analytics", icon:"📈", title:"Analytics & Feedback", blurb:"Measure what matters without being creepy about it.", items:[
    ["Track homepage visits, search, filter and component opens","P1"],
    ["Track code copy, install copy, CLI download and template opens","P1"],
    ["Track docs opens, agent guide, GitHub clicks and feedback","P1"],
    ["Collect only useful data and explain what is collected","P0"],
    ["Privacy-friendly analytics with opt-out where required","P0"],
    ["Monitor error rates, broken links and failed installations","P0"],
    ["Review feedback weekly","P1"]
  ]},
  { id:"consistency", icon:"🔗", title:"Ecosystem Consistency", blurb:"Everything agrees with everything else.", items:[
    ["Website matches repository, registry and docs","P0"],
    ["CLI matches registry and documentation","P0"],
    ["AI skills and AGENTS.md match current behaviour","P0"],
    ["Templates match documentation","P0"],
    ["Component metadata matches the website","P0"],
    ["Version numbers and install commands consistent everywhere","P0"]
  ]}
]}
];

const TIMELINE = [
  { days:"Days 1–5", title:"Foundation", desc:"Freeze positioning, confirm supported frameworks, audit repo, site and CLI, then define P0/P1/P2, the release version, benchmark methodology and documentation structure.", tags:["Positioning","Audit","Issue board","Release version"] },
  { days:"Days 6–12", title:"Core Product", desc:"Finish the catalog, component metadata, search and filters, component pages and the copy/install workflow. Ship CLI core commands plus loading, error and mobile states.", tags:["Catalog","Search","CLI","Mobile"] },
  { days:"Days 13–18", title:"AI & Documentation", desc:"Write quick start, CLI reference, AGENTS.md, the agent setup guide and the rulebook. Add the machine-readable registry, per-tool examples and record the key tutorials.", tags:["AGENTS.md","Registry","Rulebook","Tutorials"] },
  { days:"Days 19–23", title:"Testing & Benchmark", desc:"Run clean-install tests, test every core CLI command, representative components and templates. Run builds, type checks, accessibility, links and the full benchmark — then fix P0 failures.", tags:["Clean install","Benchmark","A11y","Fix P0"] },
  { days:"Days 24–27", title:"Launch Preparation", desc:"Finalize changelog, README, screenshots, videos and social posts. Verify SEO, analytics, security and rollback. Prepare support responses and the launch-day checklist.", tags:["Changelog","SEO","Rollback","Support"] },
  { days:"Days 28–30", title:"Release", desc:"Tag the release, publish packages, deploy the site, verify production installation and links. Monitor errors, CLI downloads and feedback. Fix urgent issues and publish the launch report.", tags:["Deploy","Monitor","Announce","Report"] }
];

const GATES = [
  "Website feels production-ready",
  "Three themes work correctly",
  "Documentation is complete",
  "20–30 YouTube tutorials are ready",
  "Tutorials are connected to documentation",
  "AI integrations are documented",
  "Agentic skills are tested",
  "CLI has passed full QA",
  "Configuration is stable",
  "AGENTS.md is stable",
  "Repository rulebook is finalized",
  "Templates have a premium catalog",
  "OG images exist across important pages",
  "Versioning system is defined",
  "Versioned documentation works",
  "Website, CLI, registry, repo and docs all agree",
  "Mobile + desktop QA completed",
  "Accessibility QA completed",
  "Final launch pass completed"
];

/* ==========================================================================
   STORAGE LAYER — IndexedDB (SQLite-equivalent for browsers)
   Falls back to localStorage if IDB is unavailable.
   Tables: tasks, gates, activity, settings
   ========================================================================== */
const DB = (() => {
  const NAME = 'devsnips-launch-db';
  const VER = 1;
  const STORES = ['tasks','gates','activity','settings'];
  let idb = null, ready = null, useFallback = false;
  const LS_KEY = 'devsnips-fallback-db';

  function fallbackLoad(){
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || { tasks:[], gates:[], activity:[], settings:[], _auto:1 }; }
    catch(e){ return { tasks:[], gates:[], activity:[], settings:[], _auto:1 }; }
  }
  function fallbackSave(data){ try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch(e){} }

  function open(){
    if (ready) return ready;
    ready = new Promise(resolve => {
      if (!('indexedDB' in window)) { useFallback = true; return resolve(null); }
      let req;
      try { req = indexedDB.open(NAME, VER); }
      catch(e){ useFallback = true; return resolve(null); }
      req.onupgradeneeded = e => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains('tasks')) d.createObjectStore('tasks', { keyPath:'id' });
        if (!d.objectStoreNames.contains('gates')) d.createObjectStore('gates', { keyPath:'id' });
        if (!d.objectStoreNames.contains('activity')) {
          const s = d.createObjectStore('activity', { keyPath:'id', autoIncrement:true });
          s.createIndex('ts','ts');
        }
        if (!d.objectStoreNames.contains('settings')) d.createObjectStore('settings', { keyPath:'key' });
      };
      req.onsuccess = e => { idb = e.target.result; resolve(idb); };
      req.onerror = () => { useFallback = true; resolve(null); };
      req.onblocked = () => { useFallback = true; resolve(null); };
    });
    return ready;
  }

  /* Hardened op(): synchronous throws from transaction/objectStore are
     caught and reject the outer promise instead of silently hanging. */
  function op(store, mode, fn){
    return open().then(db => {
      if (useFallback){
        const data = fallbackLoad();
        const r = fn.fallback(data);
        fallbackSave(data);
        return r;
      }
      return new Promise((resolve, reject) => {
        let tx;
        try { tx = db.transaction(store, mode); }
        catch(e){ reject(e); return; }

        const os = tx.objectStore(store);

        let req;
        try { req = fn.idb(os); }
        catch(e){ reject(e); return; }

        tx.oncomplete = () => {
          try { resolve(req && 'result' in req ? req.result : undefined); }
          catch(e){ resolve(undefined); }
        };
        tx.onerror = () => reject(tx.error || new Error('IDB transaction error'));
        tx.onabort = () => reject(tx.error || new Error('IDB transaction aborted'));
      });
    });
  }

  return {
    async get(store, key){
      return op(store, 'readonly', {
        idb: os => os.get(key),
        fallback: d => d[store].find(x => (store==='settings' ? x.key===key : x.id===key))
      });
    },
    async getAll(store){
      return op(store, 'readonly', {
        idb: os => os.getAll(),
        fallback: d => [...(d[store]||[])]
      });
    },
    async put(store, val){
      return op(store, 'readwrite', {
        idb: os => os.put(val),
        fallback: d => {
          d[store] = d[store] || [];
          if (store === 'settings'){
            const i = d[store].findIndex(x => x.key === val.key);
            if (i >= 0) d[store][i] = val; else d[store].push(val);
          } else if (store === 'activity'){
            val.id = val.id || (d._auto++);
            d[store].push(val);
          } else {
            const i = d[store].findIndex(x => x.id === val.id);
            if (i >= 0) d[store][i] = val; else d[store].push(val);
          }
          return val;
        }
      });
    },
    async delete(store, key){
      return op(store, 'readwrite', {
        idb: os => os.delete(key),
        fallback: d => { d[store] = (d[store]||[]).filter(x => (store==='settings'?x.key:x.id) !== key); }
      });
    },
    async clear(store){
      return op(store, 'readwrite', {
        idb: os => os.clear(),
        fallback: d => { d[store] = []; }
      });
    },
    async count(store){
      return op(store, 'readonly', {
        idb: os => os.count(),
        fallback: d => (d[store]||[]).length
      });
    },
    async addActivity(entry){
      entry.ts = entry.ts || Date.now();
      return op('activity','readwrite',{
        idb: os => os.add(entry),
        fallback: d => { entry.id = d._auto++; d.activity.push(entry); return entry; }
      });
    },
    async recentActivity(limit = 200){
      const all = await this.getAll('activity');
      return all.sort((a,b) => b.ts - a.ts).slice(0, limit);
    },
    async exportAll(){
      const out = { version: VER, exportedAt: new Date().toISOString(), engine: useFallback ? 'localStorage' : 'IndexedDB' };
      for (const s of STORES) out[s] = await this.getAll(s);
      return out;
    },
    async importAll(data){
      for (const s of STORES){
        await this.clear(s);
        for (const item of (data[s] || [])){
          await this.put(s, item);
        }
      }
    },
    async info(){
      await open();
      const counts = {};
      for (const s of STORES) counts[s] = await this.count(s);
      return { engine: useFallback ? 'localStorage (fallback)' : 'IndexedDB', name: NAME, version: VER, counts };
    }
  };
})();

/* ==========================================================================
   SEED — populate DB on first run
   ========================================================================== */
async function seedIfEmpty(){
  const count = await DB.count('tasks');
  if (count > 0) return;
  const now = Date.now();
  const tasks = [];
  PHASES.forEach(p => p.sections.forEach(s => s.items.forEach((it, i) => {
    tasks.push({
      id: `${s.id}:${i}`,
      text: it[0],
      priority: it[1],
      section: s.id,
      sectionTitle: s.title,
      phase: p.id,
      phaseName: p.name,
      phaseNum: p.num,
      done: false,
      doneAt: null,
      note: '',
      noteUpdatedAt: null,
      createdAt: now,
      updatedAt: now
    });
  })));
  for (const t of tasks) await DB.put('tasks', t);
  for (let i = 0; i < GATES.length; i++){
    await DB.put('gates', { id: 'gate:'+i, text: GATES[i], done: false, doneAt: null, updatedAt: now });
  }
  await DB.addActivity({ ts: now, action:'init', targetType:'db', meta:{ tasks: tasks.length, gates: GATES.length } });
}

/* ==========================================================================
   STATE (in-memory mirrors of DB, kept in sync)
   ========================================================================== */
let taskMap = new Map();   // id -> task record
let gateMap = new Map();   // id -> gate record
let filter = 'all';
let query = '';
let noteOpen = new Set();

/* ==========================================================================
   SYNC INDICATOR
   ========================================================================== */
let syncTimer = null;
function sync(state, msg){
  const el = document.getElementById('sync');
  if (!el) return;
  clearTimeout(syncTimer);
  el.classList.remove('saving','error');
  if (state === 'saving'){ el.classList.add('saving'); el.querySelector('.sync-text').textContent = msg || 'Saving…'; }
  else if (state === 'error'){ el.classList.add('error'); el.querySelector('.sync-text').textContent = 'Error'; }
  else { el.querySelector('.sync-text').textContent = msg || 'Saved'; }
}
async function persist(store, val){
  sync('saving');
  try { await DB.put(store, val); sync('saved'); }
  catch(e){ console.error(e); sync('error'); }
}

/* ==========================================================================
   RENDER
   ========================================================================== */
const phasesEl = document.getElementById('phases');
const navEl = document.getElementById('nav');

function build(){
  let totalItems = 0;

  PHASES.forEach(phase => {
    const sec = document.createElement('section');
    sec.className = 'phase reveal';
    sec.id = phase.id;

    phase.sections.forEach(s => totalItems += s.items.length);

    sec.innerHTML = `
      <div class="phase-head">
        <div class="phase-num">${phase.num}</div>
        <div class="phase-meta"><h2>${phase.name}</h2><p>${phase.tag}</p></div>
        <div class="phase-progress">
          <div class="pp-bar"><i data-phase-bar="${phase.id}"></i></div>
          <span class="pp-num" data-phase-num="${phase.id}">0%</span>
        </div>
      </div>
      <div class="cards"></div>`;

    const cards = sec.querySelector('.cards');

    phase.sections.forEach(s => {
      const card = document.createElement('article');
      card.className = 'card';
      card.dataset.section = s.id;
      card.innerHTML = `
        <header class="card-head">
          <div class="card-icon">${s.icon}</div>
          <div class="card-titles"><h3>${s.title}</h3><p>${s.blurb}</p></div>
          <div class="card-count"><b data-sec-done="${s.id}">0</b>/${s.items.length}</div>
        </header>
        <div class="card-bar"><i data-sec-bar="${s.id}"></i></div>
        <ul class="tasks"></ul>`;
      const ul = card.querySelector('.tasks');

      s.items.forEach(([text, p], i) => {
        const id = `${s.id}:${i}`;
        const li = document.createElement('li');
        li.className = 'task';
        li.dataset.id = id;
        li.dataset.p = p;
        li.dataset.text = text.toLowerCase();
        li.dataset.section = s.id;
        li.dataset.phase = phase.id;
        li.innerHTML = `
          <button class="task-btn" role="checkbox" aria-checked="false">
            <span class="box"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>
            <span class="txt">${text}<span class="done-at" data-done-at></span></span>
            <span class="task-meta">
              <span class="note-btn" data-note-btn title="Add note">✎</span>
              <span class="pill ${p.toLowerCase()}">${p}</span>
            </span>
          </button>
          <div class="note-editor" data-note-editor>
            <textarea placeholder="Add a note, blocker, or context…" data-note-input></textarea>
            <div class="row">
              <button class="mini" data-note-cancel>Cancel</button>
              <button class="mini save" data-note-save>Save</button>
            </div>
          </div>`;
        ul.appendChild(li);
      });
      /* FIX: append the card (child of cards), not the section (its parent). */
      cards.appendChild(card);
    });

    phasesEl.appendChild(sec);
  });

  // Nav items
  PHASES.forEach(p => {
    const a = document.createElement('a');
    a.className = 'nav-item';
    a.href = '#' + p.id;
    a.dataset.target = p.id;
    a.innerHTML = `
      <div class="nav-top">
        <span class="nav-num">${p.num}</span>
        <span class="nav-name">${p.name}</span>
        <span class="nav-pct" data-nav-pct="${p.id}">0%</span>
      </div>
      <div class="nav-track"><div class="nav-fill" data-nav-fill="${p.id}"></div></div>`;
    navEl.appendChild(a);
  });

  // Timeline
  const tl = document.getElementById('tl');
  TIMELINE.forEach(t => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.innerHTML = `
      <div class="tl-card">
        <div class="tl-days">${t.days}</div>
        <div class="tl-body"><h4>${t.title}</h4><p>${t.desc}</p><div class="tl-tags">${t.tags.map(x=>`<i>${x}</i>`).join('')}</div></div>
      </div>`;
    tl.appendChild(el);
  });

  // Gates
  const gg = document.getElementById('gateGrid');
  GATES.forEach((g,i) => {
    const el = document.createElement('div');
    el.className = 'gate-item';
    el.dataset.gateId = 'gate:'+i;
    el.innerHTML = `<span class="box"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span><span>${g}</span>`;
    gg.appendChild(el);
  });
}

/* Hydrate DOM from DB records */
function hydrate(){
  document.querySelectorAll('.task').forEach(li => {
    const t = taskMap.get(li.dataset.id);
    if (!t) return;
    li.classList.toggle('done', t.done);
    li.querySelector('.task-btn').setAttribute('aria-checked', t.done);
    const doneAtEl = li.querySelector('[data-done-at]');
    if (t.done && t.doneAt){
      doneAtEl.textContent = ' · ' + timeAgo(t.doneAt);
    } else {
      doneAtEl.textContent = '';
    }
    const nb = li.querySelector('[data-note-btn]');
    nb.classList.toggle('has-note', !!t.note);
    const ta = li.querySelector('[data-note-input]');
    if (document.activeElement !== ta) ta.value = t.note || '';
    if (noteOpen.has(t.id)) li.querySelector('[data-note-editor]').classList.add('open');
    else li.querySelector('[data-note-editor]').classList.remove('open');
  });

  document.querySelectorAll('.gate-item').forEach(el => {
    const g = gateMap.get(el.dataset.gateId);
    if (g) el.classList.toggle('done', g.done);
  });
}

/* ==========================================================================
   PROGRESS & FILTERS
   ========================================================================== */
function refresh(){
  const tasks = [...document.querySelectorAll('.task')];
  let total = tasks.length, doneCount = 0, p0Remaining = 0, notesCount = 0;

  tasks.forEach(li => {
    const t = taskMap.get(li.dataset.id);
    if (!t) return;
    if (t.done) doneCount++;
    if (!t.done && t.priority === 'P0') p0Remaining++;
    if (t.note) notesCount++;
  });

  PHASES.forEach(p => {
    let pTotal = 0, pDone = 0;
    p.sections.forEach(s => {
      let sTotal = s.items.length, sDone = 0;
      s.items.forEach((_, i) => {
        const t = taskMap.get(`${s.id}:${i}`);
        if (t && t.done) sDone++;
      });
      pTotal += sTotal; pDone += sDone;
      const bar = document.querySelector(`[data-sec-bar="${s.id}"]`);
      const num = document.querySelector(`[data-sec-done="${s.id}"]`);
      if (bar) bar.style.width = (sTotal ? (sDone/sTotal*100) : 0) + '%';
      if (num) num.textContent = sDone;
    });
    const pct = pTotal ? Math.round(pDone/pTotal*100) : 0;
    const pbar = document.querySelector(`[data-phase-bar="${p.id}"]`);
    const pnum = document.querySelector(`[data-phase-num="${p.id}"]`);
    if (pbar) pbar.style.width = pct + '%';
    if (pnum) pnum.textContent = pct + '%';
    const nf = document.querySelector(`[data-nav-fill="${p.id}"]`);
    const np = document.querySelector(`[data-nav-pct="${p.id}"]`);
    if (nf) nf.style.width = pct + '%';
    if (np) np.textContent = pct + '%';
  });

  const pct = total ? Math.round(doneCount/total*100) : 0;
  document.getElementById('ringFg').style.strokeDashoffset = 326.7 * (1 - pct/100);
  document.getElementById('ringPct').textContent = pct + '%';
  document.getElementById('sidePct').textContent = pct;
  document.getElementById('sideFill').style.width = pct + '%';

  setNum('sTotal', total);
  setNum('sDone', doneCount);
  setNum('sP0', p0Remaining);
  setNum('sNotes', notesCount);

  const gates = [...document.querySelectorAll('.gate-item')];
  const gDone = gates.filter(g => g.classList.contains('done')).length;
  document.getElementById('gatePct').textContent = (gates.length ? Math.round(gDone/gates.length*100) : 0) + '%';

  applyFilters();
}

function setNum(id, val){
  const el = document.getElementById(id);
  if (!el || el.textContent === String(val)) return;
  animateNum(el, parseInt(el.textContent) || 0, val);
}
function animateNum(el, from, to){
  const dur = 550, start = performance.now();
  function step(now){
    const p = Math.min(1, (now-start)/dur);
    const e = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(from + (to-from)*e);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function applyFilters(){
  const tasks = [...document.querySelectorAll('.task')];
  tasks.forEach(li => {
    const t = taskMap.get(li.dataset.id);
    if (!t) return;
    let show = true;
    if (['P0','P1','P2'].includes(filter)) show = t.priority === filter;
    else if (filter === 'todo') show = !t.done;
    else if (filter === 'done') show = t.done;
    else if (filter === 'notes') show = !!t.note;
    if (show && query) show = (t.text + ' ' + (t.note||'')).toLowerCase().includes(query);
    li.classList.toggle('hide', !show);
  });
  document.querySelectorAll('.card').forEach(card => {
    const visible = card.querySelectorAll('.task:not(.hide)').length;
    card.style.display = visible ? '' : 'none';
  });
  document.querySelectorAll('.phase').forEach(ph => {
    const visible = ph.querySelectorAll('.task:not(.hide)').length;
    ph.style.display = visible ? '' : 'none';
  });
}

function timeAgo(ts){
  const s = Math.floor((Date.now() - ts)/1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s/60); if (m < 60) return m+'m ago';
  const h = Math.floor(m/60); if (h < 24) return h+'h ago';
  const d = Math.floor(h/24); if (d < 30) return d+'d ago';
  return new Date(ts).toLocaleDateString();
}

/* ==========================================================================
   EVENTS — every change persists + logs
   ========================================================================== */
document.addEventListener('click', async e => {
  // Toggle task
  const taskBtn = e.target.closest('.task-btn');
  if (taskBtn && !e.target.closest('.note-btn')){
    const li = taskBtn.closest('.task');
    const t = taskMap.get(li.dataset.id);
    if (!t) return;
    t.done = !t.done;
    t.doneAt = t.done ? Date.now() : null;
    t.updatedAt = Date.now();
    taskMap.set(t.id, t);
    await persist('tasks', t);
    await DB.addActivity({
      ts: Date.now(),
      action: t.done ? 'complete' : 'uncomplete',
      targetType: 'task',
      targetId: t.id,
      meta: { text: t.text, priority: t.priority, phase: t.phaseName }
    });
    hydrate();
    refresh();
    renderActivity();
    return;
  }

  // Note button toggle
  const nb = e.target.closest('.note-btn');
  if (nb){
    const li = nb.closest('.task');
    const id = li.dataset.id;
    if (noteOpen.has(id)){
      noteOpen.delete(id);
      li.querySelector('[data-note-editor]').classList.remove('open');
    } else {
      noteOpen.add(id);
      li.querySelector('[data-note-editor]').classList.add('open');
      const ta = li.querySelector('[data-note-input]');
      ta.value = (taskMap.get(id)?.note) || '';
      setTimeout(() => ta.focus(), 60);
    }
    return;
  }

  // Note cancel
  const nc = e.target.closest('[data-note-cancel]');
  if (nc){
    const li = nc.closest('.task');
    const id = li.dataset.id;
    noteOpen.delete(id);
    li.querySelector('[data-note-editor]').classList.remove('open');
    return;
  }

  // Note save
  const ns = e.target.closest('[data-note-save]');
  if (ns){
    const li = ns.closest('.task');
    const id = li.dataset.id;
    const t = taskMap.get(id);
    if (!t) return;
    const val = li.querySelector('[data-note-input]').value.trim();
    const had = !!t.note;
    t.note = val;
    t.noteUpdatedAt = val ? Date.now() : null;
    t.updatedAt = Date.now();
    taskMap.set(id, t);
    noteOpen.delete(id);
    li.querySelector('[data-note-editor]').classList.remove('open');
    await persist('tasks', t);
    await DB.addActivity({
      ts: Date.now(),
      action: val ? (had ? 'note-edit' : 'note-add') : 'note-remove',
      targetType: 'task',
      targetId: id,
      meta: { text: t.text, preview: val.slice(0, 60) }
    });
    hydrate();
    refresh();
    renderActivity();
    renderNotes();
    return;
  }

  // Gate toggle
  const gi = e.target.closest('.gate-item');
  if (gi){
    const id = gi.dataset.gateId;
    const g = gateMap.get(id);
    if (!g) return;
    g.done = !g.done;
    g.doneAt = g.done ? Date.now() : null;
    g.updatedAt = Date.now();
    gateMap.set(id, g);
    await persist('gates', g);
    await DB.addActivity({
      ts: Date.now(),
      action: g.done ? 'gate-pass' : 'gate-unpass',
      targetType: 'gate',
      targetId: id,
      meta: { text: g.text }
    });
    hydrate();
    refresh();
    renderActivity();
    return;
  }
});

// Keyboard: Enter to save note
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){
    const ed = document.querySelector('.note-editor.open');
    if (ed){
      const li = ed.closest('.task');
      noteOpen.delete(li.dataset.id);
      ed.classList.remove('open');
    }
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter'){
    const ed = document.querySelector('.note-editor.open textarea');
    if (ed){
      ed.closest('.note-editor').querySelector('[data-note-save]').click();
    }
  }
});

document.getElementById('search').addEventListener('input', e => {
  query = e.target.value.trim().toLowerCase();
  applyFilters();
});

document.getElementById('chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  chip.classList.add('on');
  filter = chip.dataset.filter;
  applyFilters();
  DB.put('settings', { key:'filter', value: filter });
});

/* ==========================================================================
   ACTIVITY LOG
   ========================================================================== */
function fmtDay(ts){
  const d = new Date(ts), today = new Date();
  const y = new Date(); y.setDate(today.getDate()-1);
  if (d.toDateString() === today.toDateString()) return 'Today';
  if (d.toDateString() === y.toDateString()) return 'Yesterday';
  return d.toLocaleDateString(undefined, { month:'short', day:'numeric', year:'numeric' });
}
function fmtTime(ts){ return new Date(ts).toLocaleTimeString(undefined, { hour:'2-digit', minute:'2-digit' }); }

const ACT_ICON = {
  'complete':   { icon:'✓', cls:'add' },
  'uncomplete': { icon:'↺', cls:'rm' },
  'note-add':   { icon:'✎', cls:'note' },
  'note-edit':  { icon:'✎', cls:'note' },
  'note-remove':{ icon:'✕', cls:'rm' },
  'gate-pass':  { icon:'🏁', cls:'add' },
  'gate-unpass':{ icon:'↺', cls:'rm' },
  'init':       { icon:'◆', cls:'' }
};
const ACT_VERB = {
  'complete':   'Completed',
  'uncomplete': 'Reopened',
  'note-add':   'Added note to',
  'note-edit':  'Updated note on',
  'note-remove':'Removed note from',
  'gate-pass':  'Passed readiness gate',
  'gate-unpass':'Reopened readiness gate',
  'init':       'Initialized database'
};

async function renderActivity(){
  const panel = document.getElementById('activityPanel');
  const log = await DB.recentActivity(300);
  if (!log.length){
    panel.innerHTML = `<div class="act-empty">No activity yet. Toggle a task to get started.</div>`;
    return;
  }
  let html = '', lastDay = '';
  log.forEach(a => {
    const day = fmtDay(a.ts);
    if (day !== lastDay){
      html += `<div class="act-day">${day}</div>`;
      lastDay = day;
    }
    const m = ACT_ICON[a.action] || { icon:'•', cls:'' };
    const verb = ACT_VERB[a.action] || a.action;
    const target = a.meta?.text ? `<b>${escapeHtml(a.meta.text)}</b>` : `<b>${a.targetId||''}</b>`;
    const sub = a.meta?.priority ? ` · ${a.meta.priority}` : (a.meta?.phase ? ` · ${a.meta.phase}` : '');
    html += `
      <div class="act-item">
        <div class="act-icon ${m.cls}">${m.icon}</div>
        <div class="act-body">${verb} ${target}<small>${fmtTime(a.ts)}${sub}</small></div>
      </div>`;
  });
  panel.innerHTML = html;
}

/* ==========================================================================
   NOTES PANEL
   ========================================================================== */
async function renderNotes(){
  const panel = document.getElementById('notesPanel');
  const tasks = [...taskMap.values()].filter(t => t.note);
  tasks.sort((a,b) => (b.noteUpdatedAt||0) - (a.noteUpdatedAt||0));
  if (!tasks.length){
    panel.innerHTML = `<div class="notes-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg><div>No notes yet. Click the ✎ icon on any task.</div></div>`;
    return;
  }
  panel.innerHTML = tasks.map(t => `
    <div class="note-card">
      <div class="nc-head">
        <span>${escapeHtml(t.text)}</span>
        <span class="pill ${t.priority.toLowerCase()}">${t.priority}</span>
      </div>
      <div class="nc-body">${escapeHtml(t.note)}</div>
      <div class="nc-foot">${t.phaseName} · ${t.noteUpdatedAt ? timeAgo(t.noteUpdatedAt) : 'unknown'}</div>
    </div>`).join('');
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ==========================================================================
   DATA PANEL
   ========================================================================== */
async function renderData(){
  const panel = document.getElementById('dataPanel');
  const info = await DB.info();
  const recent = await DB.recentActivity(1);
  const tasksArr = [...taskMap.values()];
  const doneCount = tasksArr.filter(t => t.done).length;
  const notesCount = tasksArr.filter(t => t.note).length;
  const gatesArr = [...gateMap.values()];
  const gatesDone = gatesArr.filter(g => g.done).length;
  const firstDone = tasksArr.filter(t => t.done && t.doneAt).sort((a,b) => a.doneAt-b.doneAt)[0];

  panel.innerHTML = `
    <div class="data-block">
      <h4>Engine</h4>
      <div class="data-row"><span>Storage</span><b>${info.engine}</b></div>
      <div class="data-row"><span>Database</span><b>${info.name} v${info.version}</b></div>
      <div class="data-row"><span>Last activity</span><b>${recent[0] ? timeAgo(recent[0].ts) : '—'}</b></div>
      ${firstDone ? `<div class="data-row"><span>First completion</span><b>${new Date(firstDone.doneAt).toLocaleDateString()}</b></div>` : ''}
    </div>
    <div class="data-block">
      <h4>Tables</h4>
      <div class="data-row"><span>tasks</span><b>${info.counts.tasks || tasksArr.length} rows</b></div>
      <div class="data-row"><span>gates</span><b>${info.counts.gates || gatesArr.length} rows</b></div>
      <div class="data-row"><span>activity</span><b>${info.counts.activity || 0} rows</b></div>
      <div class="data-row"><span>settings</span><b>${info.counts.settings || 0} rows</b></div>
    </div>
    <div class="data-block">
      <h4>Summary</h4>
      <div class="data-row"><span>Tasks done</span><b>${doneCount}/${tasksArr.length}</b></div>
      <div class="data-row"><span>Gates passed</span><b>${gatesDone}/${gatesArr.length}</b></div>
      <div class="data-row"><span>Notes</span><b>${notesCount}</b></div>
    </div>
    <div class="data-block">
      <h4>Actions</h4>
      <div class="data-btns">
        <button id="exportFull">Export JSON</button>
        <button id="importBtn">Import JSON</button>
        <button id="wipeActivity" class="wide">Clear activity log</button>
        <button id="resetAll" class="danger wide">Reset entire database</button>
      </div>
      <input type="file" id="importFile" accept=".json" style="display:none">
    </div>`;

  panel.querySelector('#exportFull').onclick = exportFull;
  panel.querySelector('#importBtn').onclick = () => panel.querySelector('#importFile').click();
  panel.querySelector('#importFile').onchange = importFull;
  panel.querySelector('#wipeActivity').onclick = async () => {
    if (!confirm('Clear the activity log? Tasks and notes are kept.')) return;
    await DB.clear('activity');
    renderActivity(); renderData();
  };
  panel.querySelector('#resetAll').onclick = async () => {
    if (!confirm('Reset the entire database? This deletes all progress, notes and history.')) return;
    await DB.clear('tasks'); await DB.clear('gates'); await DB.clear('activity'); await DB.clear('settings');
    location.reload();
  };
}

async function exportFull(){
  const data = await DB.exportAll();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `devsnips-launch-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  await DB.addActivity({ ts: Date.now(), action:'export', targetType:'db' });
  renderActivity(); renderData();
}

async function importFull(e){
  const file = e.target.files[0]; if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!confirm('Import will replace all current data. Continue?')) return;
    await DB.importAll(data);
    await DB.addActivity({ ts: Date.now(), action:'import', targetType:'db' });
    location.reload();
  } catch(err){
    alert('Import failed: ' + err.message);
  }
}

/* ==========================================================================
   DRAWER
   ========================================================================== */
const drawer = document.getElementById('drawer');
const drawerScrim = document.getElementById('sidebarScrim');
function openDrawer(){
  drawer.classList.add('open');
  drawerScrim.classList.add('on');
  renderActivity(); renderNotes(); renderData();
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawerScrim.classList.remove('on');
}
document.getElementById('dataBtn').onclick = openDrawer;
document.getElementById('drawerClose').onclick = closeDrawer;
drawerScrim.addEventListener('click', () => {
  closeDrawer();
  document.getElementById('sidebar').classList.remove('open');
});
document.getElementById('drawerTabs').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#drawerTabs button').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.dataset.panel === b.dataset.tab));
  if (b.dataset.tab === 'activity') renderActivity();
  if (b.dataset.tab === 'notes') renderNotes();
  if (b.dataset.tab === 'data') renderData();
});

document.getElementById('exportBtn').onclick = exportFull;

/* ==========================================================================
   THEME
   ========================================================================== */
function setTheme(t, persist = true){
  document.documentElement.dataset.theme = t;
  document.getElementById('themeLabel').textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
  if (persist) DB.put('settings', { key:'theme', value: t });
}
document.getElementById('themeBtn').addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ==========================================================================
   MOBILE / SCROLL / REVEAL
   ========================================================================== */
const sidebar = document.getElementById('sidebar');
document.getElementById('burger').addEventListener('click', () => {
  sidebar.classList.toggle('open');
  drawerScrim.classList.toggle('on');
});
navEl.addEventListener('click', e => {
  if (e.target.closest('.nav-item') && window.innerWidth <= 1024){
    sidebar.classList.remove('open');
    if (!drawer.classList.contains('open')) drawerScrim.classList.remove('on');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      const link = document.querySelector(`.nav-item[data-target="${en.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin:'-15% 0px -70% 0px' });

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){ en.target.classList.add('in'); revealObs.unobserve(en.target); }
  });
}, { threshold:0.05, rootMargin:'0px 0px -40px 0px' });

/* ==========================================================================
   BOOT (with self-healing on failure)
   ========================================================================== */
async function boot(){
  sync('saving', 'Loading…');
  await seedIfEmpty();

  // Load into memory
  const tasks = await DB.getAll('tasks');
  const gates = await DB.getAll('gates');
  taskMap = new Map(tasks.map(t => [t.id, t]));
  gateMap = new Map(gates.map(g => [g.id, g]));

  // Settings
  const themeRec = await DB.get('settings', 'theme');
  if (themeRec?.value) setTheme(themeRec.value, false);
  const filterRec = await DB.get('settings', 'filter');
  if (filterRec?.value){
    filter = filterRec.value;
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.filter === filter));
  }

  // Build UI, hydrate, refresh
  build();
  hydrate();
  refresh();

  document.querySelectorAll('.reveal, .phase').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 30, 220) + 'ms';
    revealObs.observe(el);
  });
  document.querySelectorAll('.phase').forEach(p => observer.observe(p));
  observer.observe(document.getElementById('timeline'));
  observer.observe(document.getElementById('gate'));

  sync('saved', 'Saved');

  // Save scroll position
  window.addEventListener('scroll', () => {
    clearTimeout(window._scrollT);
    window._scrollT = setTimeout(() => {
      DB.put('settings', { key:'scrollY', value: window.scrollY });
    }, 500);
  });
  const scrollRec = await DB.get('settings', 'scrollY');
  if (scrollRec?.value > 0) window.scrollTo({ top: scrollRec.value, behavior: 'instant' });
}

boot().catch(async err => {
  console.error('Boot failed:', err);
  sync('error', 'Init failed');

  const shouldReset = confirm(
    'The dashboard could not load its local database.\n\n' +
    'This usually means an older version is stored in your browser.\n\n' +
    'Clear it and reload? (Your progress will be lost.)'
  );
  if (shouldReset){
    try {
      indexedDB.deleteDatabase('devsnips-launch-db');
      localStorage.removeItem('devsnips-fallback-db');
    } catch(e){}
    location.reload();
  }
});
