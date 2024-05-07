let timer; // Timer variable
let running = false; // Flag to check if stopwatch is running
let time = 0; // Initial time in milliseconds
let laps = []; // Array to store lap times

function startStop() {
    if (!running) {
        start(); // Start the stopwatch
    } else {
        stop(); // Stop the stopwatch
    }
}

function start() {
    running = true;
    timer = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
    document.getElementById('startStopBtn').textContent = 'Stop';
}

function stop() {
    running = false;
    clearInterval(timer); // Stop the timer
    document.getElementById('startStopBtn').textContent = 'Start';
}

function reset() {
    stop();
    time = 0;
    laps = [];
    document.getElementById('display').textContent = formatTime(time);
    document.getElementById('laps').innerHTML = ''; // Clear lap times
}

function recordLap() {
    if (running) {
        laps.push(time);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(time)}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}

function updateDisplay() {
    time += 10; // Increment time by 10 milliseconds
    document.getElementById('display').textContent = formatTime(time);
}

function formatTime(ms) {
    const date = new Date(ms);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}