import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {


    return (
        <footer className="footer" id='footer'>
            <div className="footer-container">
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/work">Work</a></li>
                    </ul>
                </div>
                <div className="footer-section connect-us">
                    <h3>Connect With Us</h3>
                    <ul className="contact-info">
                        <li><span className="icon" role="img" aria-label="Location">📍</span> 123 Cruise St, Mumbai, India</li>
                        <li><span className="icon" role="img" aria-label="Phone">📞</span> +91 98765 43210</li>
                        <li><span className="icon" role="img" aria-label="Email">✉️</span> info@cruiseemployment.in</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;