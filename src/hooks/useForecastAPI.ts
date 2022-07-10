import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Forecasts } from 'src/types/Forecasts';

export const useForecastAPI = (cityId: string | null) => {
  const [data, setData] = useState<Forecasts | undefined>(undefined);
  const url = `https://weather.tsukumijima.net/api/forecast/city/${cityId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return data;
};
