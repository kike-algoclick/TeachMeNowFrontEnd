import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./signin_signup/Login.jsx";
import { Test } from "./student_pages/testEstudiante.jsx";
import { Preguntas } from "./student_pages/Cuestionario.jsx";
import Signup from './signin_signup/Signup.jsx'
import { Resultados } from "./student_pages/Resultados.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./teacher_pages/MainPageT.jsx";
import { Landingpage } from "./teacher_pages/LandingPageTeacher.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { LandingAlumno } from "./student_pages/LandingAlumno.jsx";
import Planes from "./premium_plans/planes.jsx";




function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/test" element={<Preguntas/>} />
            <Route path="/LandingAlumno" element={<LandingAlumno />} />
            <Route path="/LandingMaestro" element={<MainPage/>} />
            <Route path="/Plans" element={<Planes/>}/>
          </Routes>
        </Router>
      </>
    );
  }



export default App;