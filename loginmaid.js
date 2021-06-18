const express = require('express')
var mongoose = require('mongoose');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express()
var router = express.Router();
const cors = require('cors');
const port = 4000;
const bcrypt = require('bcrypt');
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//var otp = require('./otp.js');
//var maidregister = require('./maidregistration.js');

//app.use('/otp', otp);
//app.use('/signup', maidregister);
//app.use('/profile', profile)


mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
mongoose.set('useCreateIndex', true);
connection.once('open', function() {
    console.log("MongoDB database MaidLogin connection established successfully");
})
var maidModel = require('./models/maid'); 

const  accessTokenSecret= 'hellouser';
app.post('/', async function(req, res) {
    console.log(req.body);
         var mobile=req.body.phonenumber;
         var password=req.body.password;
    try {
        let userr = await maidModel.findOne({mobile});
            if (!userr)
              return res.json({
                message: "error: User does not exist"
              });
              //consol.log(bcrypt.compare(password, userr.password));
              const isMatch = await bcrypt.compare(password, userr.password);
              if (!isMatch)
                return res.json({
                  message: "Incorrect Password !"
                });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
        
     });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
