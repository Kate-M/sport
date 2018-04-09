'use strict'

$('.navbar-top-button').on('click', function () {
    $('.page-wrapper').toggleClass('open');
    $(this).toggleClass('open-menu');
});
$('.partition-button').on('click', function () {
    $(this).next().toggleClass('open');
});
$('.tab-item').on('click', function () {
    $(this).parent().removeClass('open');
});

var labelsTabs = $('label.partition-name-tab').toArray();
var inputsTabs = $('.tab-input').toArray();

inputsTabs.forEach(function (el) {
    el.addEventListener("change", changeActiveTab, false);
})

function changeActiveTab(e) {
    labelsTabs.forEach(function (el) {
        if (!el.control.checked) {
            el.classList.remove('active');
        }
    })
    var labelFor = e.srcElement.attributes["id"].value;
    e.srcElement.labels[0].classList.add('active');
}
startTimer();
function startTimer() {
    var endTime = new Date('Sep 4, 2018 05:01:50');
    var createTimer = function () {
        return setInterval(function () {
            var currentTime = new Date();
            var resultTime = new Date(endTime - currentTime);
            document.getElementsByClassName('count-days')[0].innerHTML = resultTime.getDay();
            document.getElementsByClassName('count-hrs')[0].innerHTML = resultTime.getHours();
            document.getElementsByClassName('count-min')[0].innerHTML = resultTime.getMinutes();
            document.getElementsByClassName('count-sec')[0].innerHTML = resultTime.getSeconds();
        }, 1000);
    }
    timer = createTimer();
};
