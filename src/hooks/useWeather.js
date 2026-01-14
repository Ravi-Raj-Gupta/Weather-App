import { useEffect, useState } from "react";
import { fetchweather } from "../api/weatherApi";


const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city || city.trim() === "") return;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchweather(city);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [city]);

  return { data, loading, error }; // ⬅ THIS WAS MISSING
};

export default useWeather;
