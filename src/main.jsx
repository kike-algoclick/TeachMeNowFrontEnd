import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Landingpage } from './teacher_pages/LandingPageTeacher'
import App from './App'
import { Navbar } from './navbar'
import { Footer } from './Footer'
import { ClerkProvider } from '@clerk/clerk-react'



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      
      <App />
     
    
  </React.StrictMode>
);
