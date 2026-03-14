const folders = Array.from(document.querySelectorAll("[data-folder]"));
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const html = document.documentElement;
const folderStage = document.querySelector(".folder-stage");

const translations = {
  en: {
    windowLabel: "folder portfolio",
    heroKicker: "Marketing Manager / Digital Promotion",
    heroCopy: "Open any folder tab to explore experience, skills, and projects.",
    tabMain: "Main / Resume",
    tabAbout: "About / Skills",
    tabProjects: "Projects",
    sectionProfile: "Profile",
    mainRole: "Marketing Manager",
    mainIntro1:
      "Digital Marketing Manager with experience in the IT industry, focused on SEO, social media, PPC advertising, and brand promotion strategy.",
    mainIntro2: "Open to remote, office-based, and hybrid opportunities.",
    sectionContact: "Contact",
    contactEmail: "Email",
    contactFormat: "Format",
    contactFormatValue: "Remote / Office / Hybrid",
    sectionEducation: "Education",
    educationPeriod: "September 2021 — July 2025",
    educationDegree: "Bachelor in Advertising & PR",
    educationTitle: "Kazan Federal University (KFU), Kazan, Russia",
    educationText:
      "During her studies, Anna focused on marketing, advertising, public relations, politics, and sociology.",
    sectionExperience: "Work experience",
    tonfotosPeriod: "March 2025 — present",
    tonfotosRole: "Marketing Manager",
    tonfotos1: "SEO optimization and multilingual semantic core creation.",
    tonfotos2: "Blog traffic analysis and article formatting in Visual Studio Code.",
    tonfotos3: "Outreach, link-building, and partner communication.",
    tonfotos4:
      "Internal marketing strategy based on audience, market, and competitors.",
    tonfotos5:
      "Guerrilla marketing on Reddit and recruitment support via Fiverr.",
    exlibrisPeriod: "September 2025 — November 2025",
    exlibrisRole: "Marketing Manager (project-based)",
    exlibris1:
      "Built and analyzed targeted advertising campaigns on VK and Telegram.",
    exlibris2: "Managed SMM content and monitored project KPIs.",
    exlibris3:
      "Created a landing page for browser-based promotion in Tilda.",
    smartPeriod: "February 2025",
    smartRole: "SEO Intern",
    smart1: "Cleaned semantic core data.",
    smart2: "Clustered search queries.",
    smart3: "Analyzed search query frequency.",
    sectionAbout: "About me",
    aboutTitle: "Structured marketing with a creative angle",
    aboutText1:
      "Anna combines performance thinking with content sensitivity. She likes to build clear promotion systems, work with audience research, and turn brand ideas into practical digital campaigns.",
    aboutText2:
      "Her strongest interests are IT products, digital communities, game-related projects, and visual communication.",
    sectionStrengths: "Key strengths",
    skillLanding: "Landing pages",
    skillResearch: "Audience research",
    skillContent: "Content planning",
    skillAnalytics: "Campaign analytics",
    sectionTools: "Tools",
    toolSeoTitle: "Traffic & SEO",
    toolVisualTitle: "Visual content",
    toolDocsTitle: "Documents & data",
    toolCodeTitle: "Code",
    sectionLanguages: "Languages",
    langRussian: "Russian",
    langEnglish: "English",
    langFrench: "French",
    langGerman: "German",
    langNative: "Native",
    sectionFeaturedProject: "Featured project",
    projectShotCaption: "replace with game screenshot",
    projectText1:
      "A startup video game project designed to increase interest in classic literature among young people.",
    projectText2:
      "Anna worked on promotion strategy, targeted ads, SMM, and the landing page for browser-based acquisition.",
    projectRoleLabel: "Role",
    projectRoleValue: "Marketing Manager",
    projectChannelsLabel: "Channels",
    projectFocusLabel: "Focus",
    projectFocusValue: "Ads, SMM, landing page",
    projectNote:
      "Add real screenshots from the game, social media creatives, or the landing page here.",
  },
  ru: {
    windowLabel: "портфолио в папках",
    heroKicker: "Marketing Manager / Digital Promotion",
    heroCopy: "Открой любую папку и посмотри опыт, навыки и проекты.",
    tabMain: "Главное / Резюме",
    tabAbout: "Обо мне / Навыки",
    tabProjects: "Проекты",
    sectionProfile: "Профиль",
    mainRole: "Маркетинг-менеджер",
    mainIntro1:
      "Digital Marketing Manager с опытом в IT, специализируется на SEO, социальных сетях, PPC-рекламе и стратегии продвижения бренда.",
    mainIntro2: "Открыта к remote, office-based и hybrid форматам работы.",
    sectionContact: "Контакты",
    contactEmail: "Почта",
    contactFormat: "Формат",
    contactFormatValue: "Удалённо / Офис / Гибрид",
    sectionEducation: "Образование",
    educationPeriod: "Сентябрь 2021 — Июль 2025",
    educationDegree: "Бакалавриат по рекламе и PR",
    educationTitle:
      "Казанский федеральный университет (КФУ), Казань, Россия",
    educationText:
      "Во время учёбы Анна изучала маркетинг, рекламу, связи с общественностью, политику и социологию.",
    sectionExperience: "Опыт работы",
    tonfotosPeriod: "Март 2025 — настоящее время",
    tonfotosRole: "Marketing Manager",
    tonfotos1:
      "SEO-оптимизация и создание семантического ядра на нескольких языках.",
    tonfotos2:
      "Анализ трафика блога и форматирование статей в Visual Studio Code.",
    tonfotos3: "Outreach, link-building и коммуникация с партнёрами.",
    tonfotos4:
      "Разработка внутренней маркетинговой стратегии на основе аудитории, рынка и конкурентов.",
    tonfotos5:
      "Guerrilla marketing на Reddit и поиск специалистов через Fiverr.",
    exlibrisPeriod: "Сентябрь 2025 — Ноябрь 2025",
    exlibrisRole: "Marketing Manager (проектно)",
    exlibris1:
      "Полностью создала и затем анализировала таргетированные рекламные кампании во VK и Telegram.",
    exlibris2:
      "Вела SMM-контент и отслеживала ключевые KPI проекта.",
    exlibris3: "Сделала landing page для продвижения через Tilda.",
    smartPeriod: "Февраль 2025",
    smartRole: "SEO Intern",
    smart1: "Чистила данные семантического ядра.",
    smart2: "Кластеризовала поисковые запросы.",
    smart3: "Анализировала частотность поисковых запросов.",
    sectionAbout: "Обо мне",
    aboutTitle: "Структурный маркетинг с креативным взглядом",
    aboutText1:
      "Анна сочетает performance-подход и чувство к контенту. Ей нравится выстраивать понятные системы продвижения, работать с исследованием аудитории и превращать идеи бренда в практичные digital-кампании.",
    aboutText2:
      "Больше всего её интересуют IT-продукты, цифровые сообщества, игровые проекты и визуальная коммуникация.",
    sectionStrengths: "Сильные стороны",
    skillLanding: "Лендинги",
    skillResearch: "Исследование аудитории",
    skillContent: "Контент-планирование",
    skillAnalytics: "Аналитика кампаний",
    sectionTools: "Инструменты",
    toolSeoTitle: "Трафик и SEO",
    toolVisualTitle: "Визуальный контент",
    toolDocsTitle: "Документы и данные",
    toolCodeTitle: "Код",
    sectionLanguages: "Языки",
    langRussian: "Русский",
    langEnglish: "Английский",
    langFrench: "Французский",
    langGerman: "Немецкий",
    langNative: "Родной",
    sectionFeaturedProject: "Основной проект",
    projectShotCaption: "замени на скриншот игры",
    projectText1:
      "Стартап-проект видеоигры, который должен был повысить интерес молодёжи к классической литературе.",
    projectText2:
      "Анна отвечала за стратегию продвижения, таргетированную рекламу, SMM и лендинг для браузерного привлечения.",
    projectRoleLabel: "Роль",
    projectRoleValue: "Marketing Manager",
    projectChannelsLabel: "Каналы",
    projectFocusLabel: "Фокус",
    projectFocusValue: "Реклама, SMM, landing page",
    projectNote:
      "Сюда можно добавить реальные скриншоты игры, креативы для соцсетей или экран лендинга.",
  },
};

function updateStageHeight() {
  let maxBottom = 0;

  folders.forEach((folder) => {
    const top = parseFloat(getComputedStyle(folder).top) || 0;
    const plate = folder.querySelector(".folder-plate");
    const body = folder.querySelector(".folder-body");
    const extra = folder.classList.contains("is-open")
      ? body.scrollHeight + 120
      : 0;

    maxBottom = Math.max(maxBottom, top + plate.offsetHeight + extra);
  });

  folderStage.style.minHeight = `${maxBottom + 40}px`;
}

function closeAllFolders() {
  folders.forEach((folder) => {
    folder.classList.remove("is-open");

    const tab = folder.querySelector(".folder-tab");
    const body = folder.querySelector(".folder-body");

    tab.setAttribute("aria-expanded", "false");
    body.hidden = false;
    body.style.maxHeight = "0px";
  });

  updateStageHeight();
}

function openFolder(folder) {
  const tab = folder.querySelector(".folder-tab");
  const body = folder.querySelector(".folder-body");

  folder.classList.add("is-open");
  tab.setAttribute("aria-expanded", "true");

  requestAnimationFrame(() => {
    body.style.maxHeight = `${body.scrollHeight + 2}px`;
    updateStageHeight();
  });
}

function toggleFolder(folder) {
  const isOpen = folder.classList.contains("is-open");
  closeAllFolders();
  if (!isOpen) openFolder(folder);
}

folders.forEach((folder) => {
  const tab = folder.querySelector(".folder-tab");
  const body = folder.querySelector(".folder-body");

  body.hidden = false;
  body.style.maxHeight = "0px";

  tab.addEventListener("click", () => toggleFolder(folder));
});

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  html.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.innerHTML = dict[key];
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("annaPortfolioLang", lang);

  folders.forEach((folder) => {
    if (folder.classList.contains("is-open")) {
      const body = folder.querySelector(".folder-body");
      body.style.maxHeight = `${body.scrollHeight + 2}px`;
    }
  });

  updateStageHeight();
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
});

window.addEventListener("resize", updateStageHeight);

applyTranslations(localStorage.getItem("annaPortfolioLang") || "en");
closeAllFolders();

.folder-black .folder-tab {
  left: 32px;
}

.folder-gray .folder-tab {
  left: 128px;
}

.folder-burgundy .folder-tab {
  left: 350px;
}

@media (max-width: 760px) {
  .folder-tab {
    left: 18px !important;
  }
}
