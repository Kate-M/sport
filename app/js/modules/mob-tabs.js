$('.partition-button').on('click', function () {
    $(this).next().toggleClass('open');
});
$('.tab-item').on('click', function () {
    $(this).parent().removeClass('open');
});