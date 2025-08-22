import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./Login";
import { Test } from "./testEstudiante.jsx";
import { Preguntas } from "./Cuestionario.jsx";
import Signup from './Signup'
import { Resultados } from "./Resultados.jsx";

function App() {
    return (
      <>
<<<<<<< Updated upstream
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
=======
        <Login />
        <Signup/>
        <div className="App">
          <Test/>
          <Preguntas/>
          <Footer />
          <Resultados/>
        </div>
      
>>>>>>> Stashed changes

          <Test />
          <Preguntas />
          <Resultados/>
          <MainPage/>

          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;