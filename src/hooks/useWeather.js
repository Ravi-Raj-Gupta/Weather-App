import { useEffect, useState } from "react";
import { fetchweather } from "../api/weatherApi";

const useWeather = (city) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) return;
    fetchweather(city).then(setData);
  }, [city]);

  return { data };
};

export default useWeather;
