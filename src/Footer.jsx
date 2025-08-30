import React from "react";
import "./CSS/Footer.css";

export function Footer() {
    return (
        <div className="footer-container">
            <footer>
            
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>¿Qué somos?</h3>
                        <p>Somos una plataforma que apoya a docentes con herramientas prácticas para una clase más efectiva.</p>
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
                            Email: <a href="mailto:teachmenow@tustiioweb.com">teachmenow@tustiioweb.com</a><br />
                            Teléfono: +503 0000-0000.
                        </address>
                    </div>

                    <div className="footer-section">
                        <h3>Síguenos</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><img src="R.png" alt="Facebook" /></a>
                            <a href="#" aria-label="Twitter"><img src="twitter-x-logo-png-9.png" alt="Twitter" /></a>
                            <a href="#" aria-label="Instagram"><img src="instagram-social-media-icon-symbol-design-element-vector-42845212.jpg" alt="Instagram" /></a>
                        </div>
                        <p><a href="#">Políticas y Privacidad</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
