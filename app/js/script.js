'use strict'

$('.JSmenuBotton').on('click', function () {
    $('.navbar-top').toggleClass('open');
    $(this).toggleClass('open-menu');
});
$('.JSeventBotton').on('click', function () {
    $('.event-name-tab').toggleClass('open');
});
$('.JSeventNameTab').on('click', function () {
    $('.event-name-tab').removeClass('open');
});