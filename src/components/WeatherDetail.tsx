import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useForecastAPI } from 'src/hooks/useForecastAPI';
import { BackHome } from './BackHome';

export const WeatherDetail = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const cityId = query.get('cityid');
  const detail = useForecastAPI(cityId);

  return (
    <SContainer>
      <SBackHome>
        <BackHome />
      </SBackHome>
      {detail && (
        <>
          <STitle>
            <p className="city-forecast">{`${detail.location.city}の天気`}</p>
            <p className="time">{`${detail.publicTimeFormatted}発表`}</p>
          </STitle>
          <STable>
            <tr>
              <th>日付</th>
              {detail.forecasts.map((forecast) => (
                <td>{forecast.date}</td>
              ))}
            </tr>
            <tr>
              <th>天気</th>
              {detail.forecasts.map((forecast) => (
                <td>
                  <img src={forecast.image.url ?? ''} alt="天気アイコン" />
                  <p>{forecast.telop}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th>気温</th>
              {detail.forecasts.map((forecast) => (
                <td>
                  <p className="max-temp">{forecast.temperature.max.celsius ?? '-'}</p>
                  <p className="min-temp">{forecast.temperature.min.celsius ?? '-'}</p>
                </td>
              ))}
            </tr>
          </STable>
        </>
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: white;
`;

const SBackHome = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const STitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin: 10px 0;
  background: #e9eeff;
  border: 1px solid #ccc;
  > .city-forecast {
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;
    line-height: 30px;
    text-align: center;
  }
  > .time {
    font-size: 14px;
    padding-right: 10px;
    line-height: 30px;
    text-align: center;
  }
`;

const STable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  font-size: 16px;
  > tr th {
    background: #e9eeff;
    border: solid 1px #666666;
  }
  > tr td {
    border: solid 1px #666666;
  }
  > tr td img {
    width: 70px;
  }
  > tr td .max-temp {
    color: #fc3300;
  }
  > tr td .min-temp {
    color: #2866fe;
  }
`;
