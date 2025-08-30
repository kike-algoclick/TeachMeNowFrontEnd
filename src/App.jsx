import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PerfilAlumno from "./student_pages/PerfilAlumno";
import PerfilMaestro from "./teacher_pages/PerfilMaestro";
import LandingAlumno from "./student_pages/LandingAlumno";

function App() {
  return (
    <Router>

      <Routes>
       
        <Route path="/" element={<LandingAlumno/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
