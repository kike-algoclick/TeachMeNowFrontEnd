import React, { useState } from "react";
import '../TestParaMaestros.css';
import libro from "../src/libro.png";
import foco from "../src/Foco.jpg";
import personas from "../scr/personas.png";
import calendario from "../src/calendario.jpg";
import campana from "../src/campana.jpg";
 
export function TestParaMaestros() {
  const [respuestas, setRespuestas] = useState({
    q1: [],
    q2: "",
    q3: [],
    q4: "",
    q5: ""
  });
 
  const handleCheckboxChange = (question, option) => {
    const current = respuestas[question];
    const updated = current.includes(option)
      ? current.filter(item => item !== option)
      : [...current, option];
    setRespuestas({ ...respuestas, [question]: updated });
  };
 
  const handleInputChange = (e) => {
    setRespuestas({ ...respuestas, q2: e.target.value });
  };
 
  const handleRadioChange = (question, value) => {
    setRespuestas({ ...respuestas, [question]: value });
  };
 
  const handleNext = () => {
    console.log("Respuestas:", respuestas);
  };
 
  return (
    <div className="test-container">
      <h1 className="titulo">Take Test</h1>
 
      <div className="preguntas-grid">
 
        <div className="card">
          <div className="card-header">
            <p>1. What method do you use to teach?</p>
            <img src={libro} alt="Libro" className="icono" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Explicando")} /> Explaining the topic and then exercises</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Grupo")} /> Having students work in groups</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Juegos")} /> Games or fun activities</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Otra")} /> Another way</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>2. What kind of support would you like to receive?</p>
            <img src={foco} alt="Idea" className="icono" />
          </div>
          <textarea value={respuestas.q2} onChange={handleInputChange} placeholder="Write here..." />
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>3. What kind of digital support would you like?</p>
            <img src={personas} alt="Personas" className="icono" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Tutoriales")} /> Tutorials or online courses</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Acompañamiento")} /> Guidance and help</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Materiales")} /> Ready-to-use materials</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Otro")} /> Another type of support</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>4. How important is it that the platform adapts to your style?</p>
            <img src={calendario} alt="Calendario" className="icono" />
          </div>
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Nada")} /> Not at all</label><br />
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Algo")} /> Somewhat</label><br />
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Mucho")} /> Very</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>5. How many subjects do you teach?</p>
            <img src={campana} alt="Campana" className="icono" />
          </div>
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "1")} /> 1</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "2")} /> 2</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "3")} /> 3</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "Más")} /> More</label>
        </div>
 
        <div className="boton-container">
          <button className="boton-siguiente" onClick={handleNext}>Next</button>
        </div>
 
      </div>
    </div>
  );
}