import { createCurrentWeather } from "./updateWeatherDOM";

async function getWeather(city) {
  try {
    const unfecthedWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9d2f4030cf37634f60b9012e5bd611be`,
      { mode: "cors" }
    );

    const weatherData = await unfecthedWeatherData.json();

    const unfetchedForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=9d2f4030cf37634f60b9012e5bd611be`,
      { mode: "cors" }
    );

    const forecastData = await unfetchedForecast.json();

    createCurrentWeather(weatherData, forecastData);
  } catch (error) {
    console.log(error);
    alert("Please enter an existing city");
  }
}

export { getWeather };
