const appRoot = document.querySelector('#app')

const appCatalog = [
  { id: 'welcome', name: 'Welcome Center', icon: '✦', kicker: 'SYSTEM', color: '#78e2ff' },
  { id: 'explorer', name: 'File Cabinet', icon: '▣', kicker: 'FILES', color: '#f3c969' },
  { id: 'terminal', name: 'Command Deck', icon: '⌁', kicker: 'POWER USER', color: '#91f7c8' },
  { id: 'gallery', name: 'OS Gallery', icon: '◈', kicker: 'REFERENCES', color: '#ff9fca' },
  { id: 'browser', name: 'Orbit Browser', icon: '◎', kicker: 'BLOATWARE', color: '#9cb7ff' },
  { id: 'store', name: 'App Bazaar', icon: '▤', kicker: 'BLOATWARE', color: '#ff9fca' },
  { id: 'cloud', name: 'SkyDrive-ish', icon: '☁', kicker: 'BLOATWARE', color: '#83d9ef' },
  { id: 'news', name: 'News & Vibes', icon: '▥', kicker: 'BLOATWARE', color: '#ffb26b' },
  { id: 'gamehub', name: 'Game Hub', icon: '✚', kicker: 'BLOATWARE', color: '#d9a5ff' },
  { id: 'monitor', name: 'Pulse Monitor', icon: '⌁', kicker: 'SYSTEM', color: '#ff817d' },
  { id: 'settings', name: 'Control Room', icon: '⚙', kicker: 'SYSTEM', color: '#b6c2d9' },
]

const initialFiles = [
  { path: '/home/alex/Read Me.txt', type: 'file', content: 'Welcome to Window 12.\n\nThis is a friendly fake operating system built for exploring. Try the Command Deck and type help.', size: '188 B', modified: 'just now' },
  { path: '/home/alex/Projects', type: 'folder', modified: 'today' },
  { path: '/home/alex/Projects/idea-board.w12', type: 'file', content: 'PROJECT: Idea Board\nSTATUS: delightfully unfinished\nOWNER: alex', size: '74 B', modified: 'today' },
  { path: '/home/alex/Downloads', type: 'folder', modified: 'yesterday' },
  { path: '/home/alex/Downloads/Definitely_Not_A_Virus.exe', type: 'file', content: 'This file is a joke. Window 12 Defender says: probably fine.', size: '42 KB', modified: 'yesterday' },
  { path: '/home/alex/Pictures', type: 'folder', modified: 'Mon' },
  { path: '/home/alex/Desktop', type: 'folder', modified: 'Mon' },
  { path: '/system/boot.log', type: 'file', content: '[OK] boot sequence\n[OK] personality module\n[WARN] too much bloatware', size: '3 KB', modified: 'boot' },
  { path: '/system/config/window12.ini', type: 'file', content: 'accent=cyan\ntelemetry=false\nbloatware=enthusiastic', size: '56 B', modified: 'boot' },
]

const coreCommands = [
  ['help', 'core', 'List commands or search the catalog.'], ['clear', 'core', 'Clear the Command Deck.'], ['echo', 'core', 'Print a message.'],
  ['pwd', 'files', 'Print the current virtual directory.'], ['ls', 'files', 'List files in the current directory.'], ['cat', 'files', 'Read a virtual file.'],
  ['touch', 'files', 'Create a virtual file.'], ['mkdir', 'files', 'Create a virtual folder.'], ['write', 'files', 'Write text into a virtual file.'],
  ['rm', 'files', 'Remove a virtual file.'], ['apps', 'desktop', 'List installed apps.'], ['open', 'desktop', 'Open an app by name.'],
  ['install', 'packages', 'Stage an app package.'], ['neofetch', 'system', 'Show Window 12 system identity.'], ['sysinfo', 'system', 'Show a system summary.'],
  ['whoami', 'user', 'Show the active local user.'], ['date', 'system', 'Print the local date.'], ['calc', 'utilities', 'Run basic arithmetic.'],
  ['history', 'core', 'Show recent commands.'], ['logout', 'power', 'Return to the login screen.'], ['reboot', 'power', 'Reboot to login.'],
].map(([name, category, description]) => ({ name, category, description }))

const domains = ['system', 'files', 'network', 'media', 'developer', 'security', 'power', 'display', 'storage', 'process', 'users', 'packages', 'gaming', 'office', 'cloud', 'diagnostics', 'accessibility', 'automation', 'desktop', 'devices']
const actions = ['status', 'info', 'list', 'scan', 'check', 'repair', 'sync', 'clean', 'reset', 'enable', 'disable', 'start', 'stop', 'show', 'hide', 'inspect', 'watch', 'export', 'import', 'refresh', 'connect', 'disconnect', 'measure', 'report', 'optimize', 'backup', 'restore', 'mount', 'unmount', 'search', 'index', 'open', 'close', 'queue', 'run', 'schedule', 'history', 'config', 'version', 'logs', 'stats', 'test', 'discover', 'pair', 'update', 'upgrade', 'install', 'remove', 'lock', 'unlock', 'notify', 'capture', 'record', 'share', 'print', 'preview', 'verify', 'diagnose', 'trace', 'profile', 'summarize', 'format', 'convert', 'render', 'compile', 'build', 'deploy', 'publish', 'archive', 'extract', 'encrypt', 'decrypt', 'hash', 'generate', 'validate', 'monitor', 'benchmark', 'throttle', 'prioritize', 'route', 'mirror', 'snapshot', 'diff', 'merge', 'watchdog', 'heartbeat', 'fallback', 'sandbox', 'simulate', 'wizard', 'tutorial', 'tips', 'about', 'license', 'policy', 'rules', 'permissions', 'quota', 'usage', 'sessions', 'accounts', 'themes', 'widgets', 'shortcuts', 'sounds', 'wallpaper', 'brightness', 'volume', 'timezone', 'locale', 'keyboard', 'mouse', 'touch', 'bluetooth', 'wifi', 'vpn', 'dns', 'proxy', 'firewall', 'ports', 'services', 'drivers', 'firmware', 'battery', 'thermals', 'memory', 'cpu', 'gpu', 'uptime', 'kernel', 'shell', 'environment', 'paths', 'aliases', 'plugins', 'extensions', 'modules', 'workspaces', 'projects', 'templates', 'favorites', 'recents', 'trash', 'clipboard', 'screenshots', 'downloads', 'documents', 'pictures', 'music', 'videos', 'games', 'news', 'weather', 'calendar', 'mail', 'notes', 'calculator', 'browser', 'store', 'cloud', 'terminal']
const commandRegistry = [...coreCommands]
for (const domain of domains) {
  for (const action of actions) commandRegistry.push({ name: `${domain}.${action}`, category: domain, description: `${action[0].toUpperCase()}${action.slice(1)} the ${domain} subsystem.` })
}

const osReferences = [
  { id: 'blue-widgets', label: 'Widgets / Windows', note: 'The calm blue widget desktop', skin: 'blue-widgets', tags: 'widgets · glass · blue' },
  { id: 'rainbow-desktop', label: 'Vivid Desktop', note: 'A maximalist colorful workspace', skin: 'rainbow-desktop', tags: 'color · dock · creative' },
  { id: 'blue-start', label: 'Start Menu', note: 'The centered app launcher', skin: 'blue-start', tags: 'launcher · search · rounded' },
  { id: 'linux-terminal', label: 'Linux Terminal', note: 'A dense power-user workspace', skin: 'linux-terminal', tags: 'terminal · tiling · dark' },
  { id: 'endeavour', label: 'Endeavour Setup', note: 'A dark neon utility desktop', skin: 'endeavour', tags: 'neon · status · utility' },
  { id: 'purple-dev', label: 'Purple Dev Shell', note: 'Code, graphs, and translucent panes', skin: 'purple-dev', tags: 'developer · graphs · purple' },
  { id: 'gnome', label: 'Activities View', note: 'Workspace overview with a dock', skin: 'gnome', tags: 'overview · dock · linux' },
  { id: 'macos', label: 'Soft Desktop', note: 'A clean desktop with a colorful dock', skin: 'macos', tags: 'dock · soft · minimal' },
]

const state = {
  screen: 'boot', stage: 0, installing: false, activeApp: null, startOpen: false, search: '', profile: localStorage.getItem('window12_user') || 'Alex',
  selectedFile: '/home/alex/Read Me.txt', files: readStored('window12_files', initialFiles), terminalInput: '', terminalLines: [
    'Window 12 Command Deck [build 12.0.0-prototype]', `Catalog loaded: ${commandRegistry.length.toLocaleString()} commands across ${domains.length} subsystems.`, 'Type help to explore. Type neofetch for a little flex.', '',
  ], history: [], settings: { telemetry: false, autoUpdate: true, compact: false }, gallerySelection: 'blue-widgets',
}

function readStored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback }
}
function saveState() { localStorage.setItem('window12_files', JSON.stringify(state.files)) }
function today() { return new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) }
function escapeHTML(value = '') { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])) }
function appById(id) { return appCatalog.find((app) => app.id === id) || appCatalog[0] }
function iconFor(id) { return appById(id).icon }
function userHome() { return `/home/${state.profile.toLowerCase()}` }

function render() {
  if (state.screen === 'boot') return renderBoot()
  if (state.screen === 'install') return renderInstall()
  if (state.screen === 'login') return renderLogin()
  return renderDesktop()
}

function renderBoot() {
  appRoot.innerHTML = `<main class="boot-screen"><div class="boot-logo"><span class="brand-mark">▦</span><strong>WINDOW <b>12</b></strong></div><div class="boot-loader"><i></i><i></i><i></i></div><p>preparing your delightful desktop</p><small>BUILD 12.0.0 · AURORA CHANNEL</small></main>`
}

function renderInstall() {
  const current = installSteps[state.stage] || installSteps[0]
  appRoot.innerHTML = `<main class="onboarding-shell"><div class="setup-aside"><div class="brand-lockup"><span class="brand-mark">▦</span><span>WINDOW <b>12</b></span></div><div class="aside-art"><div class="install-orbit">12</div><span class="star star-one">✦</span><span class="star star-two">·</span><span class="star star-three">+</span></div><p class="aside-quote">“An operating system should feel like a place you want to hang out.”</p><span class="aside-caption">AURORA EDITION / 2026</span></div><section class="setup-main"><div class="setup-top"><span class="eyebrow">SETUP EXPERIENCE 01</span><span class="setup-step">${state.installing ? `0${Math.min(state.stage + 1, 4)} / 04` : 'READY'}</span></div><div class="setup-content"><span class="setup-icon">✦</span><h1>${state.installing ? current[0] : 'Meet your new desktop.'}</h1><p>${state.installing ? current[1] : 'A polished little operating system prototype with a terminal, real simulated files, and the sort of bloatware nobody asked for.'}</p>${state.installing ? `<div class="install-progress"><div style="width:${((state.stage + 1) / installSteps.length) * 100}%"></div></div><div class="progress-meta"><span>Installing Window 12</span><b>${Math.round(((state.stage + 1) / installSteps.length) * 100)}%</b></div>` : `<div class="feature-list"><span>◈ Local-first profile</span><span>◈ ${commandRegistry.length.toLocaleString()} commands</span><span>◈ OS prototype gallery</span></div>`}<button class="primary-button setup-button" data-action="${state.installing ? 'noop' : 'install'}" ${state.installing ? 'disabled' : ''}>${state.installing ? 'Installing…' : 'Install Window 12'} <span>→</span></button><small class="legal-note">Pure HTML, CSS, and JavaScript. No files are changed on your computer.</small></div><div class="setup-footer"><span>BACKUP STATUS <b>NOT REQUIRED</b></span><span>SPACE AVAILABLE <b>∞</b></span></div></section></main>`
}

function renderLogin() {
  appRoot.innerHTML = `<main class="login-shell"><div class="login-glow"></div><header class="login-brand"><span class="brand-mark">▦</span> WINDOW <b>12</b><span class="login-build">AURORA / 12.0.0</span></header><section class="login-card"><div class="avatar giant">${escapeHTML(state.profile.slice(0, 1).toUpperCase() || 'A')}</div><span class="eyebrow">WELCOME BACK</span><h1>Ready when you are.</h1><p>Your local Window 12 profile is waiting on the other side of this button.</p><label class="field-label">PROFILE NAME<input data-input="profile" value="${escapeHTML(state.profile)}" /></label><button class="primary-button login-button" data-action="login">Enter desktop <span>↗</span></button><small>Prototype sign-in · stored only in this browser</small></section><footer class="login-footer"><span>◉ OFFLINE-FIRST MODE</span><span>HELP CENTER <b>?</b></span></footer></main>`
}

function renderDesktop() {
  const active = state.activeApp ? appById(state.activeApp) : null
  const fileSearch = state.search.trim().toLowerCase()
  const visibleFiles = state.files.filter((file) => !fileSearch || file.path.toLowerCase().includes(fileSearch))
  appRoot.innerHTML = `<main class="os-shell"><div class="aurora aurora-one"></div><div class="aurora aurora-two"></div><header class="system-bar"><button class="brand-button" data-action="start"><span class="brand-mark">▦</span><span>WINDOW <b>12</b></span></button><div class="breadcrumb">HOME <span>/</span> ${active ? escapeHTML(active.name.toUpperCase()) : 'DESKTOP'}</div><div class="system-status"><span class="status-dot"></span> SYSTEM NOMINAL <span class="bar-divider"></span> ${today()} <span class="battery">▰</span> 84%</div></header><section class="desktop-area"><div class="desktop-heading"><div><p class="eyebrow">AURORA DESKTOP / 12.0.0</p><h1>Good morning, ${escapeHTML(state.profile)}.</h1><p class="heading-subtitle">Your desktop is calm. The bloatware is not.</p></div><div class="quick-actions"><button class="ghost-button" data-app="terminal">⌁ command deck</button><button class="round-button" data-app="settings">⚙</button></div></div><div class="desktop-grid"><section class="hero-card glass-card"><div class="hero-copy"><span class="live-pill"><span class="status-dot"></span> LIVE DESKTOP</span><h2>Your ideas,<br><em>fully windowed.</em></h2><p>Window 12 is a playful OS prototype with real simulated files, a terminal, and a gallery inspired by the best desktop ideas.</p><button class="primary-button" data-app="welcome">Take the tour <span>↗</span></button></div><div class="orbital-art"><div class="orbital-ring ring-a"></div><div class="orbital-ring ring-b"></div><div class="orbital-core">12</div><span class="orbit-dot dot-a"></span><span class="orbit-dot dot-b"></span><span class="orbit-dot dot-c"></span></div></section><aside class="system-card glass-card"><div class="card-label"><span>QUICK GLANCE</span><span class="tiny-live">● LIVE</span></div><div class="glance-row"><span class="weather-symbol">☼</span><div><strong>22° <small>°C</small></strong><p>Clear skies in Aurora</p></div></div><div class="mini-bars"><div><span>CPU</span><b>28%</b><i style="width:28%"></i></div><div><span>MEMORY</span><b>42%</b><i style="width:42%"></i></div><div><span>STORAGE</span><b>61%</b><i style="width:61%"></i></div></div><button class="text-button" data-app="monitor">Open Pulse Monitor <span>→</span></button></aside><section class="app-launcher glass-card"><div class="section-heading"><div><p class="eyebrow">PINNED</p><h3>Launchpad</h3></div><button class="icon-button" data-app="store">＋</button></div><div class="app-grid">${appCatalog.slice(0, 8).map(appTile).join('')}</div></section><section class="activity-card glass-card"><div class="section-heading"><div><p class="eyebrow">RECENT ACTIVITY</p><h3>Little moments</h3></div><button class="text-button" data-app="explorer">Files <span>→</span></button></div><div class="activity-list"><div class="activity-item"><span class="activity-icon cyan">✦</span><div><strong>Welcome Center is ready</strong><p>Window 12 · just now</p></div><span class="activity-arrow">↗</span></div><div class="activity-item"><span class="activity-icon pink">▣</span><div><strong>Read Me.txt was opened</strong><p>File Cabinet · 2 min ago</p></div><span class="activity-arrow">↗</span></div><div class="activity-item"><span class="activity-icon orange">◌</span><div><strong>14 bloatware apps approved</strong><p>App Bazaar · 8 min ago</p></div><span class="activity-arrow">↗</span></div></div></section></div></section><footer class="taskbar"><button class="start-button ${state.startOpen ? 'selected' : ''}" data-action="start"><span class="brand-mark">▦</span><span>Start</span></button><label class="task-search"><span>⌕</span><input data-input="search" value="${escapeHTML(state.search)}" placeholder="Search apps, files, commands"></label><div class="task-pins">${['explorer', 'terminal', 'gallery', 'store'].map((id) => `<button class="${state.activeApp === id ? 'active' : ''}" data-app="${id}">${iconFor(id)}</button>`).join('')}</div><div class="task-spacer"></div><div class="task-tray"><span>⌁</span><span>⌁</span><span class="tray-divider"></span><div><strong>${new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</strong><small>${today()}</small></div><button class="avatar" data-action="logout">${escapeHTML(state.profile.slice(0, 1).toUpperCase())}</button></div></footer>${state.startOpen ? renderStartMenu() : ''}${active ? renderWindow(active, visibleFiles) : ''}</main>`
}

function appTile(app) { return `<button class="app-tile" data-app="${app.id}"><span class="app-icon" style="background:${app.color}18;color:${app.color}">${app.icon}</span><span>${app.name}</span><small>${app.kicker}</small></button>` }
function renderStartMenu() { return `<div class="start-menu"><div class="start-head"><div class="avatar">${escapeHTML(state.profile.slice(0, 1).toUpperCase())}</div><div><strong>${escapeHTML(state.profile)}</strong><small>Local administrator</small></div><button class="icon-button" data-action="logout">↪</button></div><label class="start-search"><span>⌕</span><input data-input="search" autofocus value="${escapeHTML(state.search)}" placeholder="Type to search"></label><div class="start-section-title"><span>PINNED</span><button data-app="store">ALL APPS →</button></div><div class="start-apps">${appCatalog.slice(0, 6).map((app) => `<button data-app="${app.id}"><span style="color:${app.color}">${app.icon}</span><small>${app.name}</small></button>`).join('')}</div><div class="recommended"><div><span class="recommend-icon">✦</span><div><strong>Continue your tour</strong><small>Welcome Center · 2 min</small></div></div><button data-app="welcome">→</button></div><div class="start-footer"><span>◒ Power</span><button data-action="logout">Sign out</button></div></div>` }

function renderWindow(app, visibleFiles) {
  return `<div class="window-backdrop"><section class="app-window"><header class="window-titlebar"><div class="window-app-name"><span style="color:${app.color}">${app.icon}</span><div><strong>${app.name}</strong><small>${app.kicker} / WINDOW 12</small></div></div><div class="window-controls"><button>—</button><button>□</button><button class="close-window" data-action="close">×</button></div></header><div class="window-content">${renderAppContent(app.id, visibleFiles)}</div></section></div>`
}

function renderAppContent(id, visibleFiles) {
  if (id === 'welcome') return renderWelcome()
  if (id === 'explorer') return renderExplorer(visibleFiles)
  if (id === 'terminal') return renderTerminal()
  if (id === 'gallery') return renderGallery()
  if (id === 'store') return renderStore()
  if (id === 'settings') return renderSettings()
  if (id === 'monitor') return renderMonitor()
  if (id === 'browser') return renderBrowser()
  if (id === 'news') return renderNews()
  if (id === 'cloud') return renderCloud()
  return renderGameHub()
}

function renderWelcome() { return `<div class="welcome-app"><div class="welcome-hero"><span class="live-pill">✦ FIRST RUN TOUR</span><h2>Small OS.<br><em>Big personality.</em></h2><p>Window 12 is a desktop playground: poke around, make files, launch questionable apps, and see how many commands you can remember.</p><button class="primary-button" data-app="terminal">Open command deck ↗</button></div><div class="welcome-stats"><div><b>${commandRegistry.length.toLocaleString()}</b><span>indexed commands</span></div><div><b>10</b><span>tiny apps included</span></div><div><b>∞</b><span>imaginary storage</span></div></div><div class="tour-cards"><div><span>01</span><strong>Make a file</strong><p>Open Command Deck and try <code>touch hello.txt</code>.</p></div><div><span>02</span><strong>Feed the bloat</strong><p>Visit App Bazaar for preinstalled “essentials.”</p></div><div><span>03</span><strong>Compare the vibes</strong><p>Open OS Gallery to explore the supplied desktop references.</p></div></div></div>` }

function renderExplorer(visibleFiles) {
  const selected = state.files.find((file) => file.path === state.selectedFile)
  return `<div class="explorer-app"><aside class="explorer-sidebar"><p class="eyebrow">PLACES</p>${['Home', 'Desktop', 'Documents', 'Downloads', 'Pictures', 'Trash'].map((place, index) => `<button class="${index === 0 ? 'current' : ''}"><span>${['⌂', '⊞', '▤', '⇩', '▧', '♲'][index]}</span>${place}</button>`).join('')}<div class="storage-meter"><div><span>WINDOW DRIVE</span><b>61%</b></div><i><em></em></i><small>61.2 GB of 100 GB used</small></div></aside><section class="file-browser"><div class="file-toolbar"><div class="crumbs"><span>⌂</span><b>/</b><span>home</span><b>/</b><strong>${escapeHTML(state.profile.toLowerCase())}</strong></div><button class="text-button" data-app="terminal">Open terminal ↗</button></div><div class="file-columns"><div class="file-list"><div class="file-list-head"><span>NAME</span><span>MODIFIED</span><span>SIZE</span></div>${visibleFiles.filter((file) => file.path.startsWith('/home/alex/')).map((file) => `<button class="file-row ${state.selectedFile === file.path ? 'selected' : ''}" data-file="${escapeHTML(file.path)}"><span><i class="${file.type}">${file.type === 'folder' ? '▰' : '▤'}</i>${escapeHTML(file.path.split('/').pop())}</span><small>${file.modified}</small><small>${file.size || '—'}</small></button>`).join('')}</div><div class="file-preview"><span class="eyebrow">PREVIEW</span><div class="preview-icon ${selected?.type || 'file'}">${selected?.type === 'folder' ? '▰' : '▤'}</div><h3>${escapeHTML(selected?.path.split('/').pop() || 'Nothing selected')}</h3><p>${escapeHTML(selected?.content || (selected ? 'A virtual folder ready for more virtual files.' : 'Select a file to read its contents.'))}</p><small>${selected?.size || 'Folder'} · ${selected?.modified || '—'}</small></div></div></section></div>`
}

function renderTerminal() { return `<div class="terminal-app"><div class="terminal-top"><span><i></i> COMMAND DECK</span><small>WINDOW 12 SHELL · ${commandRegistry.length.toLocaleString()} COMMANDS</small></div><div class="terminal-output">${state.terminalLines.map((line) => `<div class="${line.startsWith('✓') ? 'terminal-success' : line.startsWith('user@') ? 'terminal-prompt' : ''}">${escapeHTML(line) || '&nbsp;'}</div>`).join('')}<form class="terminal-form" data-form="terminal"><span>user@window12:~$</span><input data-input="terminal" autofocus value="${escapeHTML(state.terminalInput)}" placeholder="try help, ls, or neofetch"></form></div><div class="terminal-hints"><span>QUICK COMMANDS</span><button data-command="neofetch">neofetch</button><button data-command="ls">ls</button><button data-command="help network">help network</button><button data-command="touch idea.txt">touch idea.txt</button></div></div>` }

function renderGallery() {
  const selected = osReferences.find((item) => item.id === state.gallerySelection) || osReferences[0]
  return `<div class="gallery-app"><div class="gallery-hero"><div><span class="eyebrow">PROTOTYPE REFERENCE WALL / 08</span><h2>Different OSes.<br><em>One curious desktop.</em></h2><p>A visual wall inspired by the prototype operating-system images you supplied: blue widget panels, vibrant docks, centered launchers, Linux tiling, and soft minimal desktops.</p></div><div class="gallery-orbit">◈</div></div><div class="gallery-layout"><div class="reference-grid">${osReferences.map((item) => `<button class="reference-card ${item.id === state.gallerySelection ? 'selected' : ''}" data-gallery="${item.id}"><div class="os-preview ${item.skin}">${previewMarkup(item.skin)}</div><div class="reference-meta"><strong>${item.label}</strong><small>${item.note}</small><span>${item.tags}</span></div></button>`).join('')}</div><aside class="gallery-detail"><span class="eyebrow">SELECTED REFERENCE</span><div class="os-preview detail-preview ${selected.skin}">${previewMarkup(selected.skin)}</div><h3>${selected.label}</h3><p>${selected.note}. Use it as inspiration for the next Window 12 theme.</p><div class="detail-tags">${selected.tags.split(' · ').map((tag) => `<span>${tag}</span>`).join('')}</div><button class="primary-button" data-action="gallery-desktop">Use this vibe <span>↗</span></button></aside></div></div>`
}

function previewMarkup(skin) {
  const dots = '<i></i><i></i><i></i><i></i><i></i>'
  if (skin === 'blue-widgets') return `<div class="preview-wallpaper"></div><div class="preview-widget-panel"><b>Widgets Library</b><span class="preview-photo"></span><span class="preview-lines"></span><span class="preview-lines short"></span><span class="preview-calendar"></span></div><div class="preview-taskbar"></div>`
  if (skin === 'rainbow-desktop') return `<div class="preview-wallpaper"></div><div class="preview-rainbow-window"><b>Creative space</b>${dots}<span></span></div><div class="preview-dock">${dots}</div>`
  if (skin === 'blue-start') return `<div class="preview-wallpaper"></div><div class="preview-start-panel"><span></span><b>⌕ Type here to search</b>${dots}</div><div class="preview-taskbar"></div>`
  if (skin === 'linux-terminal') return `<div class="preview-wallpaper city"></div><div class="preview-terminal">$ neofetch<br><br>Window / Arch / Linux<br>────────────<br>cpu  12 cores<br>mem  6.8G / 16G</div><div class="preview-files">/ Documents<br>▸ Projects<br>▸ config.json<br>▸ notes.txt</div><div class="preview-chart">▂▅▂▇▃▆</div>`
  if (skin === 'endeavour') return `<div class="preview-wallpaper neon"></div><div class="preview-capture">◉ Capture<br><br>◉ Audio<br>──────</div><div class="preview-start-panel dark"><b>⌕ Type to search</b>${dots}</div><div class="preview-performance">Performance<br><b>CPU 3%</b><br>RAM 68%</div><div class="preview-taskbar dark"></div>`
  if (skin === 'purple-dev') return `<div class="preview-wallpaper purple"></div><div class="preview-code">$ ./build.sh<br><span>import { window12 }</span><br>const glow = true<br>────────────<br>✓ compiled</div><div class="preview-code right">processes<br>cpu  24%<br>mem  42%<br>disk 61%</div><div class="preview-chart purple-chart">▂▇▃▆▅▂▇</div>`
  if (skin === 'gnome') return `<div class="preview-wallpaper dark"></div><div class="preview-search">⌕ Type to search</div><div class="preview-workspaces">▣ ▣ ▣</div><div class="preview-editor">code / projects<br><span>function hello()</span><br>return window12</div><div class="preview-dock">${dots}</div>`
  return `<div class="preview-wallpaper mac"></div><div class="preview-mac-window"><b>Window 12</b><span></span><span></span><span></span></div><div class="preview-dock mac-dock">${dots}</div>`
}

function renderStore() { const items = [['Cloud Clipboard', '☁', 'Syncs your clipboard across all 14 devices.', 'cloud', '#84d8ef'], ['News & Vibes', '▥', 'Breaking news. Unbreaking opinions.', 'news', '#ffb26b'], ['Game Hub', '✚', 'A launcher for games you almost play.', 'gamehub', '#d9a5ff'], ['Orbit Browser', '◎', 'The fastest way to open 39 tabs.', 'browser', '#9cb7ff']]; return `<div class="store-app"><div class="store-banner"><div><span class="eyebrow">FEATURED DROP / 12.04</span><h2>Apps you didn't ask for.<br><em>Now in one place.</em></h2><p>Every Window 12 install comes with a generous helping of “essentials.”</p></div><div class="store-shape">▤<small>+14</small></div></div><div class="store-heading"><div><span class="eyebrow">RECOMMENDED FOR YOU</span><h3>Must-have-ish</h3></div><span class="store-count">14 available</span></div><div class="store-grid">${items.map(([name, icon, desc, id, color]) => `<article class="store-item"><div class="store-item-top"><span class="app-icon" style="color:${color};background:${color}18">${icon}</span><span class="download">↓</span></div><strong>${name}</strong><p>${desc}</p><footer><small>12 MB · Bloatware</small><button data-app="${id}">Open</button></footer></article>`).join('')}</div></div>` }
function renderSettings() { return `<div class="settings-app"><aside class="settings-nav"><span class="eyebrow">CONTROL ROOM</span>${['System', 'Personalization', 'Privacy', 'Updates', 'About'].map((item, index) => `<button class="${index === 0 ? 'selected' : ''}"><span>${['⌁', '✦', '◌', '↻', 'ⓘ'][index]}</span>${item}</button>`).join('')}</aside><section class="settings-content"><span class="eyebrow">SYSTEM / OVERVIEW</span><h2>Make it yours.</h2><p class="settings-lead">Window 12 is already opinionated. These switches help it mind its own business.</p><div class="settings-list">${settingRow('Helpful nudges', 'Show the occasional suggestion for an app you already have.', 'autoUpdate')}${settingRow('Telemetry (not really)', 'Share anonymous imaginary usage with absolutely nobody.', 'telemetry')}${settingRow('Compact mode', 'Tighten the desktop when your screen feels crowded.', 'compact')}</div><div class="settings-about"><span>WINDOW 12</span><b>12.0.0 · AURORA</b><small>Pure HTML, CSS, and JavaScript. No backend required.</small></div></section></div>` }
function settingRow(title, description, key) { return `<div class="setting-row"><div><strong>${title}</strong><p>${description}</p></div><button class="toggle ${state.settings[key] ? 'on' : ''}" data-setting="${key}"><i></i></button></div>` }
function renderMonitor() { return `<div class="monitor-app"><div class="monitor-summary"><div><span class="eyebrow">SYSTEM HEALTH</span><h2>Steady as a desktop.</h2><p>Nothing suspicious, except the amount of preinstalled software.</p></div><div class="health-ring"><strong>92</strong><small>HEALTH</small></div></div><div class="monitor-metrics">${metric('CPU', '28%', '4 cores nominal', '#78e2ff')}${metric('MEMORY', '6.8 GB', 'of 16 GB allocated', '#d9a5ff')}${metric('STORAGE', '61%', '61.2 GB / 100 GB', '#f3c969')}</div><div class="process-panel"><div class="section-heading"><div><span class="eyebrow">TOP PROCESSES</span><h3>Who is doing what</h3></div><span class="tiny-live">● LIVE</span></div>${[['window-shell', 'Core desktop shell', '12.4%'], ['bloatware-orchestrator', 'Keeping things “helpful”', '8.8%'], ['orbit-browser', '39 tabs (you know who you are)', '4.2%'], ['cloud-sync-ish', 'Waiting patiently', '1.7%']].map((row) => `<div class="process-row"><span class="process-dot"></span><div><strong>${row[0]}</strong><small>${row[1]}</small></div><b>${row[2]}</b></div>`).join('')}</div></div>` }
function metric(label, value, detail, color) { return `<div class="metric"><div><span>${label}</span><b>${value}</b></div><i style="background:${color};width:${value === '6.8 GB' ? '42%' : value}"></i><small>${detail}</small></div>` }
function renderBrowser() { return `<div class="browser-app"><div class="browser-tabs"><span class="browser-tab active">◉ New tab <b>×</b></span><button>＋</button></div><div class="browser-toolbar"><button>‹</button><button>›</button><button>↻</button><div class="address-bar"><span>⌕</span>window://fresh-start <span class="secure">◈</span></div><button>⋮</button></div><div class="browser-home"><span class="browser-logo">◎</span><h2>Orbit the web.</h2><p>A calm start page for an aggressively tabbed life.</p><div class="browser-search">⌕ <span>Search the imaginary internet</span><b>↵</b></div><div class="browser-links"><span>◈ Weather</span><span>▤ News</span><span>✦ Reading list</span><span>＋ Add shortcut</span></div></div></div>` }
function renderNews() { return `<div class="news-app"><div class="news-header"><div><span class="eyebrow">YOUR BRIEFING / THU</span><h2>News & Vibes</h2></div><span class="weather-pill">☼ 22° Aurora</span></div><div class="news-grid"><article class="news-feature"><span class="news-tag">WINDOW 12 CULTURE</span><h3>Local desktop achieves perfect balance between calm and chaos</h3><p>Experts say the secret is a tasteful amount of glow and exactly 14 unnecessary apps.</p><small>4 min read · Just now</small></article><article><span class="news-tag orange">TECH</span><h3>The tiny command that could</h3><p>Why everyone is typing <code>neofetch</code> today.</p><small>2 min read</small></article><article><span class="news-tag cyan">WEATHER</span><h3>Clear skies, scattered widgets</h3><p>Expect pleasant gradients throughout the afternoon.</p><small>1 min read</small></article></div></div>` }
function renderCloud() { return `<div class="cloud-app"><div class="cloud-hero"><span class="cloud-symbol">☁</span><div><span class="eyebrow">SKYDRIVE-ISH</span><h2>All your files.<br><em>Mostly in the sky.</em></h2><p>Your imaginary sync is looking healthy.</p></div><div class="sync-score"><strong>98%</strong><small>SYNCED</small></div></div><div class="cloud-folders">${[['▤', 'Documents', '12 items'], ['▧', 'Pictures', '48 items'], ['◒', 'Projects', '7 items'], ['⇩', 'Downloads', '23 items']].map((row) => `<div><span>${row[0]}</span><strong>${row[1]}</strong><small>${row[2]}</small></div>`).join('')}</div><div class="cloud-footer"><span class="status-dot"></span> Last synced just now <button class="text-button">Sync now ↻</button></div></div>` }
function renderGameHub() { return `<div class="gamehub-app"><div class="game-hero"><div><span class="eyebrow">GAME HUB / FEATURED</span><h2>Play something<br><em>almost instantly.</em></h2><p>Updates may apply. Snacks recommended.</p><button class="primary-button">Launch queue ↗</button></div><div class="game-cube">✚</div></div><div class="game-list">${[['Neon Solitaire', '◈', 'Casual · 12 MB', 'PLAY', 'purple'], ['Cloud Racer 12', '✦', 'Arcade · 1.2 GB', 'UPDATE', 'pink'], ['Desktop Defender', '◉', 'Strategy · 480 MB', 'PLAY', 'blue']].map((row) => `<div><span class="game-cover ${row[4]}">${row[1]}</span><section><strong>${row[0]}</strong><small>${row[2]}</small></section><button>${row[3]}</button></div>`).join('')}</div></div>` }

const installSteps = [['Preparing your tiny hard drive', 'Checking imaginary hardware and finding 12.4 GB of vibes.'], ['Copying personality files', 'Installing helpful nudges, tasteful gradients, and one weather widget.'], ['Waking up the bloatware', 'Negotiating with 14 preinstalled apps. They all said yes.'], ['Polishing the desktop', 'Adding a little glow to every corner of your new OS.']]

function openApp(id) { state.activeApp = id; state.startOpen = false; render() }
function logout() { state.activeApp = null; state.startOpen = false; state.screen = 'login'; render() }
function startInstall() { state.installing = true; state.stage = 0; render(); const timer = setInterval(() => { if (state.stage >= installSteps.length - 1) { clearInterval(timer); localStorage.setItem('window12_installed', 'true'); state.installing = false; state.screen = 'login'; render() } else { state.stage += 1; render() } }, 1050) }
function login() { state.profile = state.profile.trim() || 'Alex'; localStorage.setItem('window12_user', state.profile); state.screen = 'desktop'; render() }

function runCommand(raw) {
  const input = raw.trim(); if (!input) return
  const [command, ...args] = input.split(/\s+/); const normalized = command.toLowerCase(); const response = []
  state.history = [...state.history.slice(-24), input]
  const path = userHome()
  if (normalized === 'clear') { state.terminalLines = []; state.terminalInput = ''; render(); return }
  if (normalized === 'help') { const term = args.join(' ').toLowerCase(); const matches = term ? commandRegistry.filter((item) => item.name.includes(term) || item.category.includes(term)) : coreCommands; response.push(term ? `Search results for “${term}” · ${matches.length} matches` : 'Core commands · try help <keyword> for the full catalog'); matches.slice(0, 12).forEach((item) => response.push(`  ${item.name.padEnd(23)} ${item.description}`)); if (matches.length > 12) response.push(`  … and ${(matches.length - 12).toLocaleString()} more commands`) }
  else if (normalized === 'echo') response.push(args.join(' '))
  else if (normalized === 'pwd') response.push(path)
  else if (normalized === 'whoami') response.push(`${state.profile.toLowerCase()} · local administrator`)
  else if (normalized === 'date') response.push(new Date().toString())
  else if (normalized === 'ls' || normalized === 'dir') { const entries = state.files.filter((file) => file.path.startsWith(path + '/') && file.path.slice(path.length + 1).split('/').length === 1); response.push(...entries.map((file) => `${file.type === 'folder' ? '▸' : '·'} ${file.path.split('/').pop()}`)); if (!entries.length) response.push('(empty directory)') }
  else if (normalized === 'cat' || normalized === 'type') { const target = args[0] ? (args[0].startsWith('/') ? args[0] : `${path}/${args[0]}`) : ''; const file = state.files.find((item) => item.path === target); response.push(file?.content ?? (file ? `[${file.type}]` : `cat: ${target || '(missing path)'}: no such file`)) }
  else if (normalized === 'touch' || normalized === 'mkdir') { const folder = normalized === 'mkdir'; const target = args[0] ? (args[0].startsWith('/') ? args[0] : `${path}/${args[0]}`) : `${path}/${folder ? 'new-folder' : 'untitled.txt'}`; if (!state.files.some((file) => file.path === target)) state.files.push({ path: target, type: folder ? 'folder' : 'file', content: folder ? undefined : '', size: folder ? undefined : '0 B', modified: today() }); saveState(); response.push(`created ${folder ? 'directory' : ''} ${target}`.replace('  ', ' ')) }
  else if (normalized === 'write') { const target = args[0] ? (args[0].startsWith('/') ? args[0] : `${path}/${args[0]}`) : `${path}/note.txt`; const content = args.slice(1).join(' ') || 'Window 12 was here.'; const existing = state.files.find((file) => file.path === target); if (existing) Object.assign(existing, { content, size: `${content.length} B`, modified: today() }); else state.files.push({ path: target, type: 'file', content, size: `${content.length} B`, modified: today() }); saveState(); response.push(`wrote ${content.length} characters to ${target}`) }
  else if (normalized === 'rm' || normalized === 'del') { const target = args[0] ? (args[0].startsWith('/') ? args[0] : `${path}/${args[0]}`) : ''; const before = state.files.length; state.files = state.files.filter((file) => file.path !== target && !file.path.startsWith(`${target}/`)); saveState(); response.push(before === state.files.length ? `rm: ${target || '(missing path)'}: no such file` : `removed ${target}`) }
  else if (normalized === 'apps') response.push(...appCatalog.map((app) => `${app.icon} ${app.name} · ${app.kicker.toLowerCase()}`))
  else if (normalized === 'open') { const target = args.join(' ').toLowerCase(); const app = appCatalog.find((item) => item.id === target || item.name.toLowerCase() === target || item.name.toLowerCase().includes(target)); if (app) { openApp(app.id); response.push(`opened ${app.name}`) } else response.push(`open: ${target || '(missing app)'}: not found · try apps`) }
  else if (normalized === 'install') response.push(`package manager: staged ${args[0] || 'window12-demo.app'} · no license required`)
  else if (normalized === 'neofetch' || normalized === 'sysinfo') response.push('        ▄▄▄▄▄▄▄    WINDOW 12', '       ▐  ◉  ▌   Prototype OS', '       ▐▄▄▄▄▄▌   Aurora shell / browser edition', '', ` user     ${state.profile.toLowerCase()}`, ' memory   6.8 GB / 16 GB', ' display  2560 × 1440 · Aurora', ` catalog  ${commandRegistry.length.toLocaleString()} commands`)
  else if (normalized === 'calc') { const expression = args.join(''); if (/^[0-9+\-*/().\s]+$/.test(expression) && expression) { try { response.push(`= ${Function(`return (${expression})`)()}`) } catch { response.push('calc: could not evaluate that expression') } } else response.push('calc: use numbers and + - * / ( )') }
  else if (normalized === 'history') response.push(...state.history.slice(-12).map((item, index) => `${index + 1}  ${item}`))
  else if (normalized === 'logout' || normalized === 'reboot') { response.push(normalized === 'logout' ? 'Signing out of Window 12…' : 'Rebooting into the login experience…'); setTimeout(logout, 300) }
  else { const known = commandRegistry.find((item) => item.name === normalized); if (known) response.push(`✓ ${known.name} accepted · ${known.description}`, '  Prototype module returned a healthy signal.'); else response.push(`${command}: command not found · try help or apps`) }
  state.terminalLines = [...state.terminalLines, `user@window12:${path}$ ${input}`, ...response, '']; state.terminalInput = ''; render()
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action], [data-app], [data-file], [data-command], [data-setting], [data-gallery]')
  if (!target) return
  if (target.dataset.app) return openApp(target.dataset.app)
  if (target.dataset.file) { state.selectedFile = target.dataset.file; return render() }
  if (target.dataset.command) { return runCommand(target.dataset.command) }
  if (target.dataset.setting) { state.settings[target.dataset.setting] = !state.settings[target.dataset.setting]; return render() }
  if (target.dataset.gallery) { state.gallerySelection = target.dataset.gallery; return render() }
  if (target.dataset.action === 'start') { state.startOpen = !state.startOpen; return render() }
  if (target.dataset.action === 'close') { state.activeApp = null; return render() }
  if (target.dataset.action === 'install') return startInstall()
  if (target.dataset.action === 'login') return login()
  if (target.dataset.action === 'logout') return logout()
  if (target.dataset.action === 'gallery-desktop') { state.activeApp = null; return render() }
})

document.addEventListener('input', (event) => {
  const target = event.target
  if (target.dataset.input === 'profile') state.profile = target.value
  if (target.dataset.input === 'search') { state.search = target.value; const cursor = target.selectionStart; render(); const next = document.querySelector('[data-input="search"]'); if (next) { next.focus(); next.setSelectionRange(cursor, cursor) } }
  if (target.dataset.input === 'terminal') state.terminalInput = target.value
})
document.addEventListener('keydown', (event) => { if (event.key === 'Enter' && event.target.dataset.input === 'profile') login() })
document.addEventListener('submit', (event) => { if (event.target.dataset.form === 'terminal') { event.preventDefault(); runCommand(state.terminalInput) } })

render()
setTimeout(() => { if (state.screen === 'boot') { state.screen = localStorage.getItem('window12_installed') === 'true' ? 'login' : 'install'; render() } }, 900)
