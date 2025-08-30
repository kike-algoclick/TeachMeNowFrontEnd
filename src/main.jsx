import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Landingpage } from './teacher_pages/LandingPageTeacher'
import App from './App'
import { Navbar } from './navbar'
import { Footer } from './Footer'
import { ClerkProvider } from '@clerk/clerk-react'


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Navbar />
      <App />
      <Footer />
    </ClerkProvider>
  </>
);
