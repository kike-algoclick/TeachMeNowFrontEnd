import React from "react";
import "../CSS/LandingAlumno.css";
 
export function LandingAlumno() {
  return (
    <div className="Landing-container">
      <div className="hero">
        <h1>
          Teach<span>Me</span>Now
        </h1>

        <div className="cards-containers">
          <div className="card">
            <img
              src="https://scalalearning.com/storage/2023/08/GSS_CREATIVIDAD_SCALA_ARTE_ARTICULO_61_Estilos-de-aprendizaje-y-sus-metodos-04-1024x876.png"
              alt="estilo"
            />
            <h3>Learning style</h3>
            <p>
              Discover your personal way of learning: visual, auditory, reading
              or kinesthetic.
            </p>
            <button>Start</button>
          </div>

          <div className="card">
            <img
              src="https://face.unt.edu.ar/web/wp-content/uploads/2020/11/taller-docentes-face-.jpg"
              alt="clases"
            />
            <h3>Your classes</h3>
            <p>
              Classes and materials prepared for you with everything you need to
              learn.
            </p>
            <button>Start</button>
          </div>

          <div className="card">
            <img
              src="https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170527956/78659631-statistics-bars-with-arrow-vector-illustration-design.jpg"
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
              src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png"
              alt="videos"
            />
            <p>
              <b>Videos</b>
            </p>
          </div>

          <div className="learning-card">
            <img src="dsfa" alt="imagenes" />
            <p>
              <b>Images</b>
            </p>
          </div>

          <div className="learning-card">
            <img src="https://i.pinimg.com/736x/28/b2/b4/28b2b4a0f52b0c829255c7859a60ee94.jpg" />
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