// src/components/ReviewSlider.js
import React, { useState } from 'react';
import './ReviewSlider.css';
import Gautham from'../images/review1.jpeg';
import Praveen from'../images/review2.jpeg';
import Joseph from '../images/review3.jpeg';
import Murugan from '../images/review4.jpeg';
const reviews = [
    {
        name: 'Gautham',
        image: Gautham ,
        message: 'Loved my stay! Highly recommend this hotel for its comfort and hospitality.',
        rating: 5,
    },
    {
        name: 'Praveen',
        image: Praveen,
        message: 'Great service with friendly staff made my visit enjoyable.',
        rating: 4,
    },
    {
        name: 'Joseph',
        image: Joseph,
        message: 'Rooms were comfortable and impeccably clean.',
        rating: 5,
    },
    {
        name: 'Priya',
        image: Murugan,
        message: 'A fantastic experience that exceeded my expectations!',
        rating: 3.5,
    }
    
];

const ReviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="review-slider">
                        <h2 className="slider-title">What Our Guests Say</h2> {/* Title added here */}

            <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <img src={review.image} alt={review.name} className="review-image" />
                        <h3>{review.name}</h3>
                        <p>{review.message}</p>
                        <div className="rating">
                            {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                ))}
            </div>
            <button className="nav-button left" onClick={goToPrevious}>
                ❮
            </button>
            <button className="nav-button right" onClick={goToNext}>
                ❯
            </button>
        </div>
    );
};

export default ReviewSlider;
