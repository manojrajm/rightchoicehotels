// src/components/WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import for WhatsApp icon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Phone icon from solid icons
import './WhatsAppButton.css'; // Create a CSS file for styling

const WhatsAppButton = () => {
    const phoneNumber = '7871140888'; // Your WhatsApp number without the '+'
    const callNumber = '7200255666'; // Your call number without the '+'

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const handleCallClick = () => {
        window.open(`tel:${callNumber}`);
    };

    return (
        <>
            <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <div className="tooltip">Chat with us on WhatsApp!</div>
            </div>
            <div className="call-button" onClick={handleCallClick}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <div className="tooltip">Call us!</div>
            </div>
        </>
    );
};

export default WhatsAppButton;
