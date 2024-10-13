// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';

const images = [
    
    'https://th.bing.com/th/id/OIP.lgCKC0vvPYwhv7AJllRe0QHaEw?rs=1&pid=ImgDetMain',
    'https://wallpapercave.com/wp/wp9920427.jpg',
    'https://www.treebo.com/blog/wp-content/uploads/2018/08/16-Stellar-Places-to-Visit-in-Rameshwaram.jpg',
    'https://www.rightchoicehotels.in/img/smallbanner/DSC_8949.JPG',
    'https://images.pexels.com/photos/4141715/pexels-photo-4141715.jpeg'
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="hero-overlay" />
            <div className="hero-content">
            <h1 className="hero-title">Welcome to RightChoice Hotels</h1>
                <p className="hero-subtitle">Experience luxury and comfort like never before</p>
                <a href="#" className="hero-button">Explore Our Rooms</a>
            </div>
        </header>
    );
};

export default Hero;
