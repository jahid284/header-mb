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

}); // JQuery end
