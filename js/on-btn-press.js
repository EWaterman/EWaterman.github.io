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
    $(target).show('slow', function() {
        // Animation complete.
    });
    $(target).siblings("div").hide('slow', function() {
        // Animation complete.
    });
});