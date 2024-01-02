const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.querySelector("button").addEventListener("click", () => {
    section.dataset.active =
      section.dataset.active === "true" ? "false" : "true";
  });

  section.querySelector(".title").addEventListener("click", () => {
    section.dataset.active =
      section.dataset.active === "true" ? "false" : "true";
  });
});

const container = document.querySelector(".container");
container.addEventListener("dblclick", () => {
  sections.forEach((section) => {
    section.dataset.active = "false";
  });
});
