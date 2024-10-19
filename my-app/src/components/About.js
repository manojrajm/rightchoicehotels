import React, { useEffect } from 'react';
import './About.css';

// Import images from the local directory
import nandiHallImg1 from '../images/nandi2.jpeg';
import nandiHallImg2 from '../images/nandi3.jpeg';

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
                    <div className="about-text hotel">
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
                            <li>📍 Unbeatable Location 400m Near Temple</li>
                            <li>🌿 A Serene Environment for Reflection and Relaxation</li>
                            <li>🌏 Personalized Travel Arrangements</li>
                        </ul>
                        <p>
                            Join us for an unforgettable experience where every moment is cherished and every guest is treated like family. Your extraordinary journey begins here!
                        </p>
                        <div className="slides">
                            <input type="radio" name="hotel-radio-btn" id="hotel-img-1" defaultChecked />
                            <div className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/70ea319b-2851-4c97-8fee-449ac9a5fe16.jpg" alt="Hotel Image 1" />
                                </div>
                            </div>
                            <input type="radio" name="hotel-radio-btn" id="hotel-img-2" />
                            <div className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/DSC_8961.JPG" alt="Hotel Image 2" />
                                </div>
                            </div>
                            <input type="radio" name="hotel-radio-btn" id="hotel-img-3" />
                            <div className="slide-container">
                                <div className="slide">
                                    <img src="https://www.rightchoicehotels.in/img/gallery/large/WhatsApp_Image_2024-07-10_at_10.52_.58_AM_(2)(1)_.jpeg" alt="Hotel Image 3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-images nandi-hall">
                        <h1>Nandi Hall</h1>
                        <p>Our versatile Nandi Hall is perfect for a variety of activities:</p>
                        <ul className="nandi-features">
                            <li>
                                🎶 <strong>Bhajans and Kirtans:</strong> Celebrate the rich tradition of devotional music. Our space is ideal for Bhajans and Kirtans, where participants can immerse themselves in rhythmic chants that uplift the spirit.
                            </li>
                            <li>
                                📖 <strong>Storytelling Sessions:</strong> Offers a cozy environment for storytelling sessions that cater to all ages, fostering creativity through engaging tales from mythology and folklore.
                            </li>
                            <li>
                                🍽️ <strong>Large Dining Capacity:</strong> Perfect for hosting gatherings, celebrations, or community meals, ensuring an exceptional dining experience for all guests.
                            </li>
                            <li>
                                🔄 <strong>Spacious for Versatile Use:</strong> Designed to be flexible, catering to various events such as workshops, meetings, and cultural activities, with an open layout for easy reconfiguration.
                            </li>
                        </ul>
                        <div className="slides">
                            <input type="radio" name="nandi-radio-btn" id="nandi-img-1" defaultChecked />
                            <div className="slide-container">
                                <div className="slide">
                                    <img src={nandiHallImg1} alt="Nandi Hall Interior" />
                                </div>
                            </div>
                            <input type="radio" name="nandi-radio-btn" id="nandi-img-2" />
                            <div className="slide-container">
                                <div className="slide">
                                    <img src={nandiHallImg2} alt="Nandi Hall Setup" />
                                </div>
                            </div>
                            {/* Add more images as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
