const navList = document.querySelector(".navigation-list");
const navOpen = document.querySelector(".toggle-open");
const navClose = document.querySelector(".toggle-close");
const navLinks = document.querySelectorAll(".navigation-link");

navOpen.addEventListener("click", () => {
    navList.dataset.open = "true";
})

navClose.addEventListener("click", () => {
    navList.dataset.open = "false";
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.dataset.open = "false";
    })
})