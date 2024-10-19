// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';

const images = [
    
    'https://th.bing.com/th/id/OIP.lgCKC0vvPYwhv7AJllRe0QHaEw?rs=1&pid=ImgDetMain',
    'https://wallpapercave.com/wp/wp9198792.jpg',

    'https://wallpapercave.com/wp/wp9920427.jpg',
    'https://i.pinimg.com/564x/cb/0f/f8/cb0ff83f94d69457d1313893ffd4fd77.jpg',
    'https://www.treebo.com/blog/wp-content/uploads/2018/08/16-Stellar-Places-to-Visit-in-Rameshwaram.jpg',
    'https://www.rightchoicehotels.in/img/smallbanner/DSC_8949.JPG',
    'http://localhost:3000/static/media/nandi2.2c1ba8ba06e07bbba267.jpeg',
    
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
