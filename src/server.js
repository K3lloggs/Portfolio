const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const validator = require('validator');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// route handle
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Configure tranprter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;
    if (!validator.isEmail(email)) {
        return res.status(400).send({ success: false, error: 'Invalid email address.' });
    }
    if (validator.isEmpty(message)) {
        return res.status(400).send({ success: false, error: 'Message cannot be empty.' });
    }

    let mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER,   
        subject: `Portfolio response from ${email}`,
        text: message,
        replyTo: email,               
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
