const toggleButtons = document.querySelectorAll(".drop-down-toggle");
const menus = document.querySelectorAll(".drop-down-menu");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const otherButtons = [...toggleButtons].filter((button) => button !== btn);
    otherButtons.forEach((b) => (b.parentElement.dataset.active = "false"));
    const parent = btn.parentElement;
    parent.dataset.active = parent.dataset.active === "true" ? "false" : "true";
  });
});

window.addEventListener("mouseup", function (event) {
  menus.forEach(menu => {
    if (!event.target.closest(".drop-down-menu")) {
      menu.parentElement.dataset.active = "false"
    }
  })
});


window.addEventListener("keyup", (e) => {
  if (e.key == "Escape")
    menus.forEach(menu => menu.parentElement.dataset.active = "false");
})