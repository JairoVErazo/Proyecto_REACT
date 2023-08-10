import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import Logout from './Logout';
import logo1 from '../assets/img/logo1.png';
import '../assets/css/header.css';

export default function Header() {

  return (
    <section>
      <BrowserRouter>
        <header>
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
                    <Link className="nav-link" to="/characters">
                      Personajes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About Us">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/episodes">
                      Episodes
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
        
        <CharacterList /> {/* Aquí se incluye el componente CharacterList */}
        <div className='container d-flex justify-content-around text-white'>Header</div>
      </BrowserRouter>
    </section>
  );
}