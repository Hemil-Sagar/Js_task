const questionElement = document.querySelector("#question")
const answersElement = document.querySelector("#answers")
const nextBtn = document.querySelector("#nextBtn")
const resultElement = document.querySelector("#result")

const quiz = [
    {
        question: "Which language runs in the browser?",
        options: [
            "Java",
            "Python",
            "JavaScript",
            "C++"
        ],
        answer: "JavaScript"
    },

    {
        question: "Which method adds an element to an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "slice()"
        ],
        answer: "push()"
    },

    {
        question: "Which keyword declares a constant?",
        options: [
            "var",
            "let",
            "const",
            "define"
        ],
        answer: "const"
    },

    {
        question: "Which function converts JSON into an object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "parseInt()",
            "Object.parse()"
        ],
        answer: "JSON.parse()"
    },

    {
        question: "Which operator compares both value and type?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    }
];

let currentQuestion = 0
let score = 0
let selectedAnswer = null

const showQuestion = () => {

    selectedAnswer = null;

    const current = quiz[currentQuestion];
    questionElement.textContent =
        `${currentQuestion + 1}. ${current.question}`;
    answersElement.innerHTML = "";
    current.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            selectedAnswer = option;
            document
                .querySelectorAll("#answers button")
                .forEach((btn) => {
                    btn.style.background = "";
                });
            button.style.background = "lightgreen";
        });
        answersElement.appendChild(button);
    });
};

const nextQuestion = () => {
  if (!selectedAnswer) {
    alert("Select Answer")
    return
  }
  if (selectedAnswer === quiz[currentQuestion].answer) {
    score ++
  }

  currentQuestion++

  if (currentQuestion < quiz.length) {
    showQuestion()
  }
  else {
    questionElement.textContent = ""
    answersElement.innerHTML = ""
    nextBtn.style.display = "none"
    resultElement.textContent = `Your score is ${score} / ${quiz.length}`
  }
}

nextBtn.addEventListener("click", nextQuestion)

showQuestion()