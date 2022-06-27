import { getWeather } from "./getWeather";
import css from "../src/style.css";

document.addEventListener("keypress", listenToDocument);

function listenToDocument(e) {
  if (e.key === "Enter") getWeather(document.querySelector("input").value);
  this.removeEventListener("click", listenToDocument);
}

(function autoWeather() {
  getWeather("London");
})();
