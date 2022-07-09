import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Card } from './Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

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
      <SSapporo onClick={() => navigate('/hokkaido')}>
        {sapporo && <Card city={sapporo.location.city} imageUrl={sapporo.forecasts[0].image.url} />}
      </SSapporo>
      <SKushiro onClick={() => navigate('/hokkaido')}>
        {kushiro && <Card city={kushiro.location.city} imageUrl={kushiro.forecasts[0].image.url} />}
      </SKushiro>
      <SSendai onClick={() => navigate('/tohoku')}>
        {sendai && <Card city={sendai.location.city} imageUrl={sendai.forecasts[0].image.url} />}
      </SSendai>
      <STokyo onClick={() => navigate('/kanto')}>
        {tokyo && <Card city={tokyo.location.city} imageUrl={tokyo.forecasts[0].image.url} />}
      </STokyo>
      <SNiigata onClick={() => navigate('/chubu')}>
        {niigata && <Card city={niigata.location.city} imageUrl={niigata.forecasts[0].image.url} />}
      </SNiigata>
      <SKanazawa onClick={() => navigate('/chubu')}>
        {kanazawa && (
          <Card city={kanazawa.location.city} imageUrl={kanazawa.forecasts[0].image.url} />
        )}
      </SKanazawa>
      <SNagoya onClick={() => navigate('/chubu')}>
        {nagoya && <Card city={nagoya.location.city} imageUrl={nagoya.forecasts[0].image.url} />}
      </SNagoya>
      <SOsaka onClick={() => navigate('/kinki')}>
        {osaka && <Card city={osaka.location.city} imageUrl={osaka.forecasts[0].image.url} />}
      </SOsaka>
      <SHiroshima onClick={() => navigate('/chugoku')}>
        {hiroshima && (
          <Card city={hiroshima.location.city} imageUrl={hiroshima.forecasts[0].image.url} />
        )}
      </SHiroshima>
      <SKochi onClick={() => navigate('/shikoku')}>
        {kochi && <Card city={kochi.location.city} imageUrl={kochi.forecasts[0].image.url} />}
      </SKochi>
      <SFukuoka onClick={() => navigate('/kyushu')}>
        {fukuoka && <Card city={fukuoka.location.city} imageUrl={fukuoka.forecasts[0].image.url} />}
      </SFukuoka>
      <SKagoshima onClick={() => navigate('/kyushu')}>
        {kagoshima && (
          <Card city={kagoshima.location.city} imageUrl={kagoshima.forecasts[0].image.url} />
        )}
      </SKagoshima>
      <SNaha>
        {naha && <Card city={naha.location.city} imageUrl={naha.forecasts[0].image.url} />}
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
