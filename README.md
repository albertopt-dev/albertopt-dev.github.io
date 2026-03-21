<div align="center">

# 🧑‍💻 Alberto Pérez Talaván — Portfolio Web

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-4CAF50?style=for-the-badge&logo=mail.ru&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)

**Portfolio personal · Desarrollador Java Junior · Android nativo · Java & Kotlin**

[🌐 Ver en vivo](https://albertopt-dev.github.io) · [📬 Contactar](mailto:alberto.pt.dev@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/alberto-perez-talavan) · [🐙 GitHub](https://github.com/albertopt-dev)

</div>

---

## 📋 Tabla de contenidos

1. [Descripción](#-descripción)
2. [Demo y capturas](#-demo-y-capturas)
3. [Características](#-características)
4. [Tecnologías y dependencias](#-tecnologías-y-dependencias)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Secciones de la web](#-secciones-de-la-web)
7. [Instalación y uso local](#-instalación-y-uso-local)
8. [Configuración de EmailJS](#-configuración-de-emailjs)
9. [Guía de personalización](#-guía-de-personalización)
   - [Añadir un proyecto](#añadir-un-proyecto)
   - [Añadir un Lab / experimento](#añadir-un-lab--experimento)
   - [Añadir una habilidad al stack](#añadir-una-habilidad-al-stack)
   - [Cambiar la foto de perfil](#cambiar-la-foto-de-perfil)
10. [Diseño y sistema de tokens CSS](#-diseño-y-sistema-de-tokens-css)
11. [Modo oscuro / claro](#-modo-oscuro--claro)
12. [Animación de fondo — Matrix Rain](#-animación-de-fondo--matrix-rain)
13. [Responsive design](#-responsive-design)
14. [Accesibilidad](#-accesibilidad)
15. [Soporte de navegadores](#-soporte-de-navegadores)
16. [Licencia](#-licencia)

---

## 📖 Descripción

Portfolio web **completamente estático** (HTML + CSS + JS vanilla, sin frameworks ni bundlers) diseñado para mostrar mi perfil profesional como Desarrollador Java Junior. El objetivo era construir algo desde cero, con código limpio, rendimiento nativo y un diseño cuidado que refleje mi nivel de atención al detalle.

Puntos clave del proyecto:
- **Cero dependencias de framework** — todo vanilla, sin React, Vue, ni bundler.
- **Datos centralizados en `app.js`** — proyectos, labs y skills se definen como arrays JS y se renderizan dinámicamente, así añadir nueva información es trivial.
- **Dark / Light theme** con persistencia en `localStorage` y detección automática de preferencia del sistema operativo.
- **Formulario de contacto funcional** integrado con EmailJS, sin backend propio.
- **Animación generativa** en el hero (Matrix Rain con paleta cromática cíclica).

---

## 🖼️ Demo y capturas

> Puedes ver el portfolio en vivo en: **[albertopt-dev.github.io](https://albertopt-dev.github.io)**

| Modo claro | Modo oscuro |
|:---:|:---:|
| *(añade un screenshot aquí)* | *(añade un screenshot aquí)* |

---

## ✨ Características

| Característica | Detalle |
|---|---|
| 🎨 **Dark / Light mode** | Toggle manual + detección de `prefers-color-scheme` + persistencia `localStorage` |
| 🌧️ **Matrix Rain animado** | Canvas generativo con caracteres Java/Kotlin, runas y código. Paleta de color cíclica `hsl` |
| 🃏 **Tarjetas de proyectos dinámicas** | Renderizadas desde un array JS con estado (`terminado`, `en-proceso`, `próximamente`) |
| 🔍 **Modal de detalle** | Muestra título, descripción, highlights, stack y links. Cierra con Escape o clic en backdrop |
| ↔️ **Skills scroller** | Carrusel horizontal con flechas y scroll suave; oculta/muestra flechas según el scroll |
| 📬 **Formulario de contacto** | EmailJS — envío directo al email sin backend. Feedback visual de éxito/error |
| 📱 **Responsive** | Un único breakpoint en 960 px. Mobile-first friendly |
| ♿ **Accesibilidad** | `aria-label`, `aria-hidden`, `role="dialog"`, `aria-modal`, `aria-live="polite"` |
| ⚡ **Sin build step** | Abrir `index.html` en el navegador (o servir con cualquier servidor estático) |
| 📄 **CV descargable** | Enlace en la navbar que descarga el PDF directamente |

---

## 🛠️ Tecnologías y dependencias

### Stack principal

| Tecnología | Versión / Fuente | Uso |
|---|---|---|
| **HTML5** | Nativo | Estructura semántica |
| **CSS3** | Nativo | Estilos, custom properties, animaciones |
| **JavaScript ES2020** | Nativo | Lógica, render dinámico, interactividad |

### Dependencias externas (CDN — sin npm)

| Librería | CDN | Propósito |
|---|---|---|
| [Devicons](https://devicon.dev/) | `jsdelivr` v2.16.0 | Iconos de tecnologías en stack y labs |
| [Google Fonts](https://fonts.google.com/) | `fonts.googleapis.com` | Fuentes: `Outfit` (display) + `DM Sans` (body) |
| [EmailJS Browser SDK](https://www.emailjs.com/) | `jsdelivr` v4 | Envío del formulario de contacto |

**No hay `package.json`, `node_modules`, ni proceso de build.** Todas las dependencias se cargan vía `<link>` y `<script>` en el `<head>`.

---

## 📁 Estructura del proyecto

```
portfolio-web/
│
├── index.html              # Estructura HTML completa (nav, secciones, modal, footer)
├── styles.css              # Todos los estilos (tokens, componentes, responsive)
├── app.js                  # Datos + lógica: render de proyectos, labs, skills, tema, EmailJS
├── favicon.svg             # Favicon SVG
│
└── assets/
    ├── foto.jpg                                    # Foto de perfil del hero
    ├── Alberto_Pérez_Talaván_CV_2025.pdf           # CV descargable
    ├── Carta recomendación Tich Consulting.pdf     # Carta de recomendación
    ├── Carta de presentacion.pdf                   # Carta de presentación
    └── proyectos/                                  # Imágenes preview de proyectos (opcional)
```

### Descripción de cada archivo

#### `index.html`
Contiene toda la estructura semántica de la web. Las secciones de proyectos, labs y skills **no tienen HTML fijo** — solo tienen un `<div id="...Grid">` vacío que `app.js` rellena al cargar. Los datos de contenido están en `app.js`.

#### `styles.css`
Sistema de diseño completo organizado por secciones. Usa **CSS custom properties** (tokens) para toda la paleta de colores, sombras, radios y transiciones. Cambiar el color de acento del portfolio es tan simple como modificar `--accent` en `:root`.

#### `app.js`
Archivo central que contiene:
- **Arrays de datos**: `projects`, `labs`, `skills`
- **Funciones de render**: `renderProjects()`, `renderLabs()`, `renderSkills()`
- **Lógica del modal**: `openProjectModal()`, `closeProjectModal()`
- **Skills scroller**: `initSkillsScroller()`
- **Tema**: `initTheme()`
- **Formulario**: `initContactEmailJS()`
- **Navegación suave**: `initNav()`

---

## 🗂️ Secciones de la web

### 1. `#hero` — Presentación
- Badge animado "Disponible para nuevas oportunidades" con punto pulsante verde.
- Título, subtítulo con especialidad y stack.
- CTAs: *Ver proyectos* y *Contactar*.
- Estadísticas rápidas: apps propias, producto en producción, horas de formación.
- Avatar con fallback de iniciales si la imagen no carga.
- Fondo Canvas con Matrix Rain.

### 2. `#sobre-mi` — Sobre mí
- Texto biográfico en tres párrafos (experiencia I+D, FP DAM + prácticas, especialización).
- Enlace a la carta de recomendación de TICH Consulting (PDF en nueva pestaña).
- Grid de tarjetas de habilidades con etiqueta de nivel (dominado vs. aprendizaje).

### 3. `#proyectos` — Proyectos
- Grid responsive de tarjetas generadas dinámicamente.
- Badges de estado: `✓ Terminado` (azul), `🔧 En desarrollo` (amarillo), `⭐ Destacado`.
- Tarjeta "Próximamente" con borde discontinuo para los slots vacíos.
- Botón "Ver detalles" abre el modal; botón "Repo" lleva al repositorio en GitHub.

### 4. `#habilidades` — Habilidades
- Carrusel horizontal con tarjetas de iconos (Devicons).
- Flechas ❮ ❯ con scroll suave. La flecha izquierda aparece deshabilitada cuando estás al inicio.
- Stack: Java, Kotlin, JavaScript, MySQL, Firebase, WordPress, Laravel, PHP, Postman, Spring, HTML5, CSS3, Git, Android.

### 5. `#taller` — El taller (Labs)
- Proyectos personales y experimentos sin cliente ni fecha límite.
- Cards con iconos de tecnologías, descripción y enlace al repositorio.

### 6. `#contacto` — Contacto
- Links directos a email, LinkedIn y GitHub.
- Formulario con campos Nombre, Email y Mensaje — integrado con EmailJS.
- Feedback accesible con `aria-live="polite"`.

---

## 🚀 Instalación y uso local

Este proyecto **no requiere ningún proceso de instalación**. Al no tener dependencias npm ni build step:

```bash
# 1. Clona el repositorio
git clone https://github.com/albertopt-dev/portfolio-web.git
cd portfolio-web

# 2. Opción A — Abrir directamente en el navegador
#    (doble clic en index.html o arrastrarlo a Chrome/Firefox)

# 3. Opción B — Servidor local con Python (recomendado para evitar restricciones CORS)
python -m http.server 8080
# Visita http://localhost:8080

# 4. Opción C — Con Node.js (si tienes npx disponible)
npx serve .
# Visita http://localhost:3000
```

> **Nota:** Para que el formulario de contacto funcione, necesitas configurar tus propias credenciales de EmailJS (ver apartado siguiente).

---

## 📧 Configuración de EmailJS

El formulario de contacto usa [EmailJS](https://www.emailjs.com/) para enviar emails sin backend. Para configurar el tuyo propio:

1. **Crea una cuenta** en [emailjs.com](https://www.emailjs.com/) (tier gratuito: 200 emails/mes).

2. **Crea un servicio de email** (Gmail, Outlook, etc.) y anota el `Service ID`.

3. **Crea una plantilla** con las variables `{{name}}`, `{{email}}`, `{{message}}` y anota el `Template ID`.

4. **Obtén tu Public Key** desde *Account → API Keys*.

5. **Actualiza `index.html`** — reemplaza la Public Key en:
   ```html
   <script>emailjs.init("TU_PUBLIC_KEY_AQUI");</script>
   ```

6. **Actualiza `app.js`** — reemplaza Service ID y Template ID en `initContactEmailJS()`:
   ```js
   emailjs.sendForm(
     'TU_SERVICE_ID',    // ← reemplaza
     'TU_TEMPLATE_ID',   // ← reemplaza
     form
   )
   ```

---

## 🎨 Guía de personalización

Toda la información del portfolio está centralizada en el array al inicio de `app.js`. **No es necesario tocar el HTML** para actualizar el contenido.

### Añadir un proyecto

En `app.js`, añade un objeto al array `projects`:

```js
{
  id: "p3",                          // ID único (usado por el modal)
  title: "Nombre del Proyecto",
  description: "Descripción breve que aparece en la tarjeta y en el modal.",
  tags: ["Android", "Firebase"],     // Etiquetas de categoría (gris en la tarjeta)
  stacks: ["Kotlin", "Room"],        // Stack técnico (azul en la tarjeta)
  status: "terminado",               // "terminado" | "en-proceso" | "coming"
  image: "assets/proyectos/mi-proyecto.png", // "" para usar iniciales como placeholder
  featured: false,                   // true añade badge ⭐ Destacado
  highlights: [                      // Puntos clave en el modal (puede ser [])
    "Feature 1",
    "Feature 2"
  ],
  links: {
    repo: "https://github.com/tu-usuario/repo",  // "" si es privado
    demo: "https://tu-demo.com"                  // "" si no hay demo
  }
}
```

**Estados disponibles:**

| `status` | Apariencia |
|---|---|
| `"terminado"` | Badge azul `✓ Terminado` |
| `"en-proceso"` | Badge amarillo `🔧 En desarrollo` |
| `"coming"` | Tarjeta con borde discontinuo "Próximamente" |

### Añadir un Lab / experimento

En `app.js`, añade un objeto al array `labs`:

```js
{
  title: "Nombre del experimento",
  description: "Qué explora este proyecto y por qué lo hiciste.",
  iconClasses: [
    "devicon-kotlin-plain colored",    // Busca el nombre en devicon.dev
    "devicon-firebase-plain colored"
  ],
  links: {
    repo: "https://github.com/tu-usuario/repo"  // "" si no hay repo público
  }
}
```

### Añadir una habilidad al stack

En `app.js`, añade un objeto al array `skills`:

```js
{ name: "Flutter", iconClass: "devicon-flutter-plain colored" }
```

Los nombres de clase de los iconos están en [devicon.dev](https://devicon.dev/). Busca la tecnología, haz clic en el icono y copia la clase.

### Cambiar la foto de perfil

Reemplaza el archivo `assets/foto.jpg` con tu foto. La imagen se recorta con `object-fit: cover` centrado en la parte superior (`object-position: top`), por lo que las fotos verticales tipo carnet funcionan perfectamente.

Si la imagen no carga (o mientras no exista), el fallback muestra automáticamente las iniciales **APT** en el frame del avatar.

---

## 🎨 Diseño y sistema de tokens CSS

Todos los valores de diseño están definidos como **CSS custom properties** en `:root` (en `styles.css`). Para cambiar el aspecto visual basta con editar estos tokens:

```css
:root {
  /* Paleta */
  --accent:      #1F5C99;  /* ← Color principal de acento */
  --accent-lt:   #3b82f6;  /* Acento claro */
  --accent-bg:   rgba(31,92,153,0.08);

  /* Texto */
  --text:        #0f1525;  /* Texto primario */
  --text2:       #4a5568;  /* Texto secundario */
  --text3:       #94a3b8;  /* Texto terciario / placeholders */

  /* Fondos */
  --bg:          #ffffff;
  --bg2:         #f7f8fc;
  --bg3:         #eef0f6;

  /* Tipografía */
  --font-display: 'Outfit', sans-serif;   /* Títulos y logos */
  --font-body:    'DM Sans', sans-serif;  /* Cuerpo de texto */

  /* Otros */
  --radius:      12px;
  --radius-lg:   20px;
  --nav-h:       68px;       /* Altura de la barra de navegación */
  --transition:  0.25s ease;
}
```

El modo oscuro sobreescribe únicamente los tokens de color en la clase `.dark`.

---

## 🌙 Modo oscuro / claro

El sistema de tema funciona en tres capas:

1. **Detección automática** — Al cargar la página, lee `prefers-color-scheme: dark` del sistema operativo.
2. **Persistencia manual** — Si el usuario cambia el tema con el botón 🌙/☀️, la preferencia se guarda en `localStorage` bajo la clave `"theme"` y tiene prioridad sobre la detección del sistema.
3. **Transición suave** — Todos los cambios de color usan `transition: background 0.25s ease, color 0.25s ease`.

La clase `.dark` se añade/elimina en `<html>` y los tokens CSS del modo oscuro la sobreescriben automáticamente.

---

## 🌧️ Animación de fondo — Matrix Rain

El hero incluye un `<canvas id="bgCanvas">` con una animación generativa inspirada en el Matrix rain, personalizada con el vocabulario de un desarrollador:

```
chars = '01アイウエオJavaKotlin{}[]=>&&||null true API git//'
```

**Parámetros ajustables** (al final de `index.html`, dentro del `<script>` inline):

| Variable | Valor por defecto | Efecto |
|---|---|---|
| `FONT_SIZE` | `14` | Tamaño de los caracteres en px |
| `hue` | `120` (verde) | Color inicial de la lluvia (0=rojo, 120=verde, 240=azul) |
| `hue + 0.3` | `+0.3` por frame | Velocidad del ciclo de color — aumentar para ir más rápido |
| `frameCount % 2.0` | `2.0` | Cada cuántos frames se dibuja — aumentar para ir más lento |
| `alpha` | `0.12 – 0.20` | Opacidad de los caracteres |

El fondo adapta su opacidad y color al modo claro/oscuro automáticamente.

---

## 📱 Responsive design

El portfolio es **responsive con un único breakpoint** en `960px`:

| Viewport | Comportamiento |
|---|---|
| `> 960px` (escritorio) | Hero en fila (`flex-row`), About en 2 columnas, Navbar con links visibles |
| `≤ 960px` (móvil/tablet) | Hero en columna (`flex-column`), About en 1 columna, links de navbar ocultos, formulario de contacto en 1 columna |

El tamaño del texto usa `clamp()` en los títulos principales para escalar suavemente entre tamaños de pantalla sin necesidad de media queries adicionales.

---

## ♿ Accesibilidad

Medidas de accesibilidad implementadas:

- **Navegación por teclado**: el modal se cierra con `Escape`.
- **Modal semántico**: `role="dialog"`, `aria-modal="true"`, `aria-hidden` gestionado dinámicamente al abrir/cerrar.
- **Navegación**: `<nav>` con `aria-label="Navegación principal"`.
- **Botones de icono**: `aria-label` descriptivo en el botón de tema y las flechas del scroller.
- **Formulario**: `<label>` asociado a cada `<input>` mediante `for`/`id`.
- **Feedback del formulario**: `aria-live="polite"` para que los lectores de pantalla anuncien el resultado del envío.
- **Imágenes decorativas**: `aria-hidden="true"` en iconos decorativos de Devicons.
- **Alt text**: todas las imágenes con `alt` descriptivo; fallback de iniciales para la foto si no carga.

---

## 🌐 Soporte de navegadores

| Navegador | Soporte |
|---|---|
| Chrome / Edge 90+ | ✅ Completo |
| Firefox 90+ | ✅ Completo |
| Safari 15+ | ✅ Completo |
| Opera 75+ | ✅ Completo |
| IE 11 | ❌ No soportado (uso de custom properties, `clamp()`, `backdrop-filter`) |

---

## 📄 Licencia

```
MIT License

Copyright (c) 2026 Alberto Pérez Talaván

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

<div align="center">

Hecho con 🧠 y mucho café por **Alberto Pérez Talaván**

[📬 alberto.pt.dev@gmail.com](mailto:alberto.pt.dev@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/alberto-perez-talavan) · [🐙 GitHub](https://github.com/albertopt-dev)

</div>
