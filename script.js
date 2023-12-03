const isMobile = window.innerWidth <= 600;
if(isMobile){
    const navtoggle = document.querySelector('.nav-toogle')
    const navclose = document.querySelector('.nav-close')
    const navmenu = document.querySelector('.nav-menus')
    
   navtoggle.addEventListener('click', function () {
         navtoggle.style.display = 'none'
         navclose.style.display = 'block'
         navmenu.style.display = 'block'
   })
   navclose.addEventListener('click', () => {
    navclose.style.display = 'none'
    navmenu.style.display = 'none'
    navtoggle.style.display = 'block'
   })
   navmenu.addEventListener('click', () => {
    navclose.style.display = 'none'
    navmenu.style.display = 'none'
    navtoggle.style.display = 'block'
   })


}
    const images = document.querySelectorAll(".pimg img")
    const imageSlider = document.querySelector("#imageSlider")
    const totalimages = images.length
    let currentIndex = 0;
    function showNextImage() {
        images[currentIndex].style.display = 'none'
        currentIndex = (currentIndex + 1) % totalimages;
        images[currentIndex].style.display = 'block'
    }
    
    function startImageSlider() {
        setInterval(showNextImage, 4000)
    }
  
startImageSlider();

