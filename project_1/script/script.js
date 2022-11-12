$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

$('.s-4_info > div').on('click', function(){
    $(this).children('.s-4_title').toggleClass('s-4-color-title');
    $(this).parent('.s-4_info').toggleClass('s-4-color');
    $(this).next('.s-4_text').slideToggle(300);
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