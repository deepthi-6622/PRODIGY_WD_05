let isRunning = false;
let startTime;
let interval;

const display = document.querySelector('.display');
const startPauseButton = document.getElementById('startPause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lapList');

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  return date.toISOString().substr(11, 8);
}

function updateDisplay() {
  const currentTime = isRunning ? Date.now() - startTime : 0;
  display.textContent = formatTime(currentTime);
}

function startPause() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    startPauseButton.textContent = 'Resume';
  } else {
    startTime = Date.now() - (startTime || 0);
    interval = setInterval(updateDisplay, 10);
    isRunning = true;
    startPauseButton.textContent = 'Pause';
  }
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  startTime = null;
  updateDisplay();
  startPauseButton.textContent = 'Start';
  lapList.innerHTML = '';
}

function lap() {
  if (isRunning) {
    const lapTime = Date.now() - startTime;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapList.childElementCount + 1}: ${formatTime(lapTime)}`;
    lapList.appendChild(lapItem);
  }
}

startPauseButton.addEventListener('click', startPause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
