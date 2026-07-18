const board = document.querySelector("#gameBoard");
const moveCounter = document.querySelector("#moves");
const restartBtn = document.querySelector("#restart");

const emojis = [
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍍",
    "🥝",
    "🍒",
    "🍉"
];

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

// Shuffle Array
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {

        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }

    return array;
};

// Create Cards
const createBoard = () => {

    board.innerHTML = "";

    cards = shuffle([...emojis, ...emojis]);

    cards.forEach((emoji) => {

        const button = document.createElement("button");

        button.className = "card";
        button.dataset.value = emoji;
        button.textContent = "?";

        button.addEventListener("click", () => flipCard(button));

        board.appendChild(button);

    });

};

// Flip Card
const flipCard = (card) => {

    if (
        lockBoard ||
        card === firstCard ||
        card.textContent !== "?"
    ) {
        return;
    }

    card.textContent = card.dataset.value;

    if (!firstCard) {

        firstCard = card;
        return;

    }

    secondCard = card;
    moves++;
    moveCounter.textContent = moves;

    checkMatch();

};

// Check Match
const checkMatch = () => {

    if (firstCard.dataset.value === secondCard.dataset.value) {

        matchedPairs++;

        firstCard.disabled = true;
        secondCard.disabled = true;

        resetTurn();

        if (matchedPairs === emojis.length) {

            setTimeout(() => {
                alert(`You won in ${moves} moves!`);
            }, 300);

        }

    } else {

        lockBoard = true;

        setTimeout(() => {

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            resetTurn();

        }, 700);

    }

};

// Reset Current Turn
const resetTurn = () => {

    firstCard = null;
    secondCard = null;
    lockBoard = false;

};

// Restart Game
const restartGame = () => {

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedPairs = 0;
    moves = 0;

    moveCounter.textContent = moves;

    createBoard();

};

restartBtn.addEventListener("click", restartGame);

createBoard();