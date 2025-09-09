import React from "react";
import './CSS/Navbar.css'
import logo from "/logo.png";
import { SignOutButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";



export function Navbar({role}) {
  const {user} = useUser();
  const userRole = user?.publicMetaData?.role;
  const {isSignedIn} = useAuth()
  

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
        {!isSignedIn && (
          <div className="flex justify-center gap-5">
            <Link to="/Login">
              <button className="sign">Log in</button>
            </Link>
            <Link to="/signUp">
              <button className="sign">Sign up</button>
            </Link>
          </div>
        )}

        {isSignedIn && (
          <div className="flex justify-center gap-5">
            <SignOutButton style={{cursor: "pointer",
    fontWeight: "500",
    color: "#2c3e50",
    padding: "8px 12px",
    borderRadius: "20px",
    transition: "backgroundColor 0.3s ease, color 0.3s ease"
}}></SignOutButton>
          </div>
        )}
      </div>
    </>
  );
}
