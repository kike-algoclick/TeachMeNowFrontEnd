import React from 'react';
import "../CSS/PerfilAlumno.css";

const PerfilAlumno = () => {
  return (
    <div className="perfil-alumno">
      <div className="perfil-header">
        <img
          src="/PerfilAlumno/perfil-alumno.jpg"
          alt="Student's photo"
          className="foto-perfil"
        />
        <div className="perfil-info">
          <h3 className="nombre">Juan Perez</h3>
          <p className="profesion">7th Grade</p>
          <p className="descripcion">Learning flexibly</p>
        </div>
      </div>

      <div className="estadisticas">
        <div className="stat">
          <p>Progress</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "50%" }}></div>
          </div>
          <p className="progress-text">50%</p>
        </div>

        <div className="stat">
          <p>Classes Attended</p>
          <h2>5</h2>
        </div>

        <div className="stat">
          <p>Learning Style</p>
          <h2>Visual</h2>
        </div>
      </div>

      <div className="mis-clases">
        <h3>My Classes</h3>
        <div className="clases-grid">
          <div className="clase-item">
            <img
              src="/PerfilAlumno/matemática.jpg"
              alt="Mathematics"
              className="clase-imagen"
            />
            <div className="clase-nombre">Mathematics</div>
          </div>
          <div className="clase-item">
            <img
              src="/PerfilAlumno/ciencia.png"
              alt="Science"
              className="clase-imagen"
            />
            <div className="clase-nombre">Science</div>
          </div>

          <div className="clase-item">
            <img
              src="/PerfilAlumno/informática.jpg"
              alt="Computer Science"
              className="clase-imagen"
            />
            <div className="clase-nombre">Computer Science</div>
          </div>
        </div>
      </div>

      <div className="opciones">
        <button>⚙ Settings</button>
        <button>👤 Edit Profile</button>
        <button>❓ Help</button>
      </div>
    </div>
  );
};

export default PerfilAlumno;
