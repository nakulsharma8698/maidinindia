const mongoose = require('mongoose');
var express = require('express') 
var app = express();
const PORT = 4000;

var router = express.Router();
require("dotenv").config();
const cors = require('cors');
app.use(cors());
const accountSid = process.env.ACCOUNT_SID;
const authToken= process.env.AUTH_TOKEN;
const verifySid=process.env.VERIFY_SID;

const twilioClient = require('twilio')(accountSid, authToken);
var UserSchema = require('./models/user'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/verify', require('./routes/verify'));

router.get('/getcode', async (req, res) => {
    twilioClient
        .verify
        .services(verifySid)
        .verifications
        .create({
            to: `+91${req.query.phonenumber}`,
            channel: req.query.channel
        })
        .then(data => {
            res.status(200).send(data);
        })
});

router.get('/verifycode', async (req, res) => {
    twilioClient
        .verify
        .services(verifySid)
        .verificationChecks
        .create({
            to: `+91${req.query.phonenumber}`,
            code: req.query.code
        })
        .then(data => {
            res.status(200).json(data);
        });
});
module.exports = router;
/*app.listen(4000, function() {

    console.log('App running on port 4000');

});*/