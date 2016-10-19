// Dynamic Header
$(function(){
    // Check the initial Position of the Sticky Header
    var stickyHeaderTop = $('.navbar-inverse').offset().top;

    // If top of the window is at the header, make it opaque and fade background.
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop - 1 ) {
            $('.navbar-inverse').removeClass('transparent').addClass('opaque');
            //$('.jumbotron').removeClass('white').addClass('black');
        } else {
            $('.navbar-inverse').removeClass('opaque').addClass('transparent');
            //$('.jumbotron').removeClass('black').addClass('white');
        }
    });
});