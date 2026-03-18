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
    image: "",
    featured: true,
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
    image: "",
    featured: false,
    highlights: [],
    links: {
      repo: "https://github.com/albertopt-dev/Web-cliente",
      demo: ""
    }
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
    const initials = p.title.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase();
    const featuredBadge = p.featured ? `<span class="project-card__featured-badge">⭐ Destacado</span>` : "";
    const wipBadge = p.tags.includes("En desarrollo") ? `<span class="project-card__wip-badge">🔧 En desarrollo</span>` : "";

    return `
      <article class="project-card${p.featured ? ' project-card--featured' : ''}">
        <div class="project-card__media">
          ${p.image
            ? `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" />`
            : `<div class="project-card__placeholder">${initials}</div>`
          }
          ${featuredBadge}${wipBadge}
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
// CONTACT: mailto
// =========================
function initContactMailto() {
  const btn  = document.querySelector(".contact-submit");
  const form = document.querySelector(".contact-form");

  if (!btn || !form) return;

  btn.addEventListener("click", () => {
    const name    = form.querySelector('input[name="name"]').value.trim();
    const email   = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!email || !message) {
      alert("Por favor, completa al menos tu email y el mensaje.");
      return;
    }

    const to      = "alberto.pt.dev@gmail.com";
    const subject = encodeURIComponent(`Contacto desde tu portfolio (${name || "sin nombre"})`);
    const body    = encodeURIComponent(`Nombre: ${name || "-"}\nEmail: ${email}\n\nMensaje:\n${message}\n`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
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
  const btn  = document.getElementById("themeBtn");
  const root = document.documentElement;

  const saved      = localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const startDark  = saved ? saved === "dark" : prefersDark;

  root.classList.toggle("dark", startDark);
  if (btn) btn.textContent = root.classList.contains("dark") ? "☀️" : "🌙";

  btn?.addEventListener("click", () => {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️" : "🌙";
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
initContactMailto();
initTheme();
initNav();