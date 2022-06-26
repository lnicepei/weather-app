import { createCurrentWeather } from "./updateWeatherDOM";

async function getWeather() {
  const cityInput = document.querySelector("input");
  let unfecthedWeatherData, unfetchedForecast;
  try {
      unfecthedWeatherData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );

      
      const weatherData = await unfecthedWeatherData.json();
      
      
      unfetchedForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=9d2f4030cf37634f60b9012e5bd611be`,
        { mode: "cors" }
      );

    const forecastData = await unfetchedForecast.json();


    // console.log(weatherData, forecastData);
    // console.log(forecastData);

    createCurrentWeather(weatherData, forecastData);
  } catch (error) {
    console.log(error);
    alert("Please enter an existing city");
  }
}

export { getWeather };
