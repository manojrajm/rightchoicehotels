// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>RightChoice Hotels</h1>
            </div>
            <button className="menu-btn" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>✖</button>
                <span>Home</span>
                <span>Rooms </span>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>Login</span>
                <span>Signup</span>
                <button className="book-now">Book Now</button>
            </nav>
        </header>
    );
};

export default Header;
