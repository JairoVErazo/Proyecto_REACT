import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import Logout from './Logout';
import logo1 from '../assets/img/logo1.png';
import Footer from "./Footer";
import Desarrolladores from "./Desarrolladores";
import Location from "./Location";
import Home from "./Home";
import '../assets/css/header.css'
export default function Header() {

  return (
    <section>
      <BrowserRouter>
        <header className=" ">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
              <a className="navbar-brand logo" href="#/">
                <img src={logo1} className="logo1" alt="Rick and Morty Logo" />
              </a>
              <div className="navbar-text nav-bvnd">
                <h2 className="text-center">Bienvenido al Universo de</h2>
                <h1 className="text-center">¡Rick y Morty!</h1>
              </div>
              
              <button
                className="navbar-toggler hamburguesa"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ">
                  <Link to="/" className='rimotext'> Home|</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/CharacterList" className='rimotext'>Personajes|</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Location" className='rimotext'>WikiLocations|</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Desarrolladores" className='rimotext'>Desarrolladores|</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
  
                  <li className="nav-item logout-auth0">
                    <Logout />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        
        
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Desarrolladores' element={<Desarrolladores />}/>
        <Route path='/Location' element={<Location/>}/>
        <Route path='CharacterList' element={<CharacterList />}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </section>
  );
}