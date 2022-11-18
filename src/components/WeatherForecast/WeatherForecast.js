import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { getWeatherData } from "./untils/getWeatherData";

import style from "./WeatherForecast.module.css";

const WeatherForecast = ({ weatherData }) => {
  const data = getWeatherData(weatherData);

  return (
    <>
      <div className={style.weather}>
        <div className={style.weather_container}>
          <h1>{weatherData.name}</h1>
          <p className={style.weather_date}>
            <span className={style.capitalize}>{data.weekday}</span>, {data.day}{" "}
            <span className={style.capitalize}>{data.month}</span> {data.year}
          </p>
          <h2>{data.temperature}&deg;C</h2>
          <img
            src={`http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`}
            alt="icon"
          />
          <p>{data.weather}</p>
          <div className={style.weather_details}>
            <p>
              {data.minTemperature}&deg;C | {data.maxTemperature}&deg;C
            </p>
            <p>humidity:{data.humidity}%</p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faArrowUp} />
              {data.sunrise.toLocaleTimeString().slice(0, 5)}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faArrowDown} />
              {data.sunset.toLocaleTimeString().slice(0, 5)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
