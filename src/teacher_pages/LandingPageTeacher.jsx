import React from "react";
import "../CSS/LandingPageTeacher.css";
import { Link } from "react-router-dom";

export function Landingpage() {
  return (
    <div className="background">
      <div className="conteiner">
       
        <div className="fondo"></div>
        <div className="logo">
          <h1>
            Teach<span className="highlight">Me</span><span className="highlight2">Now</span>
          </h1>
        </div>

        <header className="Barra_busqueda">
          <input type="text" placeholder="Pregúntame..." />
          <button >Enviar</button>
        </header>

        
        <main className="main-content">
          <div className="Cards">
            <div className="Card">
              <img
                src="/Landing_images/Teacher.jpeg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h2>Docentes</h2>
              <p>Inicia con estudiantes y mejora tus clases</p>
              <button>Iniciar</button>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img
                src="/Landing_images/Alumno.jpeg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h2>Estudiantes</h2>
              <p>Inicia con tus estudios y mejora tus habilidades</p>
              <button >Iniciar</button>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img
                src="/Landing_images/Director.jpeg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h2>Director</h2>
              <p>Inicia como director y mejora la administración de la escuela</p>
              <button>Iniciar</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
