import React from 'react';

export default function Footer() {
  return (
    <footer>  
      <hr className="greenfhr my-4"/>
      <div className="container">
        <div className="footer-content">
                    <div className="footer-links">
          <article className="d-flex justify-content-center"><h1 className="fpage text-white">FAN PAGE</h1></article>
            <article><p className="text-white fw-semibold d-flex justify-content-center fley">Grupo #1 FSJ18 Ⓒ Todos Los Derechos Reservados </p></article>
            <ul className='text-center'>
              <li><a className='text-white' hreCf="#">Terms & policies</a></li>
              <li><a className='text-white' href="#">Privacy policy</a></li>
              <li><a className='text-white' href="#">Terms of Service</a></li>
            </ul>
            
          </div>
        </div>

        </div>
    </footer>
  );
}
