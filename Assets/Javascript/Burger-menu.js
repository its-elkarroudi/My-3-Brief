
// STORE SPECIAL ELEMENTS ( BTN AND NAV MENU (UL) ) AS A VARIABLE SO WE CAN ADD .ACTIVE CLASS TO THEM
const navBtn = document.querySelector(".navBtn");
const navMenu = document.querySelector(".nav-menu");

// ADD .ACTIVE CLASS TO MENU
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})