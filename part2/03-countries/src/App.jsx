import { useState, useEffect } from "react";
import { getCountriesNames, getCountryByName } from "./services/countries";
import SearchBar from "./components /SearchBar";
import { CountriesList } from "./components /CountriesList";
import CountryInformation from "./components /CountryInformation";
import { getCityWeather } from "./services/weahter";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);
  const [weahter, setWeahter] = useState(null);

  const filteredCountries = countries.filter((country) =>
    country.trim().toLowerCase().includes(search.toLowerCase())
  );

  const requestCountryInfo = (name) => {
    getCountryByName(name).then((data) => {
      getCityWeather(data.capital).then((response) =>
        setCountryInfo({ ...data, ...response })
      );
    });
  };
  const handleShow = (name) => {
    setSearch("");
    requestCountryInfo(name);
  };

  useEffect(() => {
    getCountriesNames().then((response) => setCountries(response));
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  useEffect(() => {
    if (filteredCountries.length !== 1) {
      setCountryInfo(null);
      return;
    }
    requestCountryInfo(filteredCountries[0]);
  }, [search]);

  return (
    <>
      <SearchBar text={search} onTextChange={handleSearch} />
      {countryInfo ? (
        <CountryInformation countryData={countryInfo} />
      ) : (
        <CountriesList onShow={handleShow} countries={filteredCountries} />
      )}
    </>
  );
}

export default App;
