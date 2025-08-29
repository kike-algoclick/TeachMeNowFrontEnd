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
            <label> <input type="radio" name="q1" /> Doing it myself.</label><br />
            </div>
        <img src={p1} alt="asdf"  className="Pregunta-img"/>
        </div>
        
        <div className="Card-preguntas">
            <div className="posicionletra2">
                <p className="Colorletra"><strong>2. If they teach me a recipe, I learn better.</strong></p>
                <label><input type="radio" name="q2"/>Viewing photos or a video.</label><br />
                <label><input type="radio" name="q2"/>Listening to the explanation.</label><br />
                <label><input type="radio" name="q2"/>Reading the recipe.</label><br />
                <label><input type="radio" name="q2"/>Preparing it.</label><br/>
            </div>
            <img src={p2} alt="asdf" className="Pregunta-img2" />
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
                <p className="Colorletra"><strong>3. In class, I understand better when:</strong></p>
                <label><input type="radio" name="q3"/>I see diagrams or visual presentations.</label><br />
                <label><input type="radio" name="q3"/>The teacher explains in a loud voice.</label><br />
                <label><input type="radio" name="q3"/>I read the study material.</label><br />
                <label><input type="radio" name="q3"/>We do a practical activity.</label><br/>
            </div>
            <img src={p3} alt="asdf" className="Pregunta-img" />
        </div>
        </div>

    <div className="contenedor2">
        <div className="Card-preguntas">
            <div className="posicionletra">
            <p className="Colorletra"><strong>4. If I don't understand a topic, the first thing I do is:</strong></p>
            <label> <input type="radio" name="q4"/>Search for graphics or animations.</label><br />
            <label><input type="radio" name="q4"/> Ask someone to explain it to me.</label><br />
            <label><input type="radio" name="q4" /> Read another book or notes.</label><br />
            <label> <input type="radio" name="q4" /> Try to apply it in an exercise.</label><br />
            </div>
        <img src={p4} alt="asdf"  className="Pregunta-img2"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>5. The material I like the most to study is:</strong></p>
  <label><input type="radio" name="q5"/> Infographics and mind maps.</label><br />
  <label><input type="radio" name="q5"/> Audios or talks.</label><br />
  <label><input type="radio" name="q5" /> Guides and notes.</label><br />
  <label><input type="radio" name="q5" /> Hands-on material.</label><br />
</div>

        <img src={p5} alt="asdf"  className="Pregunta-img"/>
        </div>

                <div className="Card-preguntas">
           <div className="posicionletra">
  <p className="Colorletra"><strong>6. When I remember something, the first thing that comes to my mind is:</strong></p>
  <label><input type="radio" name="q6"/> The image of what I saw.</label><br />
  <label><input type="radio" name="q6"/> The sound of what I heard.</label><br />
  <label><input type="radio" name="q6" /> The text I read.</label><br />
  <label><input type="radio" name="q6" /> The feeling of doing it.</label><br />
</div>

        <img src={p6} alt="asdf"  className="Pregunta-img2"/>
        </div>
    </div>


    <div className="contenedor 3">
        <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>7. In a workshop, I enjoy more:</strong></p>
  <label><input type="radio" name="q7"/> Watching demonstrations.</label><br />
  <label><input type="radio" name="q7"/> Listening to the instructions.</label><br />
  <label><input type="radio" name="q7" /> Reading the manual.</label><br />
  <label><input type="radio" name="q7" /> Using the tools.</label><br />
</div>

        <img src={p7} alt="asdf"  className="Pregunta-img"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>8. I organize information better when:</strong></p>
  <label><input type="radio" name="q8"/> I use colors, charts, and diagrams.</label><br />
  <label><input type="radio" name="q8"/> I listen to explanations.</label><br />
  <label><input type="radio" name="q8" /> I write summaries.</label><br />
  <label><input type="radio" name="q8" /> I make models or simulations.</label><br />
</div>

        <img src={p8} alt="asdf"  className="Pregunta-img2"/>
        </div>

             <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>9. To remember a phone number:</strong></p>
  <label><input type="radio" name="q9"/> I visualize it written.</label><br />
  <label><input type="radio" name="q9"/> I repeat it out loud.</label><br />
  <label><input type="radio" name="q9" /> I write it several times.</label><br />
  <label><input type="radio" name="q9" /> I dial it directly.</label><br />
</div>

        <img src={p9} alt="asdf"  className="Pregunta-img"/>
        </div>
    </div>

    <div className="Contenedor4">
        <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>10. In my free time I prefer:</strong></p>
  <label><input type="radio" name="q10"/> Watching documentaries or tutorials.</label><br />
  <label><input type="radio" name="q10"/> Listening to music or podcasts.</label><br />
  <label><input type="radio" name="q10" /> Reading books or articles.</label><br />
  <label><input type="radio" name="q10" /> Doing sports or crafts.</label><br />
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
        Excellent job! Keep it up, you're almost done with your test.
      </h2>
      <img src={Rarito} alt="Robot" className="robot-img" />
    </div>

    <div className="contenedor">
        <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>11. Before an exam, I study by:</strong></p>
  <label><input type="radio" name="q11"/> Reviewing visual summaries.</label><br />
  <label><input type="radio" name="q11"/> Listening to recordings or explanations.</label><br />
  <label><input type="radio" name="q11" /> Reading my notes.</label><br />
  <label><input type="radio" name="q11" /> Practicing exercises.</label><br />
</div>

        <img src={p11} alt="asdf"  className="Pregunta-img"/>
        </div>
        
        <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>12. When I am taught to use an app, I learn better by:</strong></p>
  <label><input type="radio" name="q12"/> Watching a video tutorial.</label><br />
  <label><input type="radio" name="q12"/> Listening to someone explain it.</label><br />
  <label><input type="radio" name="q12"/> Reading the manual.</label><br />
  <label><input type="radio" name="q12"/> Trying all the features.</label><br/>
</div>

            <img src={p12} alt="asdf" className="Pregunta-img2" />
        </div>

                <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>13. I remember places better because:</strong></p>
  <label><input type="radio" name="q13"/> I visualize the map or image.</label><br />
  <label><input type="radio" name="q13"/> I remember how it was described to me.</label><br />
  <label><input type="radio" name="q13"/> I read the directions.</label><br />
  <label><input type="radio" name="q13"/> Walking around the place helps me orient myself.</label><br/>
</div>

            <img src={p13} alt="asdf" className="Pregunta-img" />
        </div>
        </div>

    <div className="contenedor2">
        <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>14. In a work group, I prefer:</strong></p>
  <label><input type="radio" name="q14"/> Creating visual presentations.</label><br />
  <label><input type="radio" name="q14"/> Explaining ideas out loud.</label><br />
  <label><input type="radio" name="q14" /> Writing the content.</label><br />
  <label><input type="radio" name="q14" /> Taking care of practical activities.</label><br />
</div>

        <img src={p14} alt="asdf"  className="Pregunta-img2"/>
        </div>

        <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>15. I concentrate better when:</strong></p>
  <label><input type="radio" name="q15"/> I see images or graphs.</label><br />
  <label><input type="radio" name="q15"/> I listen to a clear explanation.</label><br />
  <label><input type="radio" name="q15" /> I read silently.</label><br />
  <label><input type="radio" name="q15" /> I work with my hands.</label><br />
</div>

        <img src={p15} alt="asdf"  className="Pregunta-img"/>
        </div>

                <div className="Card-preguntas">
           <div className="posicionletra">
  <p className="Colorletra"><strong>16. If someone tells me a story:</strong></p>
  <label><input type="radio" name="q16"/> I imagine the scenes.</label><br />
  <label><input type="radio" name="q16"/> I remember their voice and tone.</label><br />
  <label><input type="radio" name="q16" /> I think about how it would be written.</label><br />
  <label><input type="radio" name="q16" /> I imagine myself experiencing it.</label><br />
</div>

        <img src={p16} alt="asdf"  className="Pregunta-img2"/>
        </div>
    </div>

    <div className="contenedor 3">
        <div className="Card-preguntas">
           <div className="posicionletra2">
  <p className="Colorletra"><strong>17. In a museum, I am most attracted to:</strong></p>
  <label><input type="radio" name="q17"/> Seeing the pieces and images.</label><br />
  <label><input type="radio" name="q17"/> Listening to the guide's explanations.</label><br />
  <label><input type="radio" name="q17" /> Reading the descriptions.</label><br />
  <label><input type="radio" name="q17" /> Trying interactive activities.</label><br />
</div>

        <img src={p17} alt="asdf"  className="Pregunta-img"/>
        </div>

        <div className="Card-preguntas">
           <div className="posicionletra">
  <p className="Colorletra"><strong>18. When I take notes:</strong></p>
  <label><input type="radio" name="q18"/> I use colors and drawings.</label><br />
  <label><input type="radio" name="q18"/> I leave key comments in my notebook.</label><br />
  <label><input type="radio" name="q18" /> I write in detail.</label><br />
  <label><input type="radio" name="q18" /> I make manipulable diagrams.</label><br />
</div>

        <img src={p18} alt="asdf"  className="Pregunta-img2"/>
        </div>

             <div className="Card-preguntas">
            <div className="posicionletra2">
  <p className="Colorletra"><strong>19. To learn a new language, I prefer or would like to:</strong></p>
  <label><input type="radio" name="q19"/> Use flashcards with images.</label><br />
  <label><input type="radio" name="q19"/> Listen to audios and repeat.</label><br />
  <label><input type="radio" name="q19" /> Read texts and do written exercises.</label><br />
  <label><input type="radio" name="q19" /> Read texts and do written exercises.</label><br />
</div>

        <img src={p19} alt="asdf"  className="Pregunta-img"/>
        </div>
    </div>

    <div className="Contenedor4">
        <div className="Card-preguntas">
            <div className="posicionletra">
  <p className="Colorletra"><strong>20. When I buy something new, I first use:</strong></p>
  <label><input type="radio" name="q20"/> The images on the packaging.</label><br />
  <label><input type="radio" name="q20"/> The oral instructions.</label><br />
  <label><input type="radio" name="q20" /> The written manual.</label><br />
  <label><input type="radio" name="q20" /> I try it directly.</label><br />
</div>

        <img src={p20} alt="asdf"  className="Pregunta-img3"/>
        </div>
    </div>
    <button className="boton-results">View results</button>
        </>
    )}
     </div>
     </div>
    )
}