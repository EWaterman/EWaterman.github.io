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

// Mobile version for homepage
$(document).ready(function() {

    var active4 = false;
    var active5 = false;
    var active6 = false;

    $('.menu-mobile').click(function() {

        if (!active4) $(this).find('.menu-button1').css({'background-color': 'gray', 'transform': 'translate(-90px,90px)'});
        else $(this).find('.menu-button1').css({'background-color': 'dimGray', 'transform': 'none'});
        if (!active5) $(this).find('.menu-button2').css({'background-color': 'gray', 'transform': 'translate(0px,120px)'});
        else $(this).find('.menu-button2').css({'background-color': 'darkGray', 'transform': 'none'});
        if (!active6) $(this).find('.menu-button3').css({'background-color': 'gray', 'transform': 'translate(90px,90px)'});
        else $(this).find('.menu-button3').css({'background-color': 'silver', 'transform': 'none'});
        active4 = !active4;
        active5 = !active5;
        active6 = !active6;

    });
});