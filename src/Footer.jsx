import React from "react";
import "./CSS/Footer.css";

export function Footer() {
    return (
        <div className="footer-container">
            <footer>
            
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Who are we?</h3>
                        <p>We are a platform that supports teachers with practical tools for more effective classes.</p>
                    </div>

                    <div className="footer-section">
                        <h3>Who do we benefit?</h3>
                        <ul>
                            <li>Teachers looking to improve their classes.</li>
                            <li>Future teachers in training.</li>
                            <li>School coordinators and principals.</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact us</h3>
                        <address>
                            Email: <a href="mailto:teachmenow@tustiioweb.com">teachmenow@tustiioweb.com</a><br />
                            Phone: +503 0000-0000.
                        </address>
                    </div>

                    <div className="footer-section">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><img src="R.png" alt="Facebook" /></a>
                            <a href="#" aria-label="Twitter"><img src="twitter-x-logo-png-9.png" alt="Twitter" /></a>
                            <a href="#" aria-label="Instagram"><img src="instagram-social-media-icon-symbol-design-element-vector-42845212.jpg" alt="Instagram" /></a>
                        </div>
                        <p><a href="#">Policies and Privacy</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
