const secondsInput = document.querySelector("#seconds") 
const startBtn = document.querySelector("#startBtn") 
const resetBtn = document.querySelector("#resetBtn") 
const timer = document.querySelector("#timer") 

let timeLeft = 0 
let interval = null 

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60) 
    const remainingSeconds = seconds % 60 
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}` 

} 

const updateTimer = () => {
    timer.textContent = formatTime(timeLeft) 
} 

const startTimer = () => {
    if (interval) {
        clearInterval(interval) 
    }
    timeLeft = Number(secondsInput.value) 

    if (timeLeft <= 0) {
        alert("Enter a valid number of seconds.") 
        return 

    }
    updateTimer() 

    interval = setInterval(() => {
        timeLeft-- 
        updateTimer() 
        if (timeLeft <= 0) {
            clearInterval(interval) 
            interval = null 
            timer.textContent = "Time's Up!" 
        }
    }, 1000) 
} 

const resetTimer = () => {

    clearInterval(interval) 
    interval = null 
    timeLeft = 0 
    secondsInput.value = "" 
    timer.textContent = "00:00" 

} 

startBtn.addEventListener("click", startTimer)
resetBtn.addEventListener("click", resetTimer)