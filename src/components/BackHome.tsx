import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { path } from 'src/constants/';

export const BackHome = () => {
  const navigate = useNavigate();

  return (
    <SWrapper onClick={() => navigate(path.japan)}>
      <p>＜ 全国</p>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 40px;
  background-color: gainsboro;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: lightgray;
  }
`;
