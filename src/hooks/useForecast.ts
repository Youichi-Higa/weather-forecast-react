import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Forecast } from 'src/types/Forecast';

export const useForecast = (cityId: string) => {
  const [forecast, setForecast] = useState<Forecast | undefined>(undefined);
  const url = `https://weather.tsukumijima.net/api/forecast/city/${cityId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setForecast(res.data.forecasts[0]))
      .catch((error) => console.error(error));
  }, [url]);

  return forecast;
};
