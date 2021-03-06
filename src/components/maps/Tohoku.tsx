import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { cityIds, path } from 'src/constants';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { BackHome } from '../BackHome';
import { Card } from '../Card';

export const Tohoku = () => {
  const navigate = useNavigate();

  const aomori = useForecastAPI(cityIds.aomori);
  const morioka = useForecastAPI(cityIds.morioka);
  const sendai = useForecastAPI(cityIds.sendai);
  const akita = useForecastAPI(cityIds.akita);
  const yamagata = useForecastAPI(cityIds.yamagata);
  const fukushima = useForecastAPI(cityIds.fukushima);

  return (
    <SContainer>
      <SMap src={images.tohoku} alt="東北" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      {aomori && (
        <SAomori onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.aomori}`)}>
          <Card city={aomori.location.city} imageUrl={aomori.forecasts[0].image.url} />
        </SAomori>
      )}
      {morioka && (
        <SMorioka onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.morioka}`)}>
          <Card city={morioka.location.city} imageUrl={morioka.forecasts[0].image.url} />
        </SMorioka>
      )}
      {sendai && (
        <SSendai onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.sendai}`)}>
          <Card city={sendai.location.city} imageUrl={sendai.forecasts[0].image.url} />
        </SSendai>
      )}
      {akita && (
        <SAkita onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.akita}`)}>
          <Card city={akita.location.city} imageUrl={akita.forecasts[0].image.url} />
        </SAkita>
      )}
      {yamagata && (
        <SYamagata onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.yamagata}`)}>
          <Card city={yamagata.location.city} imageUrl={yamagata.forecasts[0].image.url} />
        </SYamagata>
      )}
      {fukushima && (
        <SFukushima onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.fukushima}`)}>
          <Card city={fukushima.location.city} imageUrl={fukushima.forecasts[0].image.url} />
        </SFukushima>
      )}
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
const SAomori = styled(SCard)`
  top: 40px;
  left: 270px;
`;
const SMorioka = styled(SCard)`
  top: 160px;
  right: 220px;
`;
const SSendai = styled(SCard)`
  bottom: 150px;
  right: 220px;
`;
const SAkita = styled(SCard)`
  top: 180px;
  left: 220px;
`;
const SYamagata = styled(SCard)`
  bottom: 160px;
  left: 220px;
`;
const SFukushima = styled(SCard)`
  bottom: 70px;
  right: 270px;
`;
