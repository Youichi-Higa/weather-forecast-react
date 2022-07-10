import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
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
} from 'src/components';

const App = () => {
  return (
    <BrowserRouter>
      <SContainer>
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
          <Route path={path.notFound} element={<NotFound />} />
        </Routes>
      </SContainer>
    </BrowserRouter>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default App;
