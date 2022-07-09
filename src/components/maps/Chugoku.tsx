import styled from 'styled-components';
import { images } from 'src/assets/images';
import { BackHome } from '../BackHome';
import { Card } from '../Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

export const Chugoku = () => {
  const tottori = useForecastAPI(cityIds.tottori);
  const matsue = useForecastAPI(cityIds.matsue);
  const okayama = useForecastAPI(cityIds.okayama);
  const hiroshima = useForecastAPI(cityIds.hiroshima);
  const yamaguchi = useForecastAPI(cityIds.yamaguchi);

  return (
    <SContainer>
      <SMap src={images.chugoku} alt="中国" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      <STottori>
        {tottori && <Card city={tottori.location.city} imageUrl={tottori.forecasts[0].image.url} />}
      </STottori>
      <SMatsue>
        {matsue && <Card city={matsue.location.city} imageUrl={matsue.forecasts[0].image.url} />}
      </SMatsue>
      <SOkayama>
        {okayama && <Card city={okayama.location.city} imageUrl={okayama.forecasts[0].image.url} />}
      </SOkayama>
      <SHiroshima>
        {hiroshima && (
          <Card city={hiroshima.location.city} imageUrl={hiroshima.forecasts[0].image.url} />
        )}
      </SHiroshima>
      <SYmaguchi>
        {yamaguchi && (
          <Card city={yamaguchi.location.city} imageUrl={yamaguchi.forecasts[0].image.url} />
        )}
      </SYmaguchi>
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
const SMap = styled.img`
  width: 400px;
  margin: 50px 0;
`;
const SBackHome = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const SCard = styled.div`
  position: absolute;
  opacity: 0.8;
`;
const STottori = styled(SCard)`
  top: 170px;
  right: 110px;
`;
const SMatsue = styled(SCard)`
  top: 170px;
  right: 240px;
`;
const SOkayama = styled(SCard)`
  bottom: 180px;
  right: 140px;
`;
const SHiroshima = styled(SCard)`
  bottom: 140px;
  left: 250px;
`;
const SYmaguchi = styled(SCard)`
  bottom: 120px;
  left: 120px;
`;
