$(document).ready(function() {
    console.log( "ready!" );
    $('.unlike').click(function(){
        $(this).siblings('.like').addClass('showw');
    })
    $('.like').click(function(){
        $(this).removeClass('showw');
    });
    $('.hamenu').click(function(){
        $('.menu-drop').fadeToggle();
    })


});