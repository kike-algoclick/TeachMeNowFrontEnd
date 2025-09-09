import React from "react";
import "../CSS/resultad.css"
import Robot from "/test_alumno_images/Robot.avif"
import Teach from "/logo.png"
import fredy from "/test_alumno_images/tusresultados.jpg"

export function Resultados() {
  return (
    <div className="results-container">
        <div className="card2">
      {/* Header */}
      <header className="header2">
        <img src={Teach} alt="Logo App" className="header-logo" />
      </header>

      {/* Resultados */}
      <section className="results-hero">
        <div className="results-left">
          <h2 className="results-title">Your Results</h2>
        </div>
    
        <div className="Medialuna">
          <div className="Half-circle">
          <img src={Robot}alt="Robot" className="robot-image" />
          </div>
           <div className="suggestions-header">
           <h3>Hello</h3>
        </div>
        </div>

      </section>

      {/* Sugerencias */}
      <section className="suggestions-section">
       
       

        {/* Explicación general */}
        <div className="suggestion-card big-card">
          <p>
            Your way of learning is mainly based on{" "}
            <strong>listen to and process verbal information</strong>. 
            This means that your memory and understanding are activated more when you receive
            <em> oral explanations</em>, you participate in <em>discussions</em> or you listen
            <em> examples</em>.  
            The style <strong>visual</strong> It is also important for you, as graphic elements and diagrams reinforce what you hear.
          </p>

           <br />

            <h4>🎧 Recommendations to take advantage of your auditory style:</h4>
            <ul>
              <li>Participate actively in discussions, study groups, and presentations.</li>
              <li>Explain out loud what you are learning, even if it's just for yourself.</li>
              <li>Use rhymes, songs, or acronyms to memorize concepts.</li>
            </ul>

            <br />

            <h4>👀 Strategies to strengthen your visual style:</h4>
            <ul>
              <li>Add diagrams, tables, or mind maps to your notes.</li>
              <li>Use colors to highlight key concepts.</li>
              <li>Look for videos or animations that complement the oral explanations.</li>
              <li>Organize the information in clear and structured diagrams.</li>
            </ul>
        </div>
      </section>
      </div>
    </div>
  );
}
