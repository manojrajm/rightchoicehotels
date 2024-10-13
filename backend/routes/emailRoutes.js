const express = require('express');
const router = express.Router();
const transporter = require('../config/nodemailerConfig');

router.post('/send-email', async (req, res) => {
  const details = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient-email@gmail.com',
    subject: 'New Booking Request',
    html: `
      <p>Hello Right Choice Hotels,</p>
      <p>You have a new booking request from <strong>${details.from_name}</strong>.</p>
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr><th colspan="2">Room Booking Details</th></tr>
        <tr><td>Name</td><td>${details.room_name}</td></tr>
        <tr><td>Number of Adults</td><td>${details.room_adults}</td></tr>
        <tr><td>Number of Children</td><td>${details.room_children}</td></tr>
        <tr><td>Number of Rooms</td><td>${details.room_rooms}</td></tr>
        <tr><td>Room Type</td><td>${details.room_type}</td></tr>
        <tr><td>Email</td><td>${details.room_email}</td></tr>
        <tr><td>Address</td><td>${details.room_address}</td></tr>
        <tr><td>Mobile Number</td><td>${details.room_mobile}</td></tr>
      </table>
      <p>Best wishes,<br>Your Booking Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
