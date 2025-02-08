# Right Choice Hotel - Website Development

This repository contains the source code for the **Right Choice Hotel** website, built using **HTML**, **CSS**, **JavaScript**, and a **Node.js** backend using **Nodemailer** for email functionality. The website is designed to provide users with a seamless booking experience, as well as detailed information about the hotel's services and amenities.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Contact Form with Nodemailer](#contact-form-with-nodemailer)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

### Frontend:
- **HTML5**: Used for structuring the content of the website, ensuring semantic elements for better SEO and accessibility.
- **CSS3**: Used for styling and creating a responsive design, utilizing Flexbox and Grid layouts.
- **JavaScript (JS)**: Enhances interactivity, validation of forms, and other dynamic user experiences.

### Backend:
- **Node.js**: Used as the server-side platform to handle HTTP requests and provide dynamic content.
- **Express**: A minimalistic web framework for Node.js, facilitating easier routing and request handling.
- **Nodemailer**: A Node.js module used for sending emails, especially for handling user inquiries through the contact form.

## Setup

To run the project locally, follow the steps below:

### 1. Clone the repository
```bash
git clone https://github.com/manojrajm/rightchoicehotels.git
```

**2. Navigate to the project directory**
```bash
cd rightchoicehotels
```


### 3. Install dependencies
Make sure you have Node.js installed. Then, install the required dependencies by running:
```
 npm install
```

### 4. Run the Server
Start the backend server: 
```
npm start
```
Your website will be available at http://localhost:3000.

### 5. Access the Frontend
Visit http://localhost:3000 in your browser to access the live website.

### Frontend Development
The frontend consists of several pages and sections that allow users to explore hotel services, book rooms, and contact the hotel:

**Home Page:** Introduction to the hotel and key services.

**Rooms Page:** Details of room types, prices, and amenities.

**Contact Page:** Form to submit inquiries or feedback.

**Responsive Design:** CSS media queries ensure the website is mobile-friendly and works across all device sizes.

### Structure:
**HTML:** Organized semantic structure for easy navigation and SEO.
**CSS:** Custom stylesheets for consistent and visually appealing design.
**JavaScript:** Client-side interactions, such as form validation, dynamic content updates, and any other interactivity required.
Backend Development
The backend uses Node.js and Express to serve content and handle user interactions:

### Express Server Setup:
**Install the necessary dependencies:**

bash
``` 
npm install express
```
Basic routing is defined to serve different pages (home, contact, etc.).

The contact form on the frontend sends a POST request to the backend when the user submits the form.

**Nodemailer Integration**
The Nodemailer module is used to handle email functionality when users submit the contact form:

### Install Nodemailer:
```
npm install nodemailer
```
Nodemailer Configuration: Set up Nodemailer in the backend to send email notifications when the contact form is submitted. Here's a simple example of how it's integrated into the server:

**javascript**

```
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  },
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'hotel-email@example.com',
  subject: 'Contact Form Submission',
  text: 'Details of the contact form submission',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

```

### Handling Contact Form Submissions:
When the user submits the form, the backend receives the data and sends an email using Nodemailer.
The email contains the submitted details like the user's name, email, and message.
Contributing
We welcome contributions to the Right Choice Hotel website! To contribute:

### Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Create a pull request.
### License
This project is licensed under the MIT License.

