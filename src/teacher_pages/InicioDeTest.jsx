import React from "react";
import "../CSS/teacherDesign.css";

export function Test() {
  return (
    <div className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-avatar">
          <img
            src="/ruta/a/tu/imagen-avatar.png"
            alt="Avatar"
          />
        </div>
        <h1 className="hero-title">
          Adapta tus conocimientos con <strong>nosotros</strong> 💡
        </h1>
        <p className="hero-description">
          Este test te ayudará a conocer mejor tus habilidades, áreas de mejora y estrategias para potenciar el aprendizaje en tu aula. <br />
          ¡Comienza ahora y adapta la enseñanza a tu manera! ✏️💡
        </p>
        <button className="hero-button">¡Empecemos!</button>
      </div>
    </div>
  );
}

export default Test;