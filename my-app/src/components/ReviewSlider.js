// src/ReviewSlider.js
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './ReviewSlider.css';

const CARD_TYPE = 'CARD';

const Card = ({ card, index, moveCard, setCurrentIndex }) => {
    const [, ref] = useDrag({
        type: CARD_TYPE,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: CARD_TYPE,
        hover(item) {
            if (item.index !== index) {
                moveCard(item.index, index);
                item.index = index;

                // Update currentIndex to center the moved card
                setCurrentIndex(index);
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="card">
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.message}</p>
            <div className="rating">{'★'.repeat(card.rating) + '☆'.repeat(5 - card.rating)}</div>
        </div>
    );
};

const ReviewSlider = () => {
    const [cards, setCards] = useState([
        { name: 'Person 1', image: 'https://via.placeholder.com/150', message: 'Staying at this hotel was an incredible experience! The staff were friendly, the rooms were spacious, and the amenities exceeded my expectations.', rating: 4 },
        { name: 'Person 2', image: 'https://via.placeholder.com/150', message: 'I absolutely loved my stay here! The atmosphere was welcoming, the food was delicious, and the location was perfect for exploring the area', rating: 5 },
        { name: 'Person 3', image: 'https://via.placeholder.com/150', message: 'My stay was decent, but there were a few issues. The room was comfortable, but the service could have been better.', rating: 3 },
        { name: 'Person 4', image: 'https://via.placeholder.com/150', message: 'Highly recommend!', rating: 5 },
        { name: 'Person 5', image: 'https://via.placeholder.com/150', message: 'Very nice hotel with excellent amenities. The only drawback was a slight delay in check-in, but everything else was top-notch', rating: 4 },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [cards.length]);

    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = [...cards];
        const [movedCard] = updatedCards.splice(fromIndex, 1);
        updatedCards.splice(toIndex, 0, movedCard);
        setCards(updatedCards);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="slider">
                <h1>Customer Reviews</h1>
                <div className="slider-container" style={{ display: 'flex', transform: `translateX(-${(currentIndex * 100) / cards.length}%)` }}>
                    {cards.map((card, index) => (
                        <Card key={index} index={index} card={card} moveCard={moveCard} setCurrentIndex={setCurrentIndex} />
                    ))}
                </div>
                <button className="nav-button left" onClick={goToPrevious}>❮</button>
                <button className="nav-button right" onClick={goToNext}>❯</button>
            </div>
        </DndProvider>
    );
};

export default ReviewSlider;
