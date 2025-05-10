import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    1

    const navigate = useNavigate();
    const navigateToContact = () => {
        navigate("/");
        setTimeout(() => {
        const contactSection = document.getElementById("footer");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
        }, 100);
    }

    return (
        <div className='navbar'>
            
            <div className='flag'>
                <div className="flag-color saffron"></div>
                <div className="flag-color white">
                    <div className='navbar-logo'>
                        <a href='/'><img src='logo.png' alt='Bharat Rozgaar'/></a>
                    </div>
                    <div className="navbar-links">
                        <a href="/">Home</a>
                        <a href="/work">Work</a>
                        <a onClick={navigateToContact}>Contact</a>
                    </div>
                </div>
                <div className="flag-color green"></div>
    
            </div>
        
        </div>
    )
}

export default Navbar;
