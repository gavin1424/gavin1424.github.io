(function () {
  "use strict";

  const config = window.SITE_CONFIG;
  if (!config) return;

  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-site-menu]");
  const demoDialog = document.querySelector("#demo-dialog");
  const serviceDialog = document.querySelector("#service-dialog");
  const privacyDialog = document.querySelector("#privacy-dialog");

  function setTheme() {
    const themeMap = {
      ink: "--ink",
      paper: "--paper",
      cream: "--cream",
      clay: "--clay",
      clayDark: "--clay-dark",
      olive: "--olive",
      blue: "--blue"
    };

    Object.entries(themeMap).forEach(([key, variable]) => {
      if (config.theme && config.theme[key]) {
        root.style.setProperty(variable, config.theme[key]);
      }
    });
  }

  function absoluteUrl(path) {
    try {
      return new URL(path || "", config.seo.baseUrl).href;
    } catch (error) {
      return path || "";
    }
  }

  function setMeta(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.append(element);
    }
    element.setAttribute("content", content);
  }

  function initializeSeo() {
    const pageKey = body.dataset.page || "home";
    const page = config.seo && config.seo.pages && config.seo.pages[pageKey];
    if (!page) return;

    const pageUrl = absoluteUrl(page.path);
    const imageUrl = absoluteUrl(page.ogImage);
    const siteName = pageKey === "service" ? config.service.name : config.brand.name;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.robots);
    setMeta("property", "og:type", page.type || "website");
    setMeta("property", "og:locale", "zh_TW");
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", page.ogImageAlt || page.title);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "twitter:image:alt", page.ogImageAlt || page.title);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = pageUrl;

    let structuredData = document.head.querySelector("script[data-structured-data]");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.structuredData = "";
      document.head.append(structuredData);
    }
    const schema = Object.assign({}, page.schema, { url: pageUrl });
    structuredData.textContent = JSON.stringify(schema);
  }

  function getConfigValue(path) {
    return path.split(".").reduce((value, key) => value && value[key], config);
  }

  function setConfigText() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const value = getConfigValue(element.dataset.config);
      if (typeof value === "string" && value.trim()) {
        element.textContent = value;
      }
    });
  }

  function createCourseCard(course) {
    const article = document.createElement("article");
    article.className = "course-card";

    const top = document.createElement("div");
    top.className = "course-top";
    const number = document.createElement("span");
    number.className = "course-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = course.order;
    const note = document.createElement("span");
    note.className = "course-note";
    note.textContent = course.note;
    top.append(number, note);

    const title = document.createElement("h3");
    title.textContent = course.name;
    const summary = document.createElement("p");
    summary.className = "course-summary";
    summary.textContent = course.summary;

    const list = document.createElement("dl");
    list.className = "course-meta";
    [
      ["適合對象", course.audience],
      ["課程特色", course.feature],
      ["預估時間", course.duration]
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      row.append(term, description);
      list.append(row);
    });

    const button = document.createElement("button");
    button.className = "card-link";
    button.type = "button";
    button.dataset.brandContact = "booking";
    button.append("詢問這堂課 ");
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    button.append(arrow);

    article.append(top, title, summary, list, button);
    return article;
  }

  function createFallbackArt(work) {
    const art = document.createElement("div");
    art.className = `fabric-art ${work.visualClass}`;
    art.setAttribute("role", "img");
    art.setAttribute("aria-label", work.alt);
    ["piece-one", "piece-two", "piece-three"].forEach((pieceClass) => {
      const piece = document.createElement("span");
      piece.className = `fabric-piece ${pieceClass}`;
      art.append(piece);
    });
    return art;
  }

  function createWorkVisual(work) {
    const wrapper = document.createElement("div");
    wrapper.className = "work-visual";

    if (work.image) {
      const image = document.createElement("img");
      image.src = work.image;
      image.alt = work.alt;
      image.width = 1200;
      image.height = 900;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener(
        "error",
        () => wrapper.replaceChildren(createFallbackArt(work)),
        { once: true }
      );
      wrapper.append(image);
      return wrapper;
    }

    wrapper.append(createFallbackArt(work));
    return wrapper;
  }

  function createWorkCard(work) {
    const article = document.createElement("article");
    article.className = "work-card";
    const caption = document.createElement("div");
    caption.className = "work-caption";
    const category = document.createElement("span");
    category.textContent = work.category;
    const title = document.createElement("h3");
    title.textContent = work.name;
    const description = document.createElement("p");
    description.textContent = work.description;
    caption.append(category, title, description);
    article.append(createWorkVisual(work), caption);
    return article;
  }

  function createFaqItem(faq, index) {
    const item = document.createElement("details");
    item.className = "faq-item";
    if (index === 0) item.open = true;

    const summary = document.createElement("summary");
    const question = document.createElement("span");
    question.textContent = faq.question;
    const toggle = document.createElement("span");
    toggle.className = "faq-toggle";
    toggle.setAttribute("aria-hidden", "true");
    summary.append(question, toggle);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    const paragraph = document.createElement("p");
    paragraph.textContent = faq.answer;
    answer.append(paragraph);
    item.append(summary, answer);
    return item;
  }

  function renderContent() {
    const courseList = document.querySelector("[data-course-list]");
    const workList = document.querySelector("[data-work-list]");
    const faqList = document.querySelector("[data-faq-list]");

    if (courseList) courseList.replaceChildren(...config.courses.map(createCourseCard));
    if (workList) workList.replaceChildren(...config.works.map(createWorkCard));
    if (faqList) faqList.replaceChildren(...config.faqs.map(createFaqItem));
  }

  function setMenu(open) {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "關閉導覽選單" : "開啟導覽選單");
    menu.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
  }

  function showDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function showDemoMessage(customMessage) {
    const message = demoDialog && demoDialog.querySelector("[data-demo-message]");
    if (message) message.textContent = customMessage || config.demoMessage;
    showDialog(demoDialog);
  }

  function showServiceMessage() {
    const message = serviceDialog && serviceDialog.querySelector("[data-service-message]");
    if (message) message.textContent = config.service.contactMissingMessage;
    showDialog(serviceDialog);
  }

  function handleBrandContact(event) {
    event.preventDefault();
    const action = event.currentTarget.dataset.brandContact;

    if (config.DEMO_MODE) {
      showDemoMessage();
      return;
    }

    const links = {
      line: config.contact.lineUrl,
      booking: config.contact.lineUrl || config.contact.formEndpoint,
      social: config.contact.instagramUrl
    };
    const target = links[action];
    if (target) window.location.assign(target);
    else showDemoMessage("品牌聯絡方式尚未設定，請先在 site-config.js 填入正式資料。");
  }

  function handleServiceContact(event) {
    event.preventDefault();
    const target =
      config.service.contactUrl ||
      config.service.inquiryFormUrl ||
      (config.service.email ? `mailto:${config.service.email}` : "");

    if (target) {
      window.location.assign(target);
      return;
    }
    showServiceMessage();
  }

  function initializeInteractions() {
    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true");
      });
      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenu(false));
      });
    }

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menuButton &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.querySelectorAll("[data-brand-contact]").forEach((trigger) => {
      trigger.addEventListener("click", handleBrandContact);
    });

    document.querySelectorAll("[data-service-contact]").forEach((trigger) => {
      trigger.addEventListener("click", handleServiceContact);
    });

    document.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = document.getElementById(button.dataset.closeDialog);
        closeDialog(dialog);
      });
    });

    document.querySelectorAll("[data-privacy]").forEach((button) => {
      button.addEventListener("click", () => showDialog(privacyDialog));
    });

    [demoDialog, serviceDialog, privacyDialog].forEach((dialog) => {
      if (!dialog) return;
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog(dialog);
      });
    });

    const demoForm = document.querySelector("#demo-form");
    if (demoForm) {
      demoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (config.DEMO_MODE) {
          showDemoMessage("這是示範預約介面，選取的內容不會被儲存或傳送。品牌正式上線後可串接 LINE 或詢問表單。");
          return;
        }
        if (config.contact.formEndpoint) {
          window.location.assign(config.contact.formEndpoint);
          return;
        }
        showDemoMessage("品牌預約表單尚未設定，請先在 site-config.js 填入正式資料。");
      });
    }
  }

  setTheme();
  initializeSeo();
  setConfigText();
  renderContent();
  initializeInteractions();

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
