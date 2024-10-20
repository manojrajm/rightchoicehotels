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
import TravelPartners from './components/TravelPartners';








const App = () => {
    return (
        <>
            <Header />
            <Hero/>
            <About/>
            <Rooms/>
            <Booking/>
            {/* <FoodOrder/> */}
         
            <RameswaramPlaces/>
            <TravelPartners/>
            <ReviewSlider/>

           
           
            <Footer/>
           <WhatsAppButton/>
        </>
    );
};

export default App;
