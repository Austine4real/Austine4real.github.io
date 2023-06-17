// import React, { useState, useEffect } from 'react';
// // import './style.css';
// import axios from 'axios';

// export const Country = () => {
//   const [data, setData] = useState(null);

//   const url = () => {
//     axios
//       .get('https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders')
//       .then((res) => {
//         console.log(res?.data);
//         setData(res?.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     url();
//   }, []);

//   const displayData = () => {
//     return data ? (
//       data.map((product) => {
//         return (
//           <div key={product?.cca3} className="card">
//             <div>
//               <img src={product?.flags.png} alt={product?.flags.alt} />
//             </div>
//             <div className="card-description">
//               <h6>{product?.name?.common}</h6>
//               <h6>{`Population: ${product?.population}`}</h6>
//               <h6>{`Region: ${product?.region}`}</h6>
//               {/* <h6>{`Subregion: ${product.subregion}`}</h6> */}
//               <h6>{`Capital: ${product?.capital[0]}`}</h6>
//               {/* <h6>{`Continents: ${product.continents.join(', ')}`}</h6>
//               <h6>{`Top-Level Domain: ${product.tld.join(', ')}`}</h6>
//               <h6>{`Currencies: ${Object.keys(product.currencies).join(', ')}`}</h6>
//               <h6>{`Languages: ${Object.values(product.languages).join(', ')}`}</h6>
//               <h6>{`Borders: ${product.borders.join(', ')}`}</h6> */}
//             </div>
//           </div>
//         );
//       })
//     ) : (
//       <h3>loading...</h3>
//     );
//   };

//   return <div className="cards">{displayData()}</div>;
// };

// export default Country;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setRegionFilter(e.target.value);
  };

  const filteredData = data
    ? data.filter((country) => {
        return (
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (regionFilter === '' || country.region.toLowerCase() === regionFilter.toLowerCase())
        );
      })
    : [];

  const displayData = () => {
    return filteredData.length > 0 ? (
      filteredData.map((country) => {
        return (
          <div key={country?.cca3} className="card">
            <div>
              <img src={country?.flags?.png} alt={country?.flags?.alt} />
            </div>
            <div className="card-description">
              <h6>{country?.name?.common}</h6>
              <h6>{`Population: ${country?.population}`}</h6>
              <h6>{`Region: ${country?.region}`}</h6>
              {/* <h6>{`Subregion: ${country.subregion}`}</h6> */}
              <h6>{`Capital: ${country?.capital[0]}`}</h6>
              {/* <h6>{`Continents: ${country.continents.join(', ')}`}</h6>
              <h6>{`Top-Level Domain: ${country.tld.join(', ')}`}</h6>
              <h6>{`Currencies: ${Object.keys(country.currencies).join(', ')}`}</h6>
              <h6>{`Languages: ${Object.values(country.languages).join(', ')}`}</h6>
              <h6>{`Borders: ${country.borders.join(', ')}`}</h6> */}
            </div>
          </div>
        );
      })
    ) : (
      <h3>No countries found.</h3>
    );
  };

//   return (
//     <div>
//       <nav>
//         <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearch} />
//         <select value={regionFilter} onChange={handleFilter}>
//           <option value="">All Regions</option>
//           {data &&
//             data.map((country) => (
//               <option key={country.name.common} value={country.region}>
//                 {country.region}
//               </option>
//             ))}
//         </select>
//       </nav>
//       <div className="cards">{displayData()}</div>
//     </div>
//   );
};

export default Country;