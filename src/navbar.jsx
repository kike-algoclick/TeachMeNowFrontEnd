import React from "react";
import './CSS/Navbar.css'
import logo from "/logo.png";
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";




export function Navbar() {

  return (
    <>
      <div className="TeachNav navy w-full">
        <div className="Logo">
          <Link to="/">
            <img src={logo} alt="TeachMeNowLogo" />
          </Link>
        </div>
        <nav className="options">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>About us</li>
            <Link to="/Plans">
              <li>Explore Premium</li>
            </Link>
            <li>Tools</li>
          </ul>
        </nav>
        <div className="flex justify-center gap-5">
          <Link to="/Login">
            <button className="sign">Log in</button>
          </Link>
          <Link to="/signUp">
            <button className="sign">Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
