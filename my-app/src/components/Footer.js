import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import WhatsApp icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +91 78711 40666 <br/>
            <FontAwesomeIcon icon={faPhone} /> +91 78711 40888 <br/>
            <FontAwesomeIcon icon={faPhone} /> +91 72002 55666
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> rightchoicehotels@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 21/90-C-5, Eswariamman Kovil Street Rameswaram-623 526
          </p>
          <p>
            <FontAwesomeIcon icon={faBed} /> Book a Room: <a href="/booking">Book Now</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} /> 
            <a href="https://wa.me/919871140666" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
          </p>
        </div>
        
        <div className="map">
          <iframe 
            title="Google Map Location" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4402966234243!2d79.31672627374525!3d9.294197290778115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e3d8ba3fbe61%3A0xd381fb2738b17cc3!2sRIGHTCHOICE%20HOTELS!5e0!3m2!1sen!2sin!4v1728739292565!5m2!1sen!2sin" 
            width="400" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          />
        </div>
      </div>


      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RightChoiceHotels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
