

let hour = 0
let minute = 0
let second = 0
let millisecond = 0
let cron



function start() {
    stop()
    cron = setInterval(() => {
        timer()
    }, 10)
}

function stop() {
    clearInterval(cron)
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    document.querySelector(".hour-cron").innerText = "00"
    document.querySelector(".minute-cron").innerText = "00"
    document.querySelector(".second-cron").innerText = "00"
    document.querySelector(".milliseconds-cron").innerText = "000"


}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    document.querySelector(".hour-cron").innerText = returnData(hour);
    document.querySelector(".minute-cron").innerText = returnData(minute);
    document.querySelector(".second-cron").innerText = returnData(second);
    document.querySelector(".milliseconds-cron").innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`

}

