import React from "react";
import "./CSS/Footer.css";

export function Footer() {
    return (
        <div className="footer-container">
            <footer>
            
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>What are?</h3>
                        <p>We are a platform that supports teachers with practical tools to improve classroom results</p>
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
                            Email: <a href="mailto:teachmenow@tustiioweb.com">TeachMeNow@gmail.com</a><br />
                            Teléfono: +503 0000-0000.
                        </address>
                    </div>

                    <div className="footer-section">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><img src="R.png" alt="Facebook" /></a>
                            <a href="#" aria-label="Twitter"><img src="twitter-x-logo-png-9.png" alt="Twitter" /></a>
                            <a href="#" aria-label="Instagram"><img src="instagram-social-media-icon-symbol-design-element-vector-42845212.jpg" alt="Instagram" /></a>
                        </div>
                        <p><a href="#">Politics and Privacy</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
