import React from "react";
import './CSS/Navbar.css'
import logo from "/logo.png";
import { SignOutButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";



export function Navbar() {
  const {user} = useUser();
  const userRole = user?.publicMetaData?.role;
  const {isSignedIn} = useAuth()
  const [role, setRole] = useState()
  
  

  return (
    <>
      {!isSignedIn && (
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
      )}
      {isSignedIn && (
        <div className="TeachNav navy w-full">
          <div className="Logo">
            <Link
              to={userRole === "teacher" ? "/main-teacher" : "/main-teacher"}
            >
              <img src={logo} alt="TeachMeNowLogo" />
            </Link>
          </div>
          <nav className="options">
            <ul>
              <Link
                to={
                  userRole === "teacher" ? "/main-teacher" : "/main-teacher"
                }
              >
                <li>Home</li>
              </Link>

              <Link to="/AboutUs">
                <li>About us</li>
              </Link>
              <Link to="/Plans">
                <li>Explore Premium</li>
              </Link>
              <li>Tools</li>
            </ul>
          </nav>

          <div className="flex justify-center gap-5">
            <SignOutButton
              style={{
                cursor: "pointer",
                fontWeight: "500",
                color: "#2c3e50",
                padding: "8px 12px",
                borderRadius: "20px",
                transition: "backgroundColor 0.3s ease, color 0.3s ease",
              }}
            ></SignOutButton>
            <Link to="/ProfileM">
              <div className="flex justify-center">
                <img
                  src={user.imageUrl}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
