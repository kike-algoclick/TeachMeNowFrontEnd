import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Footer } from './Footer'
import App from './App'
import { Navbar } from './navbar'


createRoot(document.getElementById('root')).render(
  <>
  <Navbar/>
  <App />
  </>
)
