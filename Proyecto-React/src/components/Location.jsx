import React, { useState, useEffect } from 'react';

const Location = () => {
  const [locations, setLocations] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/location";

  useEffect(() => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => setLocations(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
   <div className='container'>
     <div className='row'>
        <h1>WikiLocations</h1>
      {locations.map((item, index) => (
        <div key={index} className='col'>
          <div className='card my-3' style={{ minWidth: '200px', background: '#78BE20', minHeight:'320px' }}>
            <img src={item.image} alt='' />
            <div className='card-body'>
              <h5 style={{ color:'whitesmoke', fontWeight:'bolder'}}className='card-title'>{item.name}</h5>
              <hr />
              <p style={{fontWeight:'bolder'}}>Tipo de ubicación: {item.type}</p>
              <p style={{fontWeight:'bolder'}}>Dimensión: {item.dimension}</p>
              <p style={{fontWeight:'bolder'}}>Creación: {item.created}</p>
              <p style={{fontWeight:'bolder'}}>Residentes: {item.residents.length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Location;