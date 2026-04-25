const contentEl = document.getElementById("content");
const statusEl = document.getElementById("status");
const projectTitleEl = document.getElementById("project-title");
const projectSubtitleEl = document.getElementById("project-subtitle");
const heroTitleEl = document.getElementById("hero-title");
const heroDescriptionEl = document.getElementById("hero-description");
const themeToggleEl = document.getElementById("theme-toggle");

const README_PATH = "./README.md";
const THEME_KEY = "readme-site-theme";
const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractPlainText(markdown) {
  return markdown
    .replace(/<[^>]*>/g, " ")
    .replace(/[`*_>#~\-]/g, " ")
    .replace(/\[[^\]]+\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function getSystemTheme() {
  return themeMediaQuery.matches ? "dark" : "light";
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage failures so the toggle still works in restricted contexts.
  }
}

function applyTheme(theme) {
  document.documentElement.classList.remove("theme-light", "theme-dark");
  document.documentElement.classList.add(`theme-${theme}`);
  themeToggleEl.textContent = theme === "dark" ? "Claro" : "Escuro";
  themeToggleEl.setAttribute("aria-pressed", String(theme === "dark"));
}

function initializeTheme() {
  const savedTheme = getStoredTheme();
  applyTheme(savedTheme || getSystemTheme());
}

function configureMarkdown() {
  const renderer = new marked.Renderer();
  const slugCounts = new Map();

  renderer.heading = ({ tokens, depth }) => {
    const text = marked.Parser.parseInline(tokens);
    const plainText = tokens.map((token) => token.text || "").join(" ").trim() || text.replace(/<[^>]+>/g, "");
    const baseSlug = slugify(plainText || "secao");
    const count = slugCounts.get(baseSlug) || 0;
    slugCounts.set(baseSlug, count + 1);
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`;

    return `
      <h${depth} id="${slug}">
        ${text}
        <a class="heading-anchor" href="#${slug}" aria-label="Link para ${plainText}">#</a>
      </h${depth}>
    `;
  };

  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: false,
    mangle: false,
    renderer,
  });
}

function updatePageMetadata(markdown) {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);
  const title = headingMatch ? headingMatch[1].trim() : "Documentação";
  const description = extractPlainText(markdown).slice(0, 180) || "Versão web do README do projeto.";

  document.title = `${title} | README`;
  projectTitleEl.textContent = title;
  projectSubtitleEl.textContent = "README renderizado como site estático";
  heroTitleEl.textContent = title;
  heroDescriptionEl.textContent = description;
}

function enhanceRenderedContent() {
  contentEl.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      link.target = "_blank";
      link.rel = "noreferrer noopener";
    }
  });

  contentEl.querySelectorAll("img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
  });

  contentEl.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
}

function showError(message) {
  statusEl.innerHTML = `
    <div class="empty-state">
      <h2>Não foi possível carregar o README</h2>
      <p>${message}</p>
    </div>
  `;
}

async function renderReadme() {
  try {
    const response = await fetch(README_PATH, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Falha ao buscar ${README_PATH}: ${response.status}`);
    }

    const markdown = await response.text();
    if (!markdown.trim()) {
      throw new Error("O arquivo README.md está vazio.");
    }

    updatePageMetadata(markdown);
    contentEl.innerHTML = marked.parse(markdown);
    enhanceRenderedContent();

    statusEl.hidden = true;
    contentEl.hidden = false;
  } catch (error) {
    console.error(error);
    const isFileProtocol = window.location.protocol === "file:";
    const hint = isFileProtocol
      ? "Seu navegador pode bloquear o carregamento de arquivos locais via fetch. Em GitHub Pages ou qualquer servidor estático, tudo funcionará normalmente."
      : "Verifique se o arquivo README.md está na mesma pasta de index.html.";

    showError(`${error.message} ${hint}`);
  }
}

themeToggleEl.addEventListener("click", () => {
  const nextTheme = document.documentElement.classList.contains("theme-dark") ? "light" : "dark";
  setStoredTheme(nextTheme);
  applyTheme(nextTheme);
});

function handleSystemThemeChange(event) {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? "dark" : "light");
  }
}

if (typeof themeMediaQuery.addEventListener === "function") {
  themeMediaQuery.addEventListener("change", handleSystemThemeChange);
} else if (typeof themeMediaQuery.addListener === "function") {
  themeMediaQuery.addListener(handleSystemThemeChange);
}

initializeTheme();
configureMarkdown();
renderReadme();
