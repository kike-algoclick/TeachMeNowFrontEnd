import React from "react";
import './CSS/Navbar.css'
import logo from "/logo.png";
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";



const PUBLISHABLE_KEY = "pk_test_cmFyZS1lYXJ3aWctMy5jbGVyay5hY2NvdW50cy5kZXYk";


export function Navbar() {

  return (
    <div className="TeachNav">
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
      <div className="profile">
        <img src="R.png" alt="" />
      </div>
    </div>
  );
}
