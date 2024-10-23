import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import './Booking.css'; // Ensure you have the relevant CSS

const Booking = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [roomBookingDetails, setRoomBookingDetails] = useState({
    name: '',
    adults: '',
    children: '',
    rooms: '',
    roomType: 'Double AC',
    email: '',
    address: '',
    mobile: '',
  });
  const [travelBookingDetails, setTravelBookingDetails] = useState({
    name: '',
    adults: '',
    children: '',
    email: '',
    address: '',
    mobile: '',
    carType: 'Sedan',
  });
  const [captchaValue, setCaptchaValue] = useState(null); // State for captcha

  const handleTravelBooking = () => {
    setActiveForm('travel');
  };

  const handleRoomBooking = () => {
    setActiveForm('room');
  };

  const handleRoomChange = (e) => {
    const { name, value } = e.target;
    setRoomBookingDetails({ ...roomBookingDetails, [name]: value });
  };

  const handleTravelChange = (e) => {
    const { name, value } = e.target;
    setTravelBookingDetails({ ...travelBookingDetails, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Store captcha value
  };

  const sendMail = async (details) => {
    try {
      const response = await fetch(`https://rightchoicehotels-1.onrender.com/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: "rightchoicehotels@gmail.com", // Replace with actual recipient's email
          subject: "New Booking Request",
          body: `
          <html>
            <body>
              <h2>Hello Right Choice Hotel,</h2>
              <p>You have a new booking request from <strong>${details.from_name}</strong>.</p>
              <h3>Room Booking Details:</h3>
              <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                  <th style="padding: 8px;">Field</th>
                  <th style="padding: 8px;">Details</th>
                </tr>
                <tr>
                  <td style="padding: 8px;">Name</td>
                  <td style="padding: 8px;">${details.room_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Number of Adults</td>
                  <td style="padding: 8px;">${details.room_adults}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Number of Children</td>
                  <td style="padding: 8px;">${details.room_children}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Number of Rooms</td>
                  <td style="padding: 8px;">${details.room_rooms}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Room Type</td>
                  <td style="padding: 8px;">${details.room_type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Email</td>
                  <td style="padding: 8px;">${details.room_email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Address</td>
                  <td style="padding: 8px;">${details.room_address}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Mobile Number</td>
                  <td style="padding: 8px;">${details.room_mobile}</td>
                </tr>
              </table>
  
              <h3>Travel Booking Details:</h3>
              <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                  <th style="padding: 8px;">Field</th>
                  <th style="padding: 8px;">Details</th>
                </tr>
                <tr>
                  <td style="padding: 8px;">Name</td>
                  <td style="padding: 8px;">${details.travel_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Number of Adults</td>
                  <td style="padding: 8px;">${details.travel_adults}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Number of Children</td>
                  <td style="padding: 8px;">${details.travel_children}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Car Type</td>
                  <td style="padding: 8px;">${details.travel_car_type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Email</td>
                  <td style="padding: 8px;">${details.travel_email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Address</td>
                  <td style="padding: 8px;">${details.travel_address}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Mobile Number</td>
                  <td style="padding: 8px;">${details.travel_mobile}</td>
                </tr>
              </table>
  
              <p>Best wishes,<br>Your Booking Team</p>
            </body>
          </html>
          `.trim(),
          headers: {
            'From': 'Manojraj <gauthamtamizha007@gmail.com>', // Custom From field
            'Reply-To': 'rightchoice<rightchoicehotels@gmail.com>', // Custom Reply-To field
          },
        }),
      });
  
      // Log the response status and body for debugging
      console.log('Response Status:', response.status);
      const result = await response.text();
      console.log('Response Body:', result); // Log the response body
  
      if (!response.ok) {
        throw new Error(result || 'Failed to send email');
      }
  
      console.log('Email sent:', result);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };
  

  const handleRoomSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    // Combine room booking details with captcha
    const combinedRoomDetails = { ...roomBookingDetails, captchaValue };

    // Prepare email details
    const emailDetails = {
      from_name: roomBookingDetails.name,
      room_name: combinedRoomDetails.name,
      room_adults: combinedRoomDetails.adults,
      room_children: combinedRoomDetails.children,
      room_rooms: combinedRoomDetails.rooms,
      room_type: combinedRoomDetails.roomType,
      room_email: combinedRoomDetails.email,
      room_address: combinedRoomDetails.address,
      room_mobile: combinedRoomDetails.mobile,
      travel_name: travelBookingDetails.name || 'N/A',
      travel_adults: travelBookingDetails.adults || 0,
      travel_children: travelBookingDetails.children || 0,
      travel_car_type: travelBookingDetails.carType || 'N/A',
      travel_email: travelBookingDetails.email || 'N/A',
      travel_address: travelBookingDetails.address || 'N/A',
      travel_mobile: travelBookingDetails.mobile || 'N/A',
    };

    console.log('Sending email with details:', emailDetails); // Debugging line
    sendMail(emailDetails);
    
    // Clear the captcha value after submission
    setCaptchaValue(null);
  };

  const handleTravelSubmit = (e) => {
    e.preventDefault();

    // Prepare email details
    const emailDetails = {
      from_name: travelBookingDetails.name,
      room_name: roomBookingDetails.name || 'N/A',
      room_adults: roomBookingDetails.adults || 0,
      room_children: roomBookingDetails.children || 0,
      room_rooms: roomBookingDetails.rooms || 0,
      room_type: roomBookingDetails.roomType || 'N/A',
      room_email: roomBookingDetails.email || 'N/A',
      room_address: roomBookingDetails.address || 'N/A',
      room_mobile: roomBookingDetails.mobile || 'N/A',
      travel_name: travelBookingDetails.name,
      travel_adults: travelBookingDetails.adults,
      travel_children: travelBookingDetails.children,
      travel_car_type: travelBookingDetails.carType,
      travel_email: travelBookingDetails.email,
      travel_address: travelBookingDetails.address,
      travel_mobile: travelBookingDetails.mobile,
    };

    console.log('Sending email with details:', emailDetails); // Debugging line
    sendMail(emailDetails);
  };

  return (
    <div className="booking-container"id='booking'>
      <h1 style={{color:'yellow'}}>Choose Your Booking Type</h1>
      <div className="booking-options">
        <button className="booking-button" onClick={handleTravelBooking}>
          Travel Booking
        </button>
        <button className="booking-button" onClick={handleRoomBooking}>
          Room Booking
        </button>
      </div>

      {/* Room Booking Form */}
      <div className={`booking-form ${activeForm === 'room' ? 'show' : 'hide'}`}>
        <h2>Room Booking Details</h2>
        <form onSubmit={handleRoomSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={roomBookingDetails.name} onChange={handleRoomChange} required />
          <label>Number of Adults:</label>
          <input type="number" name="adults" value={roomBookingDetails.adults} onChange={handleRoomChange} min="1" required />
          <label>Number of Children:</label>
          <input type="number" name="children" value={roomBookingDetails.children} onChange={handleRoomChange} min="0" />
          <label>Number of Rooms:</label>
          <input type="number" name="rooms" value={roomBookingDetails.rooms} onChange={handleRoomChange} min="1" required />
          <label>Room Type:</label>
          <select name="roomType" value={roomBookingDetails.roomType} onChange={handleRoomChange} required>
            <option value="Double AC">Double AC</option>
            <option value="Double Non-AC">Double Non-AC</option>
            <option value="Triple AC">Triple AC</option>
            <option value="Quad AC">Quad AC</option>
          </select>
          <label>Email:</label>
          <input type="email" name="email" value={roomBookingDetails.email} onChange={handleRoomChange} required />
          <label>Address:</label>
          <input type="text" name="address" value={roomBookingDetails.address} onChange={handleRoomChange} required />
          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={roomBookingDetails.mobile} onChange={handleRoomChange} required />

          {/* reCAPTCHA component */}
          <ReCAPTCHA
            sitekey="6LcwbF8qAAAAAN12TJuK4VCWUH9TfUbRqx0tUlcs" // Replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />

          <button type="submit" className="submit-button">Book Room</button>
        </form>
      </div>

      {/* Travel Booking Form */}
      <div className={`booking-form ${activeForm === 'travel' ? 'show' : 'hide'}`}>
        <h2>Travel Booking Details</h2>
        <form onSubmit={handleTravelSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={travelBookingDetails.name} onChange={handleTravelChange} required />
          <label>Number of Adults:</label>
          <input type="number" name="adults" value={travelBookingDetails.adults} onChange={handleTravelChange} min="1" required />
          <label>Number of Children:</label>
          <input type="number" name="children" value={travelBookingDetails.children} onChange={handleTravelChange} min="0" />
          <label>Email:</label>
          <input type="email" name="email" value={travelBookingDetails.email} onChange={handleTravelChange} required />
          <label>Address:</label>
          <input type="text" name="address" value={travelBookingDetails.address} onChange={handleTravelChange} required />
          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={travelBookingDetails.mobile} onChange={handleTravelChange} required />
          <label>Car Type:</label>
          <select name="carType" value={travelBookingDetails.carType} onChange={handleTravelChange} required>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>
          <button type="submit" className="submit-button">Book Travel</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
