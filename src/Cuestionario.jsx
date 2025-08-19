import React from "react";
import "./CSS/diseñocuestionario.css"
import p1 from "./p1.jpg"
import p2 from "./p2.jpg"
import p3 from "./p3.jpg"
import p4 from "./p4.jpg"
import p5 from "./p5.jpg"


export function Preguntas(){
    return (
        <div className="App-grid">
            <div className="card">
                <div className="header">
                    <a href="#"><img src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg" alt="" /></a>
                </div>

                
                        {/*Preguntas*/}

        <div className="contenedor">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>1. Cuando aprendo algo nuevo, prefiero:</strong></p>
            <label> <input type="radio" name="q1"/> Ver gráficos, imágenes o videos.</label><br />
            <label><input type="radio" name="q1"/> Escuchar explicaciones.</label><br />
            <label><input type="radio" name="q1" /> Leer textos o apuntes.</label><br />
            <label> <input type="radio" name="q1" /> Hacerlo yo mismo(a).</label><br />
            </div>
        <img src={p1} alt="asdf"  className="Pregunta-img"/>
        </div>
        
        <div className="Card-preguntas">
            <div className="posicionletra2">
                <p className="Colorletra"><strong>2. Si me enseñan una receta, aprendo mejor:</strong></p>
                <label><input type="radio" name="q2"/>Viendo fotos o un video.</label><br />
                <label><input type="radio" name="q2"/>Escuchando la explicación.</label><br />
                <label><input type="radio" name="q2"/>Leyendo la receta.</label><br />
                <label><input type="radio" name="q2"/>Preparándola.</label><br/>
            </div>
            <img src={p2} alt="asdf" className="Pregunta-img2" />
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
                <p className="Colorletra"><strong>3. En clase, entiendo mejor cuando:</strong></p>
                <label><input type="radio" name="q3"/>Veo diagramas o presentaciones visuales.</label><br />
                <label><input type="radio" name="q3"/>El profesor explica en voz alta.</label><br />
                <label><input type="radio" name="q3"/>Leo el material de estudio.</label><br />
                <label><input type="radio" name="q3"/>Hacemos una actividad práctica.</label><br/>
            </div>
            <img src={p3} alt="asdf" className="Pregunta-img" />
        </div>
        </div>

    <div className="contenedor2">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>4. Si no entiendo un tema, lo primero que hago es:</strong></p>
            <label> <input type="radio" name="q4"/>Buscar gráficos o animaciones.</label><br />
            <label><input type="radio" name="q4"/> Preguntar a alguien que me lo explique.</label><br />
            <label><input type="radio" name="q4" /> Leer otro libro o apuntes.</label><br />
            <label> <input type="radio" name="q4" /> Intentar aplicarlo en un ejercicio.</label><br />
            </div>
        <img src={p4} alt="asdf"  className="Pregunta-img2"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>4. Si no entiendo un tema, lo primero que hago es:</strong></p>
            <label> <input type="radio" name="q5"/>Buscar gráficos o animaciones.</label><br />
            <label><input type="radio" name="q5"/> Preguntar a alguien que me lo explique.</label><br />
            <label><input type="radio" name="q5" /> Leer otro libro o apuntes.</label><br />
            <label> <input type="radio" name="q5" /> Intentar aplicarlo en un ejercicio.</label><br />
            </div>
        <img src={p5} alt="asdf"  className="Pregunta-img"/>
        </div>
    </div>
                 </div>



        </div>
    )
}