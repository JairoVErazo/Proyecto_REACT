import React from 'react';
import '../assets/css/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/path/to/your/logo.png" alt="Footer Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <article className="d-flex justify-content-center"><h1 className="fpage text-white">FAN PAGE</h1></article>
            <article><p className="text-white fw-semibold d-flex justify-content-center fley">Grupo #1 FSJ18 Ⓒ Todos Los Derechos Reservados </p></article>
        </div>
    </footer>
  );
}