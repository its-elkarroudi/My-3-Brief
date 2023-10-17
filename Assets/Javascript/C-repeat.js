
const navBtn = document.querySelector(".navBtn");
const navMenu = document.querySelector(".nav-menu");
// const navLi = document.querySelector("header .nav-menu li");

// window.addEventListener('resize', function () {
    
//     const windowWidth = window.innerWidth;


//     if (windowWidth < 700) {
//         navBtn.style.position = 'fixed';
//         navBtn.style.right = '-100%';
//         navBtn.style.top = '120px';
//         navBtn.style.backgroundColor = '#000000';
//         navBtn.style.width = '100%';
//         navBtn.style.flexDirection = 'column';
//         navBtn.style.textAlign = 'center';
//         navBtn.style.transition = '1s';

//         navLi.style.margin = '15px 0';


//     } else {
//         console.log("this is desktop size");
//     }
// });



navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})


