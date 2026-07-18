let count = 0;

const countValue = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
    count++;
    countValue.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countValue.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countValue.textContent = count;
});