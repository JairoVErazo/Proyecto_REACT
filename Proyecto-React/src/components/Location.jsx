import React from 'react'

const Location = ({location = []}) => {
    return (
        <div className='row'>
            {location.map((item, index) => (
                    <div key={index} className='col'>
                        <div className='card' style={{minWidth:"200px"}}>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p>Tipo de ubicacion: {item.type}</p>
                                <p>Dimensión: {item.dimension}</p>
                                <p>Creación: {item.created}</p>
                                {item.residente}
                            </div>
                        </div>
    
                    </div>
                ))}
        </div>
      );
};
export default Location;