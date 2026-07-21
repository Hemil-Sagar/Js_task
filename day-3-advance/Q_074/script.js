const sentenceElement = document.querySelector("#sentence")
const typingArea = document.querySelector("#typingArea")
const startBtn = document.querySelector("#startBtn")
const restartBtn = document.querySelector("#restartBtn")
const timerElement = document.querySelector("#timer")
const resultElement = document.querySelector("#result")

const sentences = [
  "JavaScript is a powerful programming language.",
  "Practice makes a programmer better every day.",
  "Learning by building projects improves your skills.",
  "Coding every day increases confidence and speed.",
  "Frontend development uses HTML CSS and JavaScript."
]

let selectedSentence = ""
let timeLeft = 60
let timer = null
let started = false

const randomSentence = () => {
  return sentences[
    Math.floor(Math.random()*sentences.length)
  ]
}
const startTest = () => {
  selectedSentence = randomSentence()
  sentenceElement.textContent = selectedSentence
  typingArea.value = ""
  typingArea.disabled = false
  typingArea.focus()
  resultElement.textContent = `Time: ${timeLeft}`
  started = true
  clearInterval(timer)
  timer = setInterval(() => {
    timeLeft--
    timerElement.textContent = `Time: ${timeLeft}`
    if (timeLeft <= 0) {
      clearInterval(timer)
      finishTest()
    }
  }, 1000)
}

const finishTest = () => {
  typingArea.disabled = true
  started = false
  const typedText = typingArea.value.trim()
  const typedWords = typedText === "" ? 0 : typedText.split(/\s+/).length
  const originalWords = selectedSentence.split(/\s+/).length
  let correctWords = 0
  const typedArray = typedText.split(/\s+/)
  const originalArray =
          selectedSentence.split(/\s+/);
  
      originalArray.forEach((word, index) => {
  
          if (typedArray[index] === word) {
  
              correctWords++;
  
          }
  
      });
  
      const wpm = typedWords;
  
      const accuracy =
          originalWords === 0
              ? 0
              : (correctWords / originalWords) * 100;
  
      resultElement.innerHTML = `
          WPM : ${wpm}
          <br>
          Accuracy : ${accuracy.toFixed(2)}%
      `;
  
  };
  
  const restartTest = () => {
  
      clearInterval(timer);
  
      typingArea.disabled = true;
  
      typingArea.value = "";
  
      sentenceElement.textContent = "";
  
      timerElement.textContent = "Time : 60";
  
      resultElement.textContent = "";
  
      started = false;
  
  };
  
  startBtn.addEventListener(
      "click",
      startTest
  );
  
  restartBtn.addEventListener(
      "click",
      restartTest
  );
