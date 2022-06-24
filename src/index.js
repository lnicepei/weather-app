async function getWeather() {
  const cityInput = document.querySelector("input");
  const currentCityDiv = document.querySelector(".current-city");
  const weatherImageDiv = document.querySelector(".weather-image");
  let currentDegrees = "Farenheit";

  try {
    const unfecthedWeatherData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=9d2f4030cf37634f60b9012e5bd611be`,
      { mode: "cors" }
    );

    const weatherData = await unfecthedWeatherData.json();

    const weatherImage = document.querySelector("img");
    weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    console.log(weatherData);

    const timeOfDay = weatherData.weather[0].icon.charAt(weatherData.weather[0].icon.length - 1);
    console.log(timeOfDay);

    currentCityDiv.textContent = `${
      Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
    } degrees ${currentDegrees}`;

    document.querySelector("#toggle-temp").addEventListener("click", () => {
      if (currentDegrees === "Celsius") {
        currentDegrees = "Farenheit";
        currentCityDiv.textContent = `${
          Math.round(((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 10) / 10
        } degrees ${currentDegrees}`;
      } else {
        currentDegrees = "Celsius";
        currentCityDiv.textContent = `${
          Math.round((weatherData.main.temp - 273.15) * 10) / 10
        } degrees ${currentDegrees}`;
      }
    });
  } catch (error) {
    console.log(error);
    alert("Please enter an existing city");
  }
}

document.querySelector("#search").addEventListener("click", getWeather);
