import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import logo1 from '../assets/img/logo1.png'
import logo2 from '../assets/img/logo2.png'
import '../assets/css/login.css'

export default function Login() {
    const { loginWithRedirect } = useAuth0();
  return (
 <main className='bg-dark'> 
 <section className='container'>
 <section className="row mt-md-4">
            <div className="col-md-8 cont1">
                <h1 className=" my-5 mx-3 titulos1 ">REACT JS - API</h1>
                <img src={logo1} className='logo1' alt="imagen ilustrativa de rick and morty" />
                {/* <img src={logo1} className=" logo1" alt=""> */}
            </div>
            <div className="col-md-4 botton1 my-5">
                <button className="boton" onClick={() => loginWithRedirect()}>INICIAR SESIÓN</button>
            </div>
        </section>
        <section >
            <div className="d-flex justify-content-center ">
                <img src={ logo2} className='logo2' alt="" />
                {/* <img src={logo2} ClasName="logo2" alt=""> */}
            </div>
            <article className="d-flex justify-content-center"><h1 className="fpage text-white">FAN PAGE</h1></article>
            <article><p className="text-white fw-semibold d-flex justify-content-center fley">Grupo #1 FSJ18 Ⓒ Todos Los Derechos Reservados </p></article>
        </section>
    </section>  
 
 </main>
  ) }