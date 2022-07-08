import styled from 'styled-components';
import { images } from 'src/assets/images';
import { Card } from './Card';

export const Map = () => {
  return (
    <SContainer>
      <SJapan src={images.japan} alt="日本全体" />
      <SNaha>
        <Card city="那覇" imageUrl="https://www.jma.go.jp/bosai/forecast/img/100.svg" />
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

const SJapan = styled.img`
  width: 400px;
  margin: 50px 0;
  background-color: #e1f5fe;
`;

const SNaha = styled.div`
  position: absolute;
  bottom: 20px;
  right: 140px;
`;
