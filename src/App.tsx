import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import type { Forecasts } from './types/Forecasts';

function App() {
  const [forecasts, setForecasts] = useState<Forecasts | undefined>(undefined);

  const url = 'https://weather.tsukumijima.net/api/forecast/city/471010';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setForecasts(res.data.forecasts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {forecasts?.map((forecast) => (
          <div key={forecast.date}>
            <p>{forecast.date}</p>
            <p>{forecast.telop}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
