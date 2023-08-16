import React from 'react'
import "../assets/css/Entretenamiento.css"
import RickMortyPortal from "../assets/img/rickandmortyportal.jpeg"
import RickMortySpace from "../assets/img/rickandmortyspace.jpeg"


export default function Entretenamiento() {
  return (
    <div>
        <div className='row container-fluid justify-content-around py-5'>

          <div className='portal-image col-sm-3'>
            <img src={RickMortyPortal} alt="portal" />
          </div>

            <div className='col-sm-3'>
                <p><iframe width="315" height="300" src="https://www.youtube.com/embed/Jvb3gcVTfDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
            </div>

            <div className='space-image col-sm-3'>
            <img src={RickMortySpace} alt="space" />
          </div>


                        </div>
    </div>
  )
}
