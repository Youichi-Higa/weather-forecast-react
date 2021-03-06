import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { cityIds, path } from 'src/constants';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { BackHome } from '../BackHome';
import { Card } from '../Card';

export const Chubu = () => {
  const navigate = useNavigate();

  const niigata = useForecastAPI(cityIds.niigata);
  const toyama = useForecastAPI(cityIds.toyama);
  const kanazawa = useForecastAPI(cityIds.kanazawa);
  const fukui = useForecastAPI(cityIds.fukui);
  const kofu = useForecastAPI(cityIds.kofu);
  const nagano = useForecastAPI(cityIds.nagano);
  const gifu = useForecastAPI(cityIds.gifu);
  const shizuoka = useForecastAPI(cityIds.shizuoka);
  const nagoya = useForecastAPI(cityIds.nagoya);

  return (
    <SContainer>
      <SMap src={images.chubu} alt="中部" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      {niigata && (
        <SNiigata onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.niigata}`)}>
          <Card city={niigata.location.city} imageUrl={niigata.forecasts[0].image.url} />
        </SNiigata>
      )}
      {toyama && (
        <SToyama onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.toyama}`)}>
          <Card city={toyama.location.city} imageUrl={toyama.forecasts[0].image.url} />
        </SToyama>
      )}
      {kanazawa && (
        <SKanazawa onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.kanazawa}`)}>
          <Card city={kanazawa.location.city} imageUrl={kanazawa.forecasts[0].image.url} />
        </SKanazawa>
      )}
      {fukui && (
        <SFukui onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.fukui}`)}>
          <Card city={fukui.location.city} imageUrl={fukui.forecasts[0].image.url} />
        </SFukui>
      )}
      {kofu && (
        <SKofu onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.kofu}`)}>
          <Card city={kofu.location.city} imageUrl={kofu.forecasts[0].image.url} />
        </SKofu>
      )}
      {nagano && (
        <SNagano onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.nagano}`)}>
          <Card city={nagano.location.city} imageUrl={nagano.forecasts[0].image.url} />
        </SNagano>
      )}
      {gifu && (
        <SGifu onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.gifu}`)}>
          <Card city={gifu.location.city} imageUrl={gifu.forecasts[0].image.url} />
        </SGifu>
      )}
      {shizuoka && (
        <SShizuoka onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.shizuoka}`)}>
          <Card city={shizuoka.location.city} imageUrl={shizuoka.forecasts[0].image.url} />
        </SShizuoka>
      )}
      {nagoya && (
        <SNagoya onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.nagano}`)}>
          <Card city={nagoya.location.city} imageUrl={nagoya.forecasts[0].image.url} />
        </SNagoya>
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
const SNiigata = styled(SCard)`
  top: 100px;
  right: 170px;
`;
const SToyama = styled(SCard)`
  top: 180px;
  left: 250px;
`;
const SKanazawa = styled(SCard)`
  top: 190px;
  left: 180px;
`;
const SFukui = styled(SCard)`
  bottom: 170px;
  left: 150px;
`;
const SKofu = styled(SCard)`
  bottom: 130px;
  right: 190px;
`;
const SNagano = styled(SCard)`
  top: 230px;
  right: 230px;
`;
const SGifu = styled(SCard)`
  bottom: 130px;
  left: 210px;
`;
const SShizuoka = styled(SCard)`
  bottom: 50px;
  right: 220px;
`;
const SNagoya = styled(SCard)`
  bottom: 60px;
  left: 220px;
`;
