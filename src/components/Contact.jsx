import './Contact.css';

function Contact() {
    return (
        <div className="contact-section" id="contact">
            <h2 className="contact-heading">Get in Touch</h2>
            <div className="contact-underline"></div>

            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input id="phone" type="tel" placeholder="Your Phone Number" required/>
                </div>
                <div className="form-group">
                    <input id="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;