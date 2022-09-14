/* Set the width of the side navigation **/
let sidenavigation = document.getElementById("res_navbar")
let mainContent = document.querySelector("main")


function openNav() {
   sidenavigation.style.width = "100vw";
    mainContent.style.marginLeft = "250px";
  }
  
  function closeNav() {
    sidenavigation.style.width = "0";
    mainContent.style.marginLeft = "0";
  }

  /* swiper slider */
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });