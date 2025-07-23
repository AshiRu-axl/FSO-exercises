import { weatherApi } from "./weather.api";

export const getCityWeather = async (name) => {
  const response = weatherApi.get("/weather", {
    params: { q: name, units: "metric" },
  });

  const responseData = response.then((response) => response.data);
  return responseData.then((data) => ({
    temp: data.main.temp,
    windSpeed: data.wind.speed,
    iconId: data.weather[0].icon,
  }));
};
