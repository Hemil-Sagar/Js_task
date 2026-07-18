console.log("script loaded");
console.log(document.getElementById("submitguess"));
let y = Math.floor(Math.random() * 10 + 1)
let guess = 1

document.getElementById("submitguess").onclick = () => {
  let x = document.getElementById("guessField").value

  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN" + guess + "Guess")
  } else if (x > y) {
    guess++
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
  } else {
    guess++
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
  }
}