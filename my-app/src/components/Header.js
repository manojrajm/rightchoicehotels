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
    <a href='#'>Home</a>
    <a href='#rooms'>Rooms</a>
    <a href='#about'>About</a>
    <a href='#booking'>Booking</a>
    <a href='#places'>Places</a>
    <a href='#contact'>Contact</a>
    <button className="book-now"><a href='#booking'>Book Now</a></button>
</nav>
        </header>
    );
};

export default Header;
