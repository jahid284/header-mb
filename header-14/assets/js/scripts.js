jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Offcanvas Menu
    // -------------------------------------------------------------
    (function () {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

    }());


    /* ======= Full Screen Background ======= */
    (function () {
    
        $(".fullHeight").height($(window).height());
        $(window).resize(function(){
            $(".fullHeight").height($(window).height());
        });

    }());
    


}); // JQuery end
