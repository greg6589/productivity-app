export const getWeatherData = (weatherData) => {
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

  let sunrise = new Date(weatherData.sys.sunrise * 1000);
  let sunset = new Date(weatherData.sys.sunset * 1000);
  return {
    temperature,
    minTemperature,
    maxTemperature,
    weather,
    weatherIcon,
    humidity,
    year,
    month,
    weekday,
    day,
    sunrise,
    sunset,
  };
};
