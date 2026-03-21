// =========================
// DATA: Proyectos reales
// =========================
const projects = [
  {
    id: "p1",
    title: "DespedidaApp",
    description: "App Android para la despedida de soltero de un amigo. Roles diferenciados (amigos/novio), mapa de España con pruebas geolocalizadas, cámara integrada con guardado en galería y chat interno en tiempo real.",
    tags: ["Android", "Firebase", "Roles"],
    stacks: ["Kotlin", "Firebase", "Maps"],
    status: "terminado",
    image: "",
    featured: false,
    highlights: [
      "Autenticación con roles diferenciados",
      "Mapa interactivo con pruebas geolocalizadas",
      "Chat interno en tiempo real (Firebase)",
      "Cámara + guardado en galería del dispositivo"
    ],
    links: {
      repo: "https://github.com/albertopt-dev/DespedidaApp",
      demo: ""
    }
  },

  {
    id: "p2",
    title: "Web Rehabilitación Funcional",
    description: "Web para un profesional de rehabilitación funcional. Muestra servicios, catálogo de libros, formulario de contacto y blog. Proyecto real para cliente real — actualmente en desarrollo activo.",
    tags: ["Web", "Cliente real", "En desarrollo"],
    stacks: ["HTML", "CSS", "JavaScript"],
    status: "en-proceso",
    image: "",
    featured: false,
    highlights: [],
    links: {
      repo: "https://github.com/albertopt-dev/Web-cliente",
      demo: ""
    }
  },

  {
    id: "coming2",
    title: "Próximamente",
    description: "Explorando nuevas ideas. En construcción.",
    tags: [], stacks: [], image: "", featured: false, highlights: [],
    status: "coming",
    links: { repo: "", demo: "" }
  }
];

// =========================
// DATA: Labs / Taller
// =========================
const labs = [
  {
    title: "ObjetivosApp",
    description: "App personal para gestionar objetivos diarios, semanales y anuales con autenticación propia.",
    detail: {
      intro: "Una app construida para uso real y diario. Diseñada con React Native y Firebase, cada usuario tiene su propio espacio privado donde ningún dato es compartido.",
      features: [
        { icon: "📅", title: "Calendario inteligente", desc: "Vista mensual con marcadores visuales en los días con objetivos programados. Navega por meses y semanas de un vistazo." },
        { icon: "🎯", title: "Objetivos por período", desc: "Crea objetivos diarios, semanales, mensuales o anuales. Los semanales y mensuales admiten subobjetivos para desglosar el progreso." },
        { icon: "🎨", title: "Código de colores", desc: "Asigna un color a cada objetivo para identificarlos visualmente. Vista previa en tiempo real al crear o editar." },
        { icon: "📊", title: "Estadísticas detalladas", desc: "Panel con tasa de éxito, racha actual, mejor racha, objetivos por prioridad y tendencias de los últimos 7 y 30 días." },
        { icon: "🔔", title: "Prioridad y notificaciones", desc: "Marca cada objetivo como Baja, Media o Alta prioridad. Sistema de notificaciones integrado para no olvidar ninguno." },
        { icon: "🔐", title: "Autenticación propia", desc: "Cada usuario se registra e inicia sesión con su cuenta. Los datos son completamente privados — nadie más puede verlos." }
      ],
      stack: ["React Native", "Firebase Auth", "Firestore", "Expo"]
    },
    iconClasses: [
      "devicon-react-original colored",
      "devicon-firebase-plain colored"
    ],
    images: [
      "assets/proyectos/ObjetivosApp/objetivos-01.png",
      "assets/proyectos/ObjetivosApp/objetivos-02.png",
      "assets/proyectos/ObjetivosApp/objetivos-03.png",
      "assets/proyectos/ObjetivosApp/objetivos-04.png",
      "assets/proyectos/ObjetivosApp/objetivos-05.png",
      "assets/proyectos/ObjetivosApp/objetivos-06.png",
      "assets/proyectos/ObjetivosApp/objetivos-07.png"
    ],
    video: "assets/proyectos/ObjetivosApp/objetivos-video.mp4",
    links: { repo: "https://github.com/albertopt-dev/ObjetivosApp" }
  },
  {
    title: "Presupuesto Mensual",
    description: "App personal para control de finanzas: ingresos, ahorro, desglose de gastos por categoría y estadísticas visuales. Hecha por necesidad propia, no por encargo.",
    iconClasses: [
      "devicon-kotlin-plain colored",
      "devicon-android-plain colored"
    ],
    links: { repo: "https://github.com/albertopt-dev/Presupuesto-mensual" }
  },
  {
    title: "Chatbot IA — Asistente técnico",
    description: "Experimento para crear un asistente que responda dudas de programación integrando la API de Claude. Explorando cómo conectar LLMs con aplicaciones reales. Por el momento, es una idea pero tengo previsión de realizarlo próximamente.",
    iconClasses: [
      "devicon-java-plain colored",
      "devicon-javascript-plain colored"
    ],
    links: { repo: "https://github.com/albertopt-dev" }
  }
];

// =========================
// DATA: Skills
// =========================
const skills = [
  { name: "Java",        iconClass: "devicon-java-plain colored" },
  { name: "Kotlin",      iconClass: "devicon-kotlin-plain colored" },
  { name: "JavaScript",  iconClass: "devicon-javascript-plain colored" },
  { name: "MySQL",       iconClass: "devicon-mysql-plain colored" },
  { name: "Firebase",    iconClass: "devicon-firebase-plain colored" },
  { name: "WordPress",   iconClass: "devicon-wordpress-plain colored" },
  { name: "Laravel",     iconClass: "devicon-laravel-plain colored" },
  { name: "PHP",         iconClass: "devicon-php-plain colored" },
  { name: "Postman",     iconClass: "devicon-postman-plain colored" },
  { name: "Spring",      iconClass: "devicon-spring-plain colored" },
  { name: "HTML5",       iconClass: "devicon-html5-plain colored" },
  { name: "CSS3",        iconClass: "devicon-css3-plain colored" },
  { name: "Git",         iconClass: "devicon-git-plain colored" },
  { name: "Android",     iconClass: "devicon-android-plain colored" },
  { name: "React", iconClass: "devicon-react-original colored" },
];

// =========================
// RENDER: Projects
// =========================
function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  grid.innerHTML = projects.map((p) => {
    if (p.status === "coming") {
      return `
        <article class="project-card project-card--coming">
          <div class="project-card__coming-inner">
            <span class="coming-icon">🚧</span>
            <h3 class="project-card__title">Próximamente</h3>
            <p class="project-card__desc">Nuevo proyecto en desarrollo personal. Vuelve pronto.</p>
          </div>
        </article>`;
    }

    const initials = p.title.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase();
    const featuredBadge = p.featured ? `<span class="project-card__featured-badge">⭐ Destacado</span>` : "";
    const wipBadge = p.status === "en-proceso" ? `<span class="project-card__wip-badge">🔧 En desarrollo</span>` : "";
    const statusBadge = p.status === "terminado"
      ? `<span class="project-card__status status--done">✓ Terminado</span>`
      : "";

    return `
      <article class="project-card${p.featured ? ' project-card--featured' : ''}">
        <div class="project-card__media">
          ${p.image
            ? `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" />`
            : `<div class="project-card__placeholder">${initials}</div>`
          }
          ${featuredBadge}${wipBadge}${statusBadge}
        </div>

        <div class="project-card__body">
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>

          <div class="project-card__tags">
            ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join("")}
            ${p.stacks.map(s => `<span class="project-card__tag project-card__tag--stack">${s}</span>`).join("")}
          </div>

          <div class="project-card__actions">
            <button class="lab-card__btn" type="button" data-id="${p.id}">Ver detalles</button>
            ${p.links.repo ? `<a class="btn btn--primary" href="${p.links.repo}" target="_blank" rel="noopener">Repo</a>` : `<span></span>`}
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".lab-card__btn").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.id));
  });
}

// =========================
// MODAL
// =========================
function openProjectModal(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  const modal    = document.getElementById("projectModal");
  const title    = document.getElementById("modalTitle");
  const desc     = document.getElementById("modalDesc");
  const tags     = document.getElementById("modalTags");
  const actions  = document.getElementById("modalActions");
  const media    = document.getElementById("modalMedia");

  title.textContent = p.title;
  desc.textContent  = p.description;

  tags.innerHTML = [
    ...p.tags.map(t  => `<span class="tag">${t}</span>`),
    ...p.stacks.map(s => `<span class="tag">${s}</span>`)
  ].join("");

  if (p.image) {
    media.innerHTML = `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" />`;
  } else {
    media.innerHTML = `<div class="project-card__placeholder" style="height:100%;">${p.title}</div>`;
  }

  // Highlights si existen
  const highlightsEl = document.getElementById("modalHighlights");
  if (highlightsEl) {
    if (p.highlights && p.highlights.length > 0) {
      highlightsEl.innerHTML = `
        <ul class="modal__highlights">
          ${p.highlights.map(h => `<li>▸ ${h}</li>`).join("")}
        </ul>`;
      highlightsEl.style.display = "block";
    } else {
      highlightsEl.style.display = "none";
    }
  }

  actions.innerHTML = `
    ${p.links.demo ? `<a class="btn btn--primary" href="${p.links.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
    ${p.links.repo ? `<a class="btn btn--ghost"    href="${p.links.repo}"  target="_blank" rel="noopener">Ver en GitHub</a>` : ""}
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", onEscClose);
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onEscClose);
}

function onEscClose(e) {
  if (e.key === "Escape") closeProjectModal();
}

// =========================
// RENDER: Labs
// =========================
function renderLabs() {
  const grid = document.getElementById("labsGrid");

  grid.innerHTML = labs.map((lab, labIdx) => {
    const hasImages = lab.images && lab.images.length > 0;
    const hasVideo  = !!lab.video;
    const hasDetail = !!lab.detail;

    const thumbnail = hasVideo
      ? `<video class="lab-thumb__video" autoplay muted loop playsinline>
           <source src="${lab.video}" type="video/mp4">
         </video>`
      : hasImages
        ? `<img src="${lab.images[0]}" alt="${lab.title}" class="lab-thumb__img" loading="lazy" />`
        : '';

    const thumbSection = (hasVideo || hasImages) ? `
      <div class="lab-card__thumb">
        ${thumbnail}
        <div class="lab-card__thumb-overlay">
          <span class="lab-thumb__tag">${lab.detail ? lab.detail.stack[0] : ''}</span>
        </div>
      </div>` : '';

    return `
      <article class="lab-card${(hasVideo || hasImages) ? ' lab-card--has-thumb' : ''}">
        ${thumbSection}
        <div class="lab-card__body">
          <h3 class="lab-card__title">${lab.title}</h3>
          <p class="lab-card__desc">${lab.description}</p>
          <div class="lab-card__icons">
            ${lab.iconClasses.map(cls =>
              `<i class="${cls} lab-card__icon" aria-hidden="true"></i>`
            ).join("")}
          </div>
          <div class="lab-card__actions">
            ${hasDetail
              ? `<button class="lab-card__btn lab-card__btn--detail"
                         onclick="openLabDetail(${labIdx})">
                   🔍 Ver detalles
                 </button>`
              : ''}
            ${lab.links.repo
              ? `<a class="lab-card__btn" href="${lab.links.repo}"
                    target="_blank" rel="noopener">Ver repositorio</a>`
              : ''}
          </div>
        </div>
      </article>`;
  }).join("");
}

function openLabDetail(idx) {
  const lab = labs[idx];
  if (!lab || !lab.detail) return;
  const d = lab.detail;

  const mosaicImages = lab.images ? lab.images.map(img =>
    `<img src="${img}" alt="${lab.title}" class="detail-mosaic__img" loading="lazy"
          onclick="openLightboxImg('${img}')" />`
  ).join('') : '';

  const videoSection = lab.video ? `
    <div class="detail-video-wrap">
      <video controls autoplay muted loop playsinline class="detail-video">
        <source src="${lab.video}" type="video/mp4">
      </video>
    </div>` : '';

  const featuresHTML = d.features ? d.features.map(f => `
    <div class="detail-feature">
      <span class="detail-feature__icon">${f.icon}</span>
      <div>
        <strong class="detail-feature__title">${f.title}</strong>
        <p class="detail-feature__desc">${f.desc}</p>
      </div>
    </div>`).join('') : '';

  const stackHTML = d.stack ? d.stack.map(s =>
    `<span class="detail-stack-tag">${s}</span>`
  ).join('') : '';

  const html = `
    <div class="lab-detail__header">
      <div>
        <h2 class="lab-detail__title">${lab.title}</h2>
        <p class="lab-detail__intro">${d.intro}</p>
        <div class="lab-detail__stack">${stackHTML}</div>
      </div>
      <button class="lab-detail__close" onclick="closeLabDetail()">✕</button>
    </div>
    ${(lab.images && lab.images.length > 0) ? `
    <div class="detail-mosaic">${mosaicImages}</div>` : ''}
    ${videoSection}
    ${featuresHTML ? `
    <div class="detail-features">
      <h3 class="detail-features__title">¿Qué hace?</h3>
      <div class="detail-features__grid">${featuresHTML}</div>
    </div>` : ''}
    <div class="lab-detail__footer">
      ${lab.links.repo
        ? `<a href="${lab.links.repo}" target="_blank" rel="noopener"
              class="btn btn--primary">Ver en GitHub →</a>`
        : ''}
    </div>`;

  const overlay = document.getElementById('labDetailOverlay');
  const box     = document.getElementById('labDetailBox');
  box.innerHTML = html;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLabDetail() {
  document.getElementById('labDetailOverlay').classList.remove('is-open');
  document.body.style.overflow = '';
}

function openLightboxImg(src) {
  const lb = document.getElementById('imgLightbox');
  document.getElementById('imgLightboxSrc').src = src;
  lb.classList.add('is-open');
}

function closeImgLightbox() {
  document.getElementById('imgLightbox').classList.remove('is-open');
}

// =========================
// RENDER: Skills
// =========================
function renderSkills() {
  const row = document.getElementById("skillsRow");

  row.innerHTML = skills.map(s => `
    <div class="skill-card">
      <i class="${s.iconClass} skill-card__icon"></i>
      <div class="skill-card__name">${s.name}</div>
    </div>
  `).join("");
}

// =========================
// SKILLS SCROLLER
// =========================
function initSkillsScroller() {
  const row  = document.getElementById("skillsRow");
  const prev = document.getElementById("skillsPrev");
  const next = document.getElementById("skillsNext");

  if (!row || !prev || !next) return;

  const step = 340;

  function updateArrows() {
    const maxScroll = row.scrollWidth - row.clientWidth;
    prev.classList.toggle("is-disabled", row.scrollLeft <= 5);
    next.classList.toggle("is-disabled", row.scrollLeft >= maxScroll - 5);
  }

  prev.addEventListener("click", () => row.scrollBy({ left: -step, behavior: "smooth" }));
  next.addEventListener("click", () => row.scrollBy({ left:  step, behavior: "smooth" }));
  row.addEventListener("scroll", updateArrows);
  updateArrows();
}

// =========================
// =========================
// CONTACT: EmailJS
// =========================
function initContactEmailJS() {
  const form     = document.getElementById('contactForm');
  const btn      = document.getElementById('contactSubmit');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email   = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!email || !message) {
      feedback.textContent = 'Por favor completa el email y el mensaje.';
      feedback.className   = 'form-feedback form-feedback--error';
      return;
    }

    btn.textContent = 'Enviando...';
    btn.disabled    = true;
    feedback.textContent = '';

    emailjs.sendForm(
      'service_ua9d39r',
      'template_e0je0eo',
      form
    )
    .then(() => {
      feedback.textContent = '✓ Mensaje enviado. Te responderé pronto.';
      feedback.className   = 'form-feedback form-feedback--success';
      btn.textContent      = 'Enviado ✓';
      btn.style.background = '#22c55e';
      form.reset();
      setTimeout(() => {
        btn.textContent      = 'Enviar mensaje';
        btn.disabled         = false;
        btn.style.background = '';
      }, 4000);
    })
    .catch(() => {
      feedback.textContent = '✗ Error al enviar. Escríbeme a alberto.pt.dev@gmail.com';
      feedback.className   = 'form-feedback form-feedback--error';
      btn.textContent      = 'Enviar mensaje';
      btn.disabled         = false;
    });
  });
}

// =========================
// PROJECT MODAL INIT
// =========================
function initProjectModal() {
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalClose");

  backdrop?.addEventListener("click", closeProjectModal);
  closeBtn?.addEventListener("click", closeProjectModal);
}

// =========================
// THEME
// =========================
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const root   = document.documentElement;

  const sunSVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1F5C99" stroke-width="2.5" stroke-linecap="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="5" y2="12"/>
    <line x1="19" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="19.78" y1="4.22" x2="17.66" y2="6.34"/>
    <line x1="6.34" y1="17.66" x2="4.22" y2="19.78"/>
  </svg>`;

  const moonSVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="#7dd3fc" stroke="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;

  const saved       = localStorage.getItem('theme');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const startDark   = saved ? saved === 'dark' : prefersDark;

  root.classList.toggle('dark', startDark);
  if (toggle) toggle.checked = startDark;
  if (icon)   icon.innerHTML = startDark ? moonSVG : sunSVG;

  toggle?.addEventListener('change', () => {
    const isDark = toggle.checked;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    icon.innerHTML = isDark ? moonSVG : sunSVG;
  });
}

// =========================
// SMOOTH SCROLL nav links
// =========================
function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Cierra el menú móvil al navegar
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  const hamburger  = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('navMobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Cierra al hacer clic fuera
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// =========================
// VISIT COUNTER
// =========================
function initVisitCounter() {
  const namespace = 'alberto-portfolio';
  const key       = 'visitas-2026';
  let   hideTimer = null;

  // Suma visita silenciosamente al cargar
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      window._visitCount = data.value;
    })
    .catch(() => {});

  const btn     = document.getElementById('counterBtn');
  const display = document.getElementById('counterDisplay');
  const value   = document.getElementById('counterValue');

  if (!btn || !display || !value) return;

  btn.addEventListener('click', () => {
    if (display.style.display !== 'none') {
      clearTimeout(hideTimer);
      display.style.display = 'none';
      btn.style.display     = 'flex';
      return;
    }

    value.textContent     = window._visitCount
      ? window._visitCount.toLocaleString('es-ES')
      : '...';
    display.style.display = 'inline-flex';
    btn.style.display     = 'none';

    hideTimer = setTimeout(() => {
      display.style.display = 'none';
      btn.style.display     = 'flex';
    }, 10000);
  });
}

// =========================
// FLAPPY DEV GAME
// =========================
function initFlappyDev() {
  const canvas   = document.getElementById('flCanvas');
  if (!canvas) return;
  const ctx      = canvas.getContext('2d');
  const overlay  = document.getElementById('flOverlay');
  const startBtn = document.getElementById('flStart');
  const scoreEl  = document.getElementById('flScore');
  const bestEl   = document.getElementById('flBest');
  const statusEl = document.getElementById('flStatus');
  const titleEl  = document.getElementById('flOverTitle');
  const msgEl    = document.getElementById('flOverMsg');

  // Canvas responsive — ocupa todo el ancho del contenedor
  function resizeCanvas() {
    const W = canvas.parentElement.clientWidth;
    const H = Math.round(W * 0.42);
    canvas.width  = W;
    canvas.height = H;
    return { W, H };
  }
  let { W, H } = resizeCanvas();
  window.addEventListener('resize', () => {
    const dims = resizeCanvas();
    W = dims.W; H = dims.H;
    if (!running) { drawBg(); drawDev(dev.x, dev.y, 0); }
  });

  const GRAVITY = 0.30, JUMP = -5, PIPE_W = 64;
  const PIPE_GAP = 160, PIPE_SPEED = 2.4, PIPE_FREQ = 120;

  const isMobile = window.innerWidth <= 768;
  const GAP      = isMobile ? 190 : PIPE_GAP;
  const FREQ     = isMobile ? 140 : PIPE_FREQ;

  let dev, pipes, score, best, frame, running, animId, countdownVal;
  best = 0;

  const PIXEL = 3;
  const DEV_PIXELS = [
    [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,1,2,2,2,2,2,2,1,1,0,0,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0],
    [0,0,1,2,3,2,2,2,2,3,2,1,0,0,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0],
    [0,0,1,2,2,4,4,4,4,2,2,1,0,0,0,0],
    [0,0,0,5,5,5,5,5,5,5,5,0,0,0,0,0],
    [0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,0,6,6,6,6,0,0,6,6,6,6,0,0,0,0],
    [0,0,6,6,6,6,0,0,6,6,6,6,0,0,0,0],
    [0,0,7,7,7,7,0,0,7,7,7,7,0,0,0,0],
    [0,0,7,7,7,7,0,0,7,7,7,7,0,0,0,0],
  ];
  const COLORS = [
    'transparent','#1a0a2e','#FDBCB4',
    '#0a0a1a','#cc4444','#1F5C99','#0d1b3e','#0a0a14',
  ];

  const buildings = Array.from({ length: 14 }, () => ({
    x:       Math.random() * 800,
    w:       40 + Math.random() * 25,
    h:       60 + Math.random() * 130,
    windows: Array.from({ length: 8 }, () => Math.random() > 0.4),
  }));
  const stars = Array.from({ length: 70 }, () => ({
    x: Math.random() * 800,
    y: Math.random() * 200,
    r: Math.random() * 1.5,
    a: 0.3 + Math.random() * 0.7,
  }));

  function drawBg() {
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0,   '#020510');
    sky.addColorStop(0.6, '#050c1f');
    sky.addColorStop(1,   '#0a1230');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc((s.x % W), (s.y % (H * 0.55)), s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${s.a})`;
      ctx.fill();
    });

    const glow = ctx.createRadialGradient(W/2, H, 10, W/2, H, H * 0.8);
    glow.addColorStop(0,   'rgba(31,92,153,0.2)');
    glow.addColorStop(0.5, 'rgba(79,142,247,0.06)');
    glow.addColorStop(1,   'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    buildings.forEach(b => {
      const bx = ((b.x - frame * 0.3) % (W + 80) + W + 80) % (W + 80) - 80;
      ctx.fillStyle = '#06091a';
      ctx.fillRect(bx, H - b.h, b.w, b.h);
      b.windows.forEach((on, wi) => {
        if (!on) return;
        const wx = bx + 5 + (wi % 3) * 11;
        const wy = H - b.h + 8 + Math.floor(wi / 3) * 16;
        ctx.fillStyle = 'rgba(125,211,252,0.12)';
        ctx.fillRect(wx, wy, 6, 8);
      });
      ctx.shadowColor = '#4f8ef7';
      ctx.shadowBlur  = 5;
      ctx.fillStyle   = 'rgba(79,142,247,0.5)';
      ctx.fillRect(bx, H - b.h, b.w, 1);
      ctx.shadowBlur  = 0;
    });

    ctx.fillStyle = '#080d20';
    ctx.fillRect(0, H - 16, W, 16);
    ctx.shadowColor = '#4f8ef7';
    ctx.shadowBlur  = 8;
    ctx.fillStyle   = 'rgba(79,142,247,0.4)';
    ctx.fillRect(0, H - 16, W, 1);
    ctx.shadowBlur  = 0;

    ctx.font = '10px monospace';
    const signs = ['{ code }','</dev>','npm run','git push','sudo ☕'];
    signs.forEach((s, i) => {
      const sx = ((frame * 0.8 + i * 140) % (W + 200)) - 80;
      ctx.fillStyle = 'rgba(125,211,252,0.1)';
      ctx.fillText(s, W - sx, H - 3);
    });
  }

  function drawDev(x, y, bob) {
    DEV_PIXELS.forEach((row, ri) => {
      row.forEach((col, ci) => {
        if (col === 0) return;
        ctx.fillStyle = COLORS[col];
        ctx.fillRect(x + ci * PIXEL, y + ri * PIXEL + bob, PIXEL, PIXEL);
      });
    });
    ctx.shadowBlur  = 0;
  }

  function drawPipe(p) {
    ctx.fillStyle = '#060f28';
    ctx.fillRect(p.x, 0, PIPE_W, p.topH - 12);
    ctx.fillStyle = '#0a1a3a';
    ctx.fillRect(p.x - 5, p.topH - 30, PIPE_W + 10, 30);

    ctx.shadowColor = '#7dd3fc';
    ctx.shadowBlur  = 14;
    ctx.fillStyle   = '#7dd3fc';
    ctx.font        = 'bold 28px monospace';
    ctx.textAlign   = 'center';
    ctx.fillText(p.top || '{', p.x + PIPE_W / 2, p.topH - 5);

    ctx.strokeStyle = 'rgba(125,211,252,0.25)';
    ctx.lineWidth   = 1;
    ctx.strokeRect(p.x, 0, PIPE_W, p.topH - 12);
    ctx.shadowBlur  = 0;

    const botY = p.topH + GAP;
    ctx.fillStyle = '#060f28';
    ctx.fillRect(p.x, botY + 12, PIPE_W, H - botY - 12);
    ctx.fillStyle = '#0a1a3a';
    ctx.fillRect(p.x - 5, botY, PIPE_W + 10, 30);

    ctx.shadowColor = '#7dd3fc';
    ctx.shadowBlur  = 14;
    ctx.fillStyle   = '#7dd3fc';
    ctx.fillText(p.bot || '}', p.x + PIPE_W / 2, botY + 24);

    ctx.strokeStyle = 'rgba(125,211,252,0.25)';
    ctx.strokeRect(p.x, botY + 12, PIPE_W, H - botY - 12);
    ctx.shadowBlur  = 0;
  }

  function hitTest(p) {
    const pad = 5;
    if (dev.x + dev.w - pad > p.x + pad &&
        dev.x + pad < p.x + PIPE_W - pad) {
      if (dev.y + pad < p.topH - 12)                   return true;
      if (dev.y + dev.h - pad > p.topH + GAP + 12) return true;
    }
    if (dev.y + dev.h > H - 16) return true;
    if (dev.y < 0)               return true;
    return false;
  }

  function spawnPipe() {
    const minY = 60, maxY = H - GAP - 60;
    const pairs = [
      ['{', '}'],
      ['<', '>'],
      ['(', ')'],
      ['[', ']'],
      ['/*', '*/'],
      ['//', '//'],
    ];
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    pipes.push({
      x: W + 10,
      topH: Math.random() * (maxY - minY) + minY,
      scored: false,
      top: pair[0],
      bot: pair[1],
    });
  }

  function reset() {
    dev   = { x: 100, y: H / 2, vy: 0, w: 16*PIXEL, h: 16*PIXEL };
    pipes = []; score = 0; frame = 0; running = false;
  }
  reset();

  // ── CUENTA ATRÁS antes de empezar ──
  function startCountdown(cb) {
    let count = 3;
    overlay.style.display = 'none';
    statusEl.textContent  = 'Prepárate...';

    function tick() {
      drawBg();
      drawDev(dev.x, dev.y, 0);

      // Número grande centrado
      ctx.save();
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.font         = `bold ${Math.round(H * 0.35)}px monospace`;
      ctx.shadowColor  = '#7dd3fc';
      ctx.shadowBlur   = 30;
      ctx.fillStyle    = 'rgba(125,211,252,0.9)';
      ctx.fillText(count, W / 2, H / 2);
      ctx.shadowBlur   = 0;
      ctx.restore();

      count--;
      if (count < 0) { cb(); return; }
      setTimeout(tick, 900);
    }
    tick();
  }

  function gameLoop() {
    frame++;
    drawBg();

    dev.vy += GRAVITY;
    dev.y  += dev.vy;

    if (frame % FREQ === 0) spawnPipe();

    let dead = false;
    pipes.forEach(p => {
      p.x -= PIPE_SPEED;
      drawPipe(p);
      if (!p.scored && p.x + PIPE_W < dev.x) {
        p.scored = true; score++;
        scoreEl.textContent = score;
        if (score > best) { best = score; bestEl.textContent = best; }
      }
      if (hitTest(p)) dead = true;
    });
    pipes = pipes.filter(p => p.x + PIPE_W > 0);

    if (dead || dev.y + dev.h > H - 16 || dev.y < 0) {
      endGame(); return;
    }

    const bob = Math.sin(frame * 0.25) * 1.5;
    drawDev(dev.x, dev.y, bob);

    ctx.shadowColor = '#7dd3fc';
    ctx.shadowBlur  = 16;
    ctx.fillStyle   = 'rgba(125,211,252,0.25)';
    ctx.font        = 'bold 28px monospace';
    ctx.textAlign   = 'center';
    ctx.fillText(score, W / 2, 36);
    ctx.shadowBlur  = 0;

    if (running) animId = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    reset();
    cancelAnimationFrame(animId);
    startCountdown(() => {
      running = true;
      statusEl.textContent = 'En juego...';
      gameLoop();
    });
  }

  function endGame() {
    running = false;
    cancelAnimationFrame(animId);
    if (score > best) best = score;
    bestEl.textContent   = best;
    statusEl.textContent = 'Game over';

    const msg = score >= 15 ? '🏆 ¡Leyenda del código!' :
                score >= 8  ? '🚀 ¡Gran desarrollador!' :
                score >= 3  ? '💪 ¡Sigue intentándolo!' :
                              '☕ Necesitas más café...';
    titleEl.textContent  = msg;
    msgEl.textContent    = `Puntuación: ${score} · Récord: ${best}`;
    startBtn.textContent = '🔄 Jugar de nuevo';
    overlay.style.display = 'flex';
    drawBg(); drawDev(dev.x, dev.y, 0);
  }

  function jump() { if (!running) return; dev.vy = JUMP; }

  document.addEventListener('keydown', e => {
    if (e.code === 'Space') { e.preventDefault(); jump(); }
  });
  canvas.addEventListener('click',      jump);
  canvas.addEventListener('mousedown',  jump);
  canvas.addEventListener('touchstart', e => {
    e.preventDefault(); jump();
  }, { passive: false });
  startBtn.addEventListener('click', startGame);

  drawBg(); drawDev(dev.x, dev.y, 0);
}

// =========================
// INIT
// =========================
renderProjects();
renderSkills();
initSkillsScroller();
renderLabs();
initProjectModal();
initContactEmailJS();
initTheme();
initNav();
initVisitCounter();
initFlappyDev();