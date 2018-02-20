require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    axios = require('axios'),
    mail_controller = require('./Controllers/mail_controller.js');


const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))


//=====| ENDPOINTS |==================================

//---Send message through nodemailer---/
app.post('/api/send_email', mail_controller.sendEmail) // set up the end point


// for setting up online
const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})


const PORT = 8084;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));