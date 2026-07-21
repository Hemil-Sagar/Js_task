const lenghtInput = document.querySelector("#length")
const uppercaseInput = document.querySelector("#uppercase")
const lowercaseInput = document.querySelector("#lowercase")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const passwordInput = document.querySelector("#password")
const generateBtn = document.querySelector("#generateBtn")
const copyBtn = document.querySelector("#copyBtn")

const characters = {
  
  uppercase: "ABCDEFGHIJKLMNOPQRSTWXYZ",
  lowercase: "abcdefghijklmnopqrstwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}<>?"
}

const randomCharacter = (text) => {
  return text[
    Math.floor(Math.random() * text.length)
  ]
}

const generatePassword = () => {
  let availableCharacters = ""
  if (uppercaseInput.checked) {
    availableCharacters += characters.uppercase
  }
  if (lowercaseInput.checked) {
    availableCharacters += characters.lowercase
  }
  if (numbersInput.checked) {
    availableCharacters += characters.numbers
  }
  if (symbolsInput.checked) {
    availableCharacters += characters.symbols
  }
  if (availableCharacters === "") {
    alert("Select an least on option")
    return
  }

  let password = ""
  const lenght = Number(lenghtInput.value)
  for (let i = 0; i < lenght; i++){
    password += randomCharacter(
      availableCharacters
    )
  }
  passwordInput.value = password
}

const copyPassword = async () => {
  if (!passwordInput.value) {
    alert('Generate a password first')
    return
  }
  await navigator.clipboard.writeText(passwordInput.value)
}

generateBtn.addEventListener("click", generatePassword)
copyBtn.addEventListener("click", copyPassword)

generatePassword