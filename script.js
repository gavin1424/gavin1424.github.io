(() => {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const service = config.service || {};

  const getPath = (source, path) => path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, source);

  const setMeta = (selector, attribute, value) => {
    if (!value) return;
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  };

  const initializeSeo = () => {
    const seo = config.seo?.pages?.service;
    if (!seo) return;

    const baseUrl = config.seo?.baseUrl || window.location.origin + "/";
    const canonicalUrl = new URL(seo.path || "", baseUrl).href;
    const imageUrl = new URL(seo.ogImage || "assets/service-og.webp", baseUrl).href;

    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[name="robots"]', "content", seo.robots);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[property="og:image:alt"]', "content", seo.ogImageAlt);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);

    const structuredData = document.querySelector("[data-structured-data]");
    if (structuredData && seo.schema) {
      const schema = {
        ...seo.schema,
        url: canonicalUrl
      };
      structuredData.textContent = JSON.stringify(schema);
    }
  };

  const hydrateConfigText = () => {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const value = getPath(config, element.dataset.config);
      if (typeof value === "string" && value.trim()) {
        element.textContent = value;
      }
    });
  };

  const initializeContactActions = () => {
    const url = service.inquiryFormUrl || service.contactUrl;
    document.querySelectorAll("[data-service-contact]").forEach((control) => {
      if (url && control instanceof HTMLAnchorElement) {
        control.href = url;
        control.removeAttribute("target");
        control.removeAttribute("rel");
        return;
      }
      control.addEventListener("click", (event) => {
        event.preventDefault();
        window.alert(service.contactMissingMessage || "網站製作聯絡方式尚待設定。");
      });
    });
  };

  const initializeMenu = () => {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-site-menu]");
    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const nextState = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(nextState));
      menu.classList.toggle("is-open", nextState);
      document.body.classList.toggle("menu-open", nextState);
    });

    menu.querySelectorAll("a, button").forEach((item) => {
      item.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeMenu();
    }, { passive: true });
  };

  const initializeHeader = () => {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  };

  const initializeReveals = () => {
    const items = [...document.querySelectorAll(".reveal")];
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });

    items.forEach((item) => observer.observe(item));
  };

  const initializeParallax = () => {
    const visual = document.querySelector("[data-parallax]");
    if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      if (window.innerWidth < 821) {
        visual.style.setProperty("--scene-offset", "0px");
        return;
      }
      const rect = visual.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-7, Math.min(7, center * -0.014));
      visual.style.setProperty("--scene-offset", `${offset}px`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
  };

  const initializeFaq = () => {
    const items = [...document.querySelectorAll(".faq-item")];
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  };

  const initializeMobileCta = () => {
    const cta = document.querySelector("[data-mobile-cta]");
    const footer = document.querySelector(".site-footer");
    const heroActions = document.querySelector(".hero-actions");
    if (!cta || !footer || !heroActions || !("IntersectionObserver" in window)) return;

    const state = {
      heroActionsVisible: true,
      footerVisible: false
    };
    const update = () => {
      cta.classList.toggle("is-hidden", state.heroActionsVisible || state.footerVisible);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroActions) state.heroActionsVisible = entry.isIntersecting;
        if (entry.target === footer) state.footerVisible = entry.isIntersecting;
      });
      update();
    }, { threshold: 0.04 });
    observer.observe(heroActions);
    observer.observe(footer);
    update();
  };

  const initializeCurrentYear = () => {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  };

  initializeSeo();
  hydrateConfigText();
  initializeContactActions();
  initializeMenu();
  initializeHeader();
  initializeReveals();
  initializeParallax();
  initializeFaq();
  initializeMobileCta();
  initializeCurrentYear();
})();
