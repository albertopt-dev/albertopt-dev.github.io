// =========================
// DATA: Proyectos (5 de prueba)
// image: cuando tengas capturas, pon la ruta. Si no, déjalo "".
// =========================
const projects = [
  {
    id: "p1",
    title: "Portfolio Web",
    description: "Portfolio personal con HTML/CSS/JS, sección de proyectos y contacto pro.",
    tags: ["Web", "Frontend"],
    stacks: ["HTML", "CSS", "JavaScript"],
    image: "", // "./assets/proyectos/portfolio.png"
    links: {
      repo: "https://github.com/albertopt-dev/Portfolio-Web",
      demo: ""
    }
  },
  {
    id: "p2",
    title: "Gestor de Tareas",
    description: "CRUD de tareas con filtros, persistencia y estados UI (práctica fullstack).",
    tags: ["Web", "Fullstack"],
    stacks: ["PHP", "Laravel", "MySQL"],
    image: "",
    links: { repo: "https://github.com/albertopt-dev/tu-repo-2", demo: "" }
  },
  {
    id: "p3",
    title: "API REST",
    description: "API REST con endpoints y validación, documentación básica y pruebas con Postman.",
    tags: ["Backend", "API"],
    stacks: ["Java", "Spring"],
    image: "",
    links: { repo: "https://github.com/albertopt-dev/tu-repo-3", demo: "" }
  },
  {
    id: "p4",
    title: "Landing WordPress",
    description: "Landing optimizada (SEO básico + performance) con WordPress y diseño responsive.",
    tags: ["Web", "CMS"],
    stacks: ["WordPress", "CSS"],
    image: "",
    links: { repo: "", demo: "" }
  },
  {
    id: "p5",
    title: "Cliente SQL",
    description: "Ejercicios SQL + consultas, joins, vistas e indexación básica para prácticas.",
    tags: ["Data", "SQL"],
    stacks: ["SQL", "MySQL"],
    image: "",
    links: { repo: "https://github.com/albertopt-dev/tu-repo-5", demo: "" }
  }
];

// =========================
// DATA: Labs (con iconos tech)
// =========================
const labs = [
  {
    title: "Visualización interactiva de datos",
    description:
      "Un prototipo para explorar datos usando gráficos interactivos y visualizaciones modernas.",
    iconClasses: [
      "devicon-react-original colored",
      "devicon-d3js-plain colored"
    ],
    links: { repo: "https://github.com/albertopt-dev/tu-repo-lab-1" }
  },
  {
    title: "Chatbot IA para preguntas técnicas",
    description:
      "Un experimento para crear un asistente que responda dudas de programación usando modelos de lenguaje.",
    iconClasses: [
      "devicon-python-plain colored",
      "devicon-react-original colored"
    ],
    links: { repo: "https://github.com/albertopt-dev/tu-repo-lab-2" }
  }
];

// =========================
// RENDER: Labs (cards grandes con iconos)
// =========================
function renderLabs() {
  const grid = document.getElementById("labsGrid");

  grid.innerHTML = labs
    .map((lab) => {
      return `
        <article class="lab-card">
          <h3 class="lab-card__title">${lab.title}</h3>
          <p class="lab-card__desc">${lab.description}</p>

          <div class="lab-card__icons">
            ${lab.iconClasses
              .map((cls) => `<i class="${cls} lab-card__icon" aria-hidden="true"></i>`)
              .join("")}
          </div>

          <div class="lab-card__actions">
            ${
              lab.links.repo
                ? `<a class="lab-card__btn" href="${lab.links.repo}" target="_blank" rel="noopener">Ver repositorio</a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

// =========================
// CONTACT: mailto con formulario
// =========================
function initContactMailto() {
  const btn = document.querySelector(".contact-submit");
  const form = document.querySelector(".contact-form");

  if (!btn || !form) return;

  btn.addEventListener("click", () => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    // Validación mínima
    if (!email || !message) {
      alert("Por favor, completa al menos tu email y el mensaje.");
      return;
    }

    const to = "alberto.pt.dev@gmail.com"; 
    const subject = encodeURIComponent(`Contacto desde tu portfolio (${name || "sin nombre"})`);
    const body = encodeURIComponent(
      `Nombre: ${name || "-"}\nEmail: ${email}\n\nMensaje:\n${message}\n`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

// =========================
// DATA: Skills (por ahora unas pocas)
// =========================
const skills = [
  { name: "Java", iconClass: "devicon-java-plain colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
  { name: "WordPress", iconClass: "devicon-wordpress-plain colored" },
  { name: "Laravel", iconClass: "devicon-laravel-plain colored" },
  { name: "PHP", iconClass: "devicon-php-plain colored" },
  { name: "Postman", iconClass: "devicon-postman-plain colored" },
  { name: "Spring", iconClass: "devicon-spring-plain colored" },
  { name: "HTML5", iconClass: "devicon-html5-plain colored" },
  { name: "CSS3", iconClass: "devicon-css3-plain colored" },
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  grid.innerHTML = projects.map((p) => {
    const initials = p.title.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase();

    return `
      <article class="project-card">
        <div class="project-card__media">
          ${
            p.image
              ? `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" />`
              : `<div class="project-card__placeholder">${initials}</div>`
          }
        </div>

        <div class="project-card__body">
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>

          <div class="project-card__tags">
            ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join("")}
            ${p.stacks.map(s => `<span class="project-card__tag">${s}</span>`).join("")}
          </div>

          <div class="project-card__actions">
            <button class="lab-card__btn" type="button" data-id="${p.id}">Ver detalles</button>
            ${p.links.repo ? `<a class="btn btn--primary" href="${p.links.repo}" target="_blank" rel="noopener">Repo</a>` : `<span></span>`}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Eventos: abrir modal
  grid.querySelectorAll(".lab-card__btn").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.id));
  });
}

function openProjectModal(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const tags = document.getElementById("modalTags");
  const actions = document.getElementById("modalActions");
  const media = document.getElementById("modalMedia");

  title.textContent = p.title;
  desc.textContent = p.description;

  // tags
  tags.innerHTML = [
    ...p.tags.map(t => `<span class="tag">${t}</span>`),
    ...p.stacks.map(s => `<span class="tag">${s}</span>`)
  ].join("");

  // media
  if (p.image) {
    media.innerHTML = `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" />`;
  } else {
    media.innerHTML = `<div class="project-card__placeholder" style="height:100%;">${p.title}</div>`;
  }

  // actions
  actions.innerHTML = `
    ${p.links.demo ? `<a class="btn btn--primary" href="${p.links.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
    ${p.links.repo ? `<a class="btn btn--ghost" href="${p.links.repo}" target="_blank" rel="noopener">Repo</a>` : ""}
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  // Cerrar con ESC
  document.addEventListener("keydown", onEscClose);
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", onEscClose);
}

function onEscClose(e) {
  if (e.key === "Escape") closeProjectModal();
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
// SCROLLER: Flechas de Skills
// =========================
function initSkillsScroller() {
  const row = document.getElementById("skillsRow");
  const prev = document.getElementById("skillsPrev");
  const next = document.getElementById("skillsNext");

  if (!row || !prev || !next) return;

  // Cuánto se mueve cada click (aprox. 2 tarjetas)
  const step = 340;

  function updateArrows() {
    const maxScroll = row.scrollWidth - row.clientWidth;

    // si estás al principio, desactiva izquierda
    if (row.scrollLeft <= 5) prev.classList.add("is-disabled");
    else prev.classList.remove("is-disabled");

    // si estás al final, desactiva derecha
    if (row.scrollLeft >= maxScroll - 5) next.classList.add("is-disabled");
    else next.classList.remove("is-disabled");
  }

  prev.addEventListener("click", () => {
    row.scrollBy({ left: -step, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    row.scrollBy({ left: step, behavior: "smooth" });
  });

  // Actualiza al hacer scroll manual (trackpad/táctil)
  row.addEventListener("scroll", updateArrows);

  // Primer estado
  updateArrows();
}

function initProjectModal() {
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalClose");

  backdrop?.addEventListener("click", closeProjectModal);
  closeBtn?.addEventListener("click", closeProjectModal);
}

// =========================
// THEME (Light / Dark)
// =========================
function initTheme() {
  const btn = document.getElementById("themeBtn");
  const root = document.documentElement;

  // 1) Preferencia guardada
  const saved = localStorage.getItem("theme");

  // 2) Si no hay preferencia, usa la del sistema
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const startDark = saved ? saved === "dark" : prefersDark;
  root.classList.toggle("dark", startDark);

  if (btn) btn.textContent = root.classList.contains("dark") ? "☀️" : "🌙";

  btn?.addEventListener("click", () => {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️" : "🌙";
  });
}


renderProjects();
renderSkills();
initSkillsScroller();
renderLabs();
initProjectModal();
initContactMailto();
initTheme();