import React from "react";
import "../CSS/teacherDesign.css";

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
            <h1 className="title">Adapta tus conocimientos con nosotros 💡</h1>
            
            <div className="Cuadrito">
              <p className="description">
                Este test te ayudará a conocer mejor tus habilidades, áreas de mejora y estrategias para potenciar el aprendizaje en tu aula
                ¡Comienza ahora y adapta la enseñanza a tu manera! ✏️💡
              </p>
            </div>
            <div className="grid">
              
              <div className="right-box">
                <button className="start-btn">¡Empecemos!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Signup;