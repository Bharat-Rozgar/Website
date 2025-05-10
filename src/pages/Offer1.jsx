import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Offer1.css';

function Offer1() {
    return (
        <>
            <Navbar />
            <div className="offer-form-container">
                <form className="styled-form">
                    <div className="form-row">
                    <div className="form-group">
                        <label>First Name *</label>
                        <input type="text" placeholder="Enter First Name" autofocus="autofocus" />
                    </div>
                    <div className="form-group">
                        <label>Last Name *</label>
                        <input type="text" placeholder="Enter Last Name"/>
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <label>Father Name *</label>
                        <input type="text" placeholder="Enter your Father's Name" />
                    </div>
                    <div className="form-group">
                        <label>Mother Name *</label>
                        <input type="text" placeholder="Enter your Mother's Name" />
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <label>Gender *</label>
                        <div className="radio-group">
                        <label><input type="radio" name="gender" /> Male</label>
                        <label><input type="radio" name="gender" /> Female</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth *</label>
                        <input type="date" />
                    </div>
                    </div>

                    <div className="form-group full-width">
                    <label>Address *</label>
                    <input type="text" placeholder="House number and street name" />
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number" />
                    </div>
                    <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" placeholder="Enter Email Address" />
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <label>Town / City *</label>
                        <input type="text" placeholder='Enter your city here'/>
                    </div>
                    <div className="form-group">
                        <label>Postcode / ZIP *</label>
                        <input type="text" placeholder='Enter your pincode here'/>
                    </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                        <label>State / County *</label>
                        <input type="text" placeholder='Enter your state here' />
                    </div>
                    <div className="form-group">
                        <label>Country / Region *</label>
                        <input type="text" defaultValue="India" />
                    </div>
                    </div>

                    <h2>Education Details</h2>

                    <div className="form-row">
                    <div className="form-group">
                        <label>10th board *</label>
                        <input type="text" placeholder='Enter your board in 10th here' />
                    </div>
                    <div className="form-group">
                        <label>10th pass year *</label>
                        <input type="text" placeholder='Enter the year you passed 10th here' />
                    </div>
                    </div>

                    <div className="form-group full-width">
                    <label>10th percentage *</label>
                    <input type="text" placeholder="Enter the percentage scored in 10th" />
                    </div>


                    <div class="order-summary">
                        <table class="summary-table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>10th कक्षा × 1</td>
                                <td>₹58.00</td>
                            </tr>
                            <tr>
                                <td><strong>Subtotal</strong></td>
                                <td><strong>₹58.00</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Shipping</strong></td>
                                <td>Free shipping</td>
                            </tr>
                            <tr class="total-row">
                                <td><strong>Total</strong></td>
                                <td><strong>₹58.00</strong></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="form-group full-width">
                    <button type="submit" className="submit-btn">Submit Application</button>
                    </div>

                </form>
            </div>

            <Footer />
        </>
    )
}

export default Offer1;