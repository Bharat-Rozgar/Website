import Navbar from '../components/Navbar.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import Content from '../components/Content.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from "react-router-dom";
import './Homepage.css'

function Homepage() {
    return (
        <>
            <Navbar/>
            <HeroCarousel/>
            <Content/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Homepage;