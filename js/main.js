document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // 각 섹션
  const navLinks = document.querySelectorAll(".nav-link"); // 네비게이션 링크

  function changeActiveNav() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(nav => nav.classList.remove("active")); // 기존 active 제거
        navLinks[index].classList.add("active"); // 현재 섹션의 nav 활성화
      }
    });
  }

  window.addEventListener("scroll", changeActiveNav);
});
