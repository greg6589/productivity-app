import React from "react";
import "../styles/WeatherForecast.css";
const WeatherForecast = ({ weatherData }) => {
  const temperature = (weatherData.main.temp - 273.15).toFixed(0);
  const minTemperature = (weatherData.main.temp_min - 273.15).toFixed(0);
  const maxTemperature = (weatherData.main.temp_max - 273.15).toFixed(0);
  const weather = weatherData.weather[0].description;
  const weatherIcon = weatherData.weather[0].icon;
  const humidity = weatherData.main.humidity;
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("default", { month: "long" });
  const weekday = new Date().toLocaleString("default", { weekday: "long" });
  const day = new Date().getDate();

  return (
    <>
      <div className="weather">
        <div className="weather-container">
          <h1>{weatherData.name}</h1>
          <p className="weather-date">
            <span className="capitalize">{weekday}</span>, {day}{" "}
            <span className="capitalize">{month}</span> {year}
          </p>
          <h2>{temperature}&deg;C</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="icon"
          />
          <p>{weather}</p>
          <div className="weather-details">
            <p>
              {minTemperature}&deg;C | {maxTemperature}&deg;C
            </p>
            <p>humidity:{humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
