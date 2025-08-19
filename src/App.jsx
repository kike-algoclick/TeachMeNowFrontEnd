import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./Login";
import { Test } from "./testEstudiante.jsx";
import Signup from './SignUp.jsx'


function App() {
    return (
      <>
        <Login />
        <Signup/>
        <div className="App">
          <Test/>
          <Footer />
        </div>
      

      </>
    );
}

export default App;