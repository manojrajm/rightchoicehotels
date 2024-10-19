const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load environment variables
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email sending route
app.post('/api/send-email', (req, res) => {
  const { recipient, subject, body, from } = req.body; // Extract 'from' from the request

  const mailOptions = {
    from: 'gauthamtamizha007@gmail.com', // Use the user's email provided in the request
    to: recipient || 'rightchoicehotels@gmail.com', // Send to your email by default
    subject: subject,
    html: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
const PORT = process.env.PORT || 5000; // Change to 5000 or another port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
