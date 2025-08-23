import React from "react";
import './CSS/Navbar.css'
import logo from "./assets/image.png";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <header className="Header">
          <div className="Logo">
            <img src={logo} alt="TeachMeNow Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>Inicio</li>
              <li>Información</li>
              <li>Organización</li>
              <li>Herramientas</li>
            </ul>
          </nav>
          <div className="profile">
            <img src="profile-icon-design-free-vector.jpg" alt="" />
          </div>
        </header>
      </div>
    </>
  );
}
