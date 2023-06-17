import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Countries from './Countries';
import Country from './Country';

const CountriesContainer = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,region');
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

  return (
    <div>
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} regionFilter={regionFilter} handleFilter={handleFilter} />
      <Country data={data} searchTerm={searchTerm} regionFilter={regionFilter} />
      {/* <Countries data={data} searchTerm={searchTerm} regionFilter={regionFilter} /> */}
    </div>
  );
};

export default CountriesContainer;