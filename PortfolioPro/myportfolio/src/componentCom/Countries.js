import React from 'react';

const Countries = ({ filteredData }) => {
  return (
    <div className="cards">
      {filteredData.length > 0 ? (
        filteredData.map((country) => (
          <div key={country?.name?.common} className="card">
            <div>
              <img src={country?.flags?.png} alt={country?.flags?.alt} />
            </div>
            <div className="card-description">
              <h4>{country?.name?.common}</h4>
              <p>Region: {country?.region}</p>
              <p>Population: {country?.population}</p>
              <p>Capital: {country?.capital?.[0]}</p>
            </div>
          </div>
        ))
      ) : (
        <h3>No countries found.</h3>
      )}
    </div>
  );
};

export default Countries;