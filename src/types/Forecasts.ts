export type Forecasts = [
  {
    date: string;
    dateLabel: string;
    telop: string;
    detail: {
      weather: string;
      wind: string;
      wave: string;
    };
    temperature: {
      min: {
        celsius: null;
        fahrenheit: null;
      };
      max: {
        celsius: string;
        fahrenheit: string;
      };
    };
    chanceOfRain: {
      T00_06: string;
      T06_12: string;
      T12_18: string;
      T18_24: string;
    };
    image: {
      title: string;
      url: string;
      width: number;
      height: number;
    };
  },
  {
    date: string;
    dateLabel: string;
    telop: string;
    detail: {
      weather: string;
      wind: string;
      wave: string;
    };
    temperature: {
      min: {
        celsius: string;
        fahrenheit: string;
      };
      max: {
        celsius: string;
        fahrenheit: string;
      };
    };
    chanceOfRain: {
      T00_06: string;
      T06_12: string;
      T12_18: string;
      T18_24: string;
    };
    image: {
      title: string;
      url: string;
      width: number;
      height: number;
    };
  },
  {
    date: string;
    dateLabel: string;
    telop: string;
    detail: {
      weather: string;
      wind: string;
      wave: string;
    };
    temperature: {
      min: {
        celsius: string;
        fahrenheit: string;
      };
      max: {
        celsius: string;
        fahrenheit: string;
      };
    };
    chanceOfRain: {
      T00_06: string;
      T06_12: string;
      T12_18: string;
      T18_24: string;
    };
    image: {
      title: string;
      url: string;
      width: number;
      height: number;
    };
  }
];
