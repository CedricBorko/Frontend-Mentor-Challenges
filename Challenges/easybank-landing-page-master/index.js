const navToggle = document.querySelector(".mobile-nav-toggle");
const navPrimary = document.querySelector(".primary-navigation");
const navLinks = document.querySelectorAll(".navigation-link");

navToggle.addEventListener("click", () => {
  navPrimary.toggleAttribute("data-active");
  navToggle.toggleAttribute("data-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navPrimary.hasAttribute("data-active")) {
      navPrimary.toggleAttribute("data-active");
    }

    if (navToggle.hasAttribute("data-open")) {
      navToggle.toggleAttribute("data-open");
    }
  });
});
