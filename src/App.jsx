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
 
function App() {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  
  if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
  }
 
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/teacher-main" element={<MainPageT />} />
            <Route path="/CuestionarioA" element={<Preguntas />} />
            <Route path="/LandingAlumno" element={<LandingAlumno />} />
            <Route path="/Plans" element={<Planes />} />
            <Route path="/Redirect" element={<SignUpRedirect />} />
            <Route path="/testM" element={<TestParaMaestros/>} />
          </Routes>
        </Router>
        <Footer />
      </ClerkProvider>
    </>
  );
}
 
export default App;