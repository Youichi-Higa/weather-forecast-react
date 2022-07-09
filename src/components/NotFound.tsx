import styled from 'styled-components';

export const NotFound = () => {
  return (
    <SContainer>
      <p>このページは存在しません</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
