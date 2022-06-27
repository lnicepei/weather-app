import { getWeather } from "./getWeather";
import css from "../src/style.css";
import img from './phil-botha-a0TJ3hy-UD8-unsplash.jpg';

document.addEventListener("keypress", listenToDocument);

function listenToDocument(e) {
  if (e.key === "Enter") getWeather(document.querySelector("input").value);
  this.removeEventListener("click", listenToDocument);
}

(function autoWeather() {
  getWeather("London");
})();
