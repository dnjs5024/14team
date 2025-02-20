document.addEventListener("DOMContentLoaded", function () {
  function updateCardState() {
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      slide.style.pointerEvents = slide.classList.contains("swiper-slide-active") 
        ? "auto" 
        : "none";
    });

    let activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      let userId = activeSlide.dataset.userId; 
     

      if (userId) {
        getPersonal(userId); 
      } else {
        console.log("⚠️ data-user-id 값이 없습니다.");
      }
    }
  }

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, 
    centeredSlides: true, 
    loop: false, 
    initialSlide: 1,
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
        
        let activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
          let userId = activeSlide.dataset.userId; 
          // 함정 뭡니까? 맴매 
          // if (userId) {
          //   getPersonal(userId);
          // } 
        }
      }
    }
  });


});
