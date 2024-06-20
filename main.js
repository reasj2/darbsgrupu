let timer;
let totalTime;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalTime = hours * 3600 + minutes * 60 + seconds;
    if (totalTime <= 0) return;

    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalTime = 0;
    document.getElementById('timerDisplay').textContent = formatTime(0);
}

function updateTimer() {
    if (totalTime <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert('Laiks ir beidzies! Laiks atpūsties!');
        return;
    }
    totalTime--;
    document.getElementById('timerDisplay').textContent = formatTime(totalTime);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
