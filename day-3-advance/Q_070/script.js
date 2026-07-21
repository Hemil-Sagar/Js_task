const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calculateBtn = document.querySelector("#calculateBtn")
const result = document.querySelector("#result")

const calculateBMI = () => {
  const height = Number(heightInput.value)
  const weight = Number(weightInput.value)

  if (height <= 0 || weight <= 0) {

    result.textContent = "Enter valid  height and weight"
    result
  }

  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  let category = ""
  if (bmi < 18.5) {
    category = "Underweight"
  } else if (bmi < 25) {
    category = "normal weight"
  } else if (bmi < 30) {
    category = "Overweight"
  } else {
    category = "Obese"
  }
  result.innerHTML = `
    BMI: ${bmi.toFixed(2)}
    <br>
    Category: ${category}`
}

calculateBtn.addEventListener("click", calculateBMI)