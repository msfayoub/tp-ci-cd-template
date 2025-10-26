const clock = document.getElementById("clock");

function zero_pad(num) {
    if (num < 10) {
        return "0" + String(num);
    } else {
        return String(num);
    }
}

function getCurrentTime() {
    let curr_time = new Date();

    return zero_pad(curr_time.getHours()) + " : " + zero_pad(curr_time.getMinutes()) + " : " + zero_pad(curr_time.getSeconds());
}

clock.innerHTML = getCurrentTime();
setInterval(() => {
    clock.innerHTML = getCurrentTime();
}, 1000);