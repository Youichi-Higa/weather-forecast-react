import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { cityIds, path } from 'src/constants';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { Card } from '../Card';

export const Japan = () => {
  const navigate = useNavigate();

  const sapporo = useForecastAPI(cityIds.sapporo);
  const kushiro = useForecastAPI(cityIds.kushiro);
  const sendai = useForecastAPI(cityIds.sendai);
  const tokyo = useForecastAPI(cityIds.tokyo);
  const niigata = useForecastAPI(cityIds.niigata);
  const kanazawa = useForecastAPI(cityIds.kanazawa);
  const nagoya = useForecastAPI(cityIds.nagoya);
  const osaka = useForecastAPI(cityIds.osaka);
  const hiroshima = useForecastAPI(cityIds.hiroshima);
  const kochi = useForecastAPI(cityIds.kochi);
  const fukuoka = useForecastAPI(cityIds.fukuoka);
  const kagoshima = useForecastAPI(cityIds.kagoshima);
  const naha = useForecastAPI(cityIds.naha);

  return (
    <SContainer>
      <SMap src={images.japan} alt="日本全体" />
        {sapporo && (
          <SSapporo onClick={() => navigate(path.hokkaido)}>
            <Card city={sapporo.location.city} imageUrl={sapporo.forecasts[0].image.url} />
          </SSapporo>
        )}
        {kushiro && (
          <SKushiro onClick={() => navigate(path.hokkaido)}>
            <Card city={kushiro.location.city} imageUrl={kushiro.forecasts[0].image.url} />
          </SKushiro>
        )}
        {sendai && (
          <SSendai onClick={() => navigate(path.tohoku)}>
            <Card city={sendai.location.city} imageUrl={sendai.forecasts[0].image.url} />
          </SSendai>
        )}
        {tokyo && (
          <STokyo onClick={() => navigate(path.kanto)}>
            <Card city={tokyo.location.city} imageUrl={tokyo.forecasts[0].image.url} />
          </STokyo>
        )}
        {niigata && (
          <SNiigata onClick={() => navigate(path.chubu)}>
            <Card city={niigata.location.city} imageUrl={niigata.forecasts[0].image.url} />
          </SNiigata>
        )}
        {kanazawa && (
          <SKanazawa onClick={() => navigate(path.chubu)}>
            <Card city={kanazawa.location.city} imageUrl={kanazawa.forecasts[0].image.url} />
          </SKanazawa>
        )}
        {nagoya && (
          <SNagoya onClick={() => navigate(path.chubu)}>
            <Card city={nagoya.location.city} imageUrl={nagoya.forecasts[0].image.url} />
          </SNagoya>
        )}
        {osaka && (
          <SOsaka onClick={() => navigate(path.kinki)}>
            <Card city={osaka.location.city} imageUrl={osaka.forecasts[0].image.url} />
          </SOsaka>
        )}
        {hiroshima && (
          <SHiroshima onClick={() => navigate(path.chugoku)}>
            <Card city={hiroshima.location.city} imageUrl={hiroshima.forecasts[0].image.url} />
          </SHiroshima>
        )}
        {kochi && (
          <SKochi onClick={() => navigate(path.shikoku)}>
            <Card city={kochi.location.city} imageUrl={kochi.forecasts[0].image.url} />
          </SKochi>
        )}
        {fukuoka && (
          <SFukuoka onClick={() => navigate(path.kyushu)}>
            <Card city={fukuoka.location.city} imageUrl={fukuoka.forecasts[0].image.url} />
          </SFukuoka>
        )}
        {kagoshima && (
          <SKagoshima onClick={() => navigate(path.kyushu)}>
            <Card city={kagoshima.location.city} imageUrl={kagoshima.forecasts[0].image.url} />
          </SKagoshima>
        )}
        {naha && (
          <SNaha onClick={() => navigate(`${path.weatherDetail}?cityid=${cityIds.naha}`)}>
            <Card city={naha.location.city} imageUrl={naha.forecasts[0].image.url} />
          </SNaha>
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
const SCard = styled.div`
  position: absolute;
  opacity: 0.8;
`;
const SSapporo = styled(SCard)`
  top: 60px;
  right: 240px;
`;
const SKushiro = styled(SCard)`
  top: 120px;
  right: 140px;
`;
const SSendai = styled(SCard)`
  top: 220px;
  right: 170px;
`;
const STokyo = styled(SCard)`
  bottom: 140px;
  right: 190px;
`;
const SNiigata = styled(SCard)`
  top: 190px;
  right: 260px;
`;
const SKanazawa = styled(SCard)`
  top: 230px;
  left: 230px;
`;
const SNagoya = styled(SCard)`
  bottom: 100px;
  right: 250px;
`;
const SOsaka = styled(SCard)`
  bottom: 80px;
  left: 240px;
`;
const SHiroshima = styled(SCard)`
  bottom: 180px;
  left: 160px;
`;
const SKochi = styled(SCard)`
  bottom: 55px;
  left: 180px;
`;
const SFukuoka = styled(SCard)`
  bottom: 140px;
  left: 100px;
`;
const SKagoshima = styled(SCard)`
  bottom: 40px;
  left: 90px;
`;
const SNaha = styled(SCard)`
  bottom: 30px;
  right: 150px;
`;
