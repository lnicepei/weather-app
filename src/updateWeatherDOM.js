import { format } from "date-fns";

function createCurrentWeather(weatherData, forecastData) {
  let currentDegrees = "°C";

  const todayTemperature = document.querySelector(".today__temperature");
  const todayCity = document.querySelector(".today__city");
  const todayImage = document.querySelector(".today__image");
  const toggleButton = document.querySelector(".toggle-temp");
  const forecastDays = [...document.querySelectorAll(".forecast__card")];
  const todayItsNow = document.querySelector(".additional__its-now");
  const todayHumitidy = document.querySelector(".additional__humidity");
  const todayWindSpeed = document.querySelector(".additional__wind-speed");

  const weatherImage = document.createElement("img");
  weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  todayImage.textContent = "";
  todayImage.appendChild(weatherImage);

  console.log(weatherData);

  todayItsNow.textContent = `There is ${weatherData.weather[0].description} in ${weatherData.name}`;
  todayCity.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  todayHumitidy.textContent = `Humidity: ${weatherData.main.humidity}%`;
  todayWindSpeed.textContent = `Wind speed: ${weatherData.wind.speed} m/s`;

  todayTemperature.textContent = `${
    Math.round((weatherData.main.temp - 273.15) * 10) / 10
  } ${currentDegrees}`;
  todayTemperature.classList.add("Celsius");

  toggleButton.textContent = "Display °F";
  // toggleDegrees(currentDegrees, toggleButton);

  toggleButton.addEventListener("click", () => {
    toggleButton.textContent.includes("°C")
      ? (toggleButton.textContent = "Display °F")
      : (toggleButton.textContent = "Display °C");
    toggleDegrees(currentDegrees, toggleButton);
  });

  for (let day in forecastDays) {
    let forecastImage = document.createElement("img");
    forecastDays[day].childNodes[1].textContent = "";
    forecastDays[day].childNodes[1].appendChild(forecastImage);
    forecastImage.src = `http://openweathermap.org/img/wn/${forecastData.daily[day].weather[0].icon}@2x.png`;
    forecastDays[day].childNodes[3].textContent = `${
      Math.round(forecastData.daily[day].temp.day * 10) / 10
    } ${currentDegrees}`;
    forecastDays[day].childNodes[3].classList.add("Celsius");
    forecastDays[day].childNodes[5].textContent = format(
      new Date(forecastData.daily[day].dt * 1000),
      "dd.MM.y"
    );
    console.log(forecastData.daily[day]);
  }
}

function toggleDegrees(currentDegrees) {
  //Add classname to all the element that have this field, and then choose them with qs and
  //change their value

  const temperatureDivs = document.querySelectorAll(".temperature");

  console.log(temperatureDivs);

  for (let div of temperatureDivs) {
    let thenum = div.textContent.replace(/[^\d.]/g, "");
    if (div.classList.contains("Farenheit")) {
      div.classList.remove("Farenheit");
      div.classList.add("Celsius");
      currentDegrees = "°C";
      div.textContent = `${Math.round((thenum - 32) * (5 / 9) * 10) / 10} ${currentDegrees}`;
    } else if (div.classList.contains("Celsius")) {
      div.classList.remove("Celsius");
      div.classList.add("Farenheit");
      currentDegrees = "°F";
      div.textContent = `${Math.round((thenum * (9 / 5) + 32) * 10) / 10} ${currentDegrees}`;
    }
  }
}

export { createCurrentWeather };
