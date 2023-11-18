const isMobile = window.innerWidth <= 600; // Adjust the threshold based on your needs

if (isMobile) {
    const navToggle = document.querySelector('.nav-toogle');
    const navClose = document.querySelector('.nav-close');
    const navMenu = document.querySelector('.helo');

    navToggle.addEventListener('click', function() {
        navMenu.style.display = 'block';
        navToggle.style.display = 'none';
        navClose.style.display = 'block';
    });

    navClose.addEventListener('click', function() {
        navMenu.style.display = 'none';
        navToggle.style.display = 'block';
        navClose.style.display = 'none';
    });

    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navMenu.style.display = 'none';
            navClose.style.display = 'none';
            navToggle.style.display = 'block';
        });
    });
    const navSocialLinks = document.querySelectorAll('.social-links');

    navSocialLinks.forEach(function(navSocialLinksnks) {
        navSocialLinks.addEventListener('click', function() {
            navMenu.style.display = 'none';
            navClose.style.display = 'none';
            navToggle.style.display = 'block';
        });
    });
}
