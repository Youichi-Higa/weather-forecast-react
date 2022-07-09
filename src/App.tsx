import styled from 'styled-components';
import {
  Chubu,
  Chugoku,
  Hokkaido,
  Kinki,
  Kyushu,
  Kanto,
  Japan,
  Shikoku,
  Tohoku,
} from 'src/components';

const App = () => {
  return (
    <SContainer>
      {/* <Japan /> */}
      {/* <Hokkaido /> */}
      {/* <Tohoku /> */}
      {/* <Kanto /> */}
      {/* <Chubu /> */}
      {/* <Kinki /> */}
      {/* <Chugoku /> */}
      {/* <Shikoku /> */}
      <Kyushu />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default App;
