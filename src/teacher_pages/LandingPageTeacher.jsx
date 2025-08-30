import React from "react";
import "../CSS/LandingPageTeacher.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export function Landingpage() {
  return (
    <div className="background">
      <div className="conteiner">
        <div className="fondo"></div>
        <div className="logo">
          <h1>
            Teach<span className="highlight">Me</span>
            <span className="highlight2">Now</span>
          </h1>
        </div>

        <header className="Barra_busqueda">
          <input type="text" placeholder="Ask me..." />
          <button>Send</button>
        </header>

        <main className="main-content">
          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Teacher.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Teachers</h2>
              <p>Start with teachers and improve your classes</p>
              <Link to={'/Login'}>
                <button>Iniciar</button>
              </Link>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Alumno.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Students</h2>
              <p>Start with your studies and improve your skills</p>
              <button>Start</button>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Director.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Principal</h2>
              <p>
               Start as a principal and improve school management
              </p>
              <button>Start</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
