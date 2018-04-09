
var endTime = new Date("Sep 4, 2018 05:01:50").getTime();
var timer = setInterval(function () {
    var currentTime = new Date().getTime();
    var distance = endTime - currentTime;
    if (distance < 0) {
        clearInterval(timer);
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementsByClassName('count-days')[0].innerHTML = days;
        document.getElementsByClassName('count-hrs')[0].innerHTML = hours;
        document.getElementsByClassName('count-min')[0].innerHTML = minutes;
        document.getElementsByClassName('count-sec')[0].innerHTML = seconds;
    }
}, 1000);


