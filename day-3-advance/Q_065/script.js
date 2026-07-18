const cityInput = document.querySelector('#city')
const searchBtn = document.querySelector('#search')
const weatherDiv = document.querySelector('#weather')

const getCoordinates = async (city) => {

    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const data = await response.json();

    console.log(data);

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    return data.results[0];
};

const getWeather = async (latitude, longitude) => {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`)
  return await response.json()
}

const displayWeather = (city, weather) => {
  weatherDiv.innerHTML = `
    <h2>${city}</h2>
    <p>🌡 Temperature : ${weather.current.temperature_2m} °C</p>
    <p>💨 Wind Speed : ${weather.current.wind_speed_10m} km/h</p>`
}

const searchWeather = async () => {
  const city = cityInput.value.trim()

  if (!city) {
    weatherDiv.textContent = "Please enter your city"
    return
  }
  weatherDiv.textContent = "Loading...."

  try {
    const location = await getCoordinates(city)

    const weather = await getWeather(
      location.latitude,
      location.longitude
    )
    displayWeather(location.name, weather)
  } catch (error) {
    weatherDiv.textContent = error.message
  }
}

searchBtn.addEventListener("click", searchWeather)
cityInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    searchWeather()
  }
})