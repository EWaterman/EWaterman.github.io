// Menu Button
// Designed by Christophe Kirsch: http://codepen.io/chriskirsch/full/XJVEag/
$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    // var active3 = false;
    var active4 = false;

    $('.menu').click(function() {

        if (!active1) $(this).find('.menu-button1').css({'transform': 'translate(0px,120px)'});
        else $(this).find('.menu-button1').css({'transform': 'none'});
        if (!active2) $(this).find('.menu-button2').css({'transform': 'translate(85px,85px)'});
        // if (!active2) $(this).find('.menu-button2').css({'transform': 'translate(57px,100px)'});
        else $(this).find('.menu-button2').css({'transform': 'none'});
        // if (!active3) $(this).find('.menu-button3').css({'transform': 'translate(103px,59px)'});
        // else $(this).find('.menu-button3').css({'transform': 'none'});
        if (!active4) $(this).find('.menu-button4').css({'transform': 'translate(120px,0px)'});
        else $(this).find('.menu-button4').css({'transform': 'none'});
        active1 = !active1;
        active2 = !active2;
        // active3 = !active3;
        active4 = !active4;

    });
});

//colour icon for current page
$(document).ready(function() {
    $(".menu a").each(function() {
        if (window.location.href.startsWith(this.href)) {
            $(this).addClass("active");
        }
    });
});