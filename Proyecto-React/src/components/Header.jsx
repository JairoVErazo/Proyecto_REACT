import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import Logout from './Logout';
import logo1 from '../assets/img/logo1.png';
import Footer from "./Footer";
import Desarrolladores from "./Desarrolladores";
import Location from "./Location";
import Home from "./Home";
export default function Header() {

  return (
    <section>
      <BrowserRouter>
        <header className="container ">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
              <a className="navbar-brand" href="#/">
                <img src={logo1} className="logo1" alt="Rick and Morty Logo" />
              </a>
              <div className="navbar-text">
                <h2 className="text-center">¡Bienvenido al Universo de Rick y Morty!</h2>
              </div>
              
              <button
                className="navbar-toggler"
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
                  <li className="nav-item">
                  <Link to="/" className='nav-link'>Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/CharacterList" className='nav-link'>Personajes</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Desarrolladores" className='nav-link'>Desarrolladores</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Location" className='nav-link'>WikiLocations</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="nav-item">
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