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
const img1 = document.querySelector('.watchimg1')
const img2 = document.querySelector('.watchimg2')
const img3 = document.querySelector('.watchimg3')
const first = document.querySelector('.clk1')
const second = document.querySelector('.clk2')
const third = document.querySelector('.clk3')

first.addEventListener('click', () => {
    img1.style.display = 'block'
    img2.style.display = 'none'
    img3.style.display = 'none'
})
second.addEventListener('click', () => {
    img1.style.display = 'none'
    img2.style.display = 'block'
    img3.style.display = 'none'
})

third.addEventListener('click', () => {
    img1.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'block'
})