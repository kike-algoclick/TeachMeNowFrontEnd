import React from "react";
import { Footer } from "./Footer.jsx";
import Login from "./Login";
import { Test } from "./testEstudiante.jsx";

function App() {
    return (
      <>
        <Login />
        <div className="App">
          <Test/>
          <Footer />
        </div>
      

      </>
    );
}

export default App;