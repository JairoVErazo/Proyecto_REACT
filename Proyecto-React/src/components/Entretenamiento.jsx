import React from 'react'
import "../assets/css/Entretenamiento.css"
import RickMortyPortal from "../assets/img/rickandmortyportal.jpeg"
import RickMortySpace from "../assets/img/rickandmortyspace.jpeg"


export default function Entretenamiento() {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-around my-5 gap-4'>

          <div className='portal-image col-md-3 '>
            <img src={RickMortyPortal} alt="portal" />
          </div>

            <div className='col-md-3  portal-image'>
                <p><iframe className='video-y' src="https://www.youtube.com/embed/Jvb3gcVTfDg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
            </div>

            <div className='space-image col-md-3 '>
            <img src={RickMortySpace} alt="space" />
          </div>


                        </div>
    </div>
  )
}
