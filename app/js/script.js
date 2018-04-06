'use strict'

$('.navbar-top-button').on('click', function () {
    $('.page-wrapper').toggleClass('open');
    $(this).toggleClass('open-menu');
});
$('.partition-button').on('click', function () {
    $('.partition-name-tab').toggleClass('open');
});
$('.partition-name-tab').on('click', function () {
    $('.partition-name-tab').removeClass('open');
});

$('.single-item').slick();