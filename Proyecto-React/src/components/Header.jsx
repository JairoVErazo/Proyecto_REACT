import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import Logout from './Logout';
import logo1 from '../assets/img/logo1.png';
import Footer from "./Footer";
import Desarrolladores from "./Desarrolladores";
import Home from "./Home";
import '../assets/css/header.css';
export default function Header() {

  return (
    <section>
      <BrowserRouter>
        <header className="bg-white m-0"> {/* hacer esto responsive */}
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <a className="navbar-brand" href="#/">
                <img src={logo1} className="logo1" alt="Rick and Morty Logo" />
              </a>
              <div className="navbar-text">
                <h2 className="text-center">Bienvenido al Universo de</h2>
                <h2 className="text-center"> ¡Rick y Morty!</h2>
              </div>
              <div >
                <ul className="naver">
                  <li >
                  <Link to="/" className='rimotext'>Home|</Link>
                  </li>
                  <li >
                  <Link to="/CharacterList" className='rimotext'>Personajes|</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li>
                  <Link to="/Desarrolladores" className='rimotext'>Desarrolladores|</Link> <Link className="nav-link" to="/About Us">
                    </Link>
                  </li>
                  <li className="">
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
        <Route path='CharacterList' element={<CharacterList />}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </section>
  );
}