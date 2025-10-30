import React from "react";
import "./CSS/Footer.css";
import { useUser } from "@clerk/clerk-react"; 
import { Link } from "react-router-dom";

export function Footer() {
    //terminar los links a las paginas
  const {user} = useUser()
 const userRole = user?.unsafeMetadata?.role;

    return (
      <div className="footer-container">
        <footer>
          <div className="footer-content">
            <div className="footer-section flex flex-col gap-5 text-underline">
              <h3>We are TeachMeNow</h3>
              <p>
                We are a platform that supports teachers with practical tools to
                improve classroom results
              </p>

              <div>
                <Link
                  to={
                    userRole === "teacher" ? "/main-teacher" : "/LandingAlumno"
                  }
                >
                  <p>Home</p>
                </Link>
                <Link to={"/plans"}>
                  <p>Explore Premium</p>
                </Link>
                <Link to={"/AboutUs"}>
                  <p>About Us</p>
                </Link>
                <Link
                  to={
                    userRole === "teacher" ? "/testmaestro" : "/cuestionarioA"
                  }
                >
                  <p>Test</p>
                </Link>
              </div>
            </div>

            <div className="footer-section">
              <h3>Who do we help?</h3>
              <ul>
                <li>Teachers who want to improve classes</li>
                <li>Teachers in their formation path</li>
                <li> Schools Principal's</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <address>
                Email:{" "}
                <a href="mailto:teachmenow@tustiioweb.com">
                  TeachMeNow@gmail.com
                </a>
                <br />
                Phone Number: +503 0000-0000.
              </address>
            </div>

            <div className="footer-section" id="social-media">
              <h3>Follow us</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/teach_me_nowexpo/?utm_source=ig_web_button_share_sheet">
                  <img className="size-10" src="instagram.png" alt="Ig img" />
                </a>
                <a href="https://www.instagram.com/teach_me_nowexpo/?utm_source=ig_web_button_share_sheet">
                  <img className="size-10" src="twitter.png" alt="X img" />
                </a>
                <a href="https://www.instagram.com/teach_me_nowexpo/?utm_source=ig_web_button_share_sheet">
                  <img className="size-10" src="facebook.png" alt="FB img" />
                </a>
              </div>

              <p>
                <a href="#">Politics and Privacy</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
}
