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
    //need to study
    document.addEventListener("DOMContentLoaded", function () {
      // Get references to the images and container
      const images = document.querySelectorAll(".pimg img");
      const imageContainer = document.getElementById("imageSlider");
  
      // Set initial image index and total number of images
      let currentIndex = 0;
      const totalImages = images.length;
  
      // Function to show the next image
      function showNextImage() {
          images[currentIndex].style.display = "none";
          currentIndex = (currentIndex + 1) % totalImages;
          images[currentIndex].style.display = "block";
      }
  
      // Function to start the image slider
      function startImageSlider() {
          setInterval(showNextImage, 5000); // Change the duration as needed (in milliseconds)
      }
  
      // Start the image slider when the DOM is loaded
      startImageSlider();
  });
  
