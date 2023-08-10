import React from 'react'
import Kodigo from '../assets/img/KODIGO.png'
import '../assets/css/Desarrolladores.css'
import Integrantes from './Integrantes'

export default function Desarrolladores() {
  return (
   <main className='container'>
     <section className="mt-5">
            <div className="d-flex justify-content-center align-items-center">
                {/* <img src="./img/KODIGO.png" alt="imagen ilustrativa a KODIGO" className="logoCircular"> */}
                <img src={Kodigo} alt="imagen ilustrativa a KODIGO" className="logoCircular" />
            </div>
            <div>
                <h3 className="text-white text-center text-fsj my-3">Full Stack Junior - 18</h3>
                <h1 className="text-center text-greenf">NUESTRO EQUIPO DE DESAROLLO</h1>
                <p className="text-white text-center px-5 my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio voluptatem sit consequatur, molestiae blanditiis qui reprehenderit recusandae libero facilis cum cumque ut quam nulla molestias, nam temporibus architecto ducimus.Temporibus quibusdam corrupti impedit molestias unde quia minus consequuntur dolor recusandae voluptatibus, ullam iste pariatur totam sapiente dignissimos illum animi qui, quasi aliquid asperiores omnis odio eum! Temporizes, ipsam aspernatur.Accusantium in cumque magnam. 
                </p>
                </div>
        </section>
        <hr className="greenfhr my-4"/>
        <Integrantes/>
   </main>
  )
}
