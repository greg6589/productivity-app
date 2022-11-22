import { useState, useEffect } from "react";

export default function useFetchData() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const APIKEY = "d670abfa8c3544a5e467a5f45f918f03";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;
  let number = 0;
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    try {
      setIsLoading(true);
      const response = await fetch(URL);
      setData(await response.json());
      console.log(`próba ${number + 1}`);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return {
    data,
    isLoading,
    isError,
  };
}
