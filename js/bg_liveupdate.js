//Background live update
$(document).ready(function() {
    $('.text_editor').keyup(function() {

        var bg_color = $(this).val(); // grab color input value

        if ($(this).val().length > 0 || (/^[a-zA-Z0-9#]*$/.test(text_editor)))
        {
            // replace css value on live preview
            $('.css_editor').css('background-color', bg_color);
            $('.text_editor').css('background-color', bg_color);
        }
        else
        {
            //resorts back to default if no value entered
            $('.css_editor').css('background-color', '$white');
            $('.text_editor').css('background-color', '$white');
        }

    });
});