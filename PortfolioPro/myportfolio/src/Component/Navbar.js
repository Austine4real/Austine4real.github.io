// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div>
//          <nav>
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
//     </div>
//   )
// }
import React from 'react';

const Navbar = ({ searchTerm, handleSearch, regionFilter, handleFilter }) => {
  return (
    <nav>
      <input
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={regionFilter} onChange={handleFilter}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </nav>
  );
};

export default Navbar;
