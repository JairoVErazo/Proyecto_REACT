import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/Desarrolladores.css';
import listado from './integrantes.json'
export default function Integrantes() {
    const [flippedCards, setFlippedCards] = useState(new Array(listado.length).fill(false));
    const [desarrolladores, setDesarrolladores] = useState(listado);
  
    const cardRefs = useRef(new Array(listado.length).fill(null));
  
    const flipCard = (index) => {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      setFlippedCards(newFlippedCards);
    };
  
    const handleClickOutside = (event) => {
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef && !cardRef.contains(event.target)) {
          const newFlippedCards = [...flippedCards];
          newFlippedCards[index] = false;
          setFlippedCards(newFlippedCards);
        }
      });
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  
console.log(desarrolladores)
  return (
        <div className='container'>
                <section className='row my-5 row-gap-4'>
               {
                 desarrolladores.map((integrantes, index) => {
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className='col-md-4' key={index}>
                        <div ref={element => cardRefs.current[index] = element}
              className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}>
                       <div className="flip-card-inner">
                         <div className="flip-card-front">
                             <div className='flip-targets'>
                                 <div className='flip-targetblack'>
                                     <div className='bg-dark flip-targetcircular '>
                                     <img
                                       src={integrantes.imagen}
                                       alt={integrantes.nombre}
                                       className="flip-perfilCircular"
                                     />
                                     </div>
                                 </div>
                                 <div className="flip-tartitulo mx-5">
                                   <h1 className="text-center"> {integrantes.nombre} </h1>
                                   <h3 className="text-center mb-2"> {integrantes.profesion} </h3>
                                   <p className=""><i className="fa-solid fa-phone"></i> {integrantes.contacto.telefono} </p>
                                   <p><i className="fa-solid fa-envelope"></i> {integrantes.contacto.correo}</p>
                                   <a href={integrantes.contacto.userGitHub}><i className="fa-brands fa-github mb-3"></i> abrahambamac345</a>
                                   <p>
                                     <i className="fa-solid fa-house"></i> {integrantes.contacto.direction} 
                                   </p>
                                   <button className="flip-button" onClick={() => flipCard(index)}>Conoce más de mi
                           </button>
                                 </div>
                             </div>
                         </div>
                         <div className="flip-card-back">
                           <div className='flip-targets'>
                           <div className='flip-targetblack'>
                                     <div className='bg-dark flip-targetcircular '>
                                     <img
                                       src={integrantes.imagen}
                                       alt={integrantes.nombre}
                                       className="flip-perfilCircular"
                                     />
                                     </div>
                                 </div>
                             <div className='flip-reseña  mx-4'>
                             <p> {integrantes.reseña.description1} </p>
                             <p className="flip-trayectoria"> {integrantes.reseña.description2} </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                        </div>
                    )
                 })
               } 
            </section>
        </div>
  );
}
