'use strict'

$('.JSmenuBotton').on('click', function () {
    $('.navbar-top').toggleClass('open');
    $(this).toggleClass('open-menu');
});
$('.JSpartitionBotton').on('click', function () {
    $('.partition-name-tab').toggleClass('open');
});
$('.JSpartitionNameTab').on('click', function () {
    $('.partition-name-tab').removeClass('open');
});