import styled from 'styled-components';

type Props = {
  city: string;
  imageUrl: string | null;
};

export const Card = (props: Props) => {
  const { city, imageUrl } = props;
  return (
    <SContainer>
      <p>{city}</p>
      {imageUrl && <SIcon src={imageUrl} alt="天気アイコン" />}
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 50px;
  height: 60px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    background-color: #faf0e6;
  }
`;

const SIcon = styled.img`
  width: 50px;
`;
