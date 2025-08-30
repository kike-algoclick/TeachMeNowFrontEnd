import React, { useState } from "react";
import libro from "/TestParMaestrosIMG/libro.png";
import foco from "/TestParMaestrosIMG/Foco.jpg";
import personas from "/TestParMaestrosIMG/personas.png";
import calendario from "/TestParMaestrosIMG/calendario.jpg";
import campana from "/TestParMaestrosIMG/campana.jpg";
import '../CSS/TestParaMaestros.css'
 
 
export function TestParaMaestros() {
  const [respuestas, setRespuestas] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleRadioChange = (question, value) => {
    setRespuestas({ ...respuestas, [question]: value });
  };

  const handleNext = () => {
    let respondidas = true;
    for (let i = 1; i <= 5; i++) {
      if (!respuestas[`q${i}`]) {
        respondidas = false;
        break;
      }
    }

    if (!respondidas) {
      alert("⚠️ Debes responder todas las preguntas antes de continuar.");
    } else {
      console.log("Respuestas:", respuestas);
    }
  };

  return (
    <div className="test-container">
      <h1 className="titulo">Realizar Test</h1>

      <div className="contenedor">
        <div className="Card-preguntas">
          <div className="posicionletra">
            <p className="Colorletra"><strong>1. ¿Qué método usas para enseñar?</strong></p>
            <label><input type="radio" name="q1" onChange={() => handleRadioChange("q1", "Explicando")} /> Explicando el tema y luego haciendo ejercicios</label><br />
            <label><input type="radio" name="q1" onChange={() => handleRadioChange("q1", "Grupo")} /> Haciendo que los alumnos trabajen en grupo</label><br />
            <label><input type="radio" name="q1" onChange={() => handleRadioChange("q1", "Juegos")} /> Usando juegos o dinámicas divertidas</label><br />
            <label><input type="radio" name="q1" onChange={() => handleRadioChange("q1", "Otra")} /> Otra forma</label><br />
          </div>
          <img src={libro} alt="Pregunta 1" className="Pregunta-img" />
        </div>

        <div className="Card-preguntas">
          <div className="posicionletra2">
            <p className="Colorletra"><strong>2. ¿Qué tipo de apoyo te gustaría recibir de una plataforma como esta?</strong></p>
            <label><input type="radio" name="q2" onChange={() => handleRadioChange("q2", "Tutoriales")} /> Tutoriales de cursos online y tips para aplicar lo aprendido</label><br />
            <label><input type="radio" name="q2" onChange={() => handleRadioChange("q2", "Acompañamiento")} /> Acompañamiento personal y guías específicas con tus metas</label><br />
            <label><input type="radio" name="q2" onChange={() => handleRadioChange("q2", "Herramientas")} /> Herramientas y recursos listos y de uso para tus clases</label><br />
            <label><input type="radio" name="q2" onChange={() => handleRadioChange("q2", "Otro")} /> Otro tipo de apoyo</label><br />
          </div>
          <img src={foco} alt="Pregunta 2" className="Pregunta-img2" />
        </div>

        <div className="Card-preguntas">
          <div className="posicionletra">
            <p className="Colorletra"><strong>3. ¿Qué apoyo digital te gustaría?</strong></p>
            <label><input type="radio" name="q3" onChange={() => handleRadioChange("q3", "Tutoriales")} /> Tutoriales o cursos online</label><br />
            <label><input type="radio" name="q3" onChange={() => handleRadioChange("q3", "Acompañamiento")} /> Acompañamiento personalizado</label><br />
            <label><input type="radio" name="q3" onChange={() => handleRadioChange("q3", "Materiales")} /> Material para tus clases</label><br />
            <label><input type="radio" name="q3" onChange={() => handleRadioChange("q3", "Otro")} /> Otro tipo de apoyo</label><br />
          </div>
          <img src={personas} alt="Pregunta 3" className="Pregunta-img" />
        </div>

        <div className="Card-preguntas">
          <div className="posicionletra">
            <p className="Colorletra"><strong>4. ¿Qué tan importante es que la plataforma se adapte a tu estilo?</strong></p>
            <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Nada")} /> Nada</label><br />
            <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Algo")} /> Algo</label><br />
            <label><input type="radio" name="q4" onChange={() => handleRadioChange("q4", "Mucho")} /> Mucho</label><br />
          </div>
          <img src={calendario} alt="Pregunta 4" className="Pregunta-img2" />
        </div>
 
        <div className="card">
          <div className="card-header">
            <p>5. ¿Cuántas materias impartes?</p>
            <img src={campana} alt="Campana" className="icono" />

          </div>
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "1")} /> 1</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "2")} /> 2</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "3")} /> 3</label><br />
          <label><input type="radio" name="q5" onChange={() => handleRadioChange("q5", "Más")} /> Más</label>
        </div> 

                   <div className="card">
          <div className="card-header">
            <p>6 ¿Cómo te gustaría usar las planificaciones de la plataforma?</p>
            <img src={} alt="" className="" />
          </div>
          <label><input type="radio" name="q6" onChange={() => handleRadioChange("q6", "Editarlas por completo para adaptarlas a mi estilo")} /> Editarlas por completo para adaptarlas a mi estilo</label><br />
          <label><input type="radio" name="q6" onChange={() => handleRadioChange("q6", "Ajustar lo necesario pero mantener la base")} />Ajustar lo necesario pero mantener la base </label><br />
          <label><input type="radio" name="q6" onChange={() => handleRadioChange("q6", "Usarlas tal cual sin modificaciones")} /> Usarlas tal cual sin modificaciones</label><br />
        </div>

        <div className="card">
          <div className="card-header">
            <p>7. ¿Qué tipo de seguimiento te gustaría tener sobre tus clases?</p>
            <img src={} alt="" className="" />
          </div>
          <label><input type="radio" name="q7" onChange={() => handleRadioChange("q7", "Resumen semanal de avances")} />Resumen semanal de avances </label><br />
          <label><input type="radio" name="q7" onChange={() => handleRadioChange("q7", "Alertas de pendientes o retrasos")} />Alertas de pendientes o retrasos</label><br />
          <label><input type="radio" name="q7" onChange={() => handleRadioChange("q7", "Registro automático de lo trabajado")} />Registro automático de lo trabajado</label><br />
          <label><input type="radio" name="q7" onChange={() => handleRadioChange("q7", "Ninguno")} />Ninguno</label>
        </div>

        <div className="card">
          <div className="card-header">
            <p>8. ¿Qué tipo de recursos creativos te gustaría que te ofreciera la plataforma?</p>
            <img src={} alt="" className="" />
          </div>
          <label><input type="radio" name="q8" onChange={() => handleRadioChange("q8", "Actividades interactivas")} /> Actividades interactivas</label><br />
          <label><input type="radio" name="q8" onChange={() => handleRadioChange("q8", "Juegos educativos")} />Juegos educativos </label><br />
          <label><input type="radio" name="q8" onChange={() => handleRadioChange("q8", "Videos cortos por tema")} />Videos cortos por tema</label><br />
          <label><input type="radio" name="q8" onChange={() => handleRadioChange("q8", "No necesito recursos creativos")} />No necesito recursos creativos </label>
        </div>

        <div className="card">
          <div className="card-header">
            <p>9. ¿Cómo te gustaría que los estudiantes participen desde la plataforma?</p>
            <img src={} alt="" className="" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q9", "Comentando o respondiendo actividades")} /> Comentando o respondiendo actividades</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q9", "Haciendo autoevaluaciones")} />Haciendo autoevaluaciones</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q9", "Eligiendo actividades opcionales")} />Eligiendo actividades opcionales</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q9", "Solo entregando tareas")} />Solo entregando tareas</label>
        </div>

        <div className="card">
          <div className="card-header">
            <p>9. ¿Cómo te gustaría que los estudiantes participen desde la plataforma?</p>
            <img src={} alt="" className="" />
          </div>
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q10", "Sí, personalizados por estudiante")} />Sí, personalizados por estudiante</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q10", "Sí, diferenciados por grupo")} />Sí, diferenciados por grupo</label><br />
          <label><input type="checkbox" onChange={() => handleCheckboxChange("q10", "No, prefiero usar mis propios recursos")} />No, prefiero usar mis propios recursos</label><br />
        </div>

        

       
        <div className="boton-container">
          <button className="boton-siguiente" onClick={handleNext}>Ver resultados</button>
        </div>
 
      </div>
    </div>
  );
}
