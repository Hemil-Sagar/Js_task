const dobInput = document.querySelector("#dob")
const calculateBtn = document.querySelector("#calculateBtn")
const result = document.querySelector("#result")

const calculateAge = () => {
  if (!dobInput) {
    result.textContent = "Please select your date of birth"
    return
  }
  const birthDate = new Date(dobInput.value)
  const today = new Date()

  let year = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()
  let days = today.getDate() - birthDate.getDate()

  if (days < 0) {
    months--
    const previouseMonth = new Date(
      today.getFullYear(),
      today.getMonth()
    )
    days += previouseMonth.getDate()
  }
  if (months < 0) {
    year--
    months += 12
  }
  result.innerHTML = `
    Age:
    <br>
    ${year} Years
    ${months} Months
    ${days} Days`
}

calculateBtn.addEventListener("click", calculateAge)