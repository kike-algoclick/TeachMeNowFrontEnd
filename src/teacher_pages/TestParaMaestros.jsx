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
      <h1 className="titulo">Realizar Test</h1>
 
      <div className="preguntas-grid">
 
        <div className="card">
          <div className="card-header">
            <p>1. ¿Qué método usas para enseñar?</p>
            <img src={libro} alt="Libro" className="icono" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Explicando")} /> Explicando el tema y luego ejercicios</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Grupo")} /> Haciendo que trabajen en grupo</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Juegos")} /> Juegos o dinámicas divertidas</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q1", "Otra")} /> Otra forma</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>2. ¿Qué tipo de apoyo te gustaría recibir?</p>
            <img src={foco} alt="Idea" className="icono" />
          </div>
          <textarea value={respuestas.q2} onChange={handleInputChange} placeholder="Escribe..." />
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>3. ¿Qué apoyo digital te gustaría?</p>
            <img src={personas} alt="Personas" className="icono" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Tutoriales")} /> Tutoriales o cursos online</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Acompañamiento")} /> Acompañamiento y ayuda</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Materiales")} /> Materiales listos</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q3", "Otro")} /> Otro tipo de apoyo</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>4. ¿Qué tan importante es que la plataforma se adapte a tu estilo?</p>
            <img src={calendario} alt="Calendario" className="icono" />
          </div>
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Nada")} /> Nada</label><br />
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Algo")} /> Algo</label><br />
          <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Mucho")} /> Mucho</label>
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>5. ¿Cuántas materias impartes?</p>
            <img src={campana} alt="Campana" className="icono" />
          </div>
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "1")} /> 1</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "2")} /> 2</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "3")} /> 3</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "Más")} /> Más</label>
        </div>
 
        <div className="boton-container">
          <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
        </div>
 
      </div>
    </div>
  );
}