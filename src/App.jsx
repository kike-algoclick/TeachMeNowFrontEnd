import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PerfilAlumno from "./student_pages/PerfilAlumno";
import PerfilMaestro from "./teacher_pages/PerfilMaestro";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eaf4ff" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Alumno</Link>
        <Link to="/maestro">Maestro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PerfilAlumno />} />
        <Route path="/maestro" element={<PerfilMaestro />} />
      </Routes>
    </Router>
  );
}

export default App;
