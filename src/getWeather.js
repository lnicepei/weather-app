import { createCurrentWeather } from "./updateWeatherDOM";

async function getWeather() {
  const cityInput = document.querySelector("input");

  try {
    const unfecthedWeatherData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=9d2f4030cf37634f60b9012e5bd611be`,
      { mode: "cors" }
    );

    const weatherData = await unfecthedWeatherData.json();

    createCurrentWeather(weatherData);
    
  } catch (error) {
    console.log(error);
    alert("Please enter an existing city");
  }
}

export { getWeather };
