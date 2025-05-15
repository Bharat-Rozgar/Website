import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Payment.css';

function Payment2() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;

  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!userData || typeof userData !== 'object' || Array.isArray(userData)) {
        alert('Invalid user data. Please fill the form again.');
        navigate('/work');
        }
    }, [userData, navigate]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!transactionId.trim()) {
      alert('Please enter the UTR / Transaction ID.');
      return;
    }

    setLoading(true);

      const finalData = {
        ...userData,
        transactionId: transactionId.trim(),
      };

      try {
        const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        finalData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        const result2 = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPLICANT_2,
        finalData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        navigate('/thank');
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
  };

  return (
    <>
      <Navbar />
      <div className="offer-form-container">
        <form className="styled-form" onSubmit={handleSubmit}>
          <h2>Payment Details</h2>
          <br />
          <div className="order-summary">
            <table className="summary-table">
              <thead>
                <tr><th>Application fees</th><th>Subtotal</th></tr>
              </thead>
              <tbody>
                <tr><td>12th</td><td>₹58.00</td></tr>
                <tr><td><strong>Subtotal</strong></td><td><strong>₹58.00</strong></td></tr>
                <tr className="total-row"><td><strong>Total</strong></td><td><strong>₹58.00</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className='heading-center'>You can pay using the QR code given below.</h3>
          <div className="form-group full-width">
            <img src="Qr.webp" alt="QR Code" style={{ maxWidth: '300px', margin: '1rem auto', display: 'block' }} />
          </div>

          <h3 className='heading-center'>After payment, enter the transaction ID below.</h3>
          <div className="form-group full-width">
            <label>Transaction (UTR) ID *</label>
            <input
              type="text"
              placeholder="Enter UTR / Transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
            />
          </div>

          <div className="form-group full-width">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Payment2;
