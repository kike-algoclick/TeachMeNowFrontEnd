import React from "react";
import './CSS/Navbar.css'
import logo from "/logo.png";
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";


const PUBLISHABLE_KEY = "pk_test_cmFyZS1lYXJ3aWctMy5jbGVyay5hY2NvdW50cy5kZXYk";


export function Navbar() {

  return (
    <>
      <div className="navbar">
        <header className="Header">
          <div className="Logo">
            <img src={logo} alt="TeachMeNow Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>Inicio</li>
              <li>Información</li>
              <li>Organización</li>
              <li>Herramientas</li>
            </ul>
          </nav>
          <SignOutButton>
            <button className="rounded-lg bg-blue-400 p-2 text-black">SignOut</button>
          </SignOutButton>
          <div className="profile">
            <img src="profile-icon-design-free-vector.jpg" alt="" />
          </div>
        </header>
      </div>
    </>
  );
}
