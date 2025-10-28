import React from "react";
import "./CSS/Footer.css";
 
export function Footer() {
    //terminar los links a las paginas
    return (
        <div className="footer-container">
            <footer>
            
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>We are TeachMeNow</h3>
                        <p>We are a platform that supports teachers with practical tools to improve classroom results</p>
                        
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
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
                            Phone Number: +503 0000-0000.
                        </address>
                    </div>

                    <div className="footer-section">
                        <h3>Follow us</h3>
                        
                        <p><a href="#">Politics and Privacy</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
