import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logout from './Logout';

export default function Header() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Logout/>
          </li>
        </ul>
      </nav>
      <h1 className='container d-flex justify-content-around text-white'>Header</h1> {/*Este solo es un texto rando, quitenlo cuando hagan bien el header*/ }
    </header>
    </BrowserRouter>
  )
}
