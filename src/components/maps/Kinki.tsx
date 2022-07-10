import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { cityIds, path } from 'src/constants';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { BackHome } from '../BackHome';
import { Card } from '../Card';

export const Kinki = () => {
  const navigate = useNavigate();

  const tsu = useForecastAPI(cityIds.tsu);
  const otsu = useForecastAPI(cityIds.otsu);
  const kyoto = useForecastAPI(cityIds.kyoto);
  const osaka = useForecastAPI(cityIds.osaka);
  const kobe = useForecastAPI(cityIds.kobe);
  const nara = useForecastAPI(cityIds.nara);
  const wakayama = useForecastAPI(cityIds.wakayama);

  return (
    <SContainer>
      <SMap src={images.kinki} alt="近畿" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      {tsu && (
        <STsu onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.tsu}`)}>
          <Card city={tsu.location.city} imageUrl={tsu.forecasts[0].image.url} />
        </STsu>
      )}
      {otsu && (
        <SOtsu onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.otsu}`)}>
          <Card city={otsu.location.city} imageUrl={otsu.forecasts[0].image.url} />
        </SOtsu>
      )}
      {kyoto && (
        <SKyoto onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.kyoto}`)}>
          <Card city={kyoto.location.city} imageUrl={kyoto.forecasts[0].image.url} />
        </SKyoto>
      )}
      {osaka && (
        <SOsaka onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.osaka}`)}>
          <Card city={osaka.location.city} imageUrl={osaka.forecasts[0].image.url} />
        </SOsaka>
      )}
      {kobe && (
        <SKobe onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.kobe}`)}>
          <Card city={kobe.location.city} imageUrl={kobe.forecasts[0].image.url} />
        </SKobe>
      )}
      {nara && (
        <SNara onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.nara}`)}>
          <Card city={nara.location.city} imageUrl={nara.forecasts[0].image.url} />
        </SNara>
      )}
      {wakayama && (
        <SWakayama onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.wakayama}`)}>
          <Card city={wakayama.location.city} imageUrl={wakayama.forecasts[0].image.url} />
        </SWakayama>
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
const STsu = styled(SCard)`
  bottom: 220px;
  right: 150px;
`;
const SOtsu = styled(SCard)`
  top: 130px;
  right: 210px;
`;
const SKyoto = styled(SCard)`
  top: 140px;
  left: 280px;
`;
const SOsaka = styled(SCard)`
  bottom: 220px;
  left: 260px;
`;
const SKobe = styled(SCard)`
  top: 180px;
  left: 200px;
`;
const SNara = styled(SCard)`
  bottom: 200px;
  right: 230px;
`;
const SWakayama = styled(SCard)`
  bottom: 130px;
  left: 230px;
`;
