import React from "react";
import "../CSS/LandingPageTeacher.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export function Landingpage() {
  return (
    <div className="background mt-18">
      <div className="conteiner">
        <div className="fondo"></div>
        <div className="logo">
          <h1>
            Teach<span className="highlight">Me</span>
            <span className="highlight2">Now</span>
          </h1>
        </div>

        <header className="Barra_busqueda">
          <input type="text" placeholder="How can I help you today?" />
          <button>Send</button>
        </header>

        <main className="main-content">
          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Teacher.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Teachers</h2>
              <p>Start with your students and improve your classes</p>
              <Link to={"/Login"}>
                <button>Start Now</button>
              </Link>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Alumno.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Student</h2>
              <p>Get started with you classes and improve your results</p>
              <Link to={"/Login"}>
                <button>Start Now</button>
              </Link>
            </div>
          </div>

          <div className="Cards">
            <div className="Card">
              <img src="/Landing_images/Director.jpeg" alt="" />
            </div>
            <div className="card-body">
              <h2>Principal</h2>
              <p>Start as a Principal and improve your teachers' work</p>
              <Link to={"/Login"}>
                <button>Start Now</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
