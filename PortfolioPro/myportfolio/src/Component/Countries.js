import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export const Countries = () => {
  const [data, setData] = useState(null);

  const url = () => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders')
      .then((res) => {
        console.log(res?.data);
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    url();
  }, []);

  const displayData = () => {
    return data ? (
      data.map((product) => {
        return (
          <div key={product?.cca3} className="card">
            <div>
              <img src={product?.flags.png} alt={product?.flags.alt} />
            </div>
            <div className="card-description">
              <h6>{product?.name?.common}</h6>
              <h6>{`Population: ${product?.population}`}</h6>
              <h6>{`Region: ${product?.region}`}</h6>
              {/* <h6>{`Subregion: ${product.subregion}`}</h6> */}
              <h6>{`Capital: ${product?.capital[0]}`}</h6>
              {/* <h6>{`Continents: ${product.continents.join(', ')}`}</h6>
              <h6>{`Top-Level Domain: ${product.tld.join(', ')}`}</h6>
              <h6>{`Currencies: ${Object.keys(product.currencies).join(', ')}`}</h6>
              <h6>{`Languages: ${Object.values(product.languages).join(', ')}`}</h6>
              <h6>{`Borders: ${product.borders.join(', ')}`}</h6> */}
            </div>
          </div>
        );
      })
    ) : (
      <h3>loading...</h3>
    );
  };

  return <div className="cards">{displayData()}</div>;
};

export default Countries;
// import React, { useEffect, useState } from 'react';
// import './style.css';
// import axios from 'axios';

// export const Countries = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders'
//       );
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const displayData = () => {
//     if (!data) {
//       return <h3>Loading...</h3>;
//     }

//     const { name, population, region, subregion, capital, flags, cca3, continents, tld, currencies, languages, borders } =
//       data;

//     return (
//       <div key={cca3} className='card'>
//         <div>
//           <img src={flags.png} alt={flags.alt} />
//         </div>
//         <div className='card-description'>
//           <h6>{name.common}</h6>
//           <h6>Population: {population}</h6>
//           <h6>Region: {region}</h6>
//           <h6>Subregion: {subregion}</h6>
//           <h6>Capital: {capital[0]}</h6>
//           <h6>Continents: {continents.join(', ')}</h6>
//           <h6>TLD: {tld.join(', ')}</h6>
//           <h6>Currencies: {Object.keys(currencies).join(', ')}</h6>
//           <h6>Languages: {Object.values(languages).join(', ')}</h6>
//           <h6>Borders: {borders.join(', ')}</h6>
//         </div>
//       </div>
//     );
//   };

//   return <div className='cards'>{displayData()}</div>;
// };

// export default Countries;

