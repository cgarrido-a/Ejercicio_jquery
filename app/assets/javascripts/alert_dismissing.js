console.log('=> alert_dismissing.js')

$(document).ready(function () {
    $('.alert-close').click(function () {
        $('.alert').fadeOut('slow', function () {
            $(this).remove();
        });
    });
});
