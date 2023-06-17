import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Countries from './Countries';

const CountriesContainer = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders');
    //   const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,region');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setRegionFilter(e.target.value);
  };

  const filteredData = data.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === '' || country.region.toLowerCase() === regionFilter.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} regionFilter={regionFilter} handleFilter={handleFilter} />
      <Countries filteredData={filteredData}/>
    </div>
  );
};

export default CountriesContainer;