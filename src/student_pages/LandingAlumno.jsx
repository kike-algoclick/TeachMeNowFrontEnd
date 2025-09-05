import React from "react";
import "../CSS/LandingAlumno.css";
import aprendizaje from '/LandingAlumno/Aprendizaje.jpg'
import clase from '/LandingAlumno/clases.jpg'
import grafica from '/LandingAlumno/grafica.jpg'
import videos from '/LandingAlumno/videos.jpg'
import imagenes from '/LandingAlumno/imagenes.jpg'
import escucha from '/LandingAlumno/escucha.jpg'
export function LandingAlumno() {
  return (
    <div className="Landing-container">
      <div className="hero">
        <h1>
          Teach<span>Me</span>Now
        </h1>

        <div className="cards-containers">
          <div className="cards">
            <img
              src={aprendizaje} alt=""
            />
            <h3>Learning style</h3>
            <p>
              Discover your personal way of learning: visual, auditory, reading
              or kinesthetic.
            </p>
            <button>Start</button>
          </div>

          <div className="cards">
            <img
              src={clase}
              alt="clases"
            />
            <h3>Your classes</h3>
            <p>
              Classes and materials prepared for you with everything you need to
              learn.
            </p>
            <button>Start</button>
          </div>

          <div className="cards">
            <img
              src={grafica}
              alt="resultados"
            />
            <h3>Your results</h3>
            <p>Track your progress over time with visual reports.</p>
            <button>Start</button>
          </div>
        </div>
      </div>

      <div className="learning-style-section">
        <h2 className="titulo">What is your way of learning?</h2>
        <div className="learning-options">
          <div className="learning-card">
            <img
              src={videos}
              alt="videos"
            />
            <p>
              <b>Videos</b>
            </p>
          </div>

          <div className="learning-card">
            <img src={imagenes} alt="imagenes" />
            <p>
              <b>Images</b>
            </p>
          </div>

          <div className="learning-card">
            <img src={escucha} />
            <p>
              <b>Listening</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAlumno;
