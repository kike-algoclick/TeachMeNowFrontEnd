import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./Login";
import { Test } from "./testEstudiante.jsx";
import { Preguntas } from "./Cuestionario.jsx";
import Signup from './Signup'
import {MainPage} from './MainPageT.jsx'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";




function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>

          <Test />
          <Preguntas />
          <MainPage/>

          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;