$(document).ready(function () {
    
    function highlightMenu() {
        let scrollPosition = $(window).scrollTop();

        
        $('.nav-link').each(function () {
            let sectionId = $(this).attr('href');
            let section = $(sectionId);
            
            if (section.length) {
                let sectionTop = section.offset().top - 100; 
                let sectionBottom = sectionTop + section.outerHeight();

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    $('.nav-link').removeClass('active');  클래스 제거
                    $(this).addClass('active'); 
                }
            }
        });
    }

    
    $(window).on('scroll', highlightMenu);

    
    highlightMenu();
});
