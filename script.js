document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toogle');
    const navClose = document.querySelector('.nav-close');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    });

    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    });
});
