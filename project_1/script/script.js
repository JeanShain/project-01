$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

$('#about-link').on('click', function(){
    $('html, body').animate({scrollTop: $('#about').offset().top}, 1000)
})

$('#about-link-1').on('click', function(){
    $('html, body').animate({scrollTop: $('#about-1').offset().top}, 1000)
})

$('#about-link-2').on('click', function(){
    $('html, body').animate({scrollTop: $('#about-2').offset().top}, 1000)
})