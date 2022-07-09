export type Forecasts = {
  publicTime: string;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
  link: string;
  description: {
    publicTime: string;
    publicTimeFormatted: string;
    headlineText: string;
    bodyText: string;
    text: string;
  };
  forecasts: [Forecast, Forecast, Forecast];
  location: {
    area: string;
    prefecture: string;
    district: string;
    city: string;
  };
  copyright: {
    title: string;
    link: string;
    image: {
      title: string;
      link: string;
      url: string;
      width: number;
      height: number;
    };
    provider: [
      {
        link: string;
        name: string;
        note: string;
      }
    ];
  };
};

type Forecast = {
  date: string | null;
  dateLabel: string | null;
  telop: string | null;
  detail: {
    weather: string | null;
    wind: string | null;
    wave: string | null;
  };
  temperature: {
    min: {
      celsius: string | null;
      fahrenheit: string | null;
    };
    max: {
      celsius: string | null;
      fahrenheit: string | null;
    };
  };
  chanceOfRain: {
    T00_06: string | null;
    T06_12: string | null;
    T12_18: string | null;
    T18_24: string | null;
  };
  image: {
    title: string | null;
    url: string | null;
    width: number | null;
    height: number | null;
  };
};
