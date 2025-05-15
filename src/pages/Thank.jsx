import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Thank.css';

function ThankYou() {
  return (
    <>
      <Navbar />
      <div className="thankyou-container">
        <div className="thankyou-checkmark-circle">
          <div className="thankyou-background">
            <div className="thankyou-checkmark"></div>
          </div>
          
        </div>
        <h1>Application Received.</h1>
        <p>Selected candidates will be contacted through the mail id.</p>
      </div>
      <Footer />
    </>
  );
}

export default ThankYou;
