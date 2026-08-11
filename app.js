const $ = (sel, ctx) => (ctx || document).querySelector(sel)
const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)]
const appRoot = $('#app')

/* ═══ Inline SVG icon set ═══ */
const I = {
  start: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00ADEF" d="M3.5 5.25A2.25 2.25 0 0 1 5.75 3h4.5v8H3.5V5.25Z"/><path fill="#FFB900" d="M11.75 3h4.5a2.25 2.25 0 0 1 2.25 2.25V11h-6.75V3Z"/><path fill="#F25022" d="M3.5 12.75h6.75V21H5.75A2.25 2.25 0 0 1 3.5 18.75v-6Z"/><path fill="#7FBA00" d="M11.75 12.75H20.5v6A2.25 2.25 0 0 1 18.25 21h-6.5v-8.25Z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16.3 16.3 21 21"/></svg>`,
  taskview: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.2"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1.2"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1.2"/><rect x="13" y="13" width="7.5" height="7.5" rx="1.2"/></svg>`,
  widgets: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="13" height="9.5" rx="1.5"/><rect x="8.5" y="15.5" width="12.5" height="5.5" rx="1.5"/><rect x="18" y="4" width="3.5" height="6" rx="1.5"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16s-2-1.5-2-6.5Z"/><path d="M10 19a2.2 2.2 0 0 0 4 0"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 19a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"/><path d="M7.6 16.2a6 6 0 0 1 8.8 0l1.6-1.8a8.8 8.8 0 0 0-12 0l1.6 1.8Z"/><path d="M4.2 12.9a11 11 0 0 1 15.6 0l1.6-1.8a13.7 13.7 0 0 0-18.8 0l1.6 1.8Z"/></svg>`,
  volume: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9.5v5h3.5L12 19V5L7.5 9.5H4Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  battery: `<svg viewBox="0 0 24 24"><rect x="2.5" y="8" width="17" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="4.5" y="10" width="11.5" height="4" rx="1" fill="currentColor"/><path d="M21 10.6v2.8a1.4 1.4 0 0 0 0-2.8Z" fill="currentColor"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>`,
  power: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 3v8.5"/><path d="M6.3 6.6a8 8 0 1 0 11.4 0"/></svg>`,
  explorer: `<svg viewBox="0 0 24 24"><path fill="#FFC53D" d="M2.5 6.5A1.5 1.5 0 0 1 4 5h4.9c.4 0 .77.16 1.05.43l1 1.07H20A1.5 1.5 0 0 1 21.5 8v9A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17V6.5Z"/><path fill="#FFB020" d="M2.5 9h19V17a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V9Z"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="3.5" fill="#2B2B2B"/><path d="M6 8l3.5 3L6 14" stroke="#fff" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14.2h5.5" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="#2E9BD6"/><circle cx="8.2" cy="9.5" r="2" fill="#fff"/><path d="M4.5 17.2l4.6-4.9 3.4 3.4 3-2.6 4 3.9v.9a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-.7Z" fill="#fff" opacity=".92"/></svg>`,
  browser: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#0F6CBD"/><ellipse cx="12" cy="12" rx="4.2" ry="9" fill="none" stroke="#fff" stroke-width="1.4" opacity=".9"/><path d="M3.5 12h17M12 3c-2.2 2.6-3.4 5.7-3.4 9s1.2 6.4 3.4 9c2.2-2.6 3.4-5.7 3.4-9S14.2 5.6 12 3Z" stroke="#fff" stroke-width="1.4" opacity=".9" fill="none"/></svg>`,
  store: `<svg viewBox="0 0 24 24"><path fill="#00A9E0" d="M5 7h14l1.4 11.4a2 2 0 0 1-2 2.3H5.6a2 2 0 0 1-2-2.3L5 7Z"/><path d="M8.5 9.5V7a3.5 3.5 0 0 1 7 0v2.5" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24"><path fill="#5BC0EB" d="M7 18a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.5 1.1A4 4 0 0 1 17.5 18H7Z"/><path d="M12 14.2v-4.4m0 0-2 2m2-2 2 2" stroke="#0B3D5C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  news: `<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="15.5" height="15" rx="1.5" fill="#fff" stroke="#B3B7BC" stroke-width="1"/><path d="M5.5 8h9.5M5.5 11h9.5M5.5 14h6" stroke="#D13438" stroke-width="1.5" stroke-linecap="round"/><rect x="17.5" y="6.5" width="4.5" height="13" rx="1.2" fill="#F5F5F5" stroke="#B3B7BC" stroke-width="1"/><path d="M19 10h1.5M19 12.5h1.5" stroke="#9AA0A6" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  game: `<svg viewBox="0 0 24 24"><path fill="#1B7A3D" d="M7 6h10a5 5 0 0 1 5 5.2c.1 3.4-1.6 7-4 8.6-1.4.9-3.3.5-4.4-.8l-1.6-2a1 1 0 0 0-1.5 0l-1.6 2c-1.1 1.3-3 1.7-4.4.8-2.4-1.6-4.1-5.2-4-8.6A5 5 0 0 1 7 6Z"/><circle cx="9" cy="11.5" r="1.2" fill="#fff"/><circle cx="15" cy="11.5" r="1.2" fill="#fff"/><path d="M12 9.2v4.6M9.8 11.5h4.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" fill="#0078D4"/><path d="M3 8.5h18" stroke="#fff" stroke-width="1.1" opacity=".3"/><rect x="5.2" y="10.2" width="2" height="4.2" fill="#fff"/><rect x="9.4" y="10.2" width="2" height="4.2" fill="#fff"/><rect x="13.6" y="10.2" width="2" height="4.2" fill="#fff"/><path d="M9.5 21h5M12 17v4" stroke="#003A6B" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="#5C5C5C"><path d="M10.4 2.4a2 2 0 0 1 3.2 0l1.1 1.5c.3-.1.6-.2.9-.2l1.9-.2a2 2 0 0 1 2.2 2.2l-.2 1.9c0 .3.1.6.2.9l1.5 1.1a2 2 0 0 1 0 3.2l-1.5 1.1c-.1.3-.2.6-.2.9l.2 1.9a2 2 0 0 1-2.2 2.2l-1.9-.2c-.3 0-.6.1-.9.2l-1.1 1.5a2 2 0 0 1-3.2 0l-1.1-1.5c-.3.1-.6.2-.9.2l-1.9.2a2 2 0 0 1-2.2-2.2l.2-1.9c0-.3-.1-.6-.2-.9l-1.5-1.1a2 2 0 0 1 0-3.2l1.5-1.1c.1-.3.2-.6.2-.9l-.2-1.9a2 2 0 0 1 2.2-2.2l1.9.2c.3 0 .6-.1.9-.2l1.1-1.5Z"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>`,
  notepad: `<svg viewBox="0 0 24 24"><path fill="#8AB4F8" d="M5 3h9.2L19 7.8V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path fill="#5E97F6" d="M14 3v5h5"/><path d="M7.5 11h9M7.5 14.5h9M7.5 18h5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  welcome: `<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="#0F6CBD"/><path d="M12 6l1.3 4.7L18 12l-4.7 1.3L12 18l-1.3-4.7L6 12l4.7-1.3L12 6Z" fill="#fff"/></svg>`,
  minimize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 12.4h14"/></svg>`,
  maximize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="5" y="5" width="14" height="14" rx="1.2"/></svg>`,
  restore: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="5" y="8" width="11" height="11" rx="1.2"/><path d="M9 5h9a1 1 0 0 1 1 1v9"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>`,
}

/* ═══ App catalog ═══ */
const appCatalog = [
  { id: 'welcome',  name: 'Get Started',   kicker: 'Welcome',  icon: I.welcome,  accent: '#0F6CBD' },
  { id: 'explorer', name: 'File Explorer', kicker: 'Files',    icon: I.explorer, accent: '#FFB900' },
  { id: 'terminal', name: 'Terminal',      kicker: 'Terminal', icon: I.terminal, accent: '#2B2B2B' },
  { id: 'gallery',  name: 'OS Gallery',    kicker: 'Gallery',  icon: I.gallery,  accent: '#2E9BD6' },
  { id: 'browser',  name: 'Orbit Browser', kicker: 'Web',      icon: I.browser,  accent: '#0F6CBD' },
  { id: 'store',    name: 'App Store',     kicker: 'Store',    icon: I.store,    accent: '#00A9E0' },
  { id: 'cloud',    name: 'SkyDrive',      kicker: 'Cloud',    icon: I.cloud,    accent: '#4A9ED6' },
  { id: 'news',     name: 'News',          kicker: 'News',     icon: I.news,     accent: '#C4472F' },
  { id: 'gamehub',  name: 'Game Hub',      kicker: 'Games',    icon: I.game,     accent: '#1B7A3D' },
  { id: 'monitor',  name: 'Task Manager',  kicker: 'System',   icon: I.monitor,  accent: '#0078D4' },
  { id: 'settings', name: 'Settings',      kicker: 'System',   icon: I.settings, accent: '#6B6F76' },
  { id: 'notepad',  name: 'Notepad',       kicker: 'Editor',   icon: I.notepad,  accent: '#4A90D9' },
]
const appById = (id) => appCatalog.find(a => a.id === id) || appCatalog[0]

/* ═══ Files ═══ */
const initialFiles = [
  { path: '/home/alex/Read Me.txt', type: 'file', content: 'Welcome to Window 12.\n\nThis is a prototype operating system built with plain HTML, CSS, and JavaScript.\nTry the Terminal app and type help.', size: '188 B', modified: 'just now' },
  { path: '/home/alex/Projects', type: 'folder', modified: 'today' },
  { path: '/home/alex/Projects/idea-board.txt', type: 'file', content: 'PROJECT: Idea board\nSTATUS: delightfully unfinished\nOWNER: alex', size: '74 B', modified: 'today' },
  { path: '/home/alex/Downloads', type: 'folder', modified: 'yesterday' },
  { path: '/home/alex/Downloads/Definitely_Not_A_Virus.exe', type: 'file', content: 'This file is a joke. Window 12 Defender says: probably fine.', size: '42 KB', modified: 'yesterday' },
  { path: '/home/alex/Pictures', type: 'folder', modified: 'Mon' },
  { path: '/home/alex/Desktop', type: 'folder', modified: 'Mon' },
  { path: '/home/alex/Documents', type: 'folder', modified: 'today' },
  { path: '/home/alex/Documents/notes.txt', type: 'file', content: 'Window 12 to-do:\n- Make desktop look real\n- Add bloatware\n- World domination', size: '89 B', modified: 'today' },
  { path: '/home/alex/Music', type: 'folder', modified: 'last week' },
  { path: '/home/alex/Videos', type: 'folder', modified: 'last week' },
  { path: '/system/boot.log', type: 'file', content: '[OK] boot sequence\n[OK] personality module\n[OK] file system mounted\n[WARN] too much bloatware', size: '3 KB', modified: 'boot' },
  { path: '/system/config/window12.ini', type: 'file', content: 'accent=blue\ntelemetry=false\nbloatware=enthusiastic', size: '56 B', modified: 'boot' },
]

/* ═══ Commands ═══ */
const coreCommands = [
  ['help','core','List commands or search the catalog.'],['clear','core','Clear the terminal.'],['echo','core','Print a message.'],
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

/* ═══ OS references ═══ */
const osReferences = [
  { id:'blue-widgets',  label:'Windows 11',            note:'Blue Bloom wallpaper with widget column',          skin:'blue-widgets',  tags:'widgets · glass · blue' },
  { id:'rainbow-desktop',label:'Vivid Concept',        note:'Colorful desktop with dock and start menu',        skin:'rainbow-desktop',tags:'color · dock · creative' },
  { id:'blue-start',    label:'Windows 11 Start',      note:'Centered launcher with pinned grid',               skin:'blue-start',    tags:'launcher · search · rounded' },
  { id:'linux-terminal',label:'Hyprland / Arch',       note:'Tiling terminals with neofetch and file manager',  skin:'linux-terminal',tags:'terminal · tiling · dark' },
  { id:'endeavour',     label:'EndeavourOS',           note:'Neon desktop with performance panel',              skin:'endeavour',     tags:'neon · status · utility' },
  { id:'purple-dev',    label:'Developer Shell',       note:'Code editor, btop, and visualizer',                skin:'purple-dev',    tags:'developer · graphs · purple' },
  { id:'gnome',         label:'GNOME',                 note:'Workspace overview with dash and tiled windows',   skin:'gnome',         tags:'overview · dock · linux' },
  { id:'macos',         label:'macOS',                 note:'Clean desktop with a colorful dock',               skin:'macos',         tags:'dock · soft · minimal' },
]

/* ═══ State ═══ */
const LS = (k,fb) => { try { return JSON.parse(localStorage.getItem(k)) || fb } catch { return fb } }
const ss = (k,v) => localStorage.setItem(k,JSON.stringify(v))

let zCounter = 10
const state = {
  screen: 'boot', stage: 0, installing: false,
  windows: [], activeId: null,
  startOpen: false, notifyOpen: false, widgetsOpen: false, powerOpen: false,
  contextMenu: null, snapPreview: null,
  search: '', profile: LS('window12_user','Alex'),
  selectedIcon: null, selectedFile: '/home/alex/Read Me.txt',
  files: LS('window12_files', initialFiles),
  terminalInput: '', terminalLines: [
    'Window 12 Terminal [build 12.0.0]',
    `Catalog loaded: ${commandRegistry.length.toLocaleString()} commands across ${domains.length} subsystems.`,
    'Type help to explore. Type neofetch for a little flex.', '',
  ],
  history: [],
  settings: { autoUpdate: true, telemetry: false, compact: false },
  gallerySelection: 'blue-widgets',
  wallpaper: LS('window12_wp', 'aurora'),
  notifications: LS('window12_notifs', [
    { id: 1, title: 'Welcome to Window 12', body: 'Your desktop is ready. Click around!', time: Date.now() - 60000, icon: '✨' },
    { id: 2, title: 'Bloatware installed', body: '12 essential apps you definitely asked for.', time: Date.now() - 120000, icon: '📦' },
  ]),
}

function saveState() { localStorage.setItem('window12_files', JSON.stringify(state.files)) }
function today() { return new Date().toLocaleDateString(undefined,{month:'short',day:'numeric'}) }
function now() { return new Date() }
function esc(v = '') { return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])) }
function userHome() { return `/home/${state.profile.toLowerCase()}` }
function timeAgo(ts) { const s = Math.floor((Date.now()-ts)/1000); if (s<60) return 'just now'; if (s<3600) return `${Math.floor(s/60)}m ago`; if (s<86400) return `${Math.floor(s/3600)}h ago`; return `${Math.floor(s/86400)}d ago` }

/* ═══ Window manager ═══ */
const TASKBAR_H = 48, MIN_W = 420, MIN_H = 260
function winById(id) { return state.windows.find(w => w.id === id) }
function winEl(id) { return document.getElementById('win-' + id) }

function winOpen(appId) {
  const existing = winById(appId)
  if (existing) { existing.minimized = false; return winFocus(appId) }
  const vw = innerWidth, vh = innerHeight
  const n = state.windows.length
  const w = Math.min(1180, Math.round(vw * 0.62))
  const h = Math.min(780, Math.round(vh * 0.74))
  const x = Math.max(8, Math.round((vw - w) / 2) + (n % 6) * 28 - 60)
  const y = Math.max(8, Math.round((vh - h) / 2) + (n % 5) * 22 - 40)
  state.windows.push({ id: appId, x, y, w, h, z: ++zCounter, minimized: false, maximized: false, prev: null })
  state.activeId = appId
  state.startOpen = false
  render()
}
function winClose(appId) {
  state.windows = state.windows.filter(w => w.id !== appId)
  if (state.activeId === appId) state.activeId = state.windows.length ? state.windows[state.windows.length-1].id : null
  render()
}
function winFocus(appId) {
  const w = winById(appId); if (!w) return
  state.activeId = appId; w.z = ++zCounter; w.minimized = false; render()
}
function winToggle(appId) {
  const w = winById(appId); if (!w) return
  if (w.minimized) return winFocus(appId)
  w.minimized = true
  if (state.activeId === appId) { const vis = state.windows.filter(x => !x.minimized); state.activeId = vis.length ? vis[vis.length-1].id : null }
  render()
}
function winMaximize(appId) {
  const w = winById(appId); if (!w) return
  if (!w.maximized) { w.prev = { x: w.x, y: w.y, w: w.w, h: w.h }; w.maximized = true }
  else { Object.assign(w, w.prev || { x: 80, y: 40, w: 900, h: 600 }); w.maximized = false; w.prev = null }
  render()
}
function showDesktop() {
  const anyVisible = state.windows.some(w => !w.minimized)
  state.windows.forEach(w => { w.minimized = anyVisible })
  state.activeId = anyVisible ? null : (state.windows[state.windows.length-1]?.id ?? null)
  render()
}

/* ═══ Notifications ═══ */
function pushNotif(title, body, icon = '✨') {
  state.notifications.unshift({ id: Date.now(), title, body, time: Date.now(), icon })
  if (state.notifications.length > 20) state.notifications.length = 20
  ss('window12_notifs', state.notifications)
  if (!state.notifyOpen) render()
}
function clearNotifs() { state.notifications = []; ss('window12_notifs', []); render() }
function dismissNotif(id) { state.notifications = state.notifications.filter(n => n.id !== id); ss('window12_notifs', state.notifications); render() }

/* ═══ Context menu ═══ */
function showContext(e, items) {
  e.preventDefault()
  state.contextMenu = { x: Math.min(e.clientX, innerWidth - 240), y: Math.min(e.clientY, innerHeight - 220), items }
  state.startOpen = false; state.powerOpen = false
  render()
}
function hideContext() { state.contextMenu = null; render() }
function ctxItem(label, action) { return { label, action } }
function ctxSep() { return { sep: true } }

/* ═══ Render dispatcher ═══ */
function render() {
  if (state.screen === 'boot') return R.boot()
  if (state.screen === 'install') return R.install()
  if (state.screen === 'login') return R.login()
  if (state.screen === 'off') return R.off()
  return R.desktop()
}

/* ═══ Boot / Install / Login / Off ═══ */
const installSteps = [
  ['Preparing your virtual drive', 'Checking imaginary hardware and finding 12.4 GB of vibes.'],
  ['Copying system files', 'Installing helpful nudges and one weather widget.'],
  ['Waking up the bloatware', 'Negotiating with 12 preinstalled apps. They all said yes.'],
  ['Finishing up', 'Polishing every corner of your new desktop.'],
]

const R = {
  boot() {
    appRoot.innerHTML = `<main class="boot-screen"><div class="boot-spinner"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="boot-text"><strong>Window 12</strong><span>Starting up…</span></div></main>`
  },
  install() {
    const c = installSteps[state.stage] || installSteps[0]
    const pct = state.installing ? Math.round(((state.stage + 1) / installSteps.length) * 100) : 0
    appRoot.innerHTML = `<main class="install-screen"><div class="install-card"><div class="install-brand">${I.start}<strong>Window 12</strong></div><h1>${state.installing ? c[0] : 'Let\'s set up your device'}</h1><p class="install-sub">${state.installing ? c[1] : 'A desktop operating system prototype with a real window manager, terminal, and more bloatware than anyone requested.'}</p>${state.installing
      ? `<div class="install-progress"><div class="ip-track"><div class="ip-fill" style="width:${pct}%"></div></div><div class="ip-meta"><span>Installing Window 12</span><b>${pct}%</b></div></div>`
      : `<div class="install-facts"><span><b>${commandRegistry.length.toLocaleString()}</b> commands</span><span><b>${appCatalog.length}</b> apps</span><span><b>Real</b> window manager</span></div>`}<button class="win-btn primary install-btn" data-action="${state.installing ? 'noop' : 'install'}" ${state.installing ? 'disabled' : ''}>${state.installing ? 'Installing…' : 'Install'}</button><small class="install-legal">Pure HTML, CSS, and JavaScript.</small></div></main>`
  },
  login() {
    const t = now()
    const hh = t.getHours().toString().padStart(2, '0'), mm = t.getMinutes().toString().padStart(2, '0')
    appRoot.innerHTML = `<main class="lockscreen"><div class="lock-wallpaper ${state.wallpaper}"></div><div class="lock-shade"></div><div class="lock-time">${hh}:${mm}</div><div class="lock-date">${t.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div><div class="lock-login"><div class="lock-avatar">${esc(state.profile.slice(0,1).toUpperCase() || 'A')}</div><strong>${esc(state.profile)}</strong><input class="lock-input" data-input="profile" value="${esc(state.profile)}" maxlength="24" placeholder="Your name" autofocus><button class="lock-btn" data-action="login">${I.start}<span>Sign in</span></button><small style="opacity:.75">Prototype login — no password required</small></div></main>`
  },
  off() {
    appRoot.innerHTML = `<main class="off-screen"><button class="off-power" data-action="boot" title="Power on">${I.power}</button><span>Your PC is off</span></main>`
  },
  desktop() {
    const ctx = state.contextMenu
    appRoot.innerHTML = `<main class="os-shell"><div class="wallpaper ${state.wallpaper}"></div>${R.desktopIcons()}${state.widgetsOpen ? R.widgetsPanel() : ''}${state.notifyOpen ? R.notifPanel() : ''}${state.startOpen ? R.startMenu() : ''}${state.windows.filter(w => !w.minimized).map(w => R.window(w)).join('')}<div class="snap-preview" id="snap-preview"></div>${R.taskbar()}${ctx ? R.contextMenu(ctx) : ''}</main>`
  },

  /* ── Desktop icons ── */
  desktopIcons() {
    const step = Math.max(78, Math.min(94, Math.floor((innerHeight - 70) / appCatalog.length)))
    return `<section class="desktop-icons">${appCatalog.map((app, i) => {
      const x = 14, y = 14 + i * step
      return `<button class="desktop-icon ${state.selectedIcon === app.id ? 'sel' : ''}" style="left:${x}px;top:${y}px" data-icon="${app.id}"><span class="d-icon">${app.icon}</span><span class="d-label">${app.name}</span></button>`
    }).join('')}</section>`
  },

  /* ── Taskbar ── */
  taskbar() {
    const t = now()
    const running = state.windows.map(w => w.id)
    const pinned = ['explorer', 'browser', 'store', 'terminal']
    return `<footer class="taskbar"><div class="task-left"><button class="tb-btn tb-start ${state.startOpen ? 'active' : ''}" data-action="start" title="Start">${I.start}</button><button class="tb-btn tb-search" data-action="start" title="Search"><span class="tb-search-icon">${I.search}</span><span class="tb-search-text">Search</span></button><button class="tb-btn" data-action="taskview" title="Task view">${I.taskview}</button><button class="tb-btn" data-action="widgets" title="Widgets">${I.widgets}</button></div><div class="task-center">${[...pinned, ...running.filter(id => !pinned.includes(id))].map(id => {
      const app = appById(id)
      const w = winById(id)
      const active = state.activeId === id && !(w && w.minimized)
      return `<button class="tb-app ${active ? 'active' : ''} ${w && w.minimized ? 'minimized' : ''}" data-task="${id}" title="${app.name}">${app.icon}<i class="tb-ind ${active ? 'on' : ''}"></i></button>`
    }).join('')}</div><div class="task-right"><button class="tb-btn tb-tray" data-action="tray" title="Hidden icons">${I.chevron}</button><button class="tb-btn tb-tray-icon" title="Network">${I.wifi}</button><button class="tb-btn tb-tray-icon" title="Volume">${I.volume}</button><button class="tb-btn tb-tray-icon" title="Battery">${I.battery}</button><button class="tb-btn" data-action="notify" title="Notifications">${I.bell}${state.notifications.length ? `<i class="tb-dot"></i>` : ''}</button><div class="tb-clock" data-context="taskbar-clock"><span class="tb-time" id="tb-time">${t.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'})}</span><span class="tb-date">${today()}</span></div><button class="tb-show-desktop" data-action="show-desktop" title="Show desktop"></button></div></footer>`
  },

  /* ── Start menu ── */
  startMenu() {
    return `<div class="start-menu" data-stop="start"><div class="sm-search"><span class="sm-search-ic">${I.search}</span><input data-input="search" value="${esc(state.search)}" placeholder="Type here to search" spellcheck="false"></div><div class="sm-body">${R.startContent()}</div><div class="sm-foot"><div class="sm-user" data-context="user"><span class="avatar">${esc(state.profile.slice(0,1).toUpperCase())}</span><strong>${esc(state.profile)}</strong></div><div class="sm-power-wrap"><button class="sm-power" data-action="power-menu" title="Power">${I.power}</button>${state.powerOpen ? R.powerMenu() : ''}</div></div></div>`
  },
  startContent() {
    const q = state.search.trim().toLowerCase()
    if (!q) {
      return `<div class="sm-pinned"><h4>Pinned</h4><div class="sm-grid">${appCatalog.map(app => `<button class="sm-app" data-app="${app.id}"><span class="sm-app-icon">${app.icon}</span><small>${app.name}</small></button>`).join('')}</div></div><div class="sm-rec"><div class="sm-rec-head"><h4>Recommended</h4><button data-app="explorer" class="sm-more">More ▸</button></div><div class="sm-rec-list"><button class="sm-rec-item" data-file="/home/${esc(state.profile.toLowerCase())}/Read Me.txt"><span class="sm-file-icon">${I.notepad}</span><div><strong>Read Me.txt</strong><small>2 min ago</small></div></button><button class="sm-rec-item" data-app="terminal"><span class="sm-file-icon">${I.terminal}</span><div><strong>Terminal</strong><small>Recently added</small></div></button><button class="sm-rec-item" data-file="/home/${esc(state.profile.toLowerCase())}/Documents/notes.txt"><span class="sm-file-icon">${I.notepad}</span><div><strong>notes.txt</strong><small>Today</small></div></button></div></div>`
    }
    const apps = appCatalog.filter(a => a.name.toLowerCase().includes(q))
    const cmds = commandRegistry.filter(c => c.name.includes(q)).slice(0, 6)
    const files = state.files.filter(f => f.type === 'file' && f.path.split('/').pop().toLowerCase().includes(q)).slice(0, 4)
    return `<div class="sm-results"><h4>Best match</h4>${apps.map(a => `<button class="sm-result" data-app="${a.id}"><span class="sm-result-icon">${a.icon}</span><div><strong>${a.name}</strong><small>App</small></div></button>`).join('') || ''}${files.map(f => `<button class="sm-result" data-file="${esc(f.path)}"><span class="sm-result-icon">${I.notepad}</span><div><strong>${esc(f.path.split('/').pop())}</strong><small>File</small></div></button>`).join('') || ''}<h4 style="margin-top:14px">Commands</h4>${cmds.map(c => `<button class="sm-result" data-command="${esc(c.name)}"><span class="sm-result-icon mono">⌁</span><div><strong>${c.name}</strong><small>${c.description}</small></div></button>`).join('') || ''}<p class="sm-empty">No results for “${esc(state.search)}”</p></div>`
  },
  powerMenu() {
    return `<div class="power-menu" data-stop="power"><button data-action="sleep"><span>◐</span>Sleep</button><button data-action="restart"><span>↻</span>Restart</button><button data-action="shutdown"><span>⏻</span>Shut down</button></div>`
  },
  refreshStart() {
    const el = $('.sm-body'); if (el) el.innerHTML = R.startContent()
  },

  /* ── Widgets panel ── */
  widgetsPanel() {
    const t = now()
    const dow = t.toLocaleDateString(undefined, { weekday: 'long' })
    const day = t.getDate()
    const mon = t.toLocaleDateString(undefined, { month: 'long' })
    return `<aside class="widgets-panel" data-stop="widgets"><div class="wp-head"><h4>Widgets</h4><button class="wp-close" data-action="widgets">✕</button></div><div class="wp-scroll"><div class="wp-card wp-weather"><div class="wp-w-top"><span class="wp-w-icon">☀</span><b>22°</b></div><span>Sunny · Aurora, CA</span><div class="wp-w-week"><span>Mon 22°<i>☀</i></span><span>Tue 19°<i>⛅</i></span><span>Wed 17°<i>🌧</i></span><span>Thu 20°<i>☀</i></span></div></div><div class="wp-card wp-cal"><div class="wp-cal-head"><b>${dow}</b><span>${mon} ${day}</span></div><div class="wp-cal-grid"><i>${new Date(t.getFullYear(), t.getMonth(), 1).toLocaleDateString(undefined,{month:'short'})}</i><b class="wp-today">${day}</b><i>${new Date(t.getFullYear(), t.getMonth(), day + 1).getDate()}</i></div></div><div class="wp-card wp-quick"><h5>Quick links</h5><div class="wp-q-grid">${[['explorer','Files'],['terminal','Terminal'],['browser','Web'],['settings','Settings'],['store','Store'],['monitor','Tasks']].map(([id,label]) => `<button data-app="${id}">${appById(id).icon}<small>${label}</small></button>`).join('')}</div></div><div class="wp-card wp-news"><h5>Top stories</h5><p><b>Local desktop achieves perfect balance between calm and chaos</b><span>4 min</span></p><p><b>Why everyone is typing neofetch today</b><span>2 min</span></p><p><b>Clear skies, scattered widgets</b><span>1 min</span></p></div></div></aside>`
  },

  /* ── Notification center ── */
  notifPanel() {
    const t = now()
    return `<aside class="notif-panel" data-stop="notify"><div class="np-head"><h4>Notifications</h4><button class="np-clear" data-action="clear-notifs">Clear all</button></div><div class="np-cal"><b>${t.toLocaleDateString(undefined,{weekday:'long'})}</b><span>${t.toLocaleDateString(undefined,{month:'long',day:'numeric'})}</span></div><div class="np-list">${state.notifications.length === 0 ? '<p class="np-empty">No notifications</p>' : state.notifications.map(n => `<div class="np-item"><span class="np-icon">${n.icon}</span><div><strong>${esc(n.title)}</strong><p>${esc(n.body)}</p><small>${timeAgo(n.time)}</small></div><button data-dismiss="${n.id}">✕</button></div>`).join('')}</div></div></aside>`
  },

  /* ── Window ── */
  window(w) {
    const app = appById(w.id)
    const cls = ['app-window']
    if (w.id === state.activeId) cls.push('focused')
    if (w.maximized) cls.push('maximized')
    const style = w.maximized ? `z-index:${w.z}` : `left:${w.x}px;top:${w.y}px;width:${w.w}px;height:${w.h}px;z-index:${w.z}`
    return `<div class="${cls.join(' ')}" id="win-${w.id}" data-wid="${w.id}" style="${style}"><header class="win-titlebar" data-move="${w.id}"><div class="win-title"><span class="win-app-icon">${app.icon}</span><strong>${app.name}</strong></div><div class="win-ctrls"><button class="wc" data-min="${w.id}" title="Minimize">${I.minimize}</button><button class="wc" data-max="${w.id}" title="${w.maximized ? 'Restore' : 'Maximize'}">${w.maximized ? I.restore : I.maximize}</button><button class="wc wc-close" data-close="${w.id}" title="Close">${I.close}</button></div></header><div class="win-body">${R.appContent(w.id)}</div>${w.maximized ? '' : `<i class="rsz n" data-resize="n"></i><i class="rsz s" data-resize="s"></i><i class="rsz e" data-resize="e"></i><i class="rsz w" data-resize="w"></i><i class="rsz nw" data-resize="nw"></i><i class="rsz ne" data-resize="ne"></i><i class="rsz sw" data-resize="sw"></i><i class="rsz se" data-resize="se"></i>`}</div>`
  },

  /* ── App content ── */
  appContent(id) {
    const vf = state.files
    if (id === 'welcome') return R.welcome()
    if (id === 'explorer') return R.explorer(vf)
    if (id === 'terminal') return R.terminal()
    if (id === 'gallery') return R.gallery()
    if (id === 'store') return R.store()
    if (id === 'settings') return R.settings()
    if (id === 'monitor') return R.monitor()
    if (id === 'browser') return R.browser()
    if (id === 'news') return R.news()
    if (id === 'cloud') return R.cloud()
    if (id === 'gamehub') return R.gameHub()
    if (id === 'notepad') return R.notepad()
    return R.generic(id)
  },

  welcome() {
    return `<div class="app-pad welcome-app"><div class="welcome-hero"><span class="live-pill">WELCOME</span><h2>Small OS.<br><em>Big personality.</em></h2><p>Window 12 is a desktop playground: real window management, desktop icons, a terminal, and more bloatware than anyone asked for.</p><button class="win-btn primary" data-app="terminal">Open Terminal</button></div><div class="welcome-stats"><div><b>${commandRegistry.length.toLocaleString()}</b><span>indexed commands</span></div><div><b>${appCatalog.length}</b><span>apps included</span></div><div><b>∞</b><span>imaginary storage</span></div></div></div>`
  },
  explorer(vf) {
    const sel = state.files.find(f => f.path === state.selectedFile)
    return `<div class="explorer-app"><aside class="explorer-side"><p class="eyebrow">PLACES</p>${[['Home','⌂'],['Desktop','⊞'],['Documents','▤'],['Downloads','⇩'],['Pictures','▧'],['Music','♫'],['Videos','▶']].map(([p,ic], i) => `<button class="${i === 0 ? 'cur' : ''}" data-explore="${esc(p.toLowerCase())}"><span>${ic}</span>${p}</button>`).join('')}<div class="storage-meter"><div><span>WINDOW DRIVE</span><b>61%</b></div><i><em></em></i><small>61.2 GB of 100 GB used</small></div></aside><section class="explorer-main"><div class="file-tbar"><div class="file-btns"><button>←</button><button>→</button><button>↻</button><button>⌂</button></div><div class="crumbs"><span>⌂</span><b>/</b><span>home</span><b>/</b><strong>${esc(state.profile.toLowerCase())}</strong></div></div><div class="file-cols"><div class="file-list"><div class="file-head"><span>Name</span><span>Date modified</span><span>Size</span></div>${vf.filter(f => f.path.startsWith(userHome() + '/') && f.path.slice(userHome().length + 1).split('/').length === 1).map(f => `<button class="file-row ${state.selectedFile === f.path ? 'sel' : ''}" data-file="${esc(f.path)}"><span><i class="f-${f.type}">${f.type === 'folder' ? I.explorer : I.notepad}</i>${esc(f.path.split('/').pop())}</span><small>${f.modified}</small><small>${f.size || '—'}</small></button>`).join('')}</div><div class="file-preview"><span class="eyebrow">PREVIEW</span><div class="pv-icon ${sel?.type || 'file'}">${sel?.type === 'folder' ? I.explorer : I.notepad}</div><h3>${esc(sel?.path.split('/').pop() || 'Nothing selected')}</h3><p>${esc(sel?.content || (sel ? 'A virtual folder ready for more virtual files.' : 'Select a file to read its contents.'))}</p><small>${sel?.size || 'Folder'} · ${sel?.modified || '—'}</small></div></div></section></div>`
  },
  terminal() {
    return `<div class="terminal-app"><div class="term-top"><span class="term-dots"><i></i><i></i><i></i></span><small>Window 12 Terminal · ${commandRegistry.length.toLocaleString()} commands</small></div><div class="term-out" id="term-out">${state.terminalLines.map(l => `<div class="${l.startsWith('✓') ? 'ts' : l.startsWith('user@') ? 'tp' : ''}">${esc(l) || '&nbsp;'}</div>`).join('')}<form class="term-inp" data-form="terminal"><span>user@window12:~$</span><input data-input="terminal" autofocus value="${esc(state.terminalInput)}" placeholder="try help, ls, or neofetch" spellcheck="false"></form></div><div class="term-hints"><span>QUICK</span><button data-command="neofetch">neofetch</button><button data-command="ls">ls</button><button data-command="touch idea.txt">touch idea.txt</button><button data-command="help">help</button></div></div>`
  },
  gallery() {
    const sel = osReferences.find(r => r.id === state.gallerySelection) || osReferences[0]
    return `<div class="app-pad"><div class="gallery-hero" style="margin-bottom:18px"><div><span class="eyebrow">PROTOTYPE REFERENCE WALL / ${osReferences.length.toString().padStart(2, '0')}</span><h2>Different OSes.<br><em>One curious desktop.</em></h2><p>A visual wall inspired by the supplied prototype OS screenshots. Apply any skin as your live wallpaper.</p></div><div class="gallery-orbit">◈</div></div><div class="gallery-layout"><div class="ref-grid">${osReferences.map(r => `<button class="ref-card ${r.id === state.gallerySelection ? 'sel' : ''}" data-gallery="${r.id}"><div class="os-preview ${r.skin}">${R.previewMarkup(r.skin)}</div><div class="ref-meta"><strong>${r.label}</strong><small>${r.note}</small></div></button>`).join('')}</div><aside class="gallery-detail"><span class="eyebrow">SELECTED</span><div class="os-preview detail-preview ${sel.skin}">${R.previewMarkup(sel.skin)}</div><h3>${sel.label}</h3><p>${sel.note}.</p><div class="detail-tags">${sel.tags.split(' · ').map(t => `<span>${t}</span>`).join('')}</div><button class="win-btn primary" data-action="apply-wallpaper" data-wp="${sel.skin}">Apply as wallpaper</button></aside></div></div>`
  },
  previewMarkup(skin) {
    const d = '<i></i><i></i><i></i><i></i><i></i>'
    if (skin === 'blue-widgets') return `<div class="pv-wall"></div><div class="pv-wpanel"><b>Widgets</b><span class="pv-photo"></span><span class="pv-lines"></span><span class="pv-cal"></span></div><div class="pv-tb"></div>`
    if (skin === 'rainbow-desktop') return `<div class="pv-wall rainbow"></div><div class="pv-rainbow-win"><b>Creative</b>${d}</div><div class="pv-dock">${d}</div>`
    if (skin === 'blue-start') return `<div class="pv-wall"></div><div class="pv-spanel"><span></span><b>⌕ Type here to search</b>${d}</div><div class="pv-tb"></div>`
    if (skin === 'linux-terminal') return `<div class="pv-wall city"></div><div class="pv-term">$ neofetch<br>Window / Arch<br>──────────<br>cpu 12 cores<br>mem 6.8G/16G</div><div class="pv-files">/ Documents<br>▸ Projects<br>▸ config.json</div><div class="pv-chart">▂▅▂▇▃▆</div>`
    if (skin === 'endeavour') return `<div class="pv-wall neon"></div><div class="pv-capture">◉ Capture<br>◉ Audio</div><div class="pv-spanel dark"><b>⌕ Type to search</b>${d}</div><div class="pv-perf">CPU 3%<br>RAM 68%</div><div class="pv-tb dark"></div>`
    if (skin === 'purple-dev') return `<div class="pv-wall purple"></div><div class="pv-code">$ ./build.sh<br><span>import{window12}</span><br>const g=true<br>✓ compiled</div><div class="pv-code right">cpu 24%<br>mem 42%<br>disk 61%</div><div class="pv-chart pc">▂▇▃▆▅</div>`
    if (skin === 'gnome') return `<div class="pv-wall gnome"></div><div class="pv-search">⌕ Type to search</div><div class="pv-ws">▣ ▣ ▣</div><div class="pv-editor">code/projects<br><span>function hi()</span><br>return w12</div><div class="pv-dock">${d}</div>`
    return `<div class="pv-wall mac"></div><div class="pv-mac-win"><b>Window 12</b><span></span><span></span><span></span></div><div class="pv-dock mac">${d}</div>`
  },
  store() {
    return `<div class="app-pad"><div class="store-banner"><div><span class="eyebrow">FEATURED / 12.04</span><h2>Apps you didn't ask for.<br><em>Now in one place.</em></h2><p>Every Window 12 install comes with a generous helping of "essentials."</p></div><div class="store-shape">${I.store}<small>+${appCatalog.length}</small></div></div><div class="store-grid">${appCatalog.filter(a => !['welcome','explorer','terminal','gallery','settings','monitor'].includes(a.id)).slice(0, 6).map(a => `<article class="store-item"><div class="si-top"><span class="app-icon">${a.icon}</span><span class="si-get">↓</span></div><strong>${a.name}</strong><p>${a.kicker.toLowerCase()} app</p><footer><small>12 MB</small><button data-app="${a.id}">Open</button></footer></article>`).join('')}</div></div>`
  },
  settings() {
    return `<div class="settings-app"><aside class="set-nav"><span class="eyebrow">SETTINGS</span>${[['System','⌁'],['Personalization','✦'],['Privacy','◌'],['Updates','↻'],['About','ⓘ']].map(([i,ic], n) => `<button class="${n === 0 ? 'sel' : ''}"><span>${ic}</span>${i}</button>`).join('')}</aside><section class="set-content"><h2>System</h2><p class="set-lead">Window 12 is already opinionated. These switches help it mind its own business.</p><div class="set-list">${[['Helpful nudges','Show the occasional suggestion for an app you already have.','autoUpdate'],['Telemetry (not really)','Share anonymous imaginary usage with absolutely nobody.','telemetry'],['Compact mode','Tighten the desktop when your screen feels crowded.','compact']].map(([t, dd, k]) => `<div class="set-row"><div><strong>${t}</strong><p>${dd}</p></div><button class="toggle ${state.settings[k] ? 'on' : ''}" data-setting="${k}"><i></i></button></div>`).join('')}</div><div class="set-about"><span>WINDOW 12</span><b>12.0.0</b><small>Pure HTML, CSS, JavaScript.</small></div></section></div>`
  },
  monitor() {
    return `<div class="app-pad"><div class="mon-sum"><div><span class="eyebrow">SYSTEM HEALTH</span><h2>Steady as a desktop.</h2><p>Nothing suspicious. Except the amount of preinstalled software.</p></div><div class="health-ring"><strong>92</strong><small>HEALTH</small></div></div><div class="mon-grid">${[['CPU','28%','4 cores nominal'],['Memory','6.8 GB','of 16 GB'],['Storage','61%','61.2/100 GB'],['Network','↑12 ↓8 KB/s','wlp4s0'],['Uptime','2h 14m','since boot'],['Battery','84%','Discharging']].map(([l, v, dd]) => `<div class="mon-m"><div><span>${l}</span><b>${v}</b></div><i><em style="width:${v}"></em></i><small>${dd}</small></div>`).join('')}</div><div class="proc-panel"><div class="eyebrow" style="margin-bottom:11px">TOP PROCESSES · LIVE</div>${[['window-shell','Core desktop','12.4%'],['bloatware-orch','Keeping things helpful','8.8%'],['orbit-browser','39 tabs open','4.2%'],['cloud-sync-ish','Waiting patiently','1.7%']].map(r => `<div class="proc-row"><span class="proc-dot"></span><div><strong>${r[0]}</strong><small>${r[1]}</small></div><b>${r[2]}</b></div>`).join('')}</div></div>`
  },
  browser() {
    return `<div class="browser-app"><div class="br-tabs"><span class="br-tab act">New tab <b data-close-tab>×</b></span><button>＋</button></div><div class="br-toolbar"><button>‹</button><button>›</button><button>↻</button><div class="br-addr"><span>${I.search}</span>window://fresh-start<span class="secure">◈</span></div><button>⋮</button></div><div class="br-home"><span class="br-logo">${I.browser}</span><h2>Orbit the web.</h2><p>A calm start page for an aggressively tabbed life.</p><div class="br-search">⌕ <span>Search the imaginary internet</span><b>↵</b></div><div class="br-links"><span data-app="news">◈ Weather</span><span data-app="store">▤ Store</span><span data-app="gallery">✦ Gallery</span><span>＋ Add</span></div></div></div>`
  },
  news() {
    return `<div class="app-pad"><div class="news-head"><div><span class="eyebrow">YOUR BRIEFING</span><h2>News & Vibes</h2></div><span class="weather-pill">☼ 22° Aurora</span></div><div class="news-grid"><article class="news-feat"><span class="news-tag">WINDOW 12</span><h3>Local desktop achieves perfect balance between calm and chaos</h3><p>Experts say the secret is a tasteful amount of polish and exactly ${appCatalog.length} unnecessary apps.</p><small>4 min · Just now</small></article><article><span class="news-tag orange">TECH</span><h3>The tiny command that could</h3><p>Why everyone is typing <code>neofetch</code> today.</p><small>2 min</small></article><article><span class="news-tag cyan">WEATHER</span><h3>Clear skies, scattered widgets</h3><p>Expect pleasant light throughout the afternoon.</p><small>1 min</small></article></div></div>`
  },
  cloud() {
    return `<div class="app-pad"><div class="cloud-hero"><span class="cl-sym">${I.cloud}</span><div><span class="eyebrow">SKYDRIVE</span><h2>All your files.<br><em>Mostly in the sky.</em></h2><p>Your imaginary sync is looking healthy.</p></div><div class="sync-score"><strong>98%</strong><small>SYNCED</small></div></div><div class="cl-folders">${[['Documents','12 items'],['Pictures','48 items'],['Projects','7 items'],['Downloads','23 items']].map(r => `<div><span>${I.explorer}</span><strong>${r[0]}</strong><small>${r[1]}</small></div>`).join('')}</div><div class="cl-footer"><span class="status-dot"></span> Last synced just now</div></div>`
  },
  gameHub() {
    return `<div class="app-pad"><div class="game-hero"><div><span class="eyebrow">GAME HUB</span><h2>Play something<br><em>almost instantly.</em></h2><p>Updates may apply. Snacks recommended.</p><button class="win-btn primary">Launch queue</button></div><div class="game-cube">${I.game}</div></div><div class="game-list">${[['Neon Solitaire','◈','Casual · 12 MB','PLAY'],['Cloud Racer 12','✦','Arcade · 1.2 GB','UPDATE'],['Desktop Defender','◉','Strategy · 480 MB','PLAY']].map(r => `<div><span class="gc">${r[1]}</span><section><strong>${r[0]}</strong><small>${r[2]}</small></section><button>${r[3]}</button></div>`).join('')}</div></div>`
  },
  notepad() {
    return `<div class="notepad-app"><textarea class="np-area" placeholder="Start typing...">Window 12 Notepad\nA simple text editor.\n\nThings to do:\n- Explore the desktop icons\n- Open the Terminal\n- Check out OS Gallery\n</textarea></div>`
  },
  generic(id) {
    const a = appById(id)
    return `<div class="app-pad" style="text-align:center;padding-top:70px"><span style="width:64px;height:64px;display:inline-block">${a.icon}</span><h2>${a.name}</h2><p style="color:#707070">This app is ready for you to build out.</p></div>`
  },
  contextMenu(ctx) {
    return `<div class="ctx-menu" style="left:${ctx.x}px;top:${ctx.y}px" data-stop="ctx">${ctx.items.map(it => {
      if (it.sep) return '<div class="ctx-sep"></div>'
      if (it.sub) return `<div class="ctx-item has-sub"><span>${it.label}</span><span class="ctx-arrow">▸</span><div class="ctx-sub">${it.sub.map(s => `<div class="ctx-item" data-ctx-action="${esc(s.label)}">${s.label}</div>`).join('')}</div></div>`
      return `<div class="ctx-item" data-ctx-action="${it.label}">${it.label}</div>`
    }).join('')}</div>`
  },
}

/* ═══ Desktop context menus ═══ */
const desktopCtxItems = () => [
  { label: 'View', sub: [
    { label: 'Large icons', action: () => { pushNotif('View', 'Large icons selected'); hideContext() } },
    { label: 'Medium icons', action: () => { pushNotif('View', 'Medium icons selected'); hideContext() } },
    { label: 'Auto arrange', action: () => { hideContext() } },
  ]},
  { label: 'New', sub: [
    { label: 'Folder', action: () => { pushNotif('New folder', 'Created on desktop'); hideContext() } },
    { label: 'Text Document', action: () => { pushNotif('New document', 'Untitled.txt created'); hideContext() } },
  ]},
  ctxSep(),
  { label: 'Refresh', action: () => { render(); hideContext() } },
  ctxSep(),
  { label: 'Display settings', action: () => { winOpen('settings'); hideContext() } },
  { label: 'Personalize', action: () => { winOpen('gallery'); hideContext() } },
  ctxSep(),
  { label: 'Open Terminal here', action: () => { winOpen('terminal'); hideContext() } },
]

/* ═══ Terminal ═══ */
function runCommand(raw) {
  const input = raw.trim(); if (!input) return
  const [cmd, ...args] = input.split(/\s+/); const n = cmd.toLowerCase(); const r = []
  state.history = [...state.history.slice(-24), input]
  const p = userHome()
  if (n === 'clear') { state.terminalLines = []; state.terminalInput = ''; render(); refocusTerm(); return }
  if (n === 'help') {
    const t = args.join(' ').toLowerCase(); const m = t ? commandRegistry.filter(i => i.name.includes(t) || i.category.includes(t)) : coreCommands
    r.push(t ? `Search "${t}" · ${m.length} matches` : 'Core commands · try help <keyword> for the full catalog')
    m.slice(0, 12).forEach(i => r.push(`  ${i.name.padEnd(23)} ${i.description}`))
    if (m.length > 12) r.push(`  … and ${(m.length - 12).toLocaleString()} more`)
  }
  else if (n === 'echo') r.push(args.join(' '))
  else if (n === 'pwd') r.push(p)
  else if (n === 'whoami') r.push(`${state.profile.toLowerCase()} · local administrator`)
  else if (n === 'date') r.push(now().toString())
  else if (n === 'ls' || n === 'dir') { const e = state.files.filter(f => f.path.startsWith(p + '/') && f.path.slice(p.length + 1).split('/').length === 1); r.push(...e.map(f => `${f.type === 'folder' ? '▸' : '·'} ${f.path.split('/').pop()}`)); if (!e.length) r.push('(empty)') }
  else if (n === 'cat' || n === 'type') { const t = args[0] ? (args[0].startsWith('/') ? args[0] : `${p}/${args[0]}`) : ''; const f = state.files.find(i => i.path === t); r.push(f?.content ?? (f ? `[${f.type}]` : `cat: ${t || '(missing)'}: no such file`)) }
  else if (n === 'touch' || n === 'mkdir') {
    const folder = n === 'mkdir'; const t = args[0] ? (args[0].startsWith('/') ? args[0] : `${p}/${args[0]}`) : `${p}/${folder ? 'new-folder' : 'untitled.txt'}`
    if (!state.files.some(f => f.path === t)) state.files.push({ path: t, type: folder ? 'folder' : 'file', content: folder ? undefined : '', size: folder ? undefined : '0 B', modified: today() })
    saveState(); r.push(`created ${t}`)
  }
  else if (n === 'write') {
    const t = args[0] ? (args[0].startsWith('/') ? args[0] : `${p}/${args[0]}`) : `${p}/note.txt`
    const c = args.slice(1).join(' ') || 'Window 12 was here.'
    const ex = state.files.find(f => f.path === t)
    if (ex) Object.assign(ex, { content: c, size: `${c.length} B`, modified: today() })
    else state.files.push({ path: t, type: 'file', content: c, size: `${c.length} B`, modified: today() })
    saveState(); r.push(`wrote ${c.length} chars to ${t}`)
  }
  else if (n === 'rm' || n === 'del') { const t = args[0] ? (args[0].startsWith('/') ? args[0] : `${p}/${args[0]}`) : ''; const b = state.files.length; state.files = state.files.filter(f => f.path !== t && !f.path.startsWith(`${t}/`)); saveState(); r.push(b === state.files.length ? `rm: ${t || '(missing)'}: no such file` : `removed ${t}`) }
  else if (n === 'apps') r.push(...appCatalog.map(a => `${a.name} · ${a.kicker.toLowerCase()}`))
  else if (n === 'open') { const t = args.join(' ').toLowerCase(); const a = appCatalog.find(i => i.id === t || i.name.toLowerCase() === t || i.name.toLowerCase().includes(t)); if (a) { winOpen(a.id); r.push(`opened ${a.name}`) } else r.push(`open: ${t || '(missing)'}: not found`) }
  else if (n === 'install') r.push(`staged ${args[0] || 'window12-demo.app'} · no license required`)
  else if (n === 'neofetch' || n === 'sysinfo') r.push('        ▄▄▄▄▄▄▄    WINDOW 12', '       ▐  ◉  ▌   Prototype OS', '       ▐▄▄▄▄▄▌   Aurora shell / browser', '', ` user     ${state.profile.toLowerCase()}`, ' memory   6.8 GB / 16 GB', ' display  2560 × 1440', ` catalog  ${commandRegistry.length.toLocaleString()} commands`)
  else if (n === 'calc') { const e = args.join(''); if (/^[0-9+\-*/().\s]+$/.test(e) && e) { try { r.push(`= ${Function(`return (${e})`)()}`) } catch { r.push('calc: could not evaluate') } } else r.push('calc: use numbers and + - * / ( )') }
  else if (n === 'history') r.push(...state.history.slice(-12).map((i, j) => `${j + 1}  ${i}`))
  else if (n === 'logout' || n === 'reboot') { r.push(n === 'logout' ? 'Signing out…' : 'Rebooting…'); setTimeout(logout, 400) }
  else {
    const k = commandRegistry.find(i => i.name === n)
    if (k) r.push(`✓ ${k.name} accepted · ${k.description}`, '  Prototype module returned a healthy signal.')
    else r.push(`${cmd}: command not found · try help or apps`)
  }
  state.terminalLines = [...state.terminalLines, `user@window12:${p}$ ${input}`, ...r, '']
  state.terminalInput = ''; render(); refocusTerm()
}
function refocusTerm() { requestAnimationFrame(() => { const inp = $('[data-input="terminal"]'); if (inp && state.screen === 'desktop') inp.focus() }) }

/* ═══ Login / power ═══ */
function login() {
  state.profile = state.profile.trim() || 'Alex'
  localStorage.setItem('window12_user', state.profile)
  state.screen = 'desktop'; render()
}
function logout() {
  state.windows = []; state.startOpen = state.notifyOpen = state.widgetsOpen = state.powerOpen = false
  state.contextMenu = null; state.screen = 'login'; render()
}
function doBoot() { state.screen = 'boot'; render(); setTimeout(() => { state.screen = localStorage.getItem('window12_installed') === 'true' ? 'login' : 'install'; render() }, 1600) }
function shutdown() { state.windows = []; state.screen = 'off'; render() }
function startInstall() {
  state.installing = true; state.stage = 0; render()
  const t = setInterval(() => {
    if (state.stage >= installSteps.length - 1) {
      clearInterval(t)
      localStorage.setItem('window12_installed', 'true')
      state.installing = false; state.screen = 'login'; render()
    } else { state.stage += 1; render() }
  }, 1000)
}

/* ═══ Event delegation ═══ */
document.addEventListener('click', e => {
  // Close floating panels when clicking outside
  const stop = e.target.closest('[data-stop]')
  if (state.startOpen && (!stop || stop.dataset.stop !== 'start') && !e.target.closest('[data-action="start"]')) { state.startOpen = false; state.powerOpen = false; render(); return }
  if (state.notifyOpen && (!stop || stop.dataset.stop !== 'notify') && !e.target.closest('[data-action="notify"]')) { state.notifyOpen = false; render(); return }
  if (state.widgetsOpen && (!stop || stop.dataset.stop !== 'widgets') && !e.target.closest('[data-action="widgets"]')) { state.widgetsOpen = false; render(); return }
  if (state.powerOpen && (!stop || stop.dataset.stop !== 'power') && !e.target.closest('[data-action="power-menu"]')) { state.powerOpen = false; render(); return }
  if (state.contextMenu && !e.target.closest('[data-stop="ctx"]')) { hideContext(); return }

  const t = e.target.closest('[data-app],[data-action],[data-task],[data-focus],[data-min],[data-max],[data-close],[data-file],[data-command],[data-setting],[data-gallery],[data-dismiss],[data-icon],[data-wp],[data-ctx-action],[data-explore]')
  if (!t) return

  if (t.dataset.app) { state.selectedFile = `/home/${state.profile.toLowerCase()}/Read Me.txt`; return winOpen(t.dataset.app) }
  if (t.dataset.task) return winToggle(t.dataset.task)
  if (t.dataset.focus) return winFocus(t.dataset.focus)
  if (t.dataset.min) return winMinimizeAnimated(t.dataset.min)
  if (t.dataset.max) return winMaximize(t.dataset.max)
  if (t.dataset.close) return winClose(t.dataset.close)
  if (t.dataset.file) { state.selectedFile = t.dataset.file; state.startOpen = false; return render() }
  if (t.dataset.command) { state.startOpen = false; return runCommand(t.dataset.command) }
  if (t.dataset.setting) { state.settings[t.dataset.setting] = !state.settings[t.dataset.setting]; return render() }
  if (t.dataset.gallery) { state.gallerySelection = t.dataset.gallery; return render() }
  if (t.dataset.dismiss) return dismissNotif(Number(t.dataset.dismiss))
  if (t.dataset.wp) { state.wallpaper = t.dataset.wp; ss('window12_wp', state.wallpaper); return render() }
  if (t.dataset.ctxAction) {
    const label = t.dataset.ctxAction
    const menu = state.contextMenu
    if (menu) for (const item of [...menu.items, ...menu.items.filter(i => i.sub).flatMap(i => i.sub)]) if (item.label === label) { item.action?.(); return }
    return
  }
  if (t.dataset.icon) { state.selectedIcon = t.dataset.icon; return render() }
  if (t.dataset.explore) return
  if (t.dataset.action === 'start') {
    state.startOpen = !state.startOpen; state.powerOpen = false; state.notifyOpen = false; state.widgetsOpen = false
    render()
    if (state.startOpen) requestAnimationFrame(() => { const si = $('.sm-search input'); if (si) si.focus() })
    return
  }
  if (t.dataset.action === 'notify') { state.notifyOpen = !state.notifyOpen; state.startOpen = false; state.widgetsOpen = false; return render() }
  if (t.dataset.action === 'widgets') { state.widgetsOpen = !state.widgetsOpen; state.startOpen = false; state.notifyOpen = false; return render() }
  if (t.dataset.action === 'taskview') { if (state.windows.length > 1) { const next = state.windows[(state.windows.findIndex(w => w.id === state.activeId) + 1) % state.windows.length]; return winFocus(next.id) } return }
  if (t.dataset.action === 'tray') { return pushNotif('Hidden icons', 'There is nothing hidden here. Everything is bloatware.') }
  if (t.dataset.action === 'show-desktop') return showDesktop()
  if (t.dataset.action === 'clear-notifs') return clearNotifs()
  if (t.dataset.action === 'install') return startInstall()
  if (t.dataset.action === 'login') return login()
  if (t.dataset.action === 'boot') return doBoot()
  if (t.dataset.action === 'logout') return logout()
  if (t.dataset.action === 'sleep') { state.startOpen = false; return logout() }
  if (t.dataset.action === 'restart') { state.startOpen = false; return doBoot() }
  if (t.dataset.action === 'shutdown') { state.startOpen = false; return shutdown() }
  if (t.dataset.action === 'power-menu') { state.powerOpen = !state.powerOpen; return render() }
  if (t.dataset.action === 'apply-wallpaper') { state.wallpaper = t.dataset.wp; ss('window12_wp', state.wallpaper); pushNotif('Wallpaper applied', `Now using ${osReferences.find(r => r.skin === state.wallpaper)?.label || 'custom'} theme`); return render() }
})

/* Double-click desktop icons / titlebar */
document.addEventListener('dblclick', e => {
  const ic = e.target.closest('[data-icon]')
  if (ic) { state.selectedIcon = ic.dataset.icon; winOpen(ic.dataset.icon) }
  const tb = e.target.closest('.win-titlebar')
  if (tb) { const w = tb.closest('.app-window'); if (w) winMaximize(w.dataset.wid) }
})

/* Right-click */
document.addEventListener('contextmenu', e => {
  const ic = e.target.closest('[data-icon]')
  if (ic) {
    const id = ic.dataset.icon
    e.preventDefault()
    return showContext(e, [
      ctxItem('Open', () => { winOpen(id); hideContext() }),
      ctxItem('Open in Terminal', () => { winOpen('terminal'); hideContext() }),
      ctxItem('Pin to taskbar', () => { pushNotif('Pinned', `${appById(id).name} pinned to taskbar`); hideContext() }),
      ctxSep(),
      ctxItem('Properties', () => { winOpen('settings'); hideContext() }),
    ])
  }
  const clk = e.target.closest('[data-context="taskbar-clock"]')
  if (clk) {
    e.preventDefault()
    return showContext(e, [
      ctxItem('Adjust date/time', () => { winOpen('settings'); hideContext() }),
      ctxItem('Copy time', () => { navigator.clipboard?.writeText(now().toLocaleString()); hideContext() }),
    ])
  }
  if (!e.target.closest('.app-window') && !e.target.closest('.taskbar')) { e.preventDefault(); return showContext(e, desktopCtxItems()) }
})

/* Inputs */
document.addEventListener('input', e => {
  const t = e.target
  if (t.dataset.input === 'profile') state.profile = t.value
  if (t.dataset.input === 'search') { state.search = t.value; if (state.startOpen) R.refreshStart() }
  if (t.dataset.input === 'terminal') state.terminalInput = t.value
})
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.dataset.input === 'profile') login()
  if (e.key === 'Enter' && e.target.dataset.input === 'search') {
    const q = state.search.trim().toLowerCase()
    const first = appCatalog.find(a => a.name.toLowerCase().includes(q)) || commandRegistry.find(c => c.name.includes(q)) || state.files.find(f => f.path.split('/').pop().toLowerCase().includes(q))
    if (first?.id) winOpen(first.id)
    else if (first?.name) runCommand(first.name)
    else if (first?.path) { state.selectedFile = first.path }
    state.search = ''; state.startOpen = false; render()
  }
  if (e.key === 'Escape') {
    if (state.contextMenu) return hideContext()
    if (state.powerOpen) { state.powerOpen = false; return render() }
    if (state.notifyOpen) { state.notifyOpen = false; return render() }
    if (state.widgetsOpen) { state.widgetsOpen = false; return render() }
    if (state.startOpen) { state.startOpen = false; return render() }
  }
})
document.addEventListener('submit', e => { if (e.target.dataset.form === 'terminal') { e.preventDefault(); runCommand(state.terminalInput) } })

/* ═══ Window drag / resize (pointer-based, transform-smooth) ═══ */
let drag = null // { win, mode, dir, sx, sy, ox, oy, ow, oh, raf, snap }

function beginDrag(e, mode, wid, dir) {
  const w = winById(wid); if (!w) return
  const el = winEl(wid); if (!el) return
  if (mode === 'move') {
    if (w.maximized) {
      // Restore to previous geometry, keeping the grab point stable
      const prev = w.prev || { x: 80, y: 40, w: 900, h: 600 }
      const ratioX = (e.clientX - prev.x) / prev.w
      const ratioY = (e.clientY - prev.y) / prev.h
      w.maximized = false; w.x = prev.x; w.y = prev.y; w.w = prev.w; w.h = prev.h; w.prev = null
      winFocus(wid) // re-render to unmaximize before dragging
      const el2 = winEl(wid)
      if (!el2) return
      drag = { win: w, mode, sx: e.clientX, sy: e.clientY, ox: e.clientX - ratioX * w.w, oy: e.clientY - ratioY * w.h, raf: null, snap: null }
      el2.style.transition = 'none'
      el2.style.willChange = 'transform'
      el2.style.transform = 'translate(0,0)'
    } else {
      winFocus(wid)
      const el2 = winEl(wid)
      if (!el2) return
      drag = { win: w, mode, sx: e.clientX, sy: e.clientY, ox: w.x, oy: w.y, raf: null, snap: null }
      el2.style.transition = 'none'
      el2.style.willChange = 'transform'
      el2.style.transform = 'translate(0,0)'
    }
  } else {
    winFocus(wid)
    const el2 = winEl(wid)
    if (!el2) return
    drag = { win: w, mode, dir, sx: e.clientX, sy: e.clientY, ox: w.x, oy: w.y, ow: w.w, oh: w.h, raf: null, snap: null }
    el2.style.transition = 'none'
  }
  e.preventDefault()
  document.body.classList.add('no-select')
}

function applyDrag(cx, cy) {
  const d = drag, w = d.win, el = winEl(w.id)
  if (!el) return
  const dx = cx - d.sx, dy = cy - d.sy
  if (d.mode === 'move') {
    const x = clamp(d.ox + dx, -w.w + 120, innerWidth - 120)
    const y = clamp(d.oy + dy, 0, innerHeight - TASKBAR_H - 40)
    el.style.transform = `translate(${x - d.ox}px, ${y - d.oy}px)`
    // Snap preview
    const target = snapTarget(cx, cy)
    d.snap = target
    const prev = $('.snap-preview')
    if (prev) {
      if (target) { prev.style.display = 'block'; prev.className = 'snap-preview ' + target.cls; prev.style.width = target.w + 'px'; prev.style.height = target.h + 'px' }
      else { prev.style.display = 'none' }
    }
  } else {
    let { x, y, w: ww, h: hh } = { x: d.ox, y: d.oy, w: d.ow, h: d.oh }
    if (d.dir.includes('e')) ww = clamp(d.ow + dx, MIN_W, innerWidth - x)
    if (d.dir.includes('s')) hh = clamp(d.oh + dy, MIN_H, innerHeight - y - TASKBAR_H)
    if (d.dir.includes('w')) { const nw = clamp(d.ow - dx, MIN_W, x + d.ow); x = d.ox + (d.ow - nw); ww = nw }
    if (d.dir.includes('n')) { const nh = clamp(d.oh - dy, MIN_H, y + d.oh); y = d.oy + (d.oh - nh); hh = nh }
    w.x = x; w.y = y; w.w = ww; w.h = hh
    el.style.left = x + 'px'; el.style.top = y + 'px'; el.style.width = ww + 'px'; el.style.height = hh + 'px'
  }
}

function endDrag() {
  if (!drag) return
  const d = drag, w = d.win
  const el = winEl(w.id)
  if (el) {
    el.style.transition = ''
    el.style.willChange = ''
    el.style.transform = ''
  }
  if (d.mode === 'move') {
    const cx = d.lastX ?? d.sx, cy = d.lastY ?? d.sy
    const dx = cx - d.sx, dy = cy - d.sy
    const target = d.snap
    if (target) {
      if (target.cls === 'full') {
        w.prev = { x: w.x, y: w.y, w: w.w, h: w.h }
        w.maximized = true
      } else {
        w.maximized = false
        w.x = target.x; w.y = target.y; w.w = target.w; w.h = target.h
      }
    } else {
      w.x = clamp(d.ox + dx, -w.w + 120, innerWidth - 120)
      w.y = clamp(d.oy + dy, 0, innerHeight - TASKBAR_H - 40)
    }
  }
  const prev = $('.snap-preview'); if (prev) prev.style.display = 'none'
  drag = null
  document.body.classList.remove('no-select')
  render()
}

function snapTarget(cx, cy) {
  const vw = innerWidth, vh = innerHeight, th = TASKBAR_H
  if (cy <= 6) return { x: 0, y: 0, w: vw, h: vh - th, cls: 'full' }
  if (cx <= 6) return { x: 0, y: 0, w: Math.round(vw / 2), h: vh - th, cls: 'left' }
  if (cx >= vw - 6) return { x: Math.round(vw / 2), y: 0, w: Math.floor(vw / 2), h: vh - th, cls: 'right' }
  return null
}
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)) }

document.addEventListener('pointerdown', e => {
  if (e.button !== 0 && e.pointerType === 'mouse') return
  const tb = e.target.closest('[data-move]')
  if (tb && !e.target.closest('.win-ctrls')) return beginDrag(e, 'move', tb.dataset.move)
  const rs = e.target.closest('[data-resize]')
  if (rs) { const win = rs.closest('.app-window'); if (win) return beginDrag(e, 'resize', win.dataset.wid, rs.dataset.resize) }
  const winEl = e.target.closest('.app-window')
  if (winEl && !e.target.closest('button, a, input, textarea, select')) {
    const wid = winEl.dataset.wid
    if (state.activeId !== wid) winFocus(wid)
  }
})
document.addEventListener('pointermove', e => {
  if (!drag) return
  drag.lastX = e.clientX; drag.lastY = e.clientY
  if (!drag.raf) drag.raf = requestAnimationFrame(() => { drag.raf = null; applyDrag(drag.lastX, drag.lastY) })
})
document.addEventListener('pointerup', () => { if (drag) { if (drag.raf) { cancelAnimationFrame(drag.raf); drag.raf = null; applyDrag(drag.lastX, drag.lastY) } endDrag() } })

function winMinimizeAnimated(appId) {
  const el = winEl(appId); const w = winById(appId); if (!el || !w) return
  el.classList.add('minimizing')
  setTimeout(() => { if (!w.minimized) winToggle(appId) }, 150)
}

/* ═══ Clock tick ═══ */
setInterval(() => {
  if (state.screen === 'desktop') {
    const el = $('#tb-time'); if (el) el.textContent = now().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  }
}, 1000)

/* ═══ Boot ═══ */
render()
setTimeout(() => { if (state.screen === 'boot') { state.screen = localStorage.getItem('window12_installed') === 'true' ? 'login' : 'install'; render() } }, 1400)
