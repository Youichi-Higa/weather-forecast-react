import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { images } from 'src/assets/images';
import { path } from 'src/constants/';
import {
  Chubu,
  Chugoku,
  Hokkaido,
  Japan,
  Kanto,
  Kinki,
  Kyushu,
  NotFound,
  Shikoku,
  Tohoku,
  WeatherDetail,
} from 'src/components';

const App = () => {
  return (
    <SContainer>
      <STitle>天気予報</STitle>
      <BrowserRouter>
        <Routes>
          <Route path={path.japan} element={<Japan />} />
          <Route path={path.hokkaido} element={<Hokkaido />} />
          <Route path={path.tohoku} element={<Tohoku />} />
          <Route path={path.kanto} element={<Kanto />} />
          <Route path={path.chubu} element={<Chubu />} />
          <Route path={path.kinki} element={<Kinki />} />
          <Route path={path.chugoku} element={<Chugoku />} />
          <Route path={path.shikoku} element={<Shikoku />} />
          <Route path={path.kyushu} element={<Kyushu />} />
          <Route path={path.weatherDetail} element={<WeatherDetail />} />
          <Route path={path.notFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2980b9,
    #6dd5fa,
    #ffffff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2980b9,
    #6dd5fa,
    #ffffff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const STitle = styled.h1`
  padding: 20px;
`;

export default App;
