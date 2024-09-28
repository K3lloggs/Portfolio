// Import dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to handle root path
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});



// Configure your email transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // From .env
        pass: process.env.EMAIL_PASS, // From .env
    },
});

app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your Gmail address
        subject: `Portfolio response from ${email}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
