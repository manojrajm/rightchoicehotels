// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import FoodOrder from './components/FoodOrder';
import RameswaramPlaces from './components/RameswaramPlaces';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ReviewSlider from './components/ReviewSlider';



const App = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <About/>
            <Rooms/>
            <Booking/>
            <FoodOrder/>
            <RameswaramPlaces/>
            <ReviewSlider/>
            <Footer/>
           <WhatsAppButton/>
        </div>
    );
};

export default App;
