import styled from 'styled-components';
import { Japan } from 'src/components/Japan';

const App = () => {
  return (
    <SContainer>
      <Japan />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default App;
