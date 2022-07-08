import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Card } from './Card';
import {cityIds} from "src/constants/cityIds";
import type { Forecast } from 'src/types/Forecast';

export const Japan = () => {
  const [sapporo, setSapporo] = useState<Forecast | undefined>(undefined);

  const baseURL = 'https://weather.tsukumijima.net/api/forecast/city/';

  console.log(sapporo);

  useEffect(() => {
    axios
      .get(`${baseURL}${cityIds.sapporo.id}`)
      .then((res) => setSapporo(res.data.forecasts[0]))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SContainer>
      <SJapan src={images.japan} alt="日本全体" />
      <SNaha>
        {sapporo && <Card city={cityIds.sapporo.name} imageUrl={sapporo.image.url} />}
      </SNaha>
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 600px;
  background-color: #e1f5fe;
`;

const SJapan = styled.img`
  width: 400px;
  margin: 50px 0;
  background-color: #e1f5fe;
`;

const SNaha = styled.div`
  position: absolute;
  bottom: 20px;
  right: 140px;
`;
