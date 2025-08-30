import React from 'react';
import "../CSS/PerfilMaestro.css";

const PerfilMaestro = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-card">

        <div className="perfil-header">
          <img
            src="/PerfilMaestro/perfil-maestro.jpg"
            alt="Teacher's profile"
            className="foto-perfil"
          />
          <div className="perfil-info">
            <h3 className="nombre">Maria Lopez</h3>
            <p className="profesion">Mathematics Teacher</p>
            <p className="descripcion">Teaching with passion and dedication</p>
          </div>
        </div>

        <div className="estadisticas">
          <div className="stat">
            <p>Classes Taught</p>
            <h2>12</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
            <p className="progress-text">75%</p>
          </div>

          <div className="stat">
            <p>Students</p>
            <h2>180</h2>
          </div>

          <div className="stat">
            <p>Progress</p>
            <div className="Circle-Container">
              <div className="progress-circle">
                <span style={{ zIndex: 2 }}>75%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mis-clases">
          <h3>My Classes</h3>
          <div className="clases-grid">
            <div className="clase-item">
              <img
                src="/PerfilMaestro/matemática.jpg"
                alt="Mathematics"
                className="clase-imagen"
              />
              <p className="clase-nombre">Mathematics</p>
            </div>

            <div className="clase-item">
              <img
                src="/PerfilMaestro/ciencia.png"
                alt="Science"
                className="clase-imagen"
              />
              <p className="clase-nombre">Science</p>
            </div>

            <div className="clase-item">
              <img
                src="/PerfilMaestro/Sociales.jpg"
                alt="Social Studies"
                className="clase-imagen"
              />
              <p className="clase-nombre">Social Studies</p>
            </div>
          </div>
        </div>

        <div className="opciones">
          <button>⚙ Settings</button>
          <button>👤 Edit Profile</button>
          <button>❓ Help</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilMaestro;
