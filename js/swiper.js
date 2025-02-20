document.addEventListener("DOMContentLoaded", function () {
  function updateCardState() {
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      slide.style.pointerEvents = slide.classList.contains("swiper-slide-active") 
        ? "auto" 
        : "none";
    });
  }

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3, 
  centeredSlides: true, 
  loop: false, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 200,
    modifier: 1,
    slideShadows: false
    
  },
  on: {
    slideChangeTransitionEnd: function () { 
      updateCardState();
    }
  }
});


updateCardState();
});