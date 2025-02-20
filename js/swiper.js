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
    slideChange: function () {
      console.log("Active slide index:", this.realIndex);
    }
  }
});

