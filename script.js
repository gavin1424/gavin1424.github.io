const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const bookingDialog = document.querySelector("#booking-dialog");
const bookingForm = document.querySelector(".booking-form");
const dialogIntro = document.querySelector(".dialog-intro");
const dialogSuccess = document.querySelector(".dialog-success");

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "開啟導覽選單");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
};

const openMenu = () => {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "關閉導覽選單");
  mobileMenu.hidden = false;
  document.body.classList.add("menu-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

const resetBookingDialog = () => {
  bookingForm.hidden = false;
  dialogIntro.hidden = false;
  dialogSuccess.hidden = true;
  bookingForm.reset();
};

const openBookingDialog = () => {
  closeMenu();
  resetBookingDialog();
  if (typeof bookingDialog.showModal === "function") {
    bookingDialog.showModal();
    requestAnimationFrame(() => bookingForm.querySelector("input").focus());
  }
};

document.querySelectorAll("[data-booking]").forEach((button) => {
  button.addEventListener("click", openBookingDialog);
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  bookingDialog.close();
});

document.querySelector(".dialog-done").addEventListener("click", () => {
  bookingDialog.close();
});

bookingDialog.addEventListener("click", (event) => {
  const rect = bookingDialog.getBoundingClientRect();
  const clickedOutside = (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );

  if (clickedOutside) {
    bookingDialog.close();
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  bookingForm.hidden = true;
  dialogIntro.hidden = true;
  dialogSuccess.hidden = false;
  document.querySelector(".dialog-done").focus();
});

document.querySelectorAll(".favorite").forEach((button) => {
  button.addEventListener("click", () => {
    const nextPressed = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(nextPressed));
    const courseName = button.getAttribute("aria-label")
      .replace("收藏", "")
      .replace("取消", "");
    button.setAttribute("aria-label", `${nextPressed ? "取消收藏" : "收藏"}${courseName}`);
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
  });
});

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const observedSections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window) {
  const activeSectionObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${visibleEntry.target.id}`;
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, {
    rootMargin: "-22% 0px -62% 0px",
    threshold: [0.01, 0.25]
  });

  observedSections.forEach((section) => activeSectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    revealObserver.observe(element);
  });

  const mobileBooking = document.querySelector(".mobile-booking");
  const fixedCtaOverlapTargets = new Set();
  const fixedCtaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedCtaOverlapTargets.add(entry.target);
      } else {
        fixedCtaOverlapTargets.delete(entry.target);
      }
    });
    mobileBooking.classList.toggle("is-hidden", fixedCtaOverlapTargets.size > 0);
  }, { threshold: 0.04 });

  fixedCtaObserver.observe(document.querySelector(".booking-section"));
  fixedCtaObserver.observe(document.querySelector(".site-footer"));
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
  }
});
