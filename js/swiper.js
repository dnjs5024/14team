var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3, /* 한 번에 보이는 카드 개수 */
  centeredSlides: true, /* 가운데 정렬 */
  loop: false, /* 무한 루프 */
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

