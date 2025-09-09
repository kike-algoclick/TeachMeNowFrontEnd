import React, { useState } from 'react';
import "../CSS/PerfilMaestro.css";

const PerfilMaestro = () => {
  const allStudents = [
    { name: "Juan Perez", intelligence: "Kinesthetic" },
    { name: "Maria Lopez", intelligence: "Visual" },
    { name: "Carlos Gomez", intelligence: "Auditory" },
    { name: "Lucia Ramirez", intelligence: "Logical" },
    { name: "Sofia Morales", intelligence: "Interpersonal" },
    { name: "Andres Torres", intelligence: "Naturalistic" },
    { name: "Camila Rios", intelligence: "Linguistic" },
    { name: "Mateo Vargas", intelligence: "Musical" },
    { name: "Valentina Cruz", intelligence: "Spatial" },
    { name: "Diego Herrera", intelligence: "Logical" },
    { name: "Elena Medina", intelligence: "Kinesthetic" },
    { name: "Samuel Castro", intelligence: "Visual" },
    { name: "Isabella Navarro", intelligence: "Auditory" },
    { name: "Martin Duarte", intelligence: "Naturalistic" },
    { name: "Renata Molina", intelligence: "Interpersonal" }
  ];

  const subjects = ["Mathematics", "Science", "Social Studies"];

  const INITIAL_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [generatedCode, setGeneratedCode] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleToggleVisible = () => {
    setVisibleCount(prev => prev === allStudents.length ? INITIAL_COUNT : allStudents.length);
  };

  const isShowingAll = visibleCount === allStudents.length;

  const handleGenerateCode = () => {
    if (!generatedCode) {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedCode(code);
      setSelectedSubject("");
    } else {
      setGeneratedCode(""); // Cierra la sección
      setSelectedSubject("");
    }
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-card">

        {/* Profile Header */}
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

        {/* Statistics */}
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
            <p>Total Students</p>
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

        {/* My Classes */}
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

        {/* Students + Generate Code Section en cajitas */}
        <div className="students-section" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          {/* Students List en cajita */}
          <div className="card-section">
            <div className="students-list">
              <h3>Students</h3>
              {allStudents.slice(0, visibleCount).map((student, index) => (
                <div key={index} className="student-item">
                  <p className="student-name">{student.name}</p>
                  <p className="student-intelligence">{student.intelligence}</p>
                </div>
              ))}
              <button className="btn-show-more" onClick={handleToggleVisible}>
                {isShowingAll ? "Show less" : "Show more"}
              </button>
            </div>
          </div>

          {/* Generate Code en cajita */}
          <div className="card-section">
            <div className="students-header">
              <button className="btn-generate" onClick={handleGenerateCode}>
                {generatedCode ? "Close" : "Generate Code for My Class"}
              </button>
            </div>

            {generatedCode && (
              <div className="generated-section">
                <p className="generated-code">
                  <strong>Class Code:</strong> {generatedCode}
                </p>
                <div className="subject-select">
                  <label htmlFor="subject">Select Subject: </label>
                  <select
                    id="subject"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                  >
                    <option value="">-- Choose a subject --</option>
                    {subjects.map((subj, i) => (
                      <option key={i} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Buttons */}
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
