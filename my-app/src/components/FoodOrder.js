import React, { useState } from 'react';
import './FoodOrder.css';
import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpeg';

const images = [menu1, menu2];

const FoodOrder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [foodName, setFoodName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userEmail, setUserEmail] = useState(''); // State for user email

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const sendMail = async (orderDetails) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: "gauthamtamizha007@gmail.com", // Your email
          subject: "New Food Order Request",
          body: `
          <html>
            <body>
              <h2>New Food Order Request</h2>
              <p>You have received a new food order:</p>
              <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                  <th style="padding: 8px;">Field</th>
                  <th style="padding: 8px;">Details</th>
                </tr>
                <tr>
                  <td style="padding: 8px;">Food Name</td>
                  <td style="padding: 8px;">${orderDetails.foodName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Room Number</td>
                  <td style="padding: 8px;">${orderDetails.roomNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Mobile Number</td>
                  <td style="padding: 8px;">${orderDetails.mobileNumber}</td>
                </tr>
              </table>
              <p>Best wishes,<br>Your Food Service Team</p>
            </body>
          </html>
          `.trim(),
          from: userEmail, // Set the user's email as the sender
        }),
      });

      const result = await response.text();
      if (!response.ok) {
        throw new Error(result || 'Failed to send email');
      }

      console.log('Email sent:', result);
      alert('Order placed successfully! We will contact you shortly.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending order. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = { foodName, roomNumber, mobileNumber };
    console.log('Food Order:', orderDetails);
    sendMail(orderDetails); // Send email with food order details
    // Clear form fields after submission
    setFoodName('');
    setRoomNumber('');
    setMobileNumber('');
    setUserEmail(''); // Clear user's email
  };

  return (
    <div className="food-order-container">
      <h1>Menu Slider</h1>
      <div className="slider">
        <button onClick={prevImage} className="slider-button">❮</button>
        <img src={images[currentIndex]} alt="Food" className="slider-image" />
        <button onClick={nextImage} className="slider-button">❯</button>
      </div>

      <form onSubmit={handleSubmit} className="order-form">
        <label>Food Name:</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        <label>Room Number:</label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
        <label>Mobile Number:</label>
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <label>Your Email:</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Order Now</button>
      </form>
    </div>
  );
};

export default FoodOrder;
