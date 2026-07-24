(function () {
  "use strict";

  const config = window.SITE_CONFIG;
  if (!config) return;

  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-site-menu]");
  const header = document.querySelector("[data-site-header]");
  const serviceDialog = document.querySelector("#service-dialog");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setTheme() {
    const theme = config.theme || {};
    const themeMap = {
      ink: "--ink",
      paper: "--paper",
      cream: "--cream",
      gold: "--gold",
      goldDark: "--gold-dark"
    };

    Object.entries(themeMap).forEach(([key, variable]) => {
      if (theme[key]) root.style.setProperty(variable, theme[key]);
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
    const pageKey = body.dataset.page || "service";
    const page = config.seo?.pages?.[pageKey];
    if (!page) return;

    const pageUrl = absoluteUrl(page.path);
    const imageUrl = absoluteUrl(page.ogImage);
    const siteName = config.service.brandName || config.service.name;

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
    structuredData.textContent = JSON.stringify(Object.assign({}, page.schema, { url: pageUrl }));
  }

  function getConfigValue(path) {
    return path.split(".").reduce((value, key) => value && value[key], config);
  }

  function setConfigText() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const value = getConfigValue(element.dataset.config);
      if (typeof value === "string" && value.trim()) element.textContent = value;
    });
  }

  function setMenu(open) {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "關閉" : "選單";
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

    const message = serviceDialog?.querySelector("[data-service-message]");
    if (message) message.textContent = config.service.contactMissingMessage;
    showDialog(serviceDialog);
  }

  function initializeHeader() {
    if (!header) return;
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  function initializeReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function initializeParallax() {
    const frame = document.querySelector("[data-parallax]");
    const image = frame?.querySelector("img");
    if (!frame || !image || reduceMotion.matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      if (window.innerWidth <= 900) {
        image.style.transform = "";
        return;
      }
      const rect = frame.getBoundingClientRect();
      const offset = Math.max(-18, Math.min(18, rect.top * -0.022));
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.035)`;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  }

  function initializeFaq() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        document.querySelectorAll(".faq-item[open]").forEach((openItem) => {
          if (openItem !== item) openItem.removeAttribute("open");
        });
      });
    });
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
      if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.querySelectorAll("[data-service-contact]").forEach((trigger) => {
      trigger.addEventListener("click", handleServiceContact);
    });

    document.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => closeDialog(document.getElementById(button.dataset.closeDialog)));
    });

    serviceDialog?.addEventListener("click", (event) => {
      if (event.target === serviceDialog) closeDialog(serviceDialog);
    });
  }

  setTheme();
  initializeSeo();
  setConfigText();
  initializeInteractions();
  initializeHeader();
  initializeReveal();
  initializeParallax();
  initializeFaq();

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
