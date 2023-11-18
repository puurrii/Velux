const navToogle = document.querySelector('.nav-toogle')
const navClose = document.querySelector('.nav-close')
const navMenu = document.querySelector('.helo')

navToogle.addEventListener('click', function() {
    navMenu.style.display = "block";
    navToogle.style.display = "none";
    navClose.style.display = "block"
})
navClose.addEventListener('click', function() {
    navMenu.style.display = "none";
    navToogle.style.display = "block";
    navClose.style.display = "none"
})