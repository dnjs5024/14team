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
      // ✅ 슬라이드 변경 후 '완전히' 끝나고 업데이트해야 함!
      updateCardState();
    }
  }
});

// ✅ 페이지 로드 시 초기 활성화 카드만 클릭 가능하도록 설정
updateCardState();
});