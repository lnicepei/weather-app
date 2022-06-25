function createCurrentWeather(weatherData) {
  let currentDegrees = "Farenheit";
  const currentCityDiv = document.querySelector(".additional");
  const weatherImageDiv = document.querySelector(".navbar");

  const weatherImage = document.createElement("img");
  weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  // weatherImageDiv.textContent = "";
  weatherImageDiv.appendChild(weatherImage);

  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-temp-btn");
  toggleButton.textContent = "Toggle";
  weatherImageDiv.appendChild(toggleButton);

  // const currentCityName = document.

  currentCityDiv.textContent = `${
    Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
  } degrees ${currentDegrees}`;

  toggleButton.textContent = "Farenheit";

  toggleButton.addEventListener("click", () => {
    if (currentDegrees === "Celsius") {
      currentDegrees = "Farenheit";
      toggleButton.textContent = "Celsius";

      currentCityDiv.textContent = `${
        Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
      } degrees ${currentDegrees}`;
    } else {
      currentDegrees = "Celsius";
      toggleButton.textContent = "Farenheit";

      currentCityDiv.textContent = `${
        Math.round((weatherData.main.temp - 273.15) * 10) / 10
      } degrees ${currentDegrees}`;
    }
  });
}

export { createCurrentWeather };
