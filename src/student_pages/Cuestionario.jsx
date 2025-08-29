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

import Rarito from "/test_alumno_images/Robo2.jpg"

//

export function Preguntas(){

    const [pagina, setPagina]= useState (1);

    return (
        <div className="App-grid">
            <div className="card">
                <div className="header">
                    <a href="#"><img src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg" alt="" /></a>
                </div>

                
                        {/*Preguntas*/}
        {pagina === 1 && (
        
        <>
                <div className="contenedor">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>1. When I learn something new, I prefer:</strong></p>
            <label> <input type="radio" name="q1"/>View graphs, images, or videos.</label><br />
            <label><input type="radio" name="q1"/>Listen to explanations.</label><br />
            <label><input type="radio" name="q1" />Read texts or notes.</label><br />
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
            <p className="Colorletra"><strong>5. El material que más me gusta para estudiar es:</strong></p>
            <label> <input type="radio" name="q5"/>Infografías y mapas mentales.</label><br />
            <label><input type="radio" name="q5"/> Audios o charlas.</label><br />
            <label><input type="radio" name="q5" /> Guías y apuntes.</label><br />
            <label> <input type="radio" name="q5" />Material para manipular.</label><br />
            </div>
        <img src={p5} alt="asdf"  className="Pregunta-img"/>
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>6. Cuando recuerdo algo, lo primero que me viene a la mente es:</strong></p>
            <label> <input type="radio" name="q6"/>La imagen de lo que vi.</label><br />
            <label><input type="radio" name="q6"/> El sonido de lo que escuché.</label><br />
            <label><input type="radio" name="q6" />El texto que leí.</label><br />
            <label> <input type="radio" name="q6" />La sensación de hacerlo.</label><br />
            </div>
        <img src={p6} alt="asdf"  className="Pregunta-img2"/>
        </div>
    </div>


    <div className="contenedor 3">
        <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>7. En un taller, disfruto más:</strong></p>
            <label> <input type="radio" name="q7"/>Observar demostraciones.</label><br />
            <label><input type="radio" name="q7"/> Escuchar las instrucciones.</label><br />
            <label><input type="radio" name="q7" /> Leer el instructivo.</label><br />
            <label> <input type="radio" name="q7" />Usar las herramientas.</label><br />
            </div>
        <img src={p7} alt="asdf"  className="Pregunta-img"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>8. Organizo la información mejor cuando:</strong></p>
            <label> <input type="radio" name="q8"/>Uso colores, cuadros y esquemas.</label><br />
            <label><input type="radio" name="q8"/> Escucho explicaciones.</label><br />
            <label><input type="radio" name="q8" />Escribo resúmenes.</label><br />
            <label> <input type="radio" name="q8" />Hago modelos o simulaciones.</label><br />
            </div>
        <img src={p8} alt="asdf"  className="Pregunta-img2"/>
        </div>

             <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>9. Para recordar un número de teléfono:</strong></p>
            <label> <input type="radio" name="q9"/>Lo visualizo escrito.</label><br />
            <label><input type="radio" name="q9"/>Lo repito en voz alta.</label><br />
            <label><input type="radio" name="q9" />Lo escribo varias veces.</label><br />
            <label> <input type="radio" name="q9" />Lo marco directamente.</label><br />
            </div>
        <img src={p9} alt="asdf"  className="Pregunta-img"/>
        </div>
    </div>

    <div className="Contenedor4">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>10. En mi tiempo libre prefiero:</strong></p>
            <label> <input type="radio" name="q10"/>Ver documentales o tutoriales.</label><br />
            <label><input type="radio" name="q10"/>Escuchar música o podcasts.</label><br />
            <label><input type="radio" name="q10" />Leer libros o artículos.</label><br />
            <label> <input type="radio" name="q10" />Hacer deporte o manualidades.</label><br />
            </div>
        <img src={p10} alt="asdf"  className="Pregunta-img2"/>
        </div>
    </div>
    <button className="boton-siguiente"  onClick={() => {
    let respondidas = true;
    for (let i = 1; i <= 10; i++) {
      if (!document.querySelector(`input[name="q${i}"]:checked`)) {
        respondidas = false;
        break;
      }
    }

    if (!respondidas) {
      alert("⚠️ Debes responder todas las preguntas antes de continuar.");
    } else {
      setPagina(2);
    }
  }}>Siguiente</button>
        </>
    )}

{/*Preguntas de la 11-20*/}

    {pagina === 2 && (
        <>

    <div className="mensaje-header">
      <h2 className="typewriter">
        ¡Excelente trabajo! Sigue así, casi terminas tu test.
      </h2>
      <img src={Rarito} alt="Robot" className="robot-img" />
    </div>

    <div className="contenedor">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>11. Antes de un examen, estudio:</strong></p>
            <label> <input type="radio" name="q11"/>Revisando resúmenes visuales.</label><br />
            <label><input type="radio" name="q11"/>Escuchando grabaciones o explicaciones.</label><br />
            <label><input type="radio" name="q11" />Leyendo mis apuntes.</label><br />
            <label> <input type="radio" name="q11" />Practicando ejercicios.</label><br />
            </div>
        <img src={p11} alt="asdf"  className="Pregunta-img"/>
        </div>
        
        <div className="Card-preguntas">
            <div className="posicionletra2">
                <p className="Colorletra"><strong>12. Cuando me enseñan a usar una app, aprendo mejor:</strong></p>
                <label><input type="radio" name="q12"/>Viendo un tutorial en video.</label><br />
                <label><input type="radio" name="q12"/>Escuchando a alguien explicarlo.</label><br />
                <label><input type="radio" name="q12"/>Leyendo el manual.</label><br />
                <label><input type="radio" name="q12"/>Probando todas las funciones.</label><br/>
            </div>
            <img src={p12} alt="asdf" className="Pregunta-img2" />
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
                <p className="Colorletra"><strong>13. Recuerdo mejor los lugares porque:</strong></p>
                <label><input type="radio" name="q13"/>Visualizo el mapa o la imagen.</label><br />
                <label><input type="radio" name="q13"/>Recuerdo cómo me lo describieron.</label><br />
                <label><input type="radio" name="q13"/>Leo las direcciones.</label><br />
                <label><input type="radio" name="q13"/>Caminar por el lugar me orienta.</label><br/>
            </div>
            <img src={p13} alt="asdf" className="Pregunta-img" />
        </div>
        </div>

    <div className="contenedor2">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>14. En un grupo de trabajo, prefiero:</strong></p>
            <label> <input type="radio" name="q14"/>Hacer las presentaciones visuales.</label><br />
            <label><input type="radio" name="q14"/>Explicar las ideas en voz alta.</label><br />
            <label><input type="radio" name="q14" />Redactar el contenido.</label><br />
            <label> <input type="radio" name="q14" />Encargarme de las actividades prácticas.</label><br />
            </div>
        <img src={p14} alt="asdf"  className="Pregunta-img2"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>15. Me concentro mejor cuando:</strong></p>
            <label> <input type="radio" name="q15"/>Veo imágenes o gráficos.</label><br />
            <label><input type="radio" name="q15"/>Escucho una explicación clara.</label><br />
            <label><input type="radio" name="q15" />Leo en silencio.</label><br />
            <label> <input type="radio" name="q15" />Trabajo con las manos.</label><br />
            </div>
        <img src={p15} alt="asdf"  className="Pregunta-img"/>
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>16. Si alguien me cuenta una historia:</strong></p>
            <label> <input type="radio" name="q16"/>Me imagino las escenas.</label><br />
            <label><input type="radio" name="q16"/>Recuerdo su voz y tono.</label><br />
            <label><input type="radio" name="q16" />Pienso en cómo estaría escrita.</label><br />
            <label> <input type="radio" name="q16" />Me imagino viviéndola.</label><br />
            </div>
        <img src={p16} alt="asdf"  className="Pregunta-img2"/>
        </div>
    </div>

    <div className="contenedor 3">
        <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>17. En un museo, me atrae más:</strong></p>
            <label> <input type="radio" name="q17"/>Ver las piezas y las imágenes.</label><br />
            <label><input type="radio" name="q17"/>Escuchar las explicaciones del guía.</label><br />
            <label><input type="radio" name="q17" />Leer las descripciones.</label><br />
            <label> <input type="radio" name="q17" />Probar actividades interactivas.</label><br />
            </div>
        <img src={p17} alt="asdf"  className="Pregunta-img"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>18. Cuando tomo apuntes:</strong></p>
            <label> <input type="radio" name="q18"/>Uso colores y dibujos.</label><br />
            <label><input type="radio" name="q18"/>Dejo comentarios claves en mi cuaderno.</label><br />
            <label><input type="radio" name="q18" />Escribo con detalle.</label><br />
            <label> <input type="radio" name="q18" />Hago esquemas manipulables.</label><br />
            </div>
        <img src={p18} alt="asdf"  className="Pregunta-img2"/>
        </div>

             <div className="Card-preguntas">
            <div className="posicionletra2">
            <p className="Colorletra"><strong>19. Para aprender un idioma nuevo, prefiero o me gustaría:</strong></p>
            <label> <input type="radio" name="q19"/>Usar tarjetas con imágenes.</label><br />
            <label><input type="radio" name="q19"/>Escuchar audios y repetir.</label><br />
            <label><input type="radio" name="q19" />Leer textos y hacer ejercicios escritos.</label><br />
            <label> <input type="radio" name="q19" />Leer textos y hacer ejercicios escritos.</label><br />
            </div>
        <img src={p19} alt="asdf"  className="Pregunta-img"/>
        </div>
    </div>

    <div className="Contenedor4">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>20. Cuando compro algo nuevo, uso primero:</strong></p>
            <label> <input type="radio" name="q20"/>Las imágenes del empaque.</label><br />
            <label><input type="radio" name="q20"/>Las instrucciones orales.</label><br />
            <label><input type="radio" name="q20" />El manual escrito.</label><br />
            <label> <input type="radio" name="q20" />Lo pruebo directamente.</label><br />
            </div>
        <img src={p20} alt="asdf"  className="Pregunta-img3"/>
        </div>
    </div>
    <button className="boton-results">Ver resultados</button>
        </>
    )}
     </div>
     </div>
    )
}