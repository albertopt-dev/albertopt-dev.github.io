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
    description: "App personal para gestionar objetivos diarios, semanales y anuales. Subobjetivos, código de colores, calendario y autenticación propia — cada usuario solo ve sus datos.",
    iconClasses: [
      "devicon-kotlin-plain colored",
      "devicon-firebase-plain colored"
    ],
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
    description: "Experimento para crear un asistente que responda dudas de programación integrando la API de Claude. Explorando cómo conectar LLMs con aplicaciones reales. En construcción.",
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

  grid.innerHTML = labs.map((lab) => `
    <article class="lab-card">
      <h3 class="lab-card__title">${lab.title}</h3>
      <p class="lab-card__desc">${lab.description}</p>

      <div class="lab-card__icons">
        ${lab.iconClasses.map(cls => `<i class="${cls} lab-card__icon" aria-hidden="true"></i>`).join("")}
      </div>

      <div class="lab-card__actions">
        ${lab.links.repo
          ? `<a class="lab-card__btn" href="${lab.links.repo}" target="_blank" rel="noopener">Ver repositorio</a>`
          : ""}
      </div>
    </article>
  `).join("");
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
    });
  });
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