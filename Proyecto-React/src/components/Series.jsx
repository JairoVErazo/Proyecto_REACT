import React from 'react';
import '../assets/css/Series.css'
import Netflix from "../assets/img/netflix-logo.png";
import SPL from "../assets/img/smartersplayerlite.png";
import HBOMax from "../assets/img/hbomax.jpg";




const temporadas = "Incluye toda las temporadas";
export default function Series() {
  return (
    
    <div>
        <div className='text-white text-center fs-1 p-4' id='effecto'>Ecuentre la serie de Rick & Morty aqui!</div>


        <div className='row container-fluid justify-content-around'>
        <div className="col-sm-3 card" >
            <img src={Netflix} className="card-img-top" alt="Netflix" />
            <div class="card-body">
                <h5 className="card-title">Rick & Morty en Netflix</h5>
                <p className="card-text">{temporadas}, disponible dependiendo de tu pais</p>
                <p className="card-text">Se aplican cargos</p>
                <a href="https://www.netflix.com/in/title/80014749" className="btn btn-primary " target="_blank">Aplicar</a>
            </div>
        </div>

        <div className="col-sm-3 card">
            <img src={SPL} className="card-img-top" alt="SmartersPlayerLite" />
            <div class="card-body">
                <h5 className="card-title">Rick & Morty en Smarters Player Lite</h5>
                <p className="card-text">{temporadas}</p>
                <p className="card-text">Se aplican cargos</p>
                <a href="https://www.iptvsmarters.com/" className="btn btn-primary" target="_blank">Aplicar</a>
            </div>
        </div>

        <div className="col-sm-3 card">
            <img src={HBOMax} className="card-img-top " alt="HBOMax" />
            <div class="card-body">
                <h5 className="card-title">Rick & Morty en HBOMax</h5>
                <p className="card-text">{temporadas}</p>
                <p className="card-text">Se aplican cargos</p>
                <a href="https://www.hbomax.com/sv/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ?countryRedirect=1" className="btn btn-primary" target="_blank">Aplicar</a>
            </div>
        </div>
        </div>
    </div>
  )
}
