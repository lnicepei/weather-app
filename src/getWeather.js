import { createCurrentWeather } from "./updateWeatherDOM";

async function getWeather() {
  const cityInput = document.querySelector("input");
  let unfecthedWeatherData, unfetchedForecast;
  try {
    if (cityInput.value) {
      unfecthedWeatherData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );
      unfetchedForecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );
    } else {
      unfecthedWeatherData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );
      unfetchedForecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );
    }

    const weatherData = await unfecthedWeatherData.json();

    const forecast = await unfetchedForecast.json();
    console.log(weatherData);
    console.log(forecast);

    createCurrentWeather(weatherData);
  } catch (error) {
    console.log(error);
    alert("Please enter an existing city");
  }
}

export { getWeather };
