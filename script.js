document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toogle');
    const navClose = document.querySelector('.nav-close');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
        navToggle.classList.add('hide-icon');
        navClose.classList.remove('hide-icon');
    });

    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('hide-icon');
        navClose.classList.add('hide-icon');
    });
});
