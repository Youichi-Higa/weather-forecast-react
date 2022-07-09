import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Card } from './Card';
import { cityIds } from 'src/constants/cityIds';
import { useForecastAPI } from 'src/hooks/useForecastAPI';

export const Shikoku = () => {
  const tokushima = useForecastAPI(cityIds.tokushima);
  const takamatsu = useForecastAPI(cityIds.takamatsu);
  const matsuyama = useForecastAPI(cityIds.matsuyama);
  const kochi = useForecastAPI(cityIds.kochi);

  return (
    <SContainer>
      <SMap src={images.shikoku} alt="四国" />
      <STokushima>
        {tokushima && (
          <Card city={tokushima.location.city} imageUrl={tokushima.forecasts[0].image.url} />
        )}
      </STokushima>
      <STakamatsu>
        {takamatsu && (
          <Card city={takamatsu.location.city} imageUrl={takamatsu.forecasts[0].image.url} />
        )}
      </STakamatsu>
      <SMatsuyama>
        {matsuyama && (
          <Card city={matsuyama.location.city} imageUrl={matsuyama.forecasts[0].image.url} />
        )}
      </SMatsuyama>
      <SKochi>
        {kochi && <Card city={kochi.location.city} imageUrl={kochi.forecasts[0].image.url} />}
      </SKochi>
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
const STokushima = styled(SCard)`
  top: 160px;
  right: 110px;
`;
const STakamatsu = styled(SCard)`
  top: 90px;
  right: 170px;
`;
const SMatsuyama = styled(SCard)`
  top: 180px;
  left: 150px;
`;
const SKochi = styled(SCard)`
  bottom: 210px;
  left: 270px;
`;
