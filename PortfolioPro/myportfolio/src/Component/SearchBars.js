// import React, { useState, useEffect } from 'react';
// import './style.css';
// import axios from 'axios';

// export const SearchBars = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [regionFilter, setRegionFilter] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,region');
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilter = (e) => {
//     setRegionFilter(e.target.value);
//   };

//   const filteredData = data.filter((country) => {
//     return (
//       country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (regionFilter === '' || country.region.toLowerCase() === regionFilter.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <nav>
//         <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearch} />
//         <select value={regionFilter} onChange={handleFilter}>
//           <option value="">All Regions</option>
//           <option value="africa">Africa</option>
//           <option value="americas">Americas</option>
//           <option value="asia">Asia</option>
//           <option value="europe">Europe</option>
//           <option value="oceania">Oceania</option>
//         </select>
//       </nav>
//       {/* <div className="cards">
//         {filteredData.length > 0 ? (
//           filteredData.map((country) => (
//             <div key={country.name.common} className="card">
//               <h4>{country.name.common}</h4>
//               <p>Region: {country.region}</p>
//             </div>
//           ))
//         ) : (
//           <h3>No countries found.</h3>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default SearchBars;

{/* <nav>
  <input
    type="text"
    placeholder="Search by country name"
    value={searchTerm}
    onChange={handleSearch}
  />
  <select value={regionFilter} onChange={handleFilter}>
    <option value="">All Regions</option>
    {data.map((country) => (
      <option key={country.name.common} value={country.region}>
        {country.region}
      </option>
    ))}
  </select>
</nav> */}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';

// const SearchBars = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [regionFilter, setRegionFilter] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,region');
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilter = (e) => {
//     setRegionFilter(e.target.value);
//   };

//   const filteredData = data.filter((country) => {
//     return (
//       country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (regionFilter === '' || country.region.toLowerCase() === regionFilter.toLowerCase())
//     );
//   });

//   return (
//     <div className="cards">
//       {filteredData.length > 0 ? (
//         filteredData.map((country) => (
//           <div key={country.name.common} className="card">
//             <h4>{country.name.common}</h4>
//             <p>Region: {country.region}</p>
//           </div>
//         ))
//       ) : (
//         <h3>No countries found.</h3>
//       )}
//     </div>
//   );
// };

// export default SearchBars;