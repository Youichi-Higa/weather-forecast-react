import styled from 'styled-components';
import { images } from 'src/assets/images';
import { BackHome } from './BackHome';
import { Card } from './Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

export const Hokkaido = () => {
  const wakkanai = useForecastAPI(cityIds.wakkanai);
  const asahikawa = useForecastAPI(cityIds.asahikawa);
  const abashiri = useForecastAPI(cityIds.abashiri);
  const kushiro = useForecastAPI(cityIds.kushiro);
  const muroran = useForecastAPI(cityIds.muroran);
  const sapporo = useForecastAPI(cityIds.sapporo);
  const hakodate = useForecastAPI(cityIds.hakodate);

  return (
    <SContainer>
      <SMap src={images.hokkaido} alt="北海道" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      <SWakkanai>
        {wakkanai && (
          <Card city={wakkanai.location.city} imageUrl={wakkanai.forecasts[0].image.url} />
        )}
      </SWakkanai>
      <SAsahikawa>
        {asahikawa && (
          <Card city={asahikawa.location.city} imageUrl={asahikawa.forecasts[0].image.url} />
        )}
      </SAsahikawa>
      <SAbashiri>
        {abashiri && (
          <Card city={abashiri.location.city} imageUrl={abashiri.forecasts[0].image.url} />
        )}
      </SAbashiri>
      <SKushiro>
        {kushiro && <Card city={kushiro.location.city} imageUrl={kushiro.forecasts[0].image.url} />}
      </SKushiro>
      <SMuroran>
        {muroran && <Card city={muroran.location.city} imageUrl={muroran.forecasts[0].image.url} />}
      </SMuroran>
      <SSapporo>
        {sapporo && <Card city={sapporo.location.city} imageUrl={sapporo.forecasts[0].image.url} />}
      </SSapporo>
      <SHakodate>
        {hakodate && (
          <Card city={hakodate.location.city} imageUrl={hakodate.forecasts[0].image.url} />
        )}
      </SHakodate>
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
const SWakkanai = styled(SCard)`
  top: 80px;
  left: 210px;
`;
const SAsahikawa = styled(SCard)`
  top: 160px;
  left: 220px;
`;
const SAbashiri = styled(SCard)`
  top: 120px;
  right: 240px;
`;
const SKushiro = styled(SCard)`
  bottom: 100px;
  right: 250px;
`;
const SMuroran = styled(SCard)`
  bottom: 80px;
  left: 175px;
`;
const SSapporo = styled(SCard)`
  bottom: 150px;
  left: 150px;
`;
const SHakodate = styled(SCard)`
  bottom: 15px;
  left: 130px;
`;
