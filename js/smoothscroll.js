// Smooth scroll to page anchors
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);

            // Need this check to avoid breaking bootstrap carousel
            if (this.hash.slice(1,11) != "myCarousel") {
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }

            // Smooth scroll to top of page
            if (this.hash.slice(1,4) == "top") {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            }
        }
    });
});