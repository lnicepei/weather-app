function createCurrentWeather(weatherData) {
  let currentDegrees = "Farenheit";
  const currentCityDiv = document.querySelector(".current-city");
  const weatherImageDiv = document.querySelector(".weather-image");

  const weatherImage = document.createElement("img");
  weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  weatherImageDiv.appendChild(weatherImage);

  currentCityDiv.textContent = `${
    Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
  } degrees ${currentDegrees}`;
  document.querySelector("#toggle-temp-btn").textContent = "Farenheit";

  document.querySelector("#toggle-temp-btn").addEventListener("click", () => {
    if (currentDegrees === "Celsius") {
      currentDegrees = "Farenheit";
      document.querySelector("#toggle-temp-btn").textContent = "Celsius";
      currentCityDiv.textContent = `${
        Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
      } degrees ${currentDegrees}`;
    } else {
      currentDegrees = "Celsius";
      document.querySelector("#toggle-temp-btn").textContent = "Farenheit";
      currentCityDiv.textContent = `${
        Math.round((weatherData.main.temp - 273.15) * 10) / 10
      } degrees ${currentDegrees}`;
    }
  });
}

export { createCurrentWeather };
