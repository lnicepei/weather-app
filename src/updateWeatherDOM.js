import { format, parseISO } from "date-fns";

function createCurrentWeather(weatherData, forecastData) {
  let currentDegrees = "Farenheit";

  const todayTemperature = document.querySelector(".today__temperature");
  const todayCity = document.querySelector(".today__city");
  const todayImage = document.querySelector(".today__image");
  const toggleButton = document.querySelector(".toggle-temp");
  const forecastDays = [...document.querySelectorAll(".forecast-day")];
  const todayFeelsLike = document.querySelector(".additional__feels-like");
  const todayHumitidy = document.querySelector(".additional__humidity");
  const todayWindSpeed = document.querySelector(".additional__wind-speed");

  const weatherImage = document.createElement("img");
  weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  todayImage.textContent = "";
  todayImage.appendChild(weatherImage);

  console.log(weatherData);

  todayFeelsLike.textContent = `Feels like ${weatherData.main.feels_like} ${currentDegrees}`;
  todayCity.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  todayHumitidy.textContent = `Humidity: ${weatherData.main.humidity}%`;
  todayWindSpeed.textContent = `Wind speed: ${weatherData.wind.speed} m/s`

  todayTemperature.textContent = `${
    Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
  } degrees ${currentDegrees}`;

  toggleButton.textContent = "Farenheit";

  toggleButton.addEventListener("click", () => {
    if (currentDegrees === "Celsius") {
      currentDegrees = "Farenheit";
      toggleButton.textContent = "Celsius";

      todayTemperature.textContent = `${
        Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
      } degrees ${currentDegrees}`;
    } else {
      currentDegrees = "Celsius";
      toggleButton.textContent = "Farenheit";

      todayTemperature.textContent = `${
        Math.round((weatherData.main.temp - 273.15) * 10) / 10
      } degrees ${currentDegrees}`;
    }
  });

  for (let day in forecastDays) {
    let forecastImage = document.createElement("img");
    forecastDays[day].childNodes[1].textContent = "";
    forecastDays[day].childNodes[1].appendChild(forecastImage);
    forecastImage.src = `http://openweathermap.org/img/wn/${forecastData.daily[day].weather[0].icon}@2x.png`;
    forecastDays[day].childNodes[3].textContent = forecastData.daily[day].temp.day;
    forecastDays[day].childNodes[5].textContent = format(
      new Date(forecastData.daily[day].dt * 1000),
      "d.MM.y"
    );
  }
}

function toggleDegrees() {}

export { createCurrentWeather };
