
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
