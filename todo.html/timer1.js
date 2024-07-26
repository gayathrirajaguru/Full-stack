let timer, seconds = 0;
const timerDisplay = document.getElementById('timer');
function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}
function updateTimer() { timerDisplay.textContent = formatTime(seconds); }
function startTimer() { if (!timer) { timer = setInterval(() => { seconds++; updateTimer(); }, 1000); } }
function stopTimer() { clearInterval(timer); timer = null; }
function resetTimer() { stopTimer(); seconds = 0; updateTimer(); }
updateTimer();
