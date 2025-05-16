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
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section connect-us">
                    <h3>Contact</h3>
                    <ul className="contact-info">
                        <li><span className="icon" role="img" aria-label="Phone">📍</span>Belapur East, Sector 12, CBD</li>
                        <li><span className="icon" aria-label="Phone"></span>Navi Mumbai, Maharashtra, Pin: 400641</li>
                        <li><span className="icon" role="img" aria-label="Email">✉️</span> bharatrozgar2@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;