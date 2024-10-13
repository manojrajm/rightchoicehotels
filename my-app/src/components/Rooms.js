import React from 'react';
import './Rooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faParking, 
  faWifi, 
  faHeartbeat, 
  faClock, 
  faPhone, 
  faTaxi, 
  faUtensils, 
  faElevator, 
  faPlug 
} from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(
  faParking, 
  faWifi, 
  faHeartbeat, 
  faClock, 
  faPhone, 
  faTaxi, 
  faUtensils, 
  faElevator, 
  faPlug
);

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      type: 'Double AC',
      image: 'https://www.rightchoicehotels.in/img/rooms/large/DSC_8777.JPG',
      description: 'Rameswaram Hotel Right Choice offers a double bed room accommodation at an affordable cost, providing quality service for a…',
    },
    {
      id: 2,
      type: 'Triple AC',
      image: 'https://www.rightchoicehotels.in/img/rooms/large/DSC_8840.JPG',
      description: 'Rameswaram Hotel Right Choice offers a Triple bed room accommodation at an affordable cost, providing quality service for a comfortable',
    },
    {
      id: 3,
      type: 'Quad AC',
      image: 'https://www.rightchoicehotels.in/img/rooms/large/DSC_8949.jpg',
      description: 'Rameswaram Hotel Right Choice offers a Four bed room accommodation at an affordable cost, providing quality service for a comfortable stay.',
    },
    {
      id: 4,
      type: 'Non-AC',
      image: 'https://www.rightchoicehotels.in/img/rooms/large/cc23e49b-0862-480c-8713-761350f96177.jpg',
      description: 'Rameswaram Hotel Right Choice Double bed room Non A/C accommodation with affordable cost and quality service.',
    },
  ];

  const amenities = [
    { icon: faParking, text: 'Free Parking' },
    { icon: faWifi, text: 'Free Wi-Fi' },
    { icon: faHeartbeat, text: 'Doctor on Call' },
    { icon: faClock, text: '24-Hour Front Desk' },
    { icon: faPhone, text: 'Wake-Up Calls' },
    { icon: faTaxi, text: 'Travel Desk' },
    { icon: faClock, text: 'No Minimum Stay Requirement' },
    { icon: faPlug, text: 'Water Heater' },
    { icon: faTaxi, text: 'Car Pickup & Drop-Off (Surcharge)' },
    { icon: faHeartbeat, text: 'Driver Accommodation (Free)' },
    { icon: faUtensils, text: 'Kitchen for Rent' },
    { icon: faClock, text: '24-Hour Room Service' },
    { icon: faElevator, text: 'Lift' },
    { icon: faPlug, text: 'Power Backup (Generator)' },
    { icon: faPhone, text: '24-Hour Phone Support' },
  ];

  return (
    <main className="rooms" id='#rooms'>
      <div className="container">
        <h1>Our Rooms</h1>
        <div className="room-grid">
          {rooms.map(room => (
            <div className="room-card" key={room.id}>
              <img src={room.image} alt={room.type} className="room-image" />
              <h2>{room.type}</h2>
              <p>{room.description}</p>
              <button className="book-button">Book Now</button>
            </div>
          ))}
        </div>
        
        {/* Amenities Section */}
        <div className="amenities-section">
          <h2>Amenities</h2>
          <ul className="amenities-list">
            {amenities.map((amenity, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={amenity.icon} /> {amenity.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Rooms;
