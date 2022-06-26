import { getWeather } from "./getWeather";

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather();
});