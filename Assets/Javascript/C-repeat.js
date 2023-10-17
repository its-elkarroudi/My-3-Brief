const navBtn = document.querySelector(".navBtn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})