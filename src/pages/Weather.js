import React from "react";

import WeatherForecast from "../components/WeatherForecast/WeatherForecast";
import Loader from "../components/Loader/Loader";
import useFetchData from "./hooks/useFetchData";

const Weather = () => {
  const { data, isLoading, isError } = useFetchData();

  return <>{isLoading ? <Loader /> : <WeatherForecast weatherData={data} />}</>;
};

export default Weather;
