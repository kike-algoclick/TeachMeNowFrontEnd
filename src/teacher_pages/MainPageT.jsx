import React from "react";
import '../CSS/mainpage.css'
import p1 from '/Herramientas_img/1.png'

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
              <div className="Icon">
              <img src="/Herramientas/1.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Clases <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p1} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Lecciones <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Crear Guías <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Crear Presentación <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Rúbrica <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Video <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Examen <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Unidad <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Clase <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Prueba <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Taller <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140046.png" alt="Icon" width="50" height="50"/>
            </div>
              Planificar Actividad <button>Iniciar</button>
            </div>
          </div>
        </div>
      </div>
    );
}