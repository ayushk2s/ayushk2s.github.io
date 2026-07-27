import { PROFILE, SKILLS, PROJECTS, RESEARCH, SOCIALS, NAV } from './data.js';
import { icon } from './icons.js';

/* ---------------- Nav ---------------- */
function renderNav() {
  const desktop = document.getElementById('nav-desktop');
  const mobile = document.getElementById('nav-mobile');
  const links = NAV.map(n => `<a href="${n.href}" data-nav="${n.href}">${n.label}</a>`).join('');
  desktop.innerHTML = links;
  mobile.innerHTML = links;
}

function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const toggleIcon = document.getElementById('nav-toggle-icon');
  const mobile = document.getElementById('nav-mobile');
  const syncIcon = (open) => { toggleIcon.innerHTML = icon(open ? 'close' : 'menu'); };
  syncIcon(false);
  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    syncIcon(open);
  });
  mobile.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobile.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      syncIcon(false);
    }
  });
}

function setupActiveNavOnScroll() {
  const sections = ['home', ...NAV.map(n => n.href.slice(1))]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = () => document.querySelectorAll('[data-nav]');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks().forEach(a => a.classList.toggle('active', a.getAttribute('data-nav') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => obs.observe(s));
}

/* ---------------- Hero ---------------- */
function renderHero() {
  document.getElementById('hero-role').textContent = PROFILE.role;
  document.querySelector('.hero-tagline').textContent = PROFILE.tagline;

  const visual = document.getElementById('hero-visual');
  visual.innerHTML = `
    <img src="assets/photo.jpg" alt="Portrait of ${PROFILE.name}" loading="lazy" />
    <div class="visual-scrim"></div>
    <div class="visual-cta">
      ${icon('play3d', 'icon-inline')}
      <span class="label">Tap to explore the interactive 3D model</span>
    </div>
  `;
  visual.addEventListener('click', openModelModal);
}

/* ---------------- About ---------------- */
function renderAbout() {
  document.getElementById('about-bio').textContent = PROFILE.bio;
  const stats = document.getElementById('about-stats');
  stats.innerHTML = PROFILE.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ---------------- Skills ---------------- */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card reveal" style="transition-delay:${i * 40}ms" tabindex="0">
      <div class="skill-card-inner">
        <div class="skill-face front">
          ${icon(s.icon, 'icon-inline')}
          <span class="name">${s.name}</span>
        </div>
        <div class="skill-face back">
          <span class="name">${s.name}</span>
          <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
          <span class="pct">${s.level}%</span>
        </div>
      </div>
    </div>
  `).join('');

  // Touch support: tap to flip
  grid.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // Animate bar fill once visible
  const bars = grid.querySelectorAll('.skill-bar-fill');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.level + '%';
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => obs.observe(b));
}

/* ---------------- Projects ---------------- */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map((p, i) => {
    const tags = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const inner = `
      <div class="project-title-row">
        <h3 class="project-title">${p.title}</h3>
        ${p.link ? `<span class="project-link-icon">${icon('external')}</span>` : ''}
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${tags}</div>
    `;
    const cls = 'glass-card project-card reveal';
    const delay = `style="transition-delay:${i * 50}ms"`;
    return p.link
      ? `<a class="${cls}" href="${p.link}" target="_blank" rel="noopener" ${delay}>${inner}</a>`
      : `<div class="${cls}" ${delay}>${inner}</div>`;
  }).join('');
}

/* ---------------- Research ---------------- */
function renderResearch() {
  const list = document.getElementById('research-list');
  list.innerHTML = RESEARCH.map((r, i) => `
    <div class="glass-card research-card reveal" style="transition-delay:${i * 60}ms">
      <span class="research-venue">${icon('spark', 'icon-inline')} ${r.venue} · ${r.date}</span>
      <h3 class="research-title">${r.title}</h3>
      <p class="research-meta">${r.authors}</p>
      <p class="research-abstract clamped">${r.abstract}</p>
      <button class="research-toggle" data-expand>Read full abstract</button>
      <div class="research-keywords">
        ${r.keywords.map(k => `<span class="project-tag">${k}</span>`).join('')}
      </div>
      <div class="research-links">
        ${r.links.map(l => `<a class="btn btn-ghost" href="${l.href}" target="_blank" rel="noopener">${l.label} ${icon('external', 'icon-inline')}</a>`).join('')}
      </div>
    </div>
  `).join('');

  list.querySelectorAll('[data-expand]').forEach(btn => {
    btn.addEventListener('click', () => {
      const abstract = btn.previousElementSibling;
      const clamped = abstract.classList.toggle('clamped');
      btn.textContent = clamped ? 'Read full abstract' : 'Show less';
    });
  });
}

/* ---------------- Contact / Socials ---------------- */
function renderSocials() {
  const row = document.getElementById('social-row');
  row.innerHTML = SOCIALS.map(s => `
    <a class="social-btn" href="${s.href}" target="_blank" rel="noopener">
      ${icon(s.icon, 'icon-inline')} ${s.label}
    </a>
  `).join('');

  const footer = document.getElementById('footer-socials');
  footer.innerHTML = SOCIALS.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${icon(s.icon)}</a>
  `).join('');
}

/* ---------------- Reveal on scroll ---------------- */
function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---------------- Floating bot ---------------- */
function setupBot() {
  const fab = document.getElementById('bot-fab');
  const panel = document.getElementById('bot-panel');
  const closeBtn = document.getElementById('bot-close');
  fab.innerHTML = icon('bot');
  document.querySelector('.bot-panel-icon').innerHTML = icon('bot');

  const setOpen = (open) => {
    panel.hidden = !open;
    fab.setAttribute('aria-expanded', String(open));
  };
  fab.addEventListener('click', () => setOpen(panel.hidden));
  closeBtn.addEventListener('click', () => setOpen(false));
  panel.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
      setOpen(false);
      document.querySelector(btn.dataset.goto)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.addEventListener('click', (e) => {
    if (!panel.hidden && !panel.contains(e.target) && e.target !== fab && !fab.contains(e.target)) {
      setOpen(false);
    }
  });
}

/* ---------------- Scroll cue icon ---------------- */
function renderStaticIcons() {
  document.querySelector('.scroll-cue span').innerHTML = icon('chevron');
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = icon(el.dataset.icon);
  });
}

/* ---------------- 3D model modal (lazy-loaded) ---------------- */
let modelViewerLoaded = false;
function loadModelViewerScript() {
  if (modelViewerLoaded) return Promise.resolve();
  modelViewerLoaded = true;
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.type = 'module';
    s.src = 'https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js';
    s.onload = resolve;
    document.head.appendChild(s);
  });
}

function openModelModal() {
  const modal = document.getElementById('model-modal');
  const mv = document.getElementById('model-viewer-el');
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  loadModelViewerScript().then(() => {
    if (!mv.getAttribute('src')) mv.setAttribute('src', 'assets/models/Ayush.glb');
  });
}

function closeModelModal() {
  document.getElementById('model-modal').hidden = true;
  document.body.style.overflow = '';
}

function setupModelModal() {
  document.getElementById('model-close').addEventListener('click', closeModelModal);
  document.getElementById('model-modal').addEventListener('click', (e) => {
    if (e.target.id === 'model-modal') closeModelModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModelModal();
  });
}

/* ---------------- Particle field ---------------- */
function setupParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, dots = [];
  const DOT_COUNT = 46;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function init() {
    dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      sx: (Math.random() - 0.5) * 0.15,
      sy: (Math.random() - 0.5) * 0.15,
      o: 0.15 + Math.random() * 0.35,
    }));
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    dots.forEach(d => {
      d.x += d.sx; d.y += d.sy;
      if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 230, 255, ${d.o})`;
      ctx.fill();
    });
    if (!reduceMotion) requestAnimationFrame(tick);
  }
  resize(); init();
  window.addEventListener('resize', () => { resize(); init(); });
  tick();
  if (reduceMotion) { ctx.clearRect(0, 0, w, h); dots.forEach(d => {
    ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 230, 255, ${d.o})`; ctx.fill();
  }); }
}

/* ---------------- Init ---------------- */
document.getElementById('year').textContent = new Date().getFullYear();

renderNav();
renderHero();
renderAbout();
renderSkills();
renderProjects();
renderResearch();
renderSocials();
renderStaticIcons();

setupHeaderScroll();
setupMobileNav();
setupActiveNavOnScroll();
setupReveal();
setupBot();
setupModelModal();
setupParticles();
