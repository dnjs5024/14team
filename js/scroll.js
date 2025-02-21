$(document).ready(function () {
    function highlightMenu() {
        let scrollHeight = $(window).scrollTop();
        let contentHeight = $(document).height(); 
        let allLinks = $('.nav-link');

        
    

        let currentPosition = scrollHeight / contentHeight; 

        allLinks.removeClass('active');

        if (currentPosition <= 0.18) {
            $('.nav-link1').addClass('active'); 
        } else if (currentPosition > 0.18 && currentPosition <= 0.4) {
            $('.nav-link2').addClass('active'); 
        } else if (currentPosition > 0.4 && currentPosition <= 0.68) {
            $('.nav-link3').addClass('active'); 
        } else if (currentPosition > 0.68) {
            $('.nav-link4').addClass('active'); 
        }

        console.log(`현재 스크롤 비율: ${(currentPosition * 100).toFixed(2)}%`);
        console.log(`문서 전체 높이: ${contentHeight}px`);
    }

    $(window).on('scroll', highlightMenu);
    $(window).trigger('scroll'); 
});
