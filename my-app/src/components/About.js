import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        const radios = document.querySelectorAll('input[type="radio"]');
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % radios.length;
            radios[currentIndex].checked = true;
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <main className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h1>About Right Choice Hotels</h1>
                        <h2>Your Comfort, Our Commitment</h2>
                        <p>
                            At Right Choice Hotels, we believe that every stay should feel like home. Nestled in the heart of Rameswaram, our hotel is just moments away from the revered Ramanathaswamy Temple and the serene coastline.
                        </p>
                        <p>
                            Experience a blend of spirituality and luxury, designed to cater to your every need. Whether you're on a pilgrimage or a leisurely getaway, we offer a tranquil escape that enriches your journey.
                        </p>
                        <h3>Why Choose Us?</h3>
                        <ul className="benefits-list">
                            <li>🌟 Warm and Welcoming Hospitality</li>
                            <li>🛌 Luxurious Comforts and Tailored Amenities</li>
                            <li>📍 Unbeatable Location Near Spiritual Landmarks</li>
                            <li>🌿 A Serene Environment for Reflection and Relaxation</li>
                            <li>🌏 Personalized Travel Arrangements</li>
                        </ul>
                        <p>
                            Join us for an unforgettable experience where every moment is cherished and every guest is treated like family. Your extraordinary journey begins here!
                        </p>
                    </div>
                    <div className="about-images">
                        <ul className="slides">
                            <input type="radio" name="radio-btn" id="img-1" defaultChecked />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/70ea319b-2851-4c97-8fee-449ac9a5fe16.jpg" alt="Hotel Image 1" />
                                </div>
                            </li>
                            <input type="radio" name="radio-btn" id="img-2" />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/DSC_8961.JPG" alt="Hotel Image 2" />
                                </div>
                            </li>
                            <input type="radio" name="radio-btn" id="img-3" />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/WhatsApp_Image_2024-07-10_at_10.52_.58_AM_(2)(1)_.jpeg" alt="Hotel Image 3" />
                                </div>
                            </li>
                            <input type="radio" name="radio-btn" id="img-4" />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/WhatsApp_Image_2024-10-08_at_5.51_.41_PM_.jpeg" alt="Hotel Image 4" />
                                </div>
                            </li>
                            <input type="radio" name="radio-btn" id="img-5" />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/DSC_8768.JPG" alt="Hotel Image 5" />
                                </div>
                            </li>
                            <input type="radio" name="radio-btn" id="img-6" />
                            <li className="slide-container">
                                <div className="slide">
                                    <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" alt="Hotel Image 6" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
