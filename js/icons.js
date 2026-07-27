// Minimal hand-authored stroke-icon set (no external icon font / CDN dependency).
const wrap = (inner, vb = 24) =>
  `<svg viewBox="0 0 ${vb} ${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const ICONS = {
  code: wrap('<path d="M8 4 2 12l6 8M16 4l6 8-6 8"/>'),
  cpu: wrap('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'),
  settings: wrap('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
  robot: wrap('<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="9" cy="14.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="14.5" r="1.2" fill="currentColor" stroke="none"/><path d="M12 9V5M9 5h6M12 2v1"/><path d="M2 13h2M20 13h2"/>'),
  cube: wrap('<path d="M21 16V8a2 2 0 0 0-1-1.73l-6-3.5a2 2 0 0 0-2 0l-6 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l6 3.5a2 2 0 0 0 2 0l6-3.5A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12l8.73-5.04M12 22.08V12"/>'),
  chart: wrap('<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-4"/>'),
  mobile: wrap('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>'),
  terminal: wrap('<polyline points="4 6 10 12 4 18"/><path d="M12 18h8"/>'),
  wrench: wrap('<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l-6 6a2 2 0 1 0 2.83 2.83l6-6a4 4 0 0 0 5.4-5.4l-2.65 2.65-2.83-2.83z"/>'),
  trending: wrap('<polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/>'),
  mail: wrap('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>'),
  github: wrap('<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>'),
  linkedin: wrap('<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4.5a2.5 2.5 0 0 1 5 0V17M12 17v-7"/>'),
  x: wrap('<path d="M4 4l16 16M20 4 4 20"/>'),
  instagram: wrap('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'),
  threads: wrap('<circle cx="12" cy="12" r="9"/><path d="M9 8.5c1-.7 4.5-1.2 5.5 1.5.8 2.1-.3 3.6-2 3.9-1.8.3-3-.6-3-2 0-1.6 1.7-2.4 4-2 2 .3 3 1.6 2.8 3.4-.2 2.3-2.3 4-5 3.9"/>'),
  snapchat: wrap('<path d="M12 3c3 0 4.5 2.3 4.4 4.8-.05 1 0 1.7.15 2.2.5-.05 1.3-.35 1.75-.05.4.27.4.85-.15 1.2-.4.27-1.1.5-1.5.85-.15.55.6 1.55 2.35 2.1-.05.5-.6.85-1.4 1-.15.35 0 .85-.35 1.05-.4.22-1.15 0-1.85.2-.6.17-1.1.9-2.4.9s-1.8-.73-2.4-.9c-.7-.2-1.45 0-1.85-.2-.35-.2-.2-.7-.35-1.05-.8-.15-1.35-.5-1.4-1 1.75-.55 2.5-1.55 2.35-2.1-.4-.35-1.1-.58-1.5-.85-.55-.35-.55-.93-.15-1.2.45-.3 1.25 0 1.75.05.15-.5.2-1.2.15-2.2C7.5 5.3 9 3 12 3z"/>'),
  external: wrap('<path d="M7 17 17 7M8 7h9v9"/>'),
  send: wrap('<path d="m22 2-7 20-4-9-9-4 20-7z"/>'),
  menu: wrap('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  close: wrap('<path d="M18 6 6 18M6 6l12 12"/>'),
  bot: wrap('<rect x="4" y="8" width="16" height="12" rx="3"/><circle cx="9" cy="14" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M12 8V4M9 4h6"/>'),
  chevron: wrap('<polyline points="6 9 12 15 18 9"/>'),
  arrowUp: wrap('<path d="M7 17 17 7M7 7h10v10"/>'),
  spark: wrap('<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>'),
  play3d: wrap('<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none"/>'),
};

export function icon(name, cls = '') {
  return `<span class="icon ${cls}" aria-hidden="true">${ICONS[name] || ''}</span>`;
}
