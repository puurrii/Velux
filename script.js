const navMenu = document.getElementById('nav-menu');
const navToogle = document.getElementById('nav-toogle');
const navClose = document.getElementById('nav-close');

if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
