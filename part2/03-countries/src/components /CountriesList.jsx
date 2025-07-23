export const CountriesList = ({ countries, onShow }) => {
  return (
    <ul>
      {countries.length > 10 ? (
        <span>Too many matches, specify another filter</span>
      ) : (
        countries.map((country) => (
          <>
            <li>
              {country} <button onClick={() => onShow(country)}>Show</button>
            </li>
          </>
        ))
      )}
    </ul>
  );
};
