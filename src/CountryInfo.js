import React from 'react';
// import './CountryInfo.css';

const CountryInfo = ({ country }) => {
  return (
    <div className="country-info">
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Language: {country.languages[0].name}</p>
      <p>Borders: {country.borders.join(', ')}</p>
    </div>
  );
};

export default CountryInfo;