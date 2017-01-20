// Custom scrollbar
//TODO: remove eventually
var hasbar = false;
$(window).on("load",function(){
    if(window.innerWidth > 767) {
        $(".scrollbar").mCustomScrollbar({
            theme:"light-thick",
            setHeight: 500,
            autoExpandScrollbar: true,
            scrollInertia: 100
        });
        hasbar = true;
    }
    // else {
    //     $("#scrollbar").mCustomScrollbar({
    //         theme:"light-thick",
    //         setHeight: 1500,
    //         autoExpandScrollbar: true,
    //         scrollInertia: 100
    //     });
    //     hasbar = false;
    // }
});

// If window size ever gets larger than sm, add scrollbar (should only happen on desktop when re-sizing
$(window).resize(function() {
    if(hasbar == false && window.innerWidth > 767) {
        // $("#scrollbar").mCustomScrollbar('destroy');
        $(".scrollbar").mCustomScrollbar({
            theme:"light-thick",
            setHeight: 500,
            autoExpandScrollbar: true,
            scrollInertia: 100
        });
        hasbar = true
    }
    // else if (hasbar == true && window.innerWidth < 768) {
    //     $("#scrollbar").mCustomScrollbar('destroy');
    //     $("#scrollbar").mCustomScrollbar({
    //         theme:"light-thick",
    //         setHeight: 1500,
    //         autoExpandScrollbar: true,
    //         scrollInertia: 100
    //     });
    //     hasbar = false
    // }
});