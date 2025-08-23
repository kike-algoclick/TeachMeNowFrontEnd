import React from "react";
import '../CSS/mainpage.css'

export function MainPage(){
    return (
      <div className="body" >
        <div className="left-panel">
          <div className="logo">
            Teach<span className="highlight">Me</span><span className="highlight2">Now</span>
          </div>

          <div className="chat-box">
            <input type="text" placeholder="Escribe aquí..." />
            <button>Enviar</button>
          </div>
        </div>

        <div className="right-panel">
          <h2>Herramientas</h2>
          <div className="tools">
            <div className="tool">
              Planificar Clases <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Lecciones <button>Iniciar</button>
            </div>
            <div className="tool">
              Crear Guías <button>Iniciar</button>
            </div>
            <div className="tool">
              Crear Presentación <button>Iniciar</button>
            </div>
            <div className="tool">
              Rúbrica <button>Iniciar</button>
            </div>
            <div className="tool">
              Video <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Examen <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Unidad <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Clase <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Prueba <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Taller <button>Iniciar</button>
            </div>
            <div className="tool">
              Planificar Actividad <button>Iniciar</button>
            </div>
          </div>
        </div>
      </div>
    );
}