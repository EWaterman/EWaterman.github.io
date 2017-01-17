// Menu Button
// Designed by Christophe Kirsch: http://codepen.io/chriskirsch/full/XJVEag/
$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;

    $('.menu').click(function() {

        if (!active1) $(this).find('.menu-button1').css({'background-color': 'gray', 'transform': 'translate(0px,120px)'});
        else $(this).find('.menu-button1').css({'background-color': 'dimGray', 'transform': 'none'});
        if (!active2) $(this).find('.menu-button2').css({'background-color': 'gray', 'transform': 'translate(90px,90px)'});
        else $(this).find('.menu-button2').css({'background-color': 'darkGray', 'transform': 'none'});
        if (!active3) $(this).find('.menu-button3').css({'background-color': 'gray', 'transform': 'translate(120px,0px)'});
        else $(this).find('.menu-button3').css({'background-color': 'silver', 'transform': 'none'});
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;

    });
});
