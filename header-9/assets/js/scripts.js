jQuery(function ($) {

    'use strict';




    // -------------------------------------------------------------
    // For the Second level Dropdown menu, highlight the parent 
    // -------------------------------------------------------------
    (function () {

        $( ".dropdown-menu" )
        .mouseenter(function() {
            $(this).parent('li').addClass('active');
        })
        .mouseleave(function() {
            $(this).parent('li').removeClass('active');
        });

    }());



    $(".login-button").click(function(e){
    e.preventDefault();
    setTimeout(function(){$(".overlay").fadeIn(300)},10);
    var form = $(this).data('form');
    $("#" + form + "-form").addClass('fadeUp');
});

function closeModal(){
    $(".overlay").fadeOut(500);
    $(".modal-window").removeClass('fadeUp');
}

$(".overlay, .modal-window .close").click(function(){
    closeModal();
});







}); // JQuery end
