import React, { useState } from "react";
import '../CSS/TestParaMaestros.css';
import libro from "/TestParMaestrosIMG/libro.png";
import foco from "/TestParMaestrosIMG/Foco.png";
import personas from "/TestParMaestrosIMG/personas.png";
import calendario from "/TestParMaestrosIMG/Calendario.png";
import campana from "/TestParMaestrosIMG/Campana.png";
import { Navigate, useNavigate } from "react-router-dom";

export function TestParaMaestros() {
  const navigate = useNavigate()
  const [respuestas, setRespuestas] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleRadioChange = (question, value) => {
    setRespuestas({ ...respuestas, [question]: value });
  };

  const handleNext = () => {
    let respondidas = true;
    for (let i = 1; i <= 5; i++) {
      if (!respuestas[`q${i}`]) {
        respondidas = false;
        break;
      }
    }

    if (!respondidas) {
      alert("⚠️ Debes responder todas las preguntas antes de continuar.");
    } else {
     navigate("/teacher-results")
    }
  };

  return (
    <div className="test-container mt-19 overflow-y-scroll scrollbar-hidden">
      <div className="">
        <h1 className="titulo">Realizar Test</h1>
      </div>

      <div className="preguntas-section w-full mt-10 flex flex-wrap justify-center gap-10">
        <div className="card-preguntas flex items-center">
          <div className="pregunta-1">
            <p className="Colorletra">
              <strong>1. ¿Qué método usas para enseñar?</strong>
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col ">
                <label>
                  <input
                    type="radio"
                    name="q1"
                    onChange={() => handleRadioChange("q1", "Explicando")}
                  />{" "}
                  Explicando el tema y luego haciendo ejercicios
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    onChange={() => handleRadioChange("q1", "Grupo")}
                  />{" "}
                  Haciendo que los alumnos trabajen en grupo
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    onChange={() => handleRadioChange("q1", "Juegos")}
                  />{" "}
                  Usando juegos o dinámicas divertidas
                </label>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    onChange={() => handleRadioChange("q1", "Otra")}
                  />{" "}
                  Otra forma
                </label>
              </div>
              <img src={libro} alt="Pregunta 1" className="Pregunta-img" />
            </div>
          </div>
        </div>

        <div className="card-preguntas  flex items-center">
          <div className="pregunta2">
            <p className="Colorletra">
              <strong>
                2. ¿Qué tipo de apoyo te gustaría recibir de una plataforma como
                esta?
              </strong>
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 justify-center">
                <label>
                  <input
                    type="radio"
                    name="q2"
                    onChange={() => handleRadioChange("q2", "Tutoriales")}
                  />{" "}
                  Tutoriales de cursos online y tips para aplicar lo aprendido
                </label>
                <label>
                  <input
                    type="radio"
                    name="q2"
                    onChange={() => handleRadioChange("q2", "Acompañamiento")}
                  />{" "}
                  Acompañamiento personal y guías específicas con tus metas
                </label>
                <label>
                  <input
                    type="radio"
                    name="q2"
                    onChange={() => handleRadioChange("q2", "Herramientas")}
                  />{" "}
                  Herramientas y recursos listos y de uso para tus clases
                </label>
                <label>
                  <input
                    type="radio"
                    name="q2"
                    onChange={() => handleRadioChange("q2", "Otro")}
                  />{" "}
                  Otro tipo de apoyo
                </label>
              </div>
              <img src={foco} alt="Pregunta 3" className="Pregunta-img" />
            </div>
          </div>
        </div>

        <div className="card-preguntas flex items-center">
          <div className="pregunta3">
            <p className="Colorletra">
              <strong>3. ¿Qué apoyo digital te gustaría?</strong>
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    name="q3"
                    onChange={() => handleRadioChange("q3", "Tutoriales")}
                  />{" "}
                  Tutoriales o cursos online
                </label>
                <label>
                  <input
                    type="radio"
                    name="q3"
                    onChange={() => handleRadioChange("q3", "Acompañamiento")}
                  />{" "}
                  Acompañamiento personalizado
                </label>
                <label>
                  <input
                    type="radio"
                    name="q3"
                    onChange={() => handleRadioChange("q3", "Materiales")}
                  />{" "}
                  Material para tus clases
                </label>
                <label>
                  <input
                    type="radio"
                    name="q3"
                    onChange={() => handleRadioChange("q3", "Otro")}
                  />{" "}
                  Otro tipo de apoyo
                </label>
              </div>
              <img src={personas} alt="Pregunta 3" className="Pregunta-img" />
            </div>
          </div>
        </div>

        <div className="card-preguntas flex items-center">
          <div className="pregunta4">
            <p className="Colorletra">
              <strong>
                4. ¿Qué tan importante es que la plataforma se adapte a tu
                estilo?
              </strong>
            </p>
            <div className="flex gap-50">
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    name="q4"
                    onChange={() => handleRadioChange("q4", "Nada")}
                  />{" "}
                  Nada
                </label>
                <label>
                  <input
                    type="radio"
                    name="q4"
                    onChange={() => handleRadioChange("q4", "Algo")}
                  />{" "}
                  Algo
                </label>
                <label>
                  <input
                    type="radio"
                    name="q4"
                    onChange={() => handleRadioChange("q4", "Mucho")}
                  />{" "}
                  Mucho
                </label>
              </div>
              <img src={calendario} alt="Pregunta 4" className="Pregunta-img" />
            </div>
          </div>
        </div>

        <div className="card-preguntas flex items-center">
          <div className="pregunta5">
            <p className="Colorletra">
              <strong>5. ¿Cuántas materias impartes?</strong>
            </p>
            <div className="flex gap-40">
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    name="q5"
                    onChange={() => handleRadioChange("q5", "Ciencia")}
                  />{" "}
                  Ciencia
                </label>
                <label>
                  <input
                    type="radio"
                    name="q5"
                    onChange={() => handleRadioChange("q5", "Lenguaje")}
                  />{" "}
                  Lenguaje
                </label>
                <label>
                  <input
                    type="radio"
                    name="q5"
                    onChange={() => handleRadioChange("q5", "Matemáticas")}
                  />{" "}
                  Matemáticas
                </label>
                <label>
                  <input
                    type="radio"
                    name="q5"
                    onChange={() => handleRadioChange("q5", "Sociales")}
                  />{" "}
                  Sociales
                </label>
              </div>
              <img src={campana} alt="Pregunta5" className="Pregunta-img" />
            </div>
          </div>
        </div>

        <div className="boton-container">
          <button className="boton-siguiente" onClick={handleNext}>
            Ver resultado
          </button>
        </div>
      </div>
    </div>
  );
}
