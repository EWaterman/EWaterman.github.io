// File for all button presses that show page content

// CSS Content
$('#turn-btn').click(function() {
    $('#css-content').toggle('slow', function() {
        // Animation complete.
    });
});

// Close CSS Content
$('#css-close').click(function() {
    $('#css-content').toggle('slow', function() {
        // Animation complete.
    });
});

// Previous Work Details
$('.prev-work-short').click(function() {
    var target = "#" + $(this).attr('id') + "-info";
    $(target).show('fast');
    $(target).siblings("div").hide('fast');
});

// Homepage Doodles
$('.homepage-btn').hover(function() {
    var target = "#" + $(this).attr('id') + "-doodle";
    $(target).fadeIn('fast');
    $(target).siblings("img").finish();
}, function() {
    var target = "#" + $(this).attr('id') + "-doodle";
    $(target).fadeOut('fast');
    $(target).siblings("img").finish();
});