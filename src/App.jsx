import React from "react";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./navbar.jsx";
import Login from "./signin_signup/Login.jsx";
import { Test } from "./student_pages/testEstudiante.jsx";
import { Preguntas } from "./student_pages/Cuestionario.jsx";
import Signup from './signin_signup/Signup.jsx'
import { Resultados } from "./student_pages/Resultados.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPageT from "./teacher_pages/MainPageT.jsx"; 
import { Landingpage } from "./teacher_pages/LandingPageTeacher.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { LandingAlumno } from "./student_pages/LandingAlumno.jsx";
import Planes from "./premium_plans/planes.jsx";
import { SignUpRedirect } from "./signin_signup/SignUpRedirect.jsx";
import { TestParaMaestros } from "./teacher_pages/TestParaMaestros.jsx";
import PerfilMaestro from "./teacher_pages/PerfilMaestro.jsx";
import PerfilAlumno from "./student_pages/PerfilAlumno.jsx";
import AboutUs from "./About_Us/AboutUs.jsx";




function App() {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  
  if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
  }
  
    return (
      <>
        <ClerkProvider publishableKey={clerkPubKey}>
          <Router>
            <Navbar />
            <div className="mt-18">
              <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/CuestionarioA" element={<Preguntas />} />
                <Route path="/LandingAlumno" element={<LandingAlumno />} />
                <Route path="/LandingMaestro" element={<Landingpage />} />
                <Route path="/Plans" element={<Planes />} />
                <Route path="/Redirect" element={<SignUpRedirect />} />
                <Route path="TestMaestro" element={<TestParaMaestros />} />
                <Route path="/navbar" element={<Navbar/>} />
              <Route path="/ProfileM" element={<PerfilMaestro/>}/>
              <Route path="/ProfileA" element={<PerfilAlumno/>}/>
              <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/main-teacher" element={<MainPageT/>}/>  
              </Routes>
            </div>

            <Footer />
          </Router>
        </ClerkProvider>
      </>
    );
  }

export default App;