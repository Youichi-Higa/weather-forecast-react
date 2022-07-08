import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Map } from 'src/components/Map';
import type { Forecasts } from 'src/types/Forecasts';

const App = () => {
  const [forecasts, setForecasts] = useState<Forecasts | undefined>(undefined);

  const url = 'https://weather.tsukumijima.net/api/forecast/city/471010';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setForecasts(res.data.forecasts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SContainer>
      <Map />
      {forecasts?.map((forecast) => (
        <div key={forecast.date}>
          <p>{forecast.date}</p>
          <p>{forecast.telop}</p>
        </div>
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SJapan = styled.img`
  width: 600px;
`;

export default App;
