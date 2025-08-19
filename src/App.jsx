import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./Login";
import { Test } from "./testEstudiante.jsx";
import { Preguntas } from "./Cuestionario.jsx";
import Signup from './Signup'

function App() {
    return (
      <>
        <Login />
        <Signup/>
        <div className="App">
          <Test/>
          <Preguntas/>
          <Footer />
        </div>
      

      </>
    );
}

export default App;