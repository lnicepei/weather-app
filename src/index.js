import { getWeather } from "./getWeather";

document.addEventListener("keypress", listenToDocument);

function listenToDocument(e) {
  if (e.key === "Enter") getWeather();
  this.removeEventListener("click", listenToDocument);
}

(function autoWeather() {
  getWeather();
  document.querySelector(".toggle-temp").removeEventListener("click", getWeather);
})();
