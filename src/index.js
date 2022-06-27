import { getWeather } from "./getWeather";
import css from "../src/style.css";
import img from '../src/eberhard-grossgasteiger-P9J7aBf5vTk-unsplash.jpg';

document.addEventListener("keypress", listenToDocument);

function listenToDocument(e) {
  if (e.key === "Enter") getWeather(document.querySelector("input").value);
  this.removeEventListener("click", listenToDocument);
}

(function autoWeather() {
  getWeather("London");
})();
