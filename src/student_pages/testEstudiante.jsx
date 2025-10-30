import React from "react";
import "../CSS/student.css";
import robot from "/test_alumno_images/Robot.avif"

export function Test() {
  return (
    <>
      <div className="app-container body ">
        <div className="card-test mt-20">
          <div className="header">
            <a href="#">
              <img
                src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg"
                alt=""
              />
            </a>
          </div>

          <div className="content">
            <h1 className="title">Assessment of learning styles</h1>
            <p className="subtitle">
              <b>Discover your learning style</b>
            </p>
            <div className="Cuadrito">
              <p className="description">
                Each person learns in a different way. Understanding your
                 preferred learning style can help you study more effectively 
                 and retain information better.
              </p>
            </div>
            <div className="grid">
              <div className="info-box">
                <h3>What will you discover?</h3>
                <ul className="Check">
                  <li>Your main learning style</li>
                  <li>Customized study strategies</li>
                  <li>How to leverage your learning strengths</li>
                  <li>Ways to improve in challenging areas</li>
                </ul>

                <h3>About the Test</h3>
                <ul>
                  <li>20 questions</li>
                  <li>Approximately 3–5 minutes</li>
                  <li>
                    This questionnaire was created based on the Test.{" "}
                    <b>CHAEA</b>.
                  </li>
                  <li>Instant results</li>
                </ul>
              </div>

              <div className="right-box">
                <p className="welcome">
                  Welcome to {" "}
                  <a href="#">
                    <img
                      src="/Captura de pantalla_13-8-2025_222029_www.figma.com.jpeg"
                      alt=""
                    />
                  </a>
                </p>
                <a href="#">
                  <img src={robot} alt="" className="robot" />
                </a>
                <button className="start-btn">Start Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}