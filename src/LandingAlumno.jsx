import React from "react";
import "./CSS/LandingAlumno.css";

function LandingAlumno() {
  return (
    <div className="landing-page">
      {/* Sección principal */}
      <header className="hero">
        <h1>
          Teach<span>Me</span>Now
        </h1>

        <div className="cards-container">
          <div className="card">
            <img src="https://scalalearning.com/storage/2023/08/GSS_CREATIVIDAD_SCALA_ARTE_ARTICULO_61_Estilos-de-aprendizaje-y-sus-metodos-04-1024x876.png" alt="estilo" />
            <h3>Estilo de aprendizaje</h3>
            <p>
              Conoce tu forma personal de aprender: visual, auditiva, lectora o kinestésica.
            </p>
            <button>Iniciar</button>
          </div>

          <div className="card">
            <img src="https://face.unt.edu.ar/web/wp-content/uploads/2020/11/taller-docentes-face-.jpg" alt="clases" / >
            <h3>Tus clases</h3>
            <p>
              Clases y materiales preparados para ti con todo lo que necesitas para aprender.
            </p>
            <button>Iniciar</button>
          </div>

          <div className="card">
            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170527956/78659631-statistics-bars-with-arrow-vector-illustration-design.jpg" alt="resultados" />
            <h3>Tus resultados</h3>
            <p>
              Conoce tu progreso a lo largo del tiempo con reportes visuales.
            </p>
            <button>Iniciar</button>
          </div>
        </div>
      </header>

      {/* Sección de forma de aprender */}
      <section className="learning-style-section">
        <h2 className="titulo">¿Cuál es tu forma de aprender?</h2>
        <div className="learning-options">
          <div className="learning-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png" alt="videos" />
            <p><b>Videos</b></p>
          </div>

          <div className="learning-card">
            <img src="data:image/png;base64,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" alt="imagenes" />
            <p><b>Imágenes</b></p>
          </div>

          <div className="learning-card">
            <img src="https://i.pinimg.com/736x/28/b2/b4/28b2b4a0f52b0c829255c7859a60ee94.jpg" wei /> 
            <p><b>Escucha</b></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingAlumno;
