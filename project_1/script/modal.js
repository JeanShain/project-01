$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
});

$('#open-modal').on('click', function(){
    $('.modal-overlay').fadeIn();
})



$('.modal-overlay-2').on('click', function(e){
    if($(e.target).closest('.modal-2').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-2').on('click', function(){
    $(this).parents('.modal-overlay-2').fadeOut()
});

$('#open-modal-2').on('click', function(){
    $('.modal-overlay-2').fadeIn();
})



$('.modal-overlay-3').on('click', function(e){
    if($(e.target).closest('.modal-3').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-3').on('click', function(){
    $(this).parents('.modal-overlay-3').fadeOut()
});

$('#open-modal-3').on('click', function(){
    $('.modal-overlay-3').fadeIn();
})



$('.modal-overlay-4').on('click', function(e){
    if($(e.target).closest('.modal-4').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-4').on('click', function(){
    $(this).parents('.modal-overlay-4').fadeOut()
});

$('#open-modal-4').on('click', function(){
    $('.modal-overlay-4').fadeIn();
})



$('.modal-overlay-5').on('click', function(e){
    if($(e.target).closest('.modal-5').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-5').on('click', function(){
    $(this).parents('.modal-overlay-5').fadeOut()
});

$('#open-modal-5').on('click', function(){
    $('.modal-overlay-5').fadeIn();
})



$('.modal-overlay-6').on('click', function(e){
    if($(e.target).closest('.modal-6').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-6').on('click', function(){
    $(this).parents('.modal-overlay-6').fadeOut()
});

$('#open-modal-6').on('click', function(){
    $('.modal-overlay-6').fadeIn();
})



$('.modal-overlay-7').on('click', function(e){
    if($(e.target).closest('.modal-7').length == 0){
        $(this).fadeOut(); 
    }
});

$('.close-7').on('click', function(){
    $(this).parents('.modal-overlay-7').fadeOut()
});

$('#open-modal-7').on('click', function(){
    $('.modal-overlay-7').fadeIn();
})