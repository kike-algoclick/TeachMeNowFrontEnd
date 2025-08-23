import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Landingpage } from './teacher_pages/LandingPageTeacher'
import App from './App'
import { Navbar } from './navbar'
import { Footer } from './Footer'
 



createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <App />
    <Footer/>
  </>
);
