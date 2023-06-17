// import logo from './logo.svg';
// import './App.css';
import Countries from './Component/Countries';
import SearchBars from './Component/SearchBars';
// import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Countries from './Countries';
import CountriesContainer from './componentCom/CountriesContainer';

function App() {
  return (
    <div className="App">
      <CountriesContainer/>
       {/* <Navbar /> */}
      {/* <CountriesContainer/> */}
      {/* <SearchBars/> */}
      {/* <Countries/> */}
    </div>
  );
}

export default App;
