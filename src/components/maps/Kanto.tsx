import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { cityIds, path } from 'src/constants';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { BackHome } from '../BackHome';
import { Card } from '../Card';

export const Kanto = () => {
  const navigate = useNavigate();

  const mito = useForecastAPI(cityIds.mito);
  const utsunomiya = useForecastAPI(cityIds.utsunomiya);
  const maebashi = useForecastAPI(cityIds.maebashi);
  const saitama = useForecastAPI(cityIds.saitama);
  const chiba = useForecastAPI(cityIds.chiba);
  const tokyo = useForecastAPI(cityIds.tokyo);
  const yokohama = useForecastAPI(cityIds.yokohama);

  return (
    <SContainer>
      <SMap src={images.kanto} alt="関東" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      {mito && (
        <SMito onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.mito}`)}>
          <Card city={mito.location.city} imageUrl={mito.forecasts[0].image.url} />
        </SMito>
      )}
      {utsunomiya && (
        <SUtsunomiya onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.utsunomiya}`)}>
          <Card city={utsunomiya.location.city} imageUrl={utsunomiya.forecasts[0].image.url} />
        </SUtsunomiya>
      )}
      {maebashi && (
        <SMaebashi onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.maebashi}`)}>
          <Card city={maebashi.location.city} imageUrl={maebashi.forecasts[0].image.url} />
        </SMaebashi>
      )}
      {saitama && (
        <SSaitama onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.saitama}`)}>
          <Card city={saitama.location.city} imageUrl={saitama.forecasts[0].image.url} />
        </SSaitama>
      )}
      {chiba && (
        <SChiba onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.chiba}`)}>
          <Card city={chiba.location.city} imageUrl={chiba.forecasts[0].image.url} />
        </SChiba>
      )}
      {tokyo && (
        <STokyo onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.tokyo}`)}>
          <Card city={tokyo.location.city} imageUrl={tokyo.forecasts[0].image.url} />
        </STokyo>
      )}
      {yokohama && (
        <SYokohama onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.yokohama}`)}>
          <Card city={yokohama.location.city} imageUrl={yokohama.forecasts[0].image.url} />
        </SYokohama>
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
const SMito = styled(SCard)`
  top: 150px;
  right: 140px;
`;
const SUtsunomiya = styled(SCard)`
  top: 80px;
  right: 240px;
`;
const SMaebashi = styled(SCard)`
  top: 130px;
  left: 200px;
`;
const SSaitama = styled(SCard)`
  bottom: 220px;
  left: 260px;
`;
const SChiba = styled(SCard)`
  bottom: 150px;
  right: 190px;
`;
const STokyo = styled(SCard)`
  bottom: 155px;
  right: 255px;
`;
const SYokohama = styled(SCard)`
  bottom: 90px;
  left: 270px;
`;
