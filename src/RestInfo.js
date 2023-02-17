import React, { useState } from 'react';
import axios from 'axios';
import CountryInfo from './CountryInfo';
import './App.css';

const RestInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://restcountries.com/v2/name/${searchTerm}`);
      const [country] = response.data;
      setSelectedCountry(country);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {selectedCountry ? <CountryInfo country={selectedCountry} /> : null}
    </div>
  );
};

export default RestInfo;


