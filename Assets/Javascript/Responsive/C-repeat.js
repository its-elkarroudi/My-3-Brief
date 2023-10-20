

function myFunction(x) {

    if (x.matches) {
        console.log('mobile size');

        /* HEADER ELEMENTS */ 
        const button = document.querySelector('header .head-2 .container i.navBtn');
        const navMenu = document.querySelector('header .nav-menu');
        const navMenu_Li = document.querySelectorAll('header .nav-menu li');
        const navMenu_li_a = document.querySelectorAll('header .nav-menu li a');
        const navMenu_active = document.querySelectorAll('header .nav-menu.active');

        if (button) {button.style.display = 'block';}
        if (navMenu) {
            navMenu.style.position = 'fixed';
            navMenu.style.right = '-100%';
            navMenu.style.top = '120px';
            navMenu.style.backgroundColor = '#28427B';
            navMenu.style.width = '100%';
            navMenu.style.flexDirection = 'column';
            navMenu.style.textAlign = 'center';
            navMenu.style.transition = '1s';
        }
        if (navMenu_Li) {
            for (let li of navMenu_Li) {
                li.style.marginTop = '15px';
                li.style.marginBottom = '15px';
            }
        }
        if (navMenu_li_a) {
            for (let a of navMenu_li_a) {
                a.style.color = '#ffffff';
            }
        }
        if (navMenu_active) {
            // navMenu_active.style.left = '0px';
            console.log("log");
        }


        /* FOOTER ELEMENTS */ 
        const footerInput = document.querySelector('footer .foot-1 .subscribe input');

        console.log(footerInput);
        if (footerInput) {
            footerInput.style.width = '220px';
        }





    } else { console.log("Desktop Size");}
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addListener(myFunction);