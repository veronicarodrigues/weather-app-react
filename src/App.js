import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Madrid" />
        <footer>
          ✌ This website was coded by Verónica Rodrigues, and is{" "}
          <a href="https://github.com/veronicarodrigues/weather-app-react">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
