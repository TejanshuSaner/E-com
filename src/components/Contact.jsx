import React from 'react';
import './css/contact.css'; 

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-up">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@yourbrand.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Address:</strong> 123 E-commerce St, City, Country</p>
        </div>

        <div className="contact-message">
          <h3>Send Us a Message</h3>
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>
      </div>

  
      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
