import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
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
          <Route path="/" element={<Japan />} />
          <Route path="/hokkaido" element={<Hokkaido />} />
          <Route path="/tohoku" element={<Tohoku />} />
          <Route path="/kanto" element={<Kanto />} />
          <Route path="/chubu" element={<Chubu />} />
          <Route path="/kinki" element={<Kinki />} />
          <Route path="/chugoku" element={<Chugoku />} />
          <Route path="/shikoku" element={<Shikoku />} />
          <Route path="/kyushu" element={<Kyushu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SContainer>
    </BrowserRouter>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default App;
