import React from 'react';
const Navbar = ({ searchTerm, handleSearch, regionFilter, handleFilter }) => {
//   return (
//     <nav>
//       <input
//         type="text"
//         placeholder="Search by country name"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <select value={regionFilter} onChange={handleFilter}>
//         <option value="">All Regions</option>
//         <option value="Africa">Africa</option>
//         <option value="Americas">Americas</option>
//         <option value="Asia">Asia</option>
//         <option value="Europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>
//     </nav>
//   );

// return (
//         <div>
//           <nav>
//             <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearch} />
//             <select value={regionFilter} onChange={handleFilter}>
//               <option value="">All Regions</option>
//               {data &&
//                 data.map((country) => (
//                   <option key={country.name.common} value={country.region}>
//                     {country.region}
//                   </option>
//                 ))}
//             </select>
//           </nav>
//           <div className="cards">{displayData()}</div>
//         </div>
//       );

};

export default Navbar;