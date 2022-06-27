import { format } from "date-fns";

function createCurrentWeather(weatherData, forecastData) {
  let currentDegrees = "°C";

  const toggleButton = document.querySelector(".search__toggle");
  const forecastDays = [...document.querySelectorAll(".forecast__card")];

  removeWeatherClassName();

  updateTodayWeather(weatherData, currentDegrees);

  toggleButton.textContent = "Display °F";

  toggleButton.addEventListener("click", toggleDegrees);
  toggleButton.parameter1 = currentDegrees;
  toggleButton.parameter2 = toggleButton;

  for (let day in forecastDays) {
    let forecastImage = document.createElement("img");
    forecastDays[day].childNodes[1].textContent = "";
    forecastDays[day].childNodes[1].appendChild(forecastImage);
    forecastImage.src = `http://openweathermap.org/img/wn/${forecastData.daily[day].weather[0].icon}@2x.png`;
    
    forecastDays[day].childNodes[3].textContent = `${
      Math.round(forecastData.daily[day].temp.max * 10) / 10
    } ${currentDegrees}`;
    forecastDays[day].childNodes[3].classList.add("Celsius");

    forecastDays[day].childNodes[5].textContent = format(
      new Date(forecastData.daily[day].dt * 1000),
      "dd.MM.y"
    );
  }
}

function updateTodayWeather(weatherData, currentDegrees) {
  const todayTemperature = document.querySelector(".today__temperature");
  const todayCity = document.querySelector(".today__city");
  const todayImage = document.querySelector(".today__image");

  const todayDescription = document.querySelector(".additional__description");
  const todayHumitidy = document.querySelector(".additional__humidity");
  const todayWindSpeed = document.querySelector(".additional__wind-speed");

  const weatherImage = document.createElement("img");
  weatherImage.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  todayImage.textContent = "";
  todayImage.appendChild(weatherImage);

  todayDescription.textContent = `${weatherData.weather[0].description}`;
  todayCity.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  todayHumitidy.textContent = `Humidity: ${weatherData.main.humidity}%`;
  todayWindSpeed.textContent = `Wind: ${weatherData.wind.speed} m/s`;

  todayTemperature.textContent = `${
    Math.round((weatherData.main.temp - 273.15) * 10) / 10
  } ${currentDegrees}`;
  todayTemperature.classList.add("Celsius");
}

function toggleDegrees(e) {
  let currentDegrees = e.currentTarget.parameter1;
  const toggleButton = e.currentTarget.parameter2;

  toggleButton.textContent.includes("°C")
    ? (toggleButton.textContent = "Display °F")
    : (toggleButton.textContent = "Display °C");

  const temperatureDivs = document.querySelectorAll(".temperature");

  for (let div of temperatureDivs) {
    let temperatureClean = div.textContent.replace(/[^\d.]/g, "");
    if (div.classList.contains("Farenheit")) {
      div.classList.remove("Farenheit");
      div.classList.add("Celsius");
      currentDegrees = "°C";
      div.textContent = `${Math.round((temperatureClean - 32) * (5 / 9) * 10) / 10} ${currentDegrees}`;
    } else if (div.classList.contains("Celsius")) {
      div.classList.remove("Celsius");
      div.classList.add("Farenheit");
      currentDegrees = "°F";
      div.textContent = `${Math.round((temperatureClean * (9 / 5) + 32) * 10) / 10} ${currentDegrees}`;
    }
  }
}

function removeWeatherClassName() {
  const temperatureDivs = document.querySelectorAll(".temperature");

  for (let div of temperatureDivs) {
    div.classList.remove("Celsius");
    div.classList.remove("Farenheit");
  }
}

export { createCurrentWeather };
