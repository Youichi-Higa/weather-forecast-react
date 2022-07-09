import styled from 'styled-components';
import { images } from 'src/assets/images';
import { BackHome } from './BackHome';
import { Card } from './Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

export const Kinki = () => {
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
      <STsu>{tsu && <Card city={tsu.location.city} imageUrl={tsu.forecasts[0].image.url} />}</STsu>
      <SOtsu>
        {otsu && <Card city={otsu.location.city} imageUrl={otsu.forecasts[0].image.url} />}
      </SOtsu>
      <SKyoto>
        {kyoto && <Card city={kyoto.location.city} imageUrl={kyoto.forecasts[0].image.url} />}
      </SKyoto>
      <SOsaka>
        {osaka && <Card city={osaka.location.city} imageUrl={osaka.forecasts[0].image.url} />}
      </SOsaka>
      <SKobe>
        {kobe && <Card city={kobe.location.city} imageUrl={kobe.forecasts[0].image.url} />}
      </SKobe>
      <SNara>
        {nara && <Card city={nara.location.city} imageUrl={nara.forecasts[0].image.url} />}
      </SNara>
      <SWakayama>
        {wakayama && (
          <Card city={wakayama.location.city} imageUrl={wakayama.forecasts[0].image.url} />
        )}
      </SWakayama>
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
