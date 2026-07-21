const amountInput = document.querySelector("#amount")
const fromCurrency = document.querySelector("#fromCurrency")
const toCurrency = document.querySelector("#toCurrency")
const convertBtn = document.querySelector("#convertBtn")
const result = document.querySelector("#result")

const convertCurrency = async () => {
  const amount = Number(amountInput.value)
  if (amount <= 0) {
    result.textContent = "Enter vaild amount"
    return
  } try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency.value}`)

    const data = await response.json()
    const rate = data.rates[toCurrency.value]
    const convertedAmount = amount * rate
    result.textContent = `${amount} ${fromCurrency.value} = ${convertedAmount.toFixed(2)} ${toCurrency.value}`
  } catch (error) {
    result.textContent="Unable to fetch exchange rates"
  }
}
convertBtn.addEventListener("click", convertCurrency)