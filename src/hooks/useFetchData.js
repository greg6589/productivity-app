import { useState, useEffect } from "react";

export default function useFetchData() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const APIKEY = "d670abfa8c3544a5e467a5f45f918f03";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latCoord = position.coords.latitude;
      const lonCoord = position.coords.longitude;
      if (latCoord && lonCoord) {
        setLat(latCoord);
        setLon(lonCoord);
      }
    });
  };
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        setData(await response.json());
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon]);

  return {
    data,
    isLoading,
    isError,
  };
}
