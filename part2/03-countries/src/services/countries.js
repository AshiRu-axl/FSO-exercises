import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/";

export const getCountriesNames = () => {
  const request = axios.get(`${baseURL}all`);

  const countries = request.then((response) => response.data);
  return countries.then((countries) =>
    countries.map((country) => country.name.common)
  );
};

export const getCountryByName = (name) => {
  const request = axios.get(`${baseURL}/name/${name}`);
  const data = request.then((response) => response.data);
  const countryData = data.then((response) => ({
    name: response.name.common,
    capital: response.capital[0],
    area: response.area,
    languages: Object.values(response.languages),

    flag: response.flags.svg,
  }));

  return countryData;
};
