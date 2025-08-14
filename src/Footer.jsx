import React from "react";
import "./Footer.css";
import Logo from "./assets/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg";

export function Footer() {
    const fbLogo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKzqzY-VaXuHxQ5omJUz0Lu0byJVtiOMzoQ&s"
    return (
      <div>
        <footer >
          <div className="footer-grid">
            <div className="footer-logo">
              <a href="#">
                <img src={Logo} alt="asdf" />
              </a>
            </div>

            
              <div className="footer-content">
                <div className="footer-section">
                  <h3>¿Qué somos?</h3>
                  <p>
                    Somos una plataforma que apoya a docentes con herramientas
                    prácticas para una clase más efectiva.
                  </p>
                </div>

                <div className="footer-section">
                  <h3>¿A quiénes beneficiamos?</h3>
                  <ul>
                    <li>Docentes que buscan mejorar sus clases.</li>
                    <li>Futuros maestros en formación.</li>
                    <li>Coordinadores y directores escolares.</li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h3>Contáctanos</h3>
                  <address>
                    Email:{" "}
                    <a href="mailto:teachmenow@tustiioweb.com">
                      teachmenow@tustiioweb.com
                    </a>
                    <br />
                    Teléfono: +503 0000-0000.
                  </address>
                </div>

                <div className="footer-section">
                  <h3>Síguenos</h3>
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook">
                      <img src={fbLogo} alt="Facebook" />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <img  alt="Twitter" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <img  alt="Instagram" />
                    </a>
                  </div>
                  <p>
                    <a href="#">Políticas y Privacidad</a>
                  </p>
                </div>
              </div>
          
          </div>
        </footer>
      </div>
    );
}
