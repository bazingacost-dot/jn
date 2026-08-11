const $ = (sel, ctx) => (ctx || document).querySelector(sel)
const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)]
const appRoot = $('#app')

// ── Catalog ──────────────────────────────────────────
const appCatalog = [
  { id: 'welcome', name: 'Welcome Center', icon: '✦', kicker: 'SYSTEM', color: '#78e2ff', iconBg: '#78e2ff18' },
  { id: 'explorer', name: 'File Cabinet', icon: '▣', kicker: 'FILES', color: '#f3c969', iconBg: '#f3c96918' },
  { id: 'terminal', name: 'Command Deck', icon: '⌁', kicker: 'TERMINAL', color: '#91f7c8', iconBg: '#91f7c818' },
  { id: 'gallery', name: 'OS Gallery', icon: '◈', kicker: 'INSPECT', color: '#ff9fca', iconBg: '#ff9fca18' },
  { id: 'browser', name: 'Orbit Browser', icon: '◎', kicker: 'WEB', color: '#9cb7ff', iconBg: '#9cb7ff18' },
  { id: 'store', name: 'App Bazaar', icon: '▤', kicker: 'STORE', color: '#ff9fca', iconBg: '#ff9fca18' },
  { id: 'cloud', name: 'SkyDrive-ish', icon: '☁', kicker: 'CLOUD', color: '#83d9ef', iconBg: '#83d9ef18' },
  { id: 'news', name: 'News & Vibes', icon: '▥', kicker: 'NEWS', color: '#ffb26b', iconBg: '#ffb26b18' },
  { id: 'gamehub', name: 'Game Hub', icon: '✚', kicker: 'GAMES', color: '#d9a5ff', iconBg: '#d9a5ff18' },
  { id: 'monitor', name: 'Pulse Monitor', icon: '◉', kicker: 'SYS', color: '#ff817d', iconBg: '#ff817d18' },
  { id: 'settings', name: 'Control Room', icon: '⚙', kicker: 'SYS', color: '#b6c2d9', iconBg: '#b6c2d918' },
  { id: 'notepad', name: 'Notepad', icon: '▯', kicker: 'EDITOR', color: '#f9e67c', iconBg: '#f9e67c18' },
]
const appById = (id) => appCatalog.find(a => a.id === id) || appCatalog[0]
const appIcon = (id) => appById(id).icon

// ── Desktop icons ───────────────────────────────────
const desktopIcons = [
  { id: 'welcome', x: 36, y: 32 },
  { id: 'explorer', x: 36, y: 134 },
  { id: 'terminal', x: 36, y: 236 },
  { id: 'gallery', x: 36, y: 338 },
  { id: 'browser', x: 36, y: 440 },
  { id: 'store', x: 36, y: 542 },
  { id: 'settings', x: 36, y: 644 },
]

// ── Files ────────────────────────────────────────────
const initialFiles = [
  { path: '/home/alex/Read Me.txt', type: 'file', content: 'Welcome to Window 12.\n\nThis is a friendly fake operating system built for exploring.\nTry the Command Deck and type help.', size: '188 B', modified: 'just now' },
  { path: '/home/alex/Projects', type: 'folder', modified: 'today' },
  { path: '/home/alex/Projects/idea-board.w12', type: 'file', content: 'PROJECT: Idea Board\nSTATUS: delightfully unfinished\nOWNER: alex', size: '74 B', modified: 'today' },
  { path: '/home/alex/Downloads', type: 'folder', modified: 'yesterday' },
  { path: '/home/alex/Downloads/Definitely_Not_A_Virus.exe', type: 'file', content: 'This file is a joke. Window 12 Defender says: probably fine.', size: '42 KB', modified: 'yesterday' },
  { path: '/home/alex/Pictures', type: 'folder', modified: 'Mon' },
  { path: '/home/alex/Desktop', type: 'folder', modified: 'Mon' },
  { path: '/home/alex/Documents', type: 'folder', modified: 'today' },
  { path: '/home/alex/Documents/notes.txt', type: 'file', content: 'Window 12 to-do:\n- Make desktop look real\n- Add bloatware\n- World domination', size: '89 B', modified: 'today' },
  { path: '/home/alex/Music', type: 'folder', modified: 'last week' },
  { path: '/home/alex/Videos', type: 'folder', modified: 'last week' },
  { path: '/system/boot.log', type: 'file', content: '[OK] boot sequence\n[OK] personality module\n[OK] file system mounted\n[WARN] too much bloatware', size: '3 KB', modified: 'boot' },
  { path: '/system/config/window12.ini', type: 'file', content: 'accent=cyan\ntelemetry=false\nbloatware=enthusiastic', size: '56 B', modified: 'boot' },
]

// ── Commands ─────────────────────────────────────────
const coreCommands = [
  ['help','core','List commands or search the catalog.'],['clear','core','Clear the Command Deck.'],['echo','core','Print a message.'],
  ['pwd','files','Print the current virtual directory.'],['ls','files','List files in the current directory.'],['cat','files','Read a virtual file.'],
  ['touch','files','Create a virtual file.'],['mkdir','files','Create a virtual folder.'],['write','files','Write text into a virtual file.'],
  ['rm','files','Remove a virtual file.'],['apps','desktop','List installed apps.'],['open','desktop','Open an app by name.'],
  ['install','packages','Stage an app package.'],['neofetch','system','Show Window 12 system identity.'],['sysinfo','system','Show a system summary.'],
  ['whoami','user','Show the active local user.'],['date','system','Print the local date.'],['calc','utilities','Run basic arithmetic.'],
  ['history','core','Show recent commands.'],['logout','power','Return to the login screen.'],['reboot','power','Reboot to login.'],
].map(([n,c,d]) => ({ name:n, category:c, description:d }))

const domains = ['system','files','network','media','developer','security','power','display','storage','process','users','packages','gaming','office','cloud','diagnostics','accessibility','automation','desktop','devices']
const actions = ['status','info','list','scan','check','repair','sync','clean','reset','enable','disable','start','stop','show','hide','inspect','watch','export','import','refresh','connect','disconnect','measure','report','optimize','backup','restore','mount','unmount','search','index','open','close','queue','run','schedule','history','config','version','logs','stats','test','discover','pair','update','upgrade','install','remove','lock','unlock','notify','capture','record','share','print','preview','verify','diagnose','trace','profile','summarize','format','convert','render','compile','build','deploy','publish','archive','extract','encrypt','decrypt','hash','generate','validate','monitor','benchmark','throttle','prioritize','route','mirror','snapshot','diff','merge','watchdog','heartbeat','fallback','sandbox','simulate','wizard','tutorial','tips','about','license','policy','rules','permissions','quota','usage','sessions','accounts','themes','widgets','shortcuts','sounds','wallpaper','brightness','volume','timezone','locale','keyboard','mouse','touch','bluetooth','wifi','vpn','dns','proxy','firewall','ports','services','drivers','firmware','battery','thermals','memory','cpu','gpu','uptime','kernel','shell','environment','paths','aliases','plugins','extensions','modules','workspaces','projects','templates','favorites','recents','trash','clipboard','screenshots','downloads','documents','pictures','music','videos','games','news','weather','calendar','mail','notes','calculator','browser','store','cloud','terminal']
const commandRegistry = [...coreCommands]
for (const d of domains) for (const a of actions) commandRegistry.push({ name:`${d}.${a}`, category:d, description:`${a[0].toUpperCase()}${a.slice(1)} the ${d} subsystem.` })

// ── OS references ────────────────────────────────────
const osReferences = [
  { id:'blue-widgets', label:'Widgets / Windows 11', note:'Blue Bloom wallpaper with widget panel', skin:'blue-widgets', tags:'widgets · glass · blue' },
  { id:'rainbow-desktop', label:'Vivid Concept', note:'Colorful 3D desktop with dock and start menu', skin:'rainbow-desktop', tags:'color · dock · creative' },
  { id:'blue-start', label:'Windows 11 Start', note:'Centered launcher with pinned grid', skin:'blue-start', tags:'launcher · search · rounded' },
  { id:'linux-terminal', label:'Hyprland / Arch', note:'Tiling terminals with neofetch and file manager', skin:'linux-terminal', tags:'terminal · tiling · dark' },
  { id:'endeavour', label:'EndeavourOS Dark', note:'Neon desktop with audio mixer and performance panel', skin:'endeavour', tags:'neon · status · utility' },
  { id:'purple-dev', label:'Purple Dev Shell', note:'Code editor, btop, and cava visualizer', skin:'purple-dev', tags:'developer · graphs · purple' },
  { id:'gnome', label:'GNOME Activities', note:'Workspace overview with dash and tiled windows', skin:'gnome', tags:'overview · dock · linux' },
  { id:'macos', label:'macOS Desktop', note:'Clean desktop with colorful dock', skin:'macos', tags:'dock · soft · minimal' },
]

// ── State ────────────────────────────────────────────
const LS = (k,fb) => {try{return JSON.parse(localStorage.getItem(k))||fb}catch{return fb}}
const ss = (k,v) => localStorage.setItem(k,JSON.stringify(v))

let zCounter = 10
const state = {
  screen: 'boot', stage:0, installing:false,
  // Window manager: array of { id, zIndex, minimized, maximized, x, y, w, h }
  windows: [],
  activeId: null,
  startOpen: false, notifyOpen: false,
  contextMenu: null, // { x, y, items:[] } or null
  search: '', profile: LS('window12_user','Alex'),
  selectedFile: '/home/alex/Read Me.txt',
  files: LS('window12_files',initialFiles),
  terminalInput:'', terminalLines:[
    'Window 12 Command Deck [build 12.0.0-prototype]',
    `Catalog loaded: ${commandRegistry.length.toLocaleString()} commands across ${domains.length} subsystems.`,
    'Type help to explore. Type neofetch for a little flex.', '',
  ], history:[],
  settings: { telemetry:false, autoUpdate:true, compact:false },
  gallerySelection:'blue-widgets',
  wallpaper: LS('window12_wp','aurora'), // 'aurora' | skin name
  notifications: LS('window12_notifs',[
    { id:1, title:'Welcome to Window 12', body:'Your desktop is ready. Click around!', time:Date.now()-60000, icon:'✦' },
    { id:2, title:'Bloatware installed', body:'14 essential apps you definitely asked for.', time:Date.now()-120000, icon:'▤' },
  ]),
}

function readStored(k,fb) { try{return JSON.parse(localStorage.getItem(k))||fb}catch{return fb} }
function saveState() { localStorage.setItem('window12_files',JSON.stringify(state.files)) }
function today() { return new Date().toLocaleDateString(undefined,{month:'short',day:'numeric'}) }
function now() { return new Date() }
function esc(v='') { return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])) }
function userHome() { return `/home/${state.profile.toLowerCase()}` }

// ── Window manager ──────────────────────────────────
function winOpen(appId) {
  const existing = state.windows.find(w => w.id === appId)
  if (existing) { winFocus(appId); if (existing.minimized) existing.minimized = false; return render() }
  const x = 80 + (state.windows.length % 5) * 35
  const y = 60 + (state.windows.length % 4) * 30
  state.windows.push({ id:appId, zIndex:++zCounter, minimized:false, maximized:false, x, y, w:900, h:580 })
  state.activeId = appId
  state.startOpen = false
  render()
}
function winClose(appId) { state.windows = state.windows.filter(w => w.id !== appId); if (state.activeId === appId) state.activeId = state.windows.length ? state.windows[state.windows.length-1].id : null; render() }
function winFocus(appId) { state.activeId = appId; const w = state.windows.find(w => w.id === appId); if (w) { w.zIndex = ++zCounter; w.minimized = false }; render() }
function winMinimize(appId) { const w = state.windows.find(w => w.id === appId); if (w) w.minimized = !w.minimized; if (w && w.minimized && state.activeId === appId) { const vis = state.windows.filter(x => !x.minimized); state.activeId = vis.length ? vis[vis.length-1].id : null }; render() }
function winMaximize(appId) { const w = state.windows.find(w => w.id === appId); if (w) w.maximized = !w.maximized; render() }

// ── Notifications ───────────────────────────────────
function pushNotif(title, body, icon='✦') {
  state.notifications.unshift({ id:Date.now(), title, body, time:Date.now(), icon })
  if (state.notifications.length > 20) state.notifications.length = 20
  ss('window12_notifs',state.notifications)
  if (!state.notifyOpen) render()
}
function clearNotifs() { state.notifications = []; ss('window12_notifs',[]) }
function dismissNotif(id) { state.notifications = state.notifications.filter(n => n.id !== id); ss('window12_notifs',state.notifications); render() }

// ── Context menu ────────────────────────────────────
function showContext(e, items) {
  e.preventDefault()
  state.contextMenu = { x: e.clientX, y: e.clientY, items }
  state.startOpen = false
  render()
}
function hideContext() { state.contextMenu = null; render() }

// ── Desktop context menu ────────────────────────────
const desktopCtxItems = [
  { label:'New', sub:[
    { label:'Folder', action:()=>{ pushNotif('New folder','Created on desktop'); hideContext() } },
    { label:'Text Document', action:()=>{ pushNotif('New document','Untitled.txt created'); hideContext() } },
  ]},
  { label:'Refresh', action:()=>{ render(); hideContext() } },
  { sep:true },
  { label:'Display settings', action:()=>{ winOpen('settings'); hideContext() } },
  { label:'Personalize', action:()=>{ winOpen('gallery'); hideContext() } },
  { sep:true },
  { label:'Open terminal here', action:()=>{ winOpen('terminal'); hideContext() } },
]

// ── Render dispatcher ───────────────────────────────
function render() {
  if (state.screen === 'boot') return R.boot()
  if (state.screen === 'install') return R.install()
  if (state.screen === 'login') return R.login()
  return R.desktop()
}

// ── Boot / Install / Login ──────────────────────────
const installSteps = [
  ['Preparing your tiny hard drive','Checking imaginary hardware and finding 12.4 GB of vibes.'],
  ['Copying personality files','Installing helpful nudges, tasteful gradients, and one weather widget.'],
  ['Waking up the bloatware','Negotiating with 14 preinstalled apps. They all said yes.'],
  ['Polishing the desktop','Adding a little glow to every corner of your new OS.'],
]

const R = {
  boot() { appRoot.innerHTML = `<main class="boot-screen"><div class="boot-logo"><span class="brand-mark">▦</span><strong>WINDOW <b>12</b></strong></div><div class="boot-loader"><i></i><i></i><i></i></div><p>preparing your delightful desktop</p><small>BUILD 12.0.0 · AURORA CHANNEL</small></main>` },
  install() {
    const c = installSteps[state.stage] || installSteps[0]
    const pct = state.installing ? Math.round(((state.stage+1)/installSteps.length)*100) : 0
    appRoot.innerHTML = `<main class="onboarding-shell"><div class="setup-aside"><div class="brand-lockup"><span class="brand-mark">▦</span><span>WINDOW <b>12</b></span></div><div class="aside-art"><div class="install-orbit">12</div><span class="star star-one">✦</span><span class="star star-two">·</span><span class="star star-three">+</span></div><p class="aside-quote">"An operating system should feel like a place you want to hang out."</p><span class="aside-caption">AURORA EDITION / 2026</span></div><section class="setup-main"><div class="setup-top"><span class="eyebrow">SETUP EXPERIENCE 01</span><span class="setup-step">${state.installing?`0${Math.min(state.stage+1,4)}/04`:'READY'}</span></div><div class="setup-content"><span class="setup-icon">✦</span><h1>${state.installing?c[0]:'Meet your new desktop.'}</h1><p>${state.installing?c[1]:'A polished operating system prototype with a real desktop, window manager, terminal, and more bloatware than anyone requested.'}</p>${state.installing?`<div class="install-progress"><div style="width:${pct}%"></div></div><div class="progress-meta"><span>Installing Window 12</span><b>${pct}%</b></div>`:`<div class="feature-list"><span>◈ Real desktop with icons</span><span>◈ ${commandRegistry.length.toLocaleString()} commands</span><span>◈ Multi-window manager</span></div>`}<button class="primary-button setup-button" data-action="${state.installing?'noop':'install'}" ${state.installing?'disabled':''}>${state.installing?'Installing…':'Install Window 12'} <span>→</span></button><small class="legal-note">Pure HTML, CSS, and JavaScript.</small></div><div class="setup-footer"><span>BACKUP STATUS <b>NOT REQUIRED</b></span><span>SPACE AVAILABLE <b>∞</b></span></div></section></main>`
  },
  login() {
    const t = now()
    const h = t.getHours().toString().padStart(2,'0'); const m = t.getMinutes().toString().padStart(2,'0')
    appRoot.innerHTML = `<main class="lockscreen"><div class="lock-wallpaper ${state.wallpaper}"></div><div class="lock-overlay"></div><div class="lock-time">${h}:${m}</div><div class="lock-date">${t.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div><div class="lock-card"><div class="avatar giant">${esc(state.profile.slice(0,1).toUpperCase()||'A')}</div><h2>${esc(state.profile)}</h2><label class="field-label">PROFILE NAME<input data-input="profile" value="${esc(state.profile)}" placeholder="Your name" autofocus /></label><button class="primary-button login-button" data-action="login">Sign in <span>↗</span></button></div></main>`
  },
  desktop() {
    const wp = state.wallpaper
    const ctx = state.contextMenu
    appRoot.innerHTML = `<main class="os-shell"><div class="wallpaper ${wp}"></div>${R.desktopIcons()}${R.taskbar()}${state.startOpen?R.startMenu():''}${state.windows.filter(w=>!w.minimized).map(w=>R.window(w)).join('')}${state.notifyOpen?R.notifPanel():''}${ctx?R.contextMenu(ctx):''}</main>`
  },
  desktopIcons() {
    return `<section class="desktop-icons">${desktopIcons.map(d => {
      const app = appById(d.id)
      return `<button class="desktop-icon" data-dblclick="${d.id}" data-context="desktop-icon" data-id="${d.id}" style="left:${d.x}px;top:${d.y}px"><span class="d-icon" style="background:${app.iconBg};color:${app.color}">${app.icon}</span><span class="d-label">${app.name}</span></button>`
    }).join('')}</section>`
  },
  taskbar() {
    const t = now()
    return `<footer class="taskbar"><div class="task-left"><button class="tb-start ${state.startOpen?'active':''}" data-action="start"><span class="brand-mark">▦</span></button><label class="tb-search"><span>⌕</span><input data-input="search" value="${esc(state.search)}" placeholder="Type here to search"></label></div><div class="task-center">${state.windows.map(w => {
      const app = appById(w.id)
      return `<button class="tb-app ${w.id===state.activeId&&!w.minimized?'active':''} ${w.minimized?'minimized':''}" data-focus="${w.id}" title="${app.name}">${app.icon}</button>`
    }).join('')}</div><div class="task-right"><button class="tb-tray-btn" data-action="notify" title="Notifications">${state.notifications.length?'🔔':'🔕'}</button><span class="tb-tray-btn tb-tray-btn-no-hover">⌁</span><span class="tb-tray-btn tb-tray-btn-no-hover">◈</span><span class="tb-tray-btn tb-tray-btn-no-hover">▰</span><div class="tb-clock" data-context="taskbar-clock"><strong>${t.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'})}</strong><small>${today()}</small></div><button class="avatar" title="${esc(state.profile)}" data-action="logout">${esc(state.profile.slice(0,1).toUpperCase())}</button></div></footer>`
  },
  startMenu() {
    return `<div class="start-menu"><div class="sm-search"><span>⌕</span><input data-input="search" autofocus value="${esc(state.search)}" placeholder="Type here to search"></div><div class="sm-pinned"><div class="sm-section-header"><span>Pinned</span><button data-app="store">All apps →</button></div><div class="sm-pinned-grid">${appCatalog.slice(0,12).map(app => `<button class="sm-app-btn" data-app="${app.id}"><span style="background:${app.iconBg};color:${app.color}">${app.icon}</span><small>${app.name}</small></button>`).join('')}</div></div><div class="sm-recommended"><div class="sm-section-header"><span>Recommended</span><button data-app="explorer">More →</button></div><div class="sm-rec-list"><div class="sm-rec-item" data-app="welcome"><span class="sm-rec-icon">✦</span><div><strong>Welcome Center</strong><small>Recently added</small></div></div><div class="sm-rec-item" data-app="explorer"><span class="sm-rec-icon">▣</span><div><strong>Read Me.txt</strong><small>2 min ago</small></div></div><div class="sm-rec-item" data-app="terminal"><span class="sm-rec-icon">⌁</span><div><strong>Command Deck</strong><small>15 min ago</small></div></div></div></div><div class="sm-footer"><div class="sm-user"><div class="avatar">${esc(state.profile.slice(0,1).toUpperCase())}</div><strong>${esc(state.profile)}</strong></div><button class="sm-power" data-action="logout">◒</button></div></div>`
  },
  window(w) {
    const app = appById(w.id)
    const mx = w.maximized
    const style = mx ? '' : `left:${w.x}px;top:${w.y}px;width:${w.w}px;height:${w.h}px`
    const cls = `app-window ${mx?'maximized':''} ${w.id===state.activeId?'focused':''}`
    return `<div class="${cls}" style="${style};z-index:${w.zIndex}" data-focus="${w.id}"><header class="win-titlebar" data-move="${w.id}"><div class="win-title"><span style="color:${app.color}">${app.icon}</span><strong>${app.name}</strong></div><div class="win-ctrls"><button class="win-min" data-min="${w.id}">─</button><button class="win-max" data-max="${w.id}">${mx?'❐':'□'}</button><button class="win-close" data-close="${w.id}">✕</button></div></header><div class="win-body">${R.appContent(w.id)}</div></div>`
  },
  appContent(id) {
    const vf = state.files
    if (id==='welcome') return R.welcome()
    if (id==='explorer') return R.explorer(vf)
    if (id==='terminal') return R.terminal()
    if (id==='gallery') return R.gallery()
    if (id==='store') return R.store()
    if (id==='settings') return R.settings()
    if (id==='monitor') return R.monitor()
    if (id==='browser') return R.browser()
    if (id==='news') return R.news()
    if (id==='cloud') return R.cloud()
    if (id==='gamehub') return R.gameHub()
    if (id==='notepad') return R.notepad()
    return R.generic(id)
  },
  welcome() { return `<div class="app-pad"><div class="welcome-hero"><span class="live-pill">✦ FIRST RUN TOUR</span><h2>Small OS.<br><em>Big personality.</em></h2><p>Window 12 is a desktop playground: real window management, desktop icons, a terminal, and more bloatware than anyone asked for.</p><button class="primary-button" data-app="terminal">Open command deck ↗</button></div><div class="welcome-stats"><div><b>${commandRegistry.length.toLocaleString()}</b><span>indexed commands</span></div><div><b>${appCatalog.length}</b><span>apps included</span></div><div><b>∞</b><span>imaginary storage</span></div></div></div>` },
  explorer(vf) {
    const sel = state.files.find(f => f.path === state.selectedFile)
    return `<div class="explorer-app"><aside class="explorer-side"><p class="eyebrow">PLACES</p>${['Home','Desktop','Documents','Downloads','Pictures','Music','Videos'].map((p,i) => `<button class="${i===0?'cur':''}"><span>${['⌂','⊞','▤','⇩','▧','♫','▶'][i]}</span>${p}</button>`).join('')}<div class="storage-meter"><div><span>WINDOW DRIVE</span><b>61%</b></div><i><em></em></i><small>61.2 GB of 100 GB used</small></div></aside><section class="explorer-main"><div class="file-tbar"><div class="file-btns"><button>←</button><button>→</button><button>↻</button><button>⌂</button></div><div class="crumbs"><span>⌂</span><b>/</b><span>home</span><b>/</b><strong>${esc(state.profile.toLowerCase())}</strong></div></div><div class="file-cols"><div class="file-list"><div class="file-head"><span>Name</span><span>Date modified</span><span>Size</span></div>${vf.filter(f=>f.path.startsWith(userHome()+'/')&&f.path.slice(userHome().length+1).split('/').length===1).map(f=>`<button class="file-row ${state.selectedFile===f.path?'sel':''}" data-file="${esc(f.path)}"><span><i class="${f.type}">${f.type==='folder'?'▰':'▤'}</i>${esc(f.path.split('/').pop())}</span><small>${f.modified}</small><small>${f.size||'—'}</small></button>`).join('')}</div><div class="file-preview"><span class="eyebrow">PREVIEW</span><div class="pv-icon ${sel?.type||'file'}">${sel?.type==='folder'?'▰':'▤'}</div><h3>${esc(sel?.path.split('/').pop()||'Nothing selected')}</h3><p>${esc(sel?.content||(sel?'A virtual folder ready for more virtual files.':'Select a file to read its contents.'))}</p><small>${sel?.size||'Folder'} · ${sel?.modified||'—'}</small></div></div></section></div>`
  },
  terminal() { return `<div class="terminal-app"><div class="term-top"><span><i></i> COMMAND DECK</span><small>WINDOW 12 SHELL · ${commandRegistry.length.toLocaleString()} COMMANDS</small></div><div class="term-out">${state.terminalLines.map(l=>`<div class="${l.startsWith('✓')?'ts':l.startsWith('user@')?'tp':''}">${esc(l)||'&nbsp;'}</div>`).join('')}<form class="term-inp" data-form="terminal"><span>user@window12:~$</span><input data-input="terminal" autofocus value="${esc(state.terminalInput)}" placeholder="try help, ls, or neofetch"></form></div><div class="term-hints"><span>QUICK</span><button data-command="neofetch">neofetch</button><button data-command="ls">ls</button><button data-command="touch idea.txt">touch idea.txt</button><button data-command="help">help</button></div></div>` },
  gallery() {
    const sel = osReferences.find(r=>r.id===state.gallerySelection)||osReferences[0]
    return `<div class="app-pad"><div class="gallery-hero" style="margin-bottom:18px"><div><span class="eyebrow">PROTOTYPE REFERENCE WALL / ${osReferences.length.toString().padStart(2,'0')}</span><h2>Different OSes.<br><em>One curious desktop.</em></h2><p>A visual wall inspired by the supplied prototype OS screenshots.</p></div><div class="gallery-orbit">◈</div></div><div class="gallery-layout"><div class="ref-grid">${osReferences.map(r=>`<button class="ref-card ${r.id===state.gallerySelection?'sel':''}" data-gallery="${r.id}"><div class="os-preview ${r.skin}">${R.previewMarkup(r.skin)}</div><div class="ref-meta"><strong>${r.label}</strong><small>${r.note}</small></div></button>`).join('')}</div><aside class="gallery-detail"><span class="eyebrow">SELECTED</span><div class="os-preview detail-preview ${sel.skin}">${R.previewMarkup(sel.skin)}</div><h3>${sel.label}</h3><p>${sel.note}.</p><div class="detail-tags">${sel.tags.split(' · ').map(t=>`<span>${t}</span>`).join('')}</div><button class="primary-button" data-action="apply-wallpaper" data-wp="${sel.skin}">Apply as wallpaper <span>↗</span></button></aside></div></div>`
  },
  previewMarkup(skin) {
    const d = '<i></i><i></i><i></i><i></i><i></i>'
    if (skin==='blue-widgets') return `<div class="pv-wall"></div><div class="pv-wpanel"><b>Widgets</b><span class="pv-photo"></span><span class="pv-lines"></span><span class="pv-cal"></span></div><div class="pv-tb"></div>`
    if (skin==='rainbow-desktop') return `<div class="pv-wall rainbow"></div><div class="pv-rainbow-win"><b>Creative</b>${d}</div><div class="pv-dock">${d}</div>`
    if (skin==='blue-start') return `<div class="pv-wall"></div><div class="pv-spanel"><span></span><b>⌕ Type here to search</b>${d}</div><div class="pv-tb"></div>`
    if (skin==='linux-terminal') return `<div class="pv-wall city"></div><div class="pv-term">$ neofetch<br>Window / Arch<br>──────────<br>cpu 12 cores<br>mem 6.8G/16G</div><div class="pv-files">/ Documents<br>▸ Projects<br>▸ config.json</div><div class="pv-chart">▂▅▂▇▃▆</div>`
    if (skin==='endeavour') return `<div class="pv-wall neon"></div><div class="pv-capture">◉ Capture<br>◉ Audio</div><div class="pv-spanel dark"><b>⌕ Type to search</b>${d}</div><div class="pv-perf">CPU 3%<br>RAM 68%</div><div class="pv-tb dark"></div>`
    if (skin==='purple-dev') return `<div class="pv-wall purple"></div><div class="pv-code">$ ./build.sh<br><span>import{window12}</span><br>const g=true<br>✓ compiled</div><div class="pv-code right">cpu 24%<br>mem 42%<br>disk 61%</div><div class="pv-chart pc">▂▇▃▆▅</div>`
    if (skin==='gnome') return `<div class="pv-wall gnome"></div><div class="pv-search">⌕ Type to search</div><div class="pv-ws">▣ ▣ ▣</div><div class="pv-editor">code/projects<br><span>function hi()</span><br>return w12</div><div class="pv-dock">${d}</div>`
    return `<div class="pv-wall mac"></div><div class="pv-mac-win"><b>Window 12</b><span></span><span></span><span></span></div><div class="pv-dock mac">${d}</div>`
  },
  store() { return `<div class="app-pad"><div class="store-banner"><div><span class="eyebrow">FEATURED / 12.04</span><h2>Apps you didn't ask for.<br><em>Now in one place.</em></h2><p>Every Window 12 install comes with a generous helping of "essentials."</p></div><div class="store-shape">▤<small>+${appCatalog.length}</small></div></div><div class="store-grid">${appCatalog.filter(a=>!['welcome','explorer','terminal','gallery','settings','monitor'].includes(a.id)).slice(0,6).map(a=>`<article class="store-item"><div class="si-top"><span class="app-icon" style="color:${a.color};background:${a.iconBg}">${a.icon}</span><span class="si-get">↓</span></div><strong>${a.name}</strong><p>${a.kicker.toLowerCase()} app</p><footer><small>12 MB</small><button data-app="${a.id}">Open</button></footer></article>`).join('')}</div></div>` },
  settings() { return `<div class="settings-app"><aside class="set-nav"><span class="eyebrow">CONTROL ROOM</span>${['System','Personalization','Privacy','Updates','About'].map((i,n)=>`<button class="${n===0?'sel':''}"><span>${['⌁','✦','◌','↻','ⓘ'][n]}</span>${i}</button>`).join('')}</aside><section class="set-content"><h2>Make it yours.</h2><p class="set-lead">Window 12 is already opinionated. These switches help it mind its own business.</p><div class="set-list">${['Helpful nudges|Show the occasional suggestion for an app you already have.','Telemetry (not really)|Share anonymous imaginary usage with absolutely nobody.','Compact mode|Tighten the desktop when your screen feels crowded.'].map((r,i)=>{const [t,d]=r.split('|');const k=['autoUpdate','telemetry','compact'][i];return `<div class="set-row"><div><strong>${t}</strong><p>${d}</p></div><button class="toggle ${state.settings[k]?'on':''}" data-setting="${k}"><i></i></button></div>`}).join('')}</div><div class="set-about"><span>WINDOW 12</span><b>12.0.0 · AURORA</b><small>Pure HTML, CSS, JavaScript.</small></div></section></div>` },
  monitor() { return `<div class="app-pad"><div class="mon-sum"><div><span class="eyebrow">SYSTEM HEALTH</span><h2>Steady as a desktop.</h2><p>Nothing suspicious. Except the amount of preinstalled software.</p></div><div class="health-ring"><strong>92</strong><small>HEALTH</small></div></div><div class="mon-grid">${[['CPU','28%','4 cores nominal','#78e2ff'],['Memory','6.8 GB','of 16 GB','#d9a5ff'],['Storage','61%','61.2/100 GB','#f3c969'],['Network','↑12 ↓8 KB/s','wlp4s0','#91f7c8'],['Uptime','2h 14m','since boot','#ffb26b'],['Battery','84%','Discharging','#ff9fca']].map(([l,v,d,c])=>`<div class="mon-m"><div><span>${l}</span><b>${v}</b></div><i style="color:${c}"><em style="width:${v}"></em></i><small>${d}</small></div>`).join('')}</div><div class="proc-panel"><div class="eyebrow" style="margin-bottom:11px">TOP PROCESSES · LIVE</div>${[['window-shell','Core desktop','12.4%'],['bloatware-orch','Keeping things helpful','8.8%'],['orbit-browser','39 tabs open','4.2%'],['cloud-sync-ish','Waiting patiently','1.7%']].map(r=>`<div class="proc-row"><span class="proc-dot"></span><div><strong>${r[0]}</strong><small>${r[1]}</small></div><b>${r[2]}</b></div>`).join('')}</div></div>` },
  browser() { return `<div class="browser-app"><div class="br-tabs"><span class="br-tab act">◉ New tab <b>×</b></span><button>＋</button></div><div class="br-toolbar"><button>‹</button><button>›</button><button>↻</button><div class="br-addr"><span>⌕</span>window://fresh-start<span class="secure">◈</span></div><button>⋮</button></div><div class="br-home"><span class="br-logo">◎</span><h2>Orbit the web.</h2><p>A calm start page for an aggressively tabbed life.</p><div class="br-search">⌕ <span>Search the imaginary internet</span><b>↵</b></div><div class="br-links"><span>◈ Weather</span><span>▤ News</span><span>✦ Reading</span><span>＋ Add</span></div></div></div>` },
  news() { return `<div class="app-pad"><div class="news-head"><div><span class="eyebrow">YOUR BRIEFING</span><h2>News & Vibes</h2></div><span class="weather-pill">☼ 22° Aurora</span></div><div class="news-grid"><article class="news-feat"><span class="news-tag">WINDOW 12</span><h3>Local desktop achieves perfect balance between calm and chaos</h3><p>Experts say the secret is a tasteful amount of glow and exactly ${appCatalog.length} unnecessary apps.</p><small>4 min · Just now</small></article><article><span class="news-tag orange">TECH</span><h3>The tiny command that could</h3><p>Why everyone is typing <code>neofetch</code> today.</p><small>2 min</small></article><article><span class="news-tag cyan">WEATHER</span><h3>Clear skies, scattered widgets</h3><p>Expect pleasant gradients throughout the afternoon.</p><small>1 min</small></article></div></div>` },
  cloud() { return `<div class="app-pad"><div class="cloud-hero"><span class="cl-sym">☁</span><div><span class="eyebrow">SKYDRIVE-ISH</span><h2>All your files.<br><em>Mostly in the sky.</em></h2><p>Your imaginary sync is looking healthy.</p></div><div class="sync-score"><strong>98%</strong><small>SYNCED</small></div></div><div class="cl-folders">${[['▤','Documents','12 items'],['▧','Pictures','48 items'],['◒','Projects','7 items'],['⇩','Downloads','23 items']].map(r=>`<div><span>${r[0]}</span><strong>${r[1]}</strong><small>${r[2]}</small></div>`).join('')}</div><div class="cl-footer"><span class="status-dot"></span> Last synced just now</div></div>` },
  gameHub() { return `<div class="app-pad"><div class="game-hero"><div><span class="eyebrow">GAME HUB</span><h2>Play something<br><em>almost instantly.</em></h2><p>Updates may apply. Snacks recommended.</p><button class="primary-button">Launch queue ↗</button></div><div class="game-cube">✚</div></div><div class="game-list">${[['Neon Solitaire','◈','Casual · 12 MB','PLAY','purple'],['Cloud Racer 12','✦','Arcade · 1.2 GB','UPDATE','pink'],['Desktop Defender','◉','Strategy · 480 MB','PLAY','blue']].map(r=>`<div><span class="gc ${r[4]}">${r[1]}</span><section><strong>${r[0]}</strong><small>${r[2]}</small></section><button>${r[3]}</button></div>`).join('')}</div></div>` },
  notepad() { return `<div class="notepad-app"><textarea class="np-area" placeholder="Start typing...">Window 12 Notepad\nA simple text editor.\n\nThings to do:\n- Explore the desktop icons\n- Open the Command Deck\n- Check out OS Gallery\n</textarea></div>` },
  generic(id) { const a=appById(id); return `<div class="app-pad" style="text-align:center;padding-top:80px"><span style="font-size:64px;color:${a.color}">${a.icon}</span><h2>${a.name}</h2><p style="color:#8296a5">This app is ready for you to build out.</p></div>` },
  notifPanel() {
    return `<div class="notif-panel"><div class="np-head"><span>Notifications</span><button data-action="clear-notifs">Clear all</button></div><div class="np-list">${state.notifications.length===0?'<p class="np-empty">No notifications</p>':state.notifications.map(n=>`<div class="np-item"><span class="np-icon">${n.icon}</span><div><strong>${esc(n.title)}</strong><p>${esc(n.body)}</p><small>${timeAgo(n.time)}</small></div><button data-dismiss="${n.id}">×</button></div>`).join('')}</div></div>`
  },
  contextMenu(ctx) {
    return `<div class="ctx-menu" style="left:${ctx.x}px;top:${ctx.y}px">${ctx.items.map(it=>{
      if (it.sep) return '<div class="ctx-sep"></div>'
      if (it.sub) return `<div class="ctx-item has-sub"><span>${it.label}</span><span class="ctx-arrow">▸</span><div class="ctx-sub">${it.sub.map(s=>`<div class="ctx-item" data-ctx-action="sub">${s.label}</div>`).join('')}</div></div>`
      return `<div class="ctx-item">${it.label}</div>`
    }).join('')}</div>`
  }
}

function timeAgo(ts) { const s = Math.floor((Date.now()-ts)/1000); if (s<60) return 'just now'; if (s<3600) return `${Math.floor(s/60)}m ago`; if (s<86400) return `${Math.floor(s/3600)}h ago`; return `${Math.floor(s/86400)}d ago` }

// ── Login / install / logout ────────────────────────
function login() { state.profile = state.profile.trim()||'Alex'; localStorage.setItem('window12_user',state.profile); state.screen='desktop'; render() }
function logout() { state.windows=[]; state.startOpen=false; state.notifyOpen=false; state.contextMenu=null; state.screen='login'; render() }
function startInstall() { state.installing=true; state.stage=0; render(); const t=setInterval(()=>{if(state.stage>=installSteps.length-1){clearInterval(t);localStorage.setItem('window12_installed','true');state.installing=false;state.screen='login';render()}else{state.stage+=1;render()}},1050) }

// ── Terminal ────────────────────────────────────────
function runCommand(raw) {
  const input = raw.trim(); if (!input) return
  const [cmd,...args] = input.split(/\s+/); const n=cmd.toLowerCase(); const r=[]
  state.history = [...state.history.slice(-24), input]
  const p=userHome()
  if (n==='clear') { state.terminalLines=[]; state.terminalInput=''; render(); return }
  if (n==='help') { const t=args.join(' ').toLowerCase(); const m=t?commandRegistry.filter(i=>i.name.includes(t)||i.category.includes(t)):coreCommands; r.push(t?`Search "${t}" · ${m.length} matches`:'Core commands · try help <keyword> for full catalog'); m.slice(0,12).forEach(i=>r.push(`  ${i.name.padEnd(23)} ${i.description}`)); if(m.length>12) r.push(`  … and ${(m.length-12).toLocaleString()} more`) }
  else if (n==='echo') r.push(args.join(' '))
  else if (n==='pwd') r.push(p)
  else if (n==='whoami') r.push(`${state.profile.toLowerCase()} · local administrator`)
  else if (n==='date') r.push(now().toString())
  else if (n==='ls'||n==='dir') { const e=state.files.filter(f=>f.path.startsWith(p+'/')&&f.path.slice(p.length+1).split('/').length===1); r.push(...e.map(f=>`${f.type==='folder'?'▸':'·'} ${f.path.split('/').pop()}`)); if(!e.length) r.push('(empty)') }
  else if (n==='cat'||n==='type') { const t=args[0]?(args[0].startsWith('/')?args[0]:`${p}/${args[0]}`):''; const f=state.files.find(i=>i.path===t); r.push(f?.content??(f?`[${f.type}]`:`cat: ${t||'(missing)'}: no such file`)) }
  else if (n==='touch'||n==='mkdir') { const folder=n==='mkdir'; const t=args[0]?(args[0].startsWith('/')?args[0]:`${p}/${args[0]}`):`${p}/${folder?'new-folder':'untitled.txt'}`; if(!state.files.some(f=>f.path===t)) state.files.push({path:t,type:folder?'folder':'file',content:folder?undefined:'',size:folder?undefined:'0 B',modified:today()}); saveState(); r.push(`created ${t}`) }
  else if (n==='write') { const t=args[0]?(args[0].startsWith('/')?args[0]:`${p}/${args[0]}`):`${p}/note.txt`; const c=args.slice(1).join(' ')||'Window 12 was here.'; const ex=state.files.find(f=>f.path===t); if(ex) Object.assign(ex,{content:c,size:`${c.length} B`,modified:today()}); else state.files.push({path:t,type:'file',content:c,size:`${c.length} B`,modified:today()}); saveState(); r.push(`wrote ${c.length} chars to ${t}`) }
  else if (n==='rm'||n==='del') { const t=args[0]?(args[0].startsWith('/')?args[0]:`${p}/${args[0]}`):''; const b=state.files.length; state.files=state.files.filter(f=>f.path!==t&&!f.path.startsWith(`${t}/`)); saveState(); r.push(b===state.files.length?`rm: ${t||'(missing)'}: no such file`:`removed ${t}`) }
  else if (n==='apps') r.push(...appCatalog.map(a=>`${a.icon} ${a.name} · ${a.kicker.toLowerCase()}`))
  else if (n==='open') { const t=args.join(' ').toLowerCase(); const a=appCatalog.find(i=>i.id===t||i.name.toLowerCase()===t||i.name.toLowerCase().includes(t)); if(a){winOpen(a.id);r.push(`opened ${a.name}`)}else r.push(`open: ${t||'(missing)'}: not found`) }
  else if (n==='install') r.push(`staged ${args[0]||'window12-demo.app'} · no license required`)
  else if (n==='neofetch'||n==='sysinfo') r.push('        ▄▄▄▄▄▄▄    WINDOW 12','       ▐  ◉  ▌   Prototype OS','       ▐▄▄▄▄▄▌   Aurora shell / browser','',` user     ${state.profile.toLowerCase()}`,' memory   6.8 GB / 16 GB',' display  2560 × 1440 · Aurora',` catalog  ${commandRegistry.length.toLocaleString()} commands`)
  else if (n==='calc') { const e=args.join(''); if(/^[0-9+\-*/().\s]+$/.test(e)&&e){try{r.push(`= ${Function(`return (${e})`)()}`)}catch{r.push('calc: could not evaluate')}}else r.push('calc: use numbers and + - * / ( )') }
  else if (n==='history') r.push(...state.history.slice(-12).map((i,j)=>`${j+1}  ${i}`))
  else if (n==='logout'||n==='reboot') { r.push(n==='logout'?'Signing out…':'Rebooting…'); setTimeout(logout,300) }
  else { const k=commandRegistry.find(i=>i.name===n); if(k) r.push(`✓ ${k.name} accepted · ${k.description}`,'  Prototype module returned a healthy signal.'); else r.push(`${cmd}: command not found · try help or apps`) }
  state.terminalLines=[...state.terminalLines,`user@window12:${p}$ ${input}`,...r,'']; state.terminalInput=''; render()
}

// ── Event delegation ────────────────────────────────
let dblClickTimer = null
document.addEventListener('click', e => {
  // Close context menu if clicking outside
  if (state.contextMenu && !e.target.closest('.ctx-menu')) { hideContext(); return }
  if (state.notifyOpen && !e.target.closest('.notif-panel') && !e.target.closest('[data-action="notify"]')) { state.notifyOpen=false; render(); return }
  // Close start menu if clicking outside
  if (state.startOpen && !e.target.closest('.start-menu') && !e.target.closest('[data-action="start"]')) { state.startOpen=false; render(); return }

  const t = e.target.closest('[data-app],[data-action],[data-focus],[data-min],[data-max],[data-close],[data-file],[data-command],[data-setting],[data-gallery],[data-dismiss],[data-move],[data-dblclick],[data-wp],[data-context]')
  if (!t) return

  // Double-click detection for desktop icons
  if (t.dataset.dblclick) {
    if (dblClickTimer) { clearTimeout(dblClickTimer); dblClickTimer=null; winOpen(t.dataset.dblclick); return }
    dblClickTimer = setTimeout(()=>{ dblClickTimer=null },350)
    return
  }
  if (t.dataset.app) return winOpen(t.dataset.app)
  if (t.dataset.focus) return winFocus(t.dataset.focus)
  if (t.dataset.min) return winMinimize(t.dataset.min)
  if (t.dataset.max) return winMaximize(t.dataset.max)
  if (t.dataset.close) return winClose(t.dataset.close)
  if (t.dataset.file) { state.selectedFile=t.dataset.file; return render() }
  if (t.dataset.command) return runCommand(t.dataset.command)
  if (t.dataset.setting) { state.settings[t.dataset.setting]=!state.settings[t.dataset.setting]; return render() }
  if (t.dataset.gallery) { state.gallerySelection=t.dataset.gallery; return render() }
  if (t.dataset.dismiss) return dismissNotif(Number(t.dataset.dismiss))
  if (t.dataset.wp) { state.wallpaper=t.dataset.wp; ss('window12_wp',state.wallpaper); return render() }
  if (t.dataset.action==='start') { state.startOpen=!state.startOpen; state.notifyOpen=false; return render() }
  if (t.dataset.action==='notify') { state.notifyOpen=!state.notifyOpen; state.startOpen=false; return render() }
  if (t.dataset.action==='clear-notifs') { clearNotifs(); return render() }
  if (t.dataset.action==='install') return startInstall()
  if (t.dataset.action==='login') return login()
  if (t.dataset.action==='logout') return logout()
  if (t.dataset.action==='apply-wallpaper') { state.wallpaper=t.dataset.wp; ss('window12_wp',state.wallpaper); pushNotif('Wallpaper applied',`Now using ${osReferences.find(r=>r.skin===state.wallpaper)?.label||'custom'} theme`); return render() }
})

// Right-click
document.addEventListener('contextmenu', e => {
  const t = e.target.closest('[data-context]')
  if (t && t.dataset.context === 'desktop-icon') {
    const id = t.dataset.id
    return showContext(e, [
      { label:'Open', action:()=>{ winOpen(id); hideContext() } },
      { label:'Open in terminal', action:()=>{ winOpen('terminal'); hideContext() } },
      { label:'Pin to taskbar', action:()=>{ pushNotif('Pinned',`${appById(id).name} pinned to taskbar`); hideContext() } },
      { sep:true },
      { label:'Properties', action:()=>{ winOpen('settings'); hideContext() } },
    ])
  }
  if (t && t.dataset.context === 'taskbar-clock') {
    return showContext(e, [
      { label:'Adjust date/time', action:()=>{ winOpen('settings'); hideContext() } },
      { label:'Copy time', action:()=>{ navigator.clipboard?.writeText(now().toLocaleString()); hideContext() } },
    ])
  }
  // Desktop right-click
  if (!e.target.closest('.app-window') && !e.target.closest('.taskbar')) {
    return showContext(e, desktopCtxItems)
  }
})

document.addEventListener('input', e => {
  const t = e.target
  if (t.dataset.input==='profile') state.profile=t.value
  if (t.dataset.input==='search') { state.search=t.value; render() }
  if (t.dataset.input==='terminal') state.terminalInput=t.value
})
document.addEventListener('keydown', e => {
  if (e.key==='Enter' && e.target.dataset.input==='profile') login()
  if (e.key==='Escape') { if(state.contextMenu){hideContext();return}; if(state.notifyOpen){state.notifyOpen=false;render();return}; if(state.startOpen){state.startOpen=false;render();return}; if(state.activeId){state.activeId=null;render();return} }
})

document.addEventListener('submit', e => { if (e.target.dataset.form==='terminal') { e.preventDefault(); runCommand(state.terminalInput) } })

// Window dragging
let dragWin = null, dragOX=0, dragOY=0
document.addEventListener('mousedown', e => {
  const h = e.target.closest('[data-move]'); if (!h) return
  const w = state.windows.find(w=>w.id===h.dataset.move); if (!w||w.maximized) return
  dragWin = w; dragOX = e.clientX - w.x; dragOY = e.clientY - w.y
  winFocus(w.id)
})
document.addEventListener('mousemove', e => { if (!dragWin) return; dragWin.x=e.clientX-dragOX; dragWin.y=e.clientY-dragOY; render() })
document.addEventListener('mouseup', () => { dragWin=null })

// Clock tick
setInterval(() => { if (state.screen==='desktop') { const tb = $('.tb-clock .tb-time'); if (tb) tb.textContent = now().toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'}) } }, 10000)

// ── Boot ────────────────────────────────────────────
render()
setTimeout(() => { if (state.screen==='boot') { state.screen = localStorage.getItem('window12_installed')==='true'?'login':'install'; render() } }, 900)
