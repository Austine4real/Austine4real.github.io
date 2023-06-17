import React from 'react';

const Navbar = ({ searchTerm, handleSearch, regionFilter, handleFilter }) => {
  return (
    <nav>
      <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearch} />
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
// import React from 'react';

// const Navbar = ({ searchTerm, handleSearch, regionFilter, handleFilter, regions }) => {
//   return (
//     <nav>
//       <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearch} />
//       <select value={regionFilter} onChange={handleFilter}>
//         <option value="">All Regions</option>
//         {regions.map((region) => (
//           <option key={region} value={region}>
//             {region}
//           </option>
//         ))}
//       </select>
//     </nav>
//   );
// };

// export default Navbar;
