var timer;
var seconds = 0;
var minutes = 0;
var hours = 0;
var isRunning = false;
var timeDisplay = document.getElementById('time-display');
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');
var resetBtn = document.getElementById('reset-btn');

function formatTime() {
    return (hours < 10 ? '0' + hours : hours) + ":" +
           (minutes < 10 ? '0' + minutes : minutes) + ":" +
           (seconds < 10 ? '0' + seconds : seconds);
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    timeDisplay.textContent = formatTime();
}

startBtn.addEventListener('click', function () {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        startBtn.textContent = 'Pause';
        isRunning = true;
    } else {
        clearInterval(timer);
        startBtn.textContent = 'Resume';
        isRunning = false;
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = formatTime();
    isRunning = false;
    startBtn.textContent = 'Start';
});