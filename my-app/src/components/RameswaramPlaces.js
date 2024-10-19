import React from 'react';
import './RameswaramPlaces.css';
import pamban from '../images/Pamban.jpeg'; 

const RameswaramPlaces = () => {
  const places = [
    {
      id: 1,
      title: 'Pamban Bridge',
      image: pamban, // Use the imported image here
      description: 'A beautiful bridge connecting Rameswaram to the mainland.',
      location: 'https://maps.app.goo.gl/19c4uDPxWthrKLJ89',
    },
    {
      id: 2,
      title: 'Ramanathaswamy Temple',
      image: 'https://www.rightchoicehotels.in/img/placesinaround/large/ramanathaswamytemple1.jpg',
      description: 'Famous temple known for its architectural beauty and spiritual significance.',
      location: 'https://maps.app.goo.gl/oFJGgEeBPxMWvQK6A',
    },
    {
      id: 3,
      title: 'Dhanushkodi',
      image: 'https://i.pinimg.com/564x/98/97/91/98979134eaf8aae14c7aaf3df4e06fb5.jpg',
      description: 'A ghost town with stunning landscapes and beaches.',
      location: 'https://maps.app.goo.gl/r35BVYKjmL4t395H7',
    },
    {
      id: 4,
      title: 'Agneetheertham',
      image: 'https://www.rightchoicehotels.in/img/placesinaround/large/tour211.jpg',
      description: 'A sacred beach known for its spiritual significance.',
      location: 'https://maps.app.goo.gl/bSipPYn4yqAmkxaL7',
    },
    {
      id: 5,
      title: 'Ramarpatham',
      image: 'https://www.daiwikhotels.com/wp-content/uploads/2016/07/Lord-Rama-in-Rameswaram-281x162.jpg',
      description: 'A historic site associated with the Ramayana.',
      location: 'https://maps.app.goo.gl/opUimoqwBpWfuic57',
    },
    {
      id: 6,
      title: 'Devipattinam',
      image: 'https://www.rightchoicehotels.in/img/placesinaround/large/devipat1.jpg',
      description: 'A coastal village with cultural significance.',
      location: 'https://maps.app.goo.gl/V9wosLt2dLnFTcur5',
    },
    {
      id: 7,
      title: 'Five Faced Anjinayar Temple',
      image: 'https://www.rightchoicehotels.in/img/placesinaround/large/hanuman.jpg',
      description: 'A temple dedicated to Lord Hanuman, featuring five faces.',
      location: 'https://maps.app.goo.gl/kcUfJ2y1Xxw7jWXB8',
    },
  ];

  return (
    <main className="places">
      <div className="container">
        <h1>Explore Rameswaram</h1>
        <div className="places-grid">
          {places.map(place => (
            <div className="card" key={place.id}>
              <img src={place.image} alt={place.title} className="place-image" />
              <div className="content">
                <h2 className="title">{place.title}</h2>
                <p className="copy">{place.description}</p>
                <a href={place.location} target="_blank" rel="noopener noreferrer" className="btn">
                  View Location
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RameswaramPlaces;
