import React, { useState, useEffect } from "react";

import WeatherForecast from "../components/WeatherForecast/WeatherForecast";
import Loader from "../components/Loader/Loader";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  let componentMounted = true;

  const APIKEY = "d670abfa8c3544a5e467a5f45f918f03";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    const response = await fetch(URL);
    if (componentMounted) {
      setData(await response.json());
    }

    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
    <>
      {typeof data.main != "undefined" ? (
        <WeatherForecast weatherData={data} />
      ) : (
        <Loader weatherData={data} />
      )}
    </>
  );
};

export default Weather;
