import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Offer.css';

function Offer1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    state: '',
    country: 'India',
    board10: '',
    passingYear10: '',
    percentage10: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    const requiredFields = [
      'firstName', 'lastName', 'fatherName', 'motherName', 'gender', 'dob',
      'address', 'email', 'city', 'pincode', 'state', 'country',
      'board10', 'passingYear10', 'percentage10'
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')}`);
        return;
      }
    }

    navigate('/payment1', { state: formData });
  };

  return (
    <>
      <Navbar />
      <div className="offer-form-container">
        <form className="styled-form" onSubmit={handleNext}>
          <h2>Personal Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Father Name *</label>
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter Father's Name" required />
            </div>
            <div className="form-group">
              <label>Mother Name *</label>
              <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter Mother's Name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender *</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Date of Birth *</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address *</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your Address here" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} placeholder="Enter your phone no. " onChange={handleChange} pattern="[0-9]{10}" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email here" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Town / City *</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city here" required />
            </div>
            <div className="form-group">
              <label>Postcode / ZIP *</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter your postcode here" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State *</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your state here" required />
            </div>
            <div className="form-group">
              <label>Country / Region *</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>
          </div>

          <h2>Education Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label>10th Board *</label>
              <input type="text" name="board10" value={formData.board10} onChange={handleChange} placeholder="Enter your board name" required />
            </div>
            <div className="form-group">
              <label>Passing Year *</label>
              <input type="text" name="passingYear10" value={formData.passingYear10} onChange={handleChange} placeholder="Enter your passing year" required pattern="[0-9]{4}" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Percentage *</label>
            <input type="number" name="percentage10" value={formData.percentage10} onChange={handleChange} placeholder="Enter your percentage" required min="0" max="100" step="0.01" />
          </div>

          <div className="form-group full-width">
            <button type="submit" className="submit-btn">Next</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Offer1;
