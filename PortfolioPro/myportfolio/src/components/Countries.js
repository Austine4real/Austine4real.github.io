// import React from 'react';
// import Country from './Country';

// const Countries = ({ data, searchTerm, regionFilter }) => {
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

// export default Countries;
