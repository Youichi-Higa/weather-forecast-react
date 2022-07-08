import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Card } from './Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecast } from 'src/hooks/useForecast';

export const Japan = () => {
  const sapporo = useForecast(cityIds.sapporo.id);
  const kushiro = useForecast(cityIds.kushiro.id);
  const sendai = useForecast(cityIds.sendai.id);
  const tokyo = useForecast(cityIds.tokyo.id);
  const niigata = useForecast(cityIds.niigata.id);
  const kanazawa = useForecast(cityIds.kanazawa.id);
  const nagoya = useForecast(cityIds.nagoya.id);
  const osaka = useForecast(cityIds.osaka.id);
  const hiroshima = useForecast(cityIds.hiroshima.id);
  const kochi = useForecast(cityIds.kochi.id);
  const fukuoka = useForecast(cityIds.fukuoka.id);
  const kagoshima = useForecast(cityIds.kagoshima.id);
  const naha = useForecast(cityIds.naha.id);

  return (
    <SContainer>
      <SJapan src={images.japan} alt="日本全体" />
      <SSapporo>
        {sapporo && <Card city={cityIds.sapporo.name} imageUrl={sapporo.image.url} />}
      </SSapporo>
      <SKushiro>
        {kushiro && <Card city={cityIds.kushiro.name} imageUrl={kushiro?.image.url} />}
      </SKushiro>
      <SSendai>{sendai && <Card city={cityIds.sendai.name} imageUrl={sendai.image.url} />}</SSendai>
      <STokyo>{tokyo && <Card city={cityIds.tokyo.name} imageUrl={tokyo.image.url} />}</STokyo>
      <SNiigata>
        {niigata && <Card city={cityIds.niigata.name} imageUrl={niigata.image.url} />}
      </SNiigata>
      <SKanazawa>
        {kanazawa && <Card city={cityIds.kanazawa.name} imageUrl={kanazawa.image.url} />}
      </SKanazawa>
      <SNagoya>{nagoya && <Card city={cityIds.nagoya.name} imageUrl={nagoya.image.url} />}</SNagoya>
      <SOsaka>{osaka && <Card city={cityIds.osaka.name} imageUrl={osaka.image.url} />}</SOsaka>
      <SHiroshima>
        {hiroshima && <Card city={cityIds.hiroshima.name} imageUrl={hiroshima.image.url} />}
      </SHiroshima>
      <SKochi>{kochi && <Card city={cityIds.kochi.name} imageUrl={kochi.image.url} />}</SKochi>
      <SFukuoka>
        {fukuoka && <Card city={cityIds.fukuoka.name} imageUrl={fukuoka.image.url} />}
      </SFukuoka>
      <SKagoshima>
        {kagoshima && <Card city={cityIds.kagoshima.name} imageUrl={kagoshima.image.url} />}
      </SKagoshima>
      <SNaha>{naha && <Card city={cityIds.naha.name} imageUrl={naha.image.url} />}</SNaha>
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
