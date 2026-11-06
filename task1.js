const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Light/dark theme
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeToggle.textContent = isDark ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
});
/* Reveal sections when they enter the screen */
const revealElements = document.querySelectorAll(
  "#about, #skills, #projects, #contact"
);

revealElements.forEach((section) => {
  section.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((section) => {
    revealObserver.observe(section);
  });
} else {
  revealElements.forEach((section) => {
    section.classList.add("visible");
  });
}