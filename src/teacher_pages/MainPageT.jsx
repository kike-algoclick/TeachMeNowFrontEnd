import React from "react";
import '../CSS/mainpage.css'
import p1 from '/Herramientas_img/1.png'
import p2 from '/Herramientas_img/2.png'
import p3 from '/Herramientas_img/3.png'
import p4 from '/Herramientas_img/4.png'
import p5 from '/Herramientas_img/5.png'
import p6 from '/Herramientas_img/6.png'  
import p7 from '/Herramientas_img/7.png'
import p8 from '/Herramientas_img/8.png'
import p9 from '/Herramientas_img/9.png'
import p10 from '/Herramientas_img/10.png'  
import p11 from '/Herramientas_img/11.png'
import p12 from '/Herramientas_img/12.png'
import p13 from '/Herramientas_img/13.png'

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
              <img src={p1} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Clases <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p13} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Lecciones <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p2} alt="Icon" width="50" height="50"/>
            </div>
              Crear Guías <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p8}  alt="Icon" width="50" height="50"/>
            </div>
              Crear Presentación <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p3}  alt="Icon" width="50" height="50"/>
            </div>
              Rúbrica <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p9}  alt="Icon" width="50" height="50"/>
            </div>
              Video <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p4}  alt="Icon" width="50" height="50"/>
            </div>
              Planificar Examen <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p10}  alt="Icon" width="50" height="50"/>
            </div>
              Planificar Unidad <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p5} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Clase <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p11}  alt="Icon" width="50" height="50"/>
            </div>
              Planificar Prueba <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p6} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Taller <button>Iniciar</button>
            </div>
            <div className="tool">
              <div className="Icon">
              <img src={p12} alt="Icon" width="50" height="50"/>
            </div>
              Planificar Actividad <button>Iniciar</button>
            </div>
          </div>
        </div>
      </div>
    );
}