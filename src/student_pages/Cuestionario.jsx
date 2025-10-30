import React, { useState } from "react";
import "../CSS/diseñocuestionario.css"
import p1 from "/test_alumno_images/p1.jpg"
import p2 from "/test_alumno_images/p2.jpg"
import p3 from "/test_alumno_images/p3.jpg"
import p4 from "/test_alumno_images/p4.jpg"
import p5 from "/test_alumno_images/p5.jpg"
import p6 from "/test_alumno_images/p6.jpg"
import p7 from "/test_alumno_images/p7.jpg"
import p8 from "/test_alumno_images/p8.jpg"
import p9 from "/test_alumno_images/p9.jpg"
import p10 from "/test_alumno_images/p10.jpg"

import p11 from "/test_alumno_images/p11.jpg"
import p12 from "/test_alumno_images/p12.jpg"
import p13 from "/test_alumno_images/p13.jpg"
import p14 from "/test_alumno_images/p14.jpg"
import p15 from "/test_alumno_images/p15.jpg"
import p16 from "/test_alumno_images/p16.jpg"
import p17 from "/test_alumno_images/p17.jpg"
import p18 from "/test_alumno_images/p18.jpg"
import p19 from "/test_alumno_images/p19.jpg"
import p20 from "/test_alumno_images/p20.jpg"
import alerta from "/test_alumno_images/alerta.png"

import Rarito from "/test_alumno_images/Robo2.jpg"
import { Form } from "react-router-dom";


export function Preguntas(){

    const [pagina, setPagina]= useState (1);
    const [showAlert, setShowAlert] = useState(false);
    return (
      <div className="App-grid mt-19">
        <div className="header">
          <h1>
            Welcome to Teach<span>Me</span>Now test!
          </h1>
        </div>

        <div className="Preguntas-cont">
          {pagina === 1 && (
            <div className="contenedor flex flex-wrap overflow-scroll">
              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>1. When I learn something new, I prefer:</strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q1" />
                      View graphs, images, or videos.
                    </label>

                    <label>
                      <input type="radio" name="q1" />
                      Listen to explanations.
                    </label>

                    <label>
                      <input type="radio" name="q1" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q1" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p1} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q2" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q2" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q2" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q2" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p2} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q3" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q3" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q3" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q3" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p3} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q4" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q4" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q4" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q4" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p3} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q5" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q5" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q5" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q5" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p3} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q6" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q6" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q6" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q6" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p3} alt="" className="Pregunta-img" />
              </div>

              <div className="Card-preguntas">
                <div className="posicionletra">
                  <p className="Colorletra">
                    <strong>
                      2. If they teach me a recipe, I learn better.
                    </strong>
                  </p>
                  <div>
                    <label>
                      {" "}
                      <input type="radio" name="q7" />
                      Viewing photos or a video.
                    </label>

                    <label>
                      <input type="radio" name="q7" />
                      Listening to the explanation.
                    </label>

                    <label>
                      <input type="radio" name="q7" />
                      Read texts or notes.
                    </label>

                    <label>
                      {" "}
                      <input type="radio" name="q7" /> Doing it myself.
                    </label>
                  </div>
                </div>
                <img src={p3} alt="" className="Pregunta-img" />
              </div>

              <button
                className="boton-siguiente"
                onClick={() => {
                  let respondidas = true;
                  for (let i = 1; i <= 10; i++) {
                    if (
                      !document.querySelector(`input[name="q${i}"]:checked`)
                    ) {
                      respondidas = false;
                      break;
                    }
                  }

                  if (!respondidas) {
                    setShowAlert(true); // Activar alerta personalizada
                    setTimeout(() => setShowAlert(false), 5000);
                  } else {
                    setShowAlert(false); // Ocultar alerta si todo está bien
                    setPagina(2);
                  }
                }}
              >
                Next
              </button>

              {/* Alerta personalizada */}
              {showAlert && (
                <div className="custom-alert">
                  <img src={alerta} alt="alerta" className="alert-icon" />
                  <span>
                    Debes responder todas las preguntas antes de continuar!!
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
}