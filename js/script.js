$(document).ready(function(){
    const header = $('header');
    $(window).on('scroll', function (){
            const scrollPosition = $(window).scrollTop() - header.outerHeight();

            if(scrollPosition <= 0){
                header.css('box-shadow', 'none');
            } else {
                header.css('box-shadow', '4px 2px 20px rgba(0, 0, 0, 1)');
            }
        
        });
});

