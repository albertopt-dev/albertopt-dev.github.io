// Scrollspy con IntersectionObserver para navbar
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.navbar__links a');
  const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href')).filter(h => h.startsWith('#'));
  const sections = sectionIds.map(id => document.querySelector(id)).filter(Boolean);

  // Configuración del observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60% 0px', // Ajusta el umbral según la altura del navbar
    threshold: 0.2 // Un 20% visible ya cuenta como activa
  };

  let activeId = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
});
// =========================
// DATA: Proyectos reales
// =========================
const projects = [

  {
    id: "p3",
    title: "Web Rehabilitación Funcional",
    description: "Web para un profesional de rehabilitación funcional. Muestra servicios, catálogo de libros, formulario de contacto y blog. Proyecto real para cliente real — actualmente en desarrollo activo.",
    tags: ["Web", "Cliente real", "En desarrollo"],
    stacks: ["HTML", "CSS", "JavaScript"],
    image: "assets/proyectos/WebRehabilitacion/web-01.png",
    video: null,
    images: [
      "assets/proyectos/WebRehabilitacion/web-01.png"
    ],
    featured: false,
    highlights: [

    ],
    status: "en-proceso",
    links: {
      repo: "https://github.com/albertopt-dev/Web-cliente",
      demo: ""
    }
  },

  {
    id: "p1",
    title: "DespedidaApp",
    description: "App multiplataforma para organizar despedidas de soltero como un juego por bases. Roles diferenciados (amigos/novio), mapa interactivo de España con pruebas geolocalizadas, galería compartida, chat en tiempo real y notificaciones especiales al novio.",
    tags: ["Android", "iOS", "Web", "Tiempo real"],
    stacks: ["Flutter", "Firebase", "FCM"],
    image: "assets/proyectos/DespedidaApp/Despedida-04.png",
    video: null,
    drive: "1cgilLopt4VVpY6uCHPZ6H0PfbTfCjz2T",
    images: [
      "assets/proyectos/DespedidaApp/Despedida-01.png",
      "assets/proyectos/DespedidaApp/Despedida-02.png",
      "assets/proyectos/DespedidaApp/Despedida-03.png",
      "assets/proyectos/DespedidaApp/Despedida-04.png",
      "assets/proyectos/DespedidaApp/Despedida-05.png",
      "assets/proyectos/DespedidaApp/Despedida-06.png",
      "assets/proyectos/DespedidaApp/Despedida-07.png",
      "assets/proyectos/DespedidaApp/Despedida-08.png",
      "assets/proyectos/DespedidaApp/Despedida-09.png"
    ],
    featured: false,
    highlights: [
      "Roles diferenciados: amigos configuran pruebas, novio las recibe",
      "Mapa interactivo con circuito de bases geolocalizadas",
      "Chat interno en tiempo real (el novio no participa)",
      "Galería compartida con fotos y vídeos del evento",
      "Notificaciones sonoras especiales al iniciar cada prueba"
    ],
    status: "terminado",
    links: {
      repo: "https://github.com/albertopt-dev/DespedidaApp",
      demo: ""
    }
  },

  {
    id: "p2",
    title: "Nutriplan",
    description: "App Android de planificación nutricional semanal desarrollada como Proyecto Fin de FP. Organiza 5 comidas diarias con una API externa de recetas, permite crear comidas propias, incluye lista de la compra automática, biblioteca de artículos e ideas, calendario mensual y perfil de usuario.",
    tags: ["Android", "Nutrición", "Proyecto FP"],
    stacks: ["Kotlin", "API REST", "Room DB"],
    image: "assets/proyectos/NutriPlan/Nutriplan-01.png",
    video: null,
    drive: "1A8N-PRN5aKJGL0g-95ph7_MpTgZM0gri",
    images: [
      "assets/proyectos/NutriPlan/Nutriplan-01.png",
      "assets/proyectos/NutriPlan/Nutriplan-02.png",
      "assets/proyectos/NutriPlan/Nutriplan-03.png",
      "assets/proyectos/NutriPlan/Nutriplan-04.png",
      "assets/proyectos/NutriPlan/Nutriplan-05.png",
      "assets/proyectos/NutriPlan/Nutriplan-06.png",
      "assets/proyectos/NutriPlan/Nutriplan-07.png",
      "assets/proyectos/NutriPlan/Nutriplan-08.png",
      "assets/proyectos/NutriPlan/Nutriplan-09.png",
      "assets/proyectos/NutriPlan/Nutriplan-10.png"
    ],
    featured: false,
    highlights: [
      "Planificación semanal con 5 comidas diarias (desayuno, almuerzo, comida, merienda, cena)",
      "Integración con API externa de recetas con buscador",
      "Creación de recetas propias con ingredientes, preparación e imagen",
      "Lista de la compra automática generada del menú semanal",
      "Calendario mensual para navegar entre días planificados",
      "Biblioteca de artículos e ideas nutricionales"
    ],
    status: "terminado",
    links: {
      repo: "https://github.com/albertopt-dev/Nutriplan",
      demo: ""
    }
  },

  {
    id: "p4",
    title: "MyAmazingPlaces",
    description: "App Android desarrollada como proyecto académico formal de la asignatura de Kotlin. Permite guardar lugares favoritos con foto, categoría, dirección, teléfono, web y valoración con estrellas. Incluye mapa integrado con Google Maps y gestión completa de la lista.",
    tags: ["Android", "Académico", "Google Maps"],
    stacks: ["Kotlin", "Google Maps API", "SQLite"],
    image: "assets/proyectos/MyAmazingPlaces/Places-01.png",
    video: null,
    drive: "1TWcOAKcO7ZPZbgTHnYNzMc1qKy99N6IX",
    images: [
      "assets/proyectos/MyAmazingPlaces/Places-01.png",
      "assets/proyectos/MyAmazingPlaces/Places-02.png",
      "assets/proyectos/MyAmazingPlaces/Places-03.png",
      "assets/proyectos/MyAmazingPlaces/Places-04.png",
      "assets/proyectos/MyAmazingPlaces/Places-05.png",
      "assets/proyectos/MyAmazingPlaces/Places-06.png"
    ],
    featured: false,
    highlights: [
      "Mapa integrado con Google Maps para visualizar cada lugar",
      "Valoración con estrellas de 1 a 5",
      "Categorías: restaurante, monumento, museo, país y más",
      "Añade, edita, elimina y ordena lugares fácilmente",
      "Foto representativa por lugar"
    ],
    status: "terminado",
    links: {
      repo: "https://github.com/albertopt-dev/MyAmazingPlaces",
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
    status: "terminado",
    description: "App personal para gestionar objetivos diarios, semanales y anuales. Subobjetivos, código de colores, calendario y autenticación propia — cada usuario solo ve sus datos.",
    detail: {
      intro: "Una app construida para uso real y diario. Diseñada con React Native y Firebase, cada usuario tiene su propio espacio privado donde ningún dato es compartido.",
      features: [
        { icon: "📅", title: "Calendario inteligente", desc: "Vista mensual con marcadores visuales en los días con objetivos programados." },
        { icon: "🎯", title: "Objetivos por período", desc: "Diarios, semanales, mensuales o anuales. Los semanales y mensuales admiten subobjetivos." },
        { icon: "🎨", title: "Código de colores", desc: "Asigna un color a cada objetivo. Vista previa en tiempo real al crear o editar." },
        { icon: "📊", title: "Estadísticas", desc: "Tasa de éxito, racha actual, mejor racha y tendencias de los últimos 30 días." },
        { icon: "🔔", title: "Prioridades", desc: "Marca cada objetivo como Baja, Media o Alta prioridad." },
        { icon: "🔐", title: "Autenticación propia", desc: "Cada usuario se registra con su cuenta. Los datos son completamente privados." }
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
    video: null,
    drive: "1KOC21FoV4fM9q1xTaIpnFdzSke8rRrpq",
    links: { repo: "https://github.com/albertopt-dev/ObjetivosApp" }
  },

  {
    title: "Presupuesto Mensual",
    status: "terminado",
    description: "App personal para control de finanzas: ingresos, ahorro mensual, desglose de gastos por categoría y estadísticas visuales. Hecha por necesidad propia, no por encargo.",
    detail: {
      intro: "Una app web creada para llevar el control real del dinero mes a mes. Diseñada desde cero con React y Next.js, cubre desde el registro de ingresos hasta el análisis visual de en qué se va el presupuesto. Por el momento es una app personal, pero con potencial para crecer y ser útil a más gente.",
      features: [
        { icon: "💰", title: "Registro de ingresos", desc: "Añade tus ingresos mensuales y lleva un histórico claro de cuánto entra cada mes." },
        { icon: "📂", title: "Gastos por categoría", desc: "Clasifica cada gasto en categorías personalizables para saber exactamente dónde va tu dinero." },
        { icon: "📊", title: "Estadísticas visuales", desc: "Gráficos claros con el desglose de gastos, porcentaje de ahorro y evolución mensual." },
        { icon: "🎯", title: "Control de ahorro", desc: "Calcula automáticamente cuánto has ahorrado al final de cada mes respecto a tu presupuesto inicial." }
      ],
      stack: ["React Native", "Firebase Auth", "Firestore", "Expo"]
    },
    iconClasses: [
      "devicon-react-original colored",
      "devicon-android-plain colored"
    ],
    images: [
      "assets/proyectos/PresupuestoMensual/Presupuesto-01.png",
      "assets/proyectos/PresupuestoMensual/Presupuesto-02.png",
      "assets/proyectos/PresupuestoMensual/Presupuesto-03.png",
      "assets/proyectos/PresupuestoMensual/Presupuesto-04.png",
      "assets/proyectos/PresupuestoMensual/Presupuesto-05.png"
    ],
    video: null,
    drive: "1XAt7aBJJohcDAsujX8xotfFqKXvENVN7",
    links: { repo: "https://github.com/albertopt-dev/Presupuesto-mensual" }
  },

  {
    title: "Reloj Digital",
    status: "terminado",
    description: "Proyecto de práctica en Java para afianzar conceptos de programación orientada a objetos, hilos y actualización de UI en tiempo real.",
    detail: null,
    iconClasses: [
      "devicon-java-plain colored",
      "devicon-android-plain colored"
    ],
    images: [
      "assets/proyectos/RelojDigital/Captura de pantalla 2026-03-23 154602.png",
      "assets/proyectos/RelojDigital/Captura de pantalla 2026-03-23 154614.png"
    ],
    video: null,
    links: { repo: "https://github.com/albertopt-dev/Reloj_Digital" }
  },

  {
    title: "Chatbot IA — Asistente técnico",
    status: "en-proceso",
    description: "Experimento para crear un asistente que responda dudas de programación integrando la API de Claude. Explorando cómo conectar LLMs con aplicaciones reales. En construcción.",
    detail: null,
    iconClasses: [
      "devicon-java-plain colored",
      "devicon-javascript-plain colored"
    ],
    images: [],
    video: null,
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
  // Detecta móvil real: pantalla pequeña y táctil
  const isMobile = window.innerWidth <= 768 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const grid = document.getElementById("projectsTrack");
  if (!grid) return;

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

    const initials = p.title.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
    const featuredBadge = p.featured ? `<span class="project-card__featured-badge">⭐ Destacado</span>` : "";
    const wipBadge = p.status === "en-proceso" ? `<span class="project-card__wip-badge">🔧 En desarrollo</span>` : "";
    const statusBadge = p.status === "terminado"
      ? `<span class="project-card__status status--done">✓ Terminado</span>`
      : "";

    let mediaContent = "";
    if (p.drive && !isMobile) {
      mediaContent = `<div class="lab-thumb__video lab-thumb__video--iframe"><iframe src="https://drive.google.com/file/d/${p.drive}/preview" allow="autoplay" allowfullscreen></iframe></div>`;
    } else if (p.video) {
      mediaContent = isMobile
        ? `<div class="lab-thumb__no-video">
            <span class="lab-thumb__no-video-icon">🖥️</span>
            <span class="lab-thumb__no-video-text">Vídeo disponible en escritorio</span>
          </div>`
        : `<video class="lab-thumb__video" autoplay muted loop playsinline webkit-playsinline preload="metadata">
            <source src="${p.video}" type="video/mp4">
          </video>`;
    } else if (p.image) {
      mediaContent = `<img src="${p.image}" alt="Preview ${p.title}" loading="lazy" class="lab-thumb__img" />`;
    } else {
      mediaContent = `<div class="project-card__placeholder">${initials}</div>`;
    }
      const stackTag = p.stacks[0]
        ? `<div class="lab-card__thumb-overlay"><span class="lab-thumb__tag">${p.stacks[0]}</span></div>`
        : '';

    return `
      <article class="project-card${p.featured ? ' project-card--featured' : ''}">
        <div class="project-card__media">
          ${mediaContent}
          ${stackTag}
          ${featuredBadge}${wipBadge}${statusBadge}
        </div>

        <div class="project-card__body">
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>
          <div style="flex:1"></div>
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

  const projectVideos = grid.querySelectorAll("video");

  projectVideos.forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("autoplay", "");

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    if (video.readyState >= 1) {
      tryPlay();
    } else {
      video.addEventListener("loadedmetadata", tryPlay, { once: true });
    }
  });
}

function initProjectsCarousel() {
  const track = document.getElementById('projectsTrack');
  const prev  = document.getElementById('projectsPrev');
  const next  = document.getElementById('projectsNext');
  if (!track || !prev || !next) return;

  const wrap    = track.parentElement; // .projects__track-wrap
  const total   = projects.length;
  let current   = 0;

  function isMobile() { return window.innerWidth <= 768; }
  function maxIndex()  { return isMobile() ? total - 1 : Math.max(0, total - 3); }

  function move() {
    const card = track.children[0];
    if (!card) return;
    if (isMobile()) {
      // En móvil: scroll nativo sobre el wrap (compatible con scroll-snap)
      const gap = 14;
      track.style.transform = '';
      wrap.scrollTo({ left: current * (card.offsetWidth + gap), behavior: 'smooth' });
    } else {
      // En escritorio: transform sobre el track
      const gap    = 22;
      const offset = current * (card.offsetWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    }
    prev.classList.toggle('is-disabled', current === 0);
    next.classList.toggle('is-disabled', current >= maxIndex());
  }

  prev.addEventListener('click', () => { if (current > 0)           { current--; move(); } });
  next.addEventListener('click', () => { if (current < maxIndex())  { current++; move(); } });
  window.addEventListener('resize', () => { current = 0; move(); });
  move();
}

// =========================
// MODAL
// =========================
function openProjectModal(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  const isMobile = window.innerWidth <= 768;

  // Galería mosaico
  const mosaicImages = p.images && p.images.length > 0
    ? p.images.map(img =>
        `<img src="${img}" alt="${p.title}" class="detail-mosaic__img" loading="lazy"
              onclick="openLightboxImg('${img}')" />`
      ).join('')
    : '';

  // Vídeo — omitir en móvil
  let videoSection = '';
  if (p.drive && !isMobile) {
    videoSection = `<div class="detail-video-wrap"><iframe src="https://drive.google.com/file/d/${p.drive}/preview" allow="autoplay" allowfullscreen class="detail-video" style="width:100%;height:360px;"></iframe></div>`;
  } else if (p.video && !isMobile) {
    videoSection = `<div class="detail-video-wrap">
         <video src="${p.video}" controls autoplay muted loop playsinline class="detail-video"></video>
       </div>`;
  }

  // Highlights como features
  const featuresHTML = p.highlights && p.highlights.length > 0
    ? p.highlights.map(h => `
        <div class="detail-feature">
          <span class="detail-feature__icon">▸</span>
          <div>
            <p class="detail-feature__desc">${h}</p>
          </div>
        </div>`).join('')
    : '';

  // Stack tags
  const stackHTML = p.stacks.map(s =>
    `<span class="detail-stack-tag">${s}</span>`
  ).join('');

  const html = `
    <div class="lab-detail__header">
      <div>
        <h2 class="lab-detail__title">${p.title}</h2>
        <p class="lab-detail__intro">${p.description}</p>
        <div class="lab-detail__stack">${stackHTML}</div>
      </div>
      <button class="lab-detail__close" onclick="closeProjectModal()">✕</button>
    </div>
    ${mosaicImages ? `<div class="detail-mosaic">${mosaicImages}</div>` : ''}
    ${videoSection}
    ${featuresHTML ? `
    <div class="detail-features">
      <h3 class="detail-features__title">Características</h3>
      <div class="detail-features__grid">${featuresHTML}</div>
    </div>` : ''}
    <div class="lab-detail__footer">
      ${p.links.repo ? `<a href="${p.links.repo}" target="_blank" rel="noopener" class="btn btn--primary">Ver en GitHub →</a>` : ''}
    </div>`;

  const overlay = document.getElementById('labDetailOverlay');
  const box     = document.getElementById('labDetailBox');
  box.innerHTML = html;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscClose);
}

function closeProjectModal() {
  document.getElementById('labDetailOverlay').classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscClose);
}

function onEscClose(e) {
  if (e.key === 'Escape') closeProjectModal();
}

// =========================
// RENDER: Labs
// =========================
function renderLabs() {
  const grid = document.getElementById("labsTrack");

  grid.innerHTML = labs.map((lab, labIdx) => {
    const hasImages = lab.images && lab.images.length > 0;
    const hasVideo  = !!lab.video;
    const hasDetail = !!lab.detail;

    // Detecta móvil real: pantalla pequeña y táctil
    const isMobile = window.innerWidth <= 768 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    let thumbnail = "";
    if (lab.drive && !isMobile) {
      thumbnail = `<div class="lab-thumb__video lab-thumb__video--iframe"><iframe src="https://drive.google.com/file/d/${lab.drive}/preview" allow="autoplay" allowfullscreen></iframe></div>`;
    } else if (hasVideo) {
      thumbnail = isMobile
        ? `<div class="lab-thumb__no-video">
            <span class="lab-thumb__no-video-icon">🖥️</span>
            <span class="lab-thumb__no-video-text">Vídeo disponible en escritorio</span>
          </div>`
        : `<video class="lab-thumb__video" src="${lab.video}" autoplay muted loop playsinline></video>`;
    } else if (hasImages) {
      thumbnail = `<img src="${lab.images[0]}" alt="${lab.title}" class="lab-thumb__img" loading="lazy" />`;
    }

    const statusBadge = lab.status === "terminado"
    ? `<span class="project-card__status status--done">✓ Terminado</span>`
    : lab.status === "en-proceso"
      ? `<span class="project-card__wip-badge">🔧 En desarrollo</span>`
      : "";

  const thumbSection = (hasVideo || hasImages) ? `
    <div class="lab-card__thumb">
      ${thumbnail}
      <div class="lab-card__thumb-overlay">
        <span class="lab-thumb__tag">${lab.detail ? lab.detail.stack[0] : ''}</span>
      </div>
      ${statusBadge}
    </div>` : '';

    return `
      <article class="lab-card${(hasVideo || hasImages) ? ' lab-card--has-thumb' : ''}">
        ${thumbSection}
        <div class="lab-card__body">
          <h3 class="lab-card__title">${lab.title}</h3>
          <p class="lab-card__desc">${lab.description}</p>
          <div style="flex:1"></div>
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

function initLabsCarousel() {
  const track = document.getElementById('labsTrack');
  const prev  = document.getElementById('labsPrev');
  const next  = document.getElementById('labsNext');
  if (!track || !prev || !next) return;

  const wrap  = track.parentElement; // .labs__track-wrap
  const total = labs.length;
  let current = 0;

  function isMobile() { return window.innerWidth <= 768; }
  function maxIndex()  { return isMobile() ? total - 1 : Math.max(0, total - 3); }

  function move() {
    const card = track.children[0];
    if (!card) return;
    if (isMobile()) {
      // En móvil: scroll nativo sobre el wrap (compatible con scroll-snap)
      const gap = 14;
      track.style.transform = '';
      wrap.scrollTo({ left: current * (card.offsetWidth + gap), behavior: 'smooth' });
    } else {
      // En escritorio: transform sobre el track
      const gap    = 22;
      const offset = current * (card.offsetWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    }
    prev.classList.toggle('is-disabled', current === 0);
    next.classList.toggle('is-disabled', current >= maxIndex());
  }

  prev.addEventListener('click', () => { if (current > 0)          { current--; move(); } });
  next.addEventListener('click', () => { if (current < maxIndex()) { current++; move(); } });
  window.addEventListener('resize', () => { current = 0; move(); });
  move();
}

function openLabDetail(idx) {
  const lab = labs[idx];
  if (!lab || !lab.detail) return;
  const d = lab.detail;

  const mosaicImages = lab.images ? lab.images.map(img =>
    `<img src="${img}" alt="${lab.title}" class="detail-mosaic__img" loading="lazy"
          onclick="openLightboxImg('${img}')" />`
  ).join('') : '';

  let videoSection = '';
  if (lab.drive) {
    videoSection = `<div class="detail-video-wrap"><iframe src="https://drive.google.com/file/d/${lab.drive}/preview" allow="autoplay" allowfullscreen class="detail-video" style="width:100%;height:360px;"></iframe></div>`;
  } else if (lab.video) {
    videoSection = `<div class="detail-video-wrap">
      <video src="${lab.video}" controls autoplay muted loop playsinline class="detail-video"></video>
    </div>`;
  }

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
// RENDER: Skills 3D Wheel
// =========================
function renderSkills() {
  const wheel = document.getElementById("skillsRow");
  if (!wheel) return;

  const total = skills.length;
  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  // Solo cambia el cálculo en móvil; escritorio queda como estaba
  const CARD = isMobile ? 90 : 190;
  const EXTRA_RADIUS = isMobile ? 0 : 15;
  const radius = Math.round((CARD / 2) / Math.tan(Math.PI / total)) + EXTRA_RADIUS;

  wheel.innerHTML = skills.map((s, i) => {
    const angle = (360 / total) * i;
    return `
      <div class="skill-card"
           style="transform: rotateY(${angle}deg) translateZ(${radius}px)">
        <i class="${s.iconClass} skill-card__icon"></i>
        <div class="skill-card__name">${s.name}</div>
      </div>`;
  }).join("");

  wheel.className = "skills__wheel";
}

let skillsBreakpoint = window.matchMedia("(max-width: 900px)").matches;

window.addEventListener("resize", () => {
  const nowMobile = window.matchMedia("(max-width: 900px)").matches;

  if (nowMobile !== skillsBreakpoint) {
    skillsBreakpoint = nowMobile;
    renderSkills();
  }
});

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
  // Clave anterior: 'visitas-2026'
  const key       = 'visitas-2026b'; // Cambiada para reiniciar el contador desde 0
  let   hideTimer = null;

  // Suma visita silenciosamente al cargar
  fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
    .then(res => res.json())
    .then(data => {
      window._visitCount = data.count ?? data.value;
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
  const wrapper = canvas.closest('.game-wrapper');
  const W = wrapper ? wrapper.clientWidth : canvas.parentElement.clientWidth;
  const ratio = window.innerWidth <= 768 ? 0.75 : 0.58;
  const H = Math.round(W * ratio);
  canvas.width = W;
  canvas.height = H;
  return { W, H };
}
  let { W, H } = resizeCanvas();
  window.addEventListener('resize', () => {
    const dims = resizeCanvas();
    W = dims.W; H = dims.H;
    if (!running) { drawBg(); drawDev(dev.x, dev.y, 0); }
  });

  // Detecta móvil real: pantalla pequeña y táctil
  const isMobile = window.innerWidth <= 768 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const GRAVITY    = isMobile ? 0.18 : 0.30;
  const JUMP       = isMobile ? -4.0 : -5;
  const PIPE_W     = 64;
  const PIPE_GAP   = 160, PIPE_SPEED_BASE = 2.4, PIPE_FREQ = 120;
  const PIPE_SPEED = isMobile ? 1.8 : PIPE_SPEED_BASE;
  const GAP        = isMobile ? 200 : PIPE_GAP;
  const FREQ       = isMobile ? 150 : PIPE_FREQ;

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
    const margin = Math.round(H * 0.12);          // 12 % del canvas, nunca fijo
    const minY   = margin;
    const maxY   = Math.max(minY + 40, H - GAP - margin);
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

// juego WORDLE DEV
function initWordGame() {
  const gridEl = document.getElementById('wordGrid');
  const feedbackEl = document.getElementById('wordFeedback');
  const keyboardEl = document.getElementById('wordKeyboard');
  const resetBtn = document.getElementById('wordReset');
  const dateLabel = document.getElementById('wordDateLabel');

  if (!gridEl || !feedbackEl || !keyboardEl || !resetBtn) return;

  const WORDS = [
    // Conceptos dev
    "NEXOS", "DATOS", "CLAVE", "JUEGO", "ERROR",
    "LOGIN", "TOKEN", "VISTA", "NIVEL", "TECLA",
    "RETOS", "IDEAL", "PANEL", "MOTOR", "BUILD",
    "STACK", "QUERY", "PATCH", "MERGE", "ROLES",
    "RUTAS", "FRAME", "COLAS", "CACHE", "HOOKS",
    "PULLS", "CLASE", "LLAVE", "BUCLE", "HILOS",
    "CAPAS", "RAMAS", "BYTES", "TESTS", "TRAZA",
    "AGILE", "CAMPO", "ORDEN", "CEROS", "FALSO",
    // Lenguajes
    "SWIFT", "SCALA", "LISP",  "BASIC",
    "JULIA", "PEARL", "GROOV", "COBOL",
    // IDEs y herramientas
    "LINUX", "NGINX", "REDIS", "FIGMA",
    "GITEA", "CMAKE", "XCODE", "SONAR",
    "MAVEN", "NEXUS", "KAFKA",
    // Android / móvil
    "REALM", "RETRO", "GLIDE", "FLOWS",
    "ROOMS", "COROS", "INTENT", "LAYOUT", "FRAGS", "WIDGET",
    // Web
    "REACT", "AXIOS", "FETCH", "REMIX",
    "ASTRO", "TYPED", "VITES", "SVELT",
    "NUXTJ", "PINIA",
    // Bases de datos
    "MYSQL", "MONGO", "JOINS", "INDEX",
    "SQLIT", "TABLA", "REPOS", "BLOBS",
    "ASSET", "PSQL"
  ].filter(w => w.length === 5);

  const KEY_ROWS = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L","Ñ"],
    ["ENTER","Z","X","C","V","B","N","M","⌫"]
  ];

  const todayKey = new Date().toISOString().slice(0, 10);
  if (dateLabel) {
    dateLabel.textContent = "Hoy";
  }

  let target = WORDS[hashString(todayKey) % WORDS.length];
  let state = loadState() || createEmptyState();

  // Contador de generación: se incrementa en cada Reset para invalidar
  // cualquier llamada a submitRow que siga pendiente (async fetch en vuelo)
  let submitGeneration = 0;

  function createEmptyState() {
    return {
      date: todayKey,
      attempts: ["", "", "", "", ""],
      row: 0,
      col: 0,
      done: false,
      won: false,
      keyStates: {}
    };
  }

  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) >>> 0;
    }
    return h;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem("portfolio-word-game");
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (saved.date !== todayKey) return null;
      return saved;
    } catch {
      return null;
    }
  }

  function saveState() {
    localStorage.setItem("portfolio-word-game", JSON.stringify(state));
  }

  function renderGrid() {
    gridEl.innerHTML = "";

    for (let r = 0; r < 5; r++) {
      const rowEl = document.createElement("div");
      rowEl.className = "word-row";

      const word = state.attempts[r] || "";
      const evals = getEvaluation(word, r);

      for (let c = 0; c < 5; c++) {
        const cell = document.createElement("div");
        let cls = "word-cell";
        const char = word[c] || "";

        if (char) cls += " word-cell--filled";
        if (r === state.row && c === state.col && !state.done) cls += " word-cell--active";
        if (r < state.row || (state.done && word.length === 5)) {
          if (evals[c] === "correct") cls += " word-cell--correct";
          else if (evals[c] === "present") cls += " word-cell--present";
          else if (evals[c] === "absent") cls += " word-cell--absent";
        }

        cell.className = cls;
        cell.textContent = char;
        rowEl.appendChild(cell);
      }

      gridEl.appendChild(rowEl);
    }
  }

  function renderKeyboard() {
    keyboardEl.innerHTML = "";

    KEY_ROWS.forEach(row => {
      const rowEl = document.createElement("div");
      rowEl.className = "word-keyboard__row";

      row.forEach(key => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "word-key";
        btn.textContent = key;

        if (key === "ENTER" || key === "⌫") {
          btn.classList.add("word-key--wide");
        }

        const keyState = state.keyStates[key];
        if (keyState === "correct") btn.classList.add("word-key--correct");
        else if (keyState === "present") btn.classList.add("word-key--present");
        else if (keyState === "absent") btn.classList.add("word-key--absent");

        btn.addEventListener("click", () => handleKey(key));
        rowEl.appendChild(btn);
      });

      keyboardEl.appendChild(rowEl);
    });
  }

  function setFeedback(msg, type = "") {
    feedbackEl.textContent = msg;
    feedbackEl.className = "word-feedback";
    if (type) {
      feedbackEl.classList.add(type);
    }
  }

  function getEvaluation(word, rowIndex) {
    if (!word || word.length !== 5 || rowIndex > state.row) return [];
    const result = Array(5).fill("absent");
    const targetArr = target.split("");
    const wordArr = word.split("");

    for (let i = 0; i < 5; i++) {
      if (wordArr[i] === targetArr[i]) {
        result[i] = "correct";
        targetArr[i] = null;
        wordArr[i] = null;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (!wordArr[i]) continue;
      const idx = targetArr.indexOf(wordArr[i]);
      if (idx !== -1) {
        result[i] = "present";
        targetArr[idx] = null;
      }
    }

    return result;
  }

  function mergeKeyState(letter, nextState) {
    const current = state.keyStates[letter];
    const rank = { absent: 1, present: 2, correct: 3 };
    if (!current || rank[nextState] > rank[current]) {
      state.keyStates[letter] = nextState;
    }
  }

  function submitRow() {
    // Captura la generación al inicio; si el usuario resetea antes de que
    // resuelva el fetch, la generación habrá cambiado y descartamos el resultado
    const gen = submitGeneration;

    const guess = state.attempts[state.row];
    if (guess.length !== 5) {
      setFeedback("Escribe 5 letras.", "word-feedback--error");
      return;
    }

    // Guardia final antes de mutar el estado
    if (submitGeneration !== gen) return;

    const evals = getEvaluation(guess, state.row);
    guess.split("").forEach((letter, i) => mergeKeyState(letter, evals[i]));

    if (guess === target) {
      state.done = true;
      state.won = true;
      setFeedback("¡Correcto! Has acertado la palabra del día.", "word-feedback--success");
      saveState();
      renderGrid();
      renderKeyboard();
      return;
    }

    if (state.row === 4) {
      state.done = true;
      state.won = false;
      setFeedback(`Fin de la partida. La palabra era ${target}.`, "word-feedback--error");
      saveState();
      renderGrid();
      renderKeyboard();
      return;
    }

    state.row++;
    state.col = 0;
    setFeedback("");
    saveState();
    renderGrid();
    renderKeyboard();
  }

  function handleKey(key) {
    if (state.done) return;

    if (key === "ENTER") {
      submitRow();
      return;
    }

    if (key === "⌫" || key === "BACKSPACE") {
      if (state.col > 0) {
        const current = state.attempts[state.row];
        state.attempts[state.row] = current.slice(0, -1);
        state.col--;
        saveState();
        renderGrid();
      }
      return;
    }

    if (!/^[A-ZÑ]$/.test(key)) return;
    if (state.col >= 5) return;

    state.attempts[state.row] += key;
    state.col++;
    saveState();
    renderGrid();
  }

  function onKeyDown(e) {
    if (!document.getElementById("juego")) return;

    const key = e.key.toUpperCase();

    if (key === "ENTER") {
      // Evita que Enter active el botón Reiniciar (u otro botón) si tiene el foco
      e.preventDefault();
      handleKey("ENTER");
      return;
    }

    if (key === "BACKSPACE") {
      // Evita que Backspace navegue hacia atrás en el historial del navegador
      e.preventDefault();
      handleKey("BACKSPACE");
      return;
    }

    if (/^[A-ZÑ]$/.test(key)) {
      handleKey(key);
    }
  }

  resetBtn.addEventListener("click", () => {
    // Quitar el foco del botón para que futuros Enter no lo reactiven
    resetBtn.blur();
    // Incrementar generación invalida cualquier submitRow con fetch pendiente
    submitGeneration++;
    state = createEmptyState();
    saveState();
    setFeedback("");
    renderGrid();
    renderKeyboard();
  });

  // ── Teclado nativo en móvil ──────────────────────────────────────────
  const nativeInput = document.getElementById('wordNativeInput');
  const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
                      || ('ontouchstart' in window);

  if (isMobileDevice && nativeInput) {
    // Al tocar cualquier celda del tablero, abrir el teclado nativo
    gridEl.addEventListener('click', () => nativeInput.focus());

    // Captura cada carácter introducido desde el teclado nativo
    nativeInput.addEventListener('input', () => {
      const raw = nativeInput.value;
      nativeInput.value = ''; // vaciar para no acumular texto
      if (!raw) return;
      const char = raw[raw.length - 1].toUpperCase();
      if (/^[A-ZÑ]$/.test(char)) handleKey(char);
    });

    // Captura Backspace y Enter desde el teclado nativo
    nativeInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleKey('ENTER');
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleKey('BACKSPACE');
      }
    });
    return;
  }
  // ─────────────────────────────────────────────────────────────────────

  document.addEventListener("keydown", onKeyDown);

  if (state.done) {
    if (state.won) {
      setFeedback("Ya has resuelto la palabra de hoy.", "word-feedback--success");
    } else {
      setFeedback(`La palabra de hoy era ${target}.`, "word-feedback--error");
    }
  }

  renderGrid();
  renderKeyboard();
}

// =========================
// DATA: Credenciales
// =========================
const credentials = [
  {
    id:        "rec-tich",
    title:     "Carta de Recomendación",
    org:       "TICH Consulting",
    year:      "2025",
    desc:      "Emitida al finalizar las prácticas profesionales. Reconoce iniciativa, nivel técnico y capacidad de integración en equipo.",
    icon:      "⭐",
    thumbnail: "assets/carta-rec-tich.png",
    color:     "linear-gradient(135deg, #1F5C99 0%, #0f2d4f 100%)",
    file:      "assets/Carta recomendación Tich Consulting.pdf",
    type:      "rec",
    featured:  true
  },

  {
    id:    "udemy-bd",
    title: "Bases de Datos Relacionales",
    org:   "Udemy",
    year:  "2026",
    desc:  "Fundamentos de diseño relacional, normalización, relaciones y consultas SQL avanzadas. 4 horas.",
    icon:  "🗄️",
    color: "linear-gradient(135deg, #00897b 0%, #00695c 100%)",
    file:  "assets/CertificadoFundamentosBBDDrelacionales.pdf",
    type:  "cert"
  },

  {
    id:    "udemy-java",
    title: "Master Java Completo",
    org:   "Udemy",
    year:  "En curso",
    desc:  "De cero a experto en Java. +163 horas de programación orientada a objetos, estructuras de datos y patrones de diseño.",
    icon:  "☕",
    color: "linear-gradient(135deg, #b31217 0%, #e52d27 100%)",
    file:  "",
    type:  "cert"
  },
  {
    id:    "udemy-net",
    title: "Master ASP.NET MVC",
    org:   "Udemy",
    year:  "En curso",
    desc:  "Entity Framework con .NET 9. +15 horas de arquitectura MVC, API REST y despliegue en producción.",
    icon:  "🔷",
    color: "linear-gradient(135deg, #512bd4 0%, #813bd4 100%)",
    file:  "",
    type:  "cert"
  },
  {
    id:    "anthropic-dev",
    title: "Claude AI Developer",
    org:   "Anthropic Academy",
    year:  "Sin comenzar",
    desc:  "",
    icon:  "🤖",
    color: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    file:  "",
    type:  "cert"
  },
  {
    id:    "anthropic-api",
    title: "Building with Claude API",
    org:   "Anthropic Academy",
    year:  "Sin comenzar",
    desc:  "",
    icon:  "🧠",
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #2a475e 100%)",
    file:  "",
    type:  "cert"
  }
];

function renderCredentials() {
  const grid = document.getElementById('credentialsGrid');
  if (!grid) return;

  const featured = credentials.filter(c => c.featured);
  const rest      = credentials.filter(c => !c.featured);

  const renderCard = (c) => {
    const badgeText = c.type === 'rec' ? '🏅 Reconocimiento' : '🎓 Certificado';
    const yearBadge = c.year === 'En curso'
      ? `<span class="cred-year cred-year--ongoing">⏳ En curso</span>`
      : c.year === 'Sin comenzar'
        ? `<span class="cred-year cred-year--pending">Sin comenzar</span>`
        : `<span class="cred-year">${c.year}</span>`;

    const thumb = c.thumbnail
      ? c.featured
        ? `<img src="${c.thumbnail}" class="cred-card__thumb-img" alt="${c.title}" />`
        : `<iframe src="${c.thumbnail}#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                 class="cred-card__thumb-pdf"
                 title="${c.title}" tabindex="-1"></iframe>`
      : `<div class="cred-card__thumb-placeholder" style="background:${c.color}">
           <span class="cred-card__icon">${c.icon}</span>
         </div>`;

    const actions = c.file
      ? `<button class="cred-btn cred-btn--view"
                 onclick="openDocModal('${c.id}')">&#128065; Ver</button>
         <a href="${c.file}" download
            class="cred-btn cred-btn--download">⬇ Descargar</a>`
      : c.year === 'Sin comenzar' || c.status === 'pendiente'
        ? `<span class="cred-btn cred-btn--soon">🔜 Sin comenzar</span>`
        : `<span class="cred-btn cred-btn--soon">📚 En curso</span>`;

    return `
      <div class="cred-card${c.featured ? ' cred-card--featured' : ''}">
        <div class="cred-card__thumb"${!c.thumbnail ? ` style="background:${c.color}"` : ''}>
          ${thumb}
        </div>
        <div class="cred-card__body">
          <div class="cred-card__meta">
            <span class="cred-card__org">${c.org}</span>
            ${yearBadge}
          </div>
          <h3 class="cred-card__title">${c.title}</h3>
          <p  class="cred-card__desc">${c.desc}</p>
          <div class="cred-card__actions">
            ${actions}
            <span class="cred-card__badge cred-card__badge--inline">${badgeText}</span>
          </div>
        </div>
      </div>`;
  };

  grid.innerHTML = `
    <div class="cred-carousel">
      <button class="labs__arrow is-disabled" id="credPrev" aria-label="Anterior">❮</button>
      <div class="cred-grid__rest" id="credTrack">
        ${rest.map(renderCard).join('')}
      </div>
      <button class="labs__arrow" id="credNext" aria-label="Siguiente">❯</button>
    </div>`;

  // Carousel nav
  const track = document.getElementById('credTrack');
  const btnPrev = document.getElementById('credPrev');
  const btnNext = document.getElementById('credNext');
  if (track && btnPrev && btnNext) {
    const scrollAmount = () => track.querySelector('.cred-card')?.offsetWidth + 22 || 300;
    btnPrev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    btnNext.addEventListener('click', () => track.scrollBy({ left:  scrollAmount(), behavior: 'smooth' }));
    const updateBtns = () => {
      btnPrev.classList.toggle('is-disabled', track.scrollLeft <= 0);
      btnNext.classList.toggle('is-disabled', track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    };
    track.addEventListener('scroll', updateBtns, { passive: true });
    updateBtns();
  }
}

function openDocModal(id) {
  const c = credentials.find(x => x.id === id);
  if (!c || !c.file) return;

  document.getElementById('docModalTitle').textContent = c.title;
  document.getElementById('docModalSub').textContent   = c.org + ' · ' + c.year;
  document.getElementById('docModalDownload').href     = c.file;

  const frame   = document.getElementById('docModalFrame');
  const preview = document.getElementById('docModalPreview');
  const previewWrap = document.getElementById('docModalPreviewWrap');

  const thumbIsImage = c.thumbnail && !c.thumbnail.toLowerCase().endsWith('.pdf');

  if (thumbIsImage) {
    frame.style.display       = 'none';
    frame.src                 = '';
    previewWrap.style.display = 'block';
    preview.src               = c.thumbnail;
  } else {
    previewWrap.style.display = 'none';
    preview.src               = '';
    frame.style.display       = 'block';
    frame.src                 = c.file;
  }

  const modal = document.getElementById('docModal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDocModal() {
  document.getElementById('docModal').classList.remove('is-open');
  document.getElementById('docModal').setAttribute('aria-hidden', 'true');
  document.getElementById('docModalFrame').src = '';
  document.getElementById('docModalPreview').src = '';
  document.getElementById('docModalPreviewWrap').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('docBackdrop')
  ?.addEventListener('click', closeDocModal);
document.getElementById('docModalClose')
  ?.addEventListener('click', closeDocModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDocModal();
});

// =========================
// INIT
// =========================
renderProjects();
initProjectsCarousel();
renderCredentials();
renderSkills();
initSkillsScroller();
renderLabs();
initLabsCarousel();
initProjectModal();
initContactEmailJS();
initTheme();
initNav();
initVisitCounter();
initFlappyDev();
initWordGame();