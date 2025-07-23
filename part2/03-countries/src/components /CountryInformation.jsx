const CountryInformation = ({ countryData }) => {
  const { name, languages, capital, area, flag, iconId, windSpeed, temp } =
    countryData;

  return (
    <>
      <h1>{name}</h1>
      <div>
        <p>Capital {capital}</p>
        <p>Area {area}</p>
      </div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={flag} width="215" />
      <h2>Weather in Helsinski</h2>
      <p>Temperature {temp} celcius</p>
      <img
        src={`http://openweathermap.org/img/wn/${iconId}.png
`}
      ></img>
      <p>Wind {windSpeed} m/s</p>
    </>
  );
};
export default CountryInformation;
