import styled from 'styled-components';
import { images } from 'src/assets/images';
import { BackHome } from '../BackHome';
import { Card } from '../Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

export const Kyushu = () => {
  const fukuoka = useForecastAPI(cityIds.fukuoka);
  const saga = useForecastAPI(cityIds.saga);
  const nagasaki = useForecastAPI(cityIds.nagasaki);
  const kumamoto = useForecastAPI(cityIds.kumamoto);
  const oita = useForecastAPI(cityIds.oita);
  const miyazaki = useForecastAPI(cityIds.miyazaki);
  const kagoshima = useForecastAPI(cityIds.kagoshima);

  return (
    <SContainer>
      <SMap src={images.kyushu} alt="九州" />
      <SBackHome>
        <BackHome />
      </SBackHome>
      {fukuoka && (
        <SFukuoka>
          <Card city={fukuoka.location.city} imageUrl={fukuoka.forecasts[0].image.url} />
        </SFukuoka>
      )}
      {saga && (
        <SSaga>
          <Card city={saga.location.city} imageUrl={saga.forecasts[0].image.url} />
        </SSaga>
      )}
      {nagasaki && (
        <SNagasaki>
          <Card city={nagasaki.location.city} imageUrl={nagasaki.forecasts[0].image.url} />
        </SNagasaki>
      )}
      {kumamoto && (
        <SKumamoto>
          <Card city={kumamoto.location.city} imageUrl={kumamoto.forecasts[0].image.url} />
        </SKumamoto>
      )}
      {oita && (
        <SOita>
          <Card city={oita.location.city} imageUrl={oita.forecasts[0].image.url} />
        </SOita>
      )}
      {miyazaki && (
        <SMiyazaki>
          <Card city={miyazaki.location.city} imageUrl={miyazaki.forecasts[0].image.url} />
        </SMiyazaki>
      )}
      {kagoshima && (
        <SKagoshima>
          <Card city={kagoshima.location.city} imageUrl={kagoshima.forecasts[0].image.url} />
        </SKagoshima>
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
const SFukuoka = styled(SCard)`
  top: 110px;
  right: 240px;
`;
const SSaga = styled(SCard)`
  top: 140px;
  left: 255px;
`;
const SNagasaki = styled(SCard)`
  top: 210px;
  left: 250px;
`;
const SKumamoto = styled(SCard)`
  top: 200px;
  right: 240px;
`;
const SOita = styled(SCard)`
  top: 160px;
  right: 180px;
`;
const SMiyazaki = styled(SCard)`
  bottom: 170px;
  right: 190px;
`;
const SKagoshima = styled(SCard)`
  bottom: 130px;
  right: 260px;
`;
