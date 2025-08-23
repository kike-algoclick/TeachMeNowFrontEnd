import React from "react";
import "../CSS/resultad.css"
import Robot from "../assets/Robot.avif"
import Teach from "/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg"
import fredy from "../assets/tus resultados.jpg"

export function Resultados() {
  return (
    <div className="results-container">
        <div className="card2">
      {/* Header */}
      <header className="header2">
        <img src={Teach} alt="Logo App" className="header-logo" />
      </header>

      {/* Resultados */}
      <section className="results-hero">
        <div className="results-left">
          <h2 className="results-title">Tus Resultados</h2>
        </div>
    
        <div className="Medialuna">
          <div className="Half-circle">
          <img src={Robot}alt="Robot" className="robot-image" />
          </div>
           <div className="suggestions-header">
           <h3>¡Hola!</h3>
        </div>
        </div>

      </section>

      {/* Sugerencias */}
      <section className="suggestions-section">
       
       

        {/* Explicación general */}
        <div className="suggestion-card big-card">
          <p>
            Tu forma de aprender se basa principalmente en{" "}
            <strong>escuchar y procesar información verbal</strong>. 
            Esto significa que tu memoria y comprensión se activan más cuando recibes 
            <em> explicaciones orales</em>, participas en <em>discusiones</em> o escuchas 
            <em> ejemplos</em>.  
            El estilo <strong>visual</strong> también es importante para ti, ya que los 
            elementos gráficos y esquemas refuerzan lo que escuchas.
          </p>

           <br />

            <h4>🎧 Recomendaciones para aprovechar tu estilo auditivo:</h4>
            <ul>
              <li>Participa activamente en discusiones, grupos de estudio y presentaciones.</li>
              <li>Explica en voz alta lo que aprendes, incluso si es para ti mismo.</li>
              <li>Usa rimas, canciones o acrónimos para memorizar conceptos.</li>
            </ul>

            <br />

            <h4>👀 Estrategias para fortalecer tu estilo visual:</h4>
            <ul>
              <li>Agrega diagramas, tablas o mapas mentales a tus apuntes.</li>
              <li>Usa colores para resaltar conceptos clave.</li>
              <li>Busca videos o animaciones que complementen las explicaciones orales.</li>
              <li>Organiza la información en esquemas claros y estructurados.</li>
            </ul>
        </div>
      </section>
      </div>
    </div>
  );
}
