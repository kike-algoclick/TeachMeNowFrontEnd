import React from "react";
import "../CSS/student.css";
import robot from "/test_alumno_images/Robot.avif"

export function Test() {
  return (
    <>
      <div className="app-container body">
        <div className="card">
          <div className="header">
            <a href="#">
              <img
                src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg"
                alt=""
              />
            </a>
          </div>

          <div className="content">
            <h1 className="title">Evaluación de estilos de aprendizaje</h1>
            <p className="subtitle">
              <b>Descubre tu estilo de aprendizaje</b>
            </p>
            <div className="Cuadrito">
              <p className="description">
                Cada persona aprende de forma diferente. Comprender tu estilo de
                aprendizaje preferido puede ayudarte a estudiar con mayor
                eficacia y a retener mejor la información.
              </p>
            </div>
            <div className="grid">
              <div className="info-box">
                <h3>¿Qué descubriras?</h3>
                <ul className="Check">
                  <li>Tu principal estilo de aprendizaje</li>
                  <li>Estrategias de estudio personalizadas</li>
                  <li>Cómo aprovechar tus fortalezas de aprendizaje</li>
                  <li>Formas de mejorar en áreas desafiantes</li>
                </ul>

                <h3>Sobre el Test</h3>
                <ul>
                  <li>20 preguntas</li>
                  <li>Aproximadamente 3–5 minutos</li>
                  <li>
                    Este cuestionario fue creando basandonos en el Test{" "}
                    <b>CHAEA</b>.
                  </li>
                  <li>Resultados al instante</li>
                </ul>
              </div>

              <div className="right-box">
                <p className="welcome">
                  Bienvenido a{" "}
                  <a href="#">
                    <img
                      src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg"
                      alt=""
                    />
                  </a>
                </p>
                <a href="#">
                  <img src={robot} alt="" className="robot" />
                </a>
                <button className="start-btn">Empezar Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}