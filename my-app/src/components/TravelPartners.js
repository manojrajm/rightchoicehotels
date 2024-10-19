// src/components/TravelPartners.js
import React from 'react';
import './TravelPartners.css'; // Import the CSS file
import MMT from '../images/MMT.jpg';
import Bookings from '../images/booking.png';
import Goibibo from '../images/gobibo.jpg';
import Trip from '../images/tripadvisor.jpg';
import Agoda from '../images/agoda.png';

const TravelPartners = () => {
    const partners = [
        { name: "Booking.com", url: "https://www.booking.com", img: Bookings },
        { name: "Goibibo", url: "https://www.gobibo.com", img: Goibibo },
        { name: "MakeMyTrip", url: "https://www.makemytrip.com", img: MMT },
        { name: "TripAdvisor", url: "https://www.tripadvisor.com", img: Trip },
        { name: "Agoda", url: "https://www.agoda.com", img: Agoda },
    ];

    return (
        <div className="travel-partners">
            <h2>Our Travel Partners</h2>
            <div className="partners-grid">
                {partners.map(partner => (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner" key={partner.name}>
                        <img src={partner.img} alt={partner.name} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default TravelPartners; // Ensure this is the default export
