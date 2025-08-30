import React from "react";
import "../CSS/Results.css";

export default function Results() {
  return (
    <section className="results-section">
      <div className="results-card">
        <div className="results-header">
          <h2>Resultados</h2>
          <p>¡Muchas gracias por completar el test! 📝</p>
          <p className="results-subtext">
            Con tus respuestas, podemos conocer mejor cómo trabajas y qué te ayuda a dar lo mejor en tus clases. Esto te permitirá descubrir qué herramientas y métodos se adaptan mejor a ti para seguir creciendo como docente, paso a paso.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-box">
          
            <div className="result-image placeholder">Imagen<br />Estrategia</div>
            <h3>Estrategia</h3>
            <p>Usa recursos visuales y ejemplos para apoyar el aprendizaje de tus estudiantes.</p>
          </div>
          <div className="result-box">
            <div className="result-image placeholder">Imagen<br />Recomendación</div>
            <h3>Recomendación</h3>
            <p>Dedica tiempo a explorar nuevas funciones de la plataforma que te faciliten el seguimiento y evaluación.</p>
          </div>
          <div className="result-box">
            <div className="result-image placeholder">Imagen<br />Área de mejora</div>
            <h3>Área de mejora</h3>
            <p>Buscar un equilibrio entre planificación detallada y flexibilidad para ajustar las clases según las necesidades del grupo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
