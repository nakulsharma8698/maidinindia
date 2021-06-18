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

var otp = require('./otp.js');
var maidregister = require('./maidregistration.js');
var user=require('./login.js');
var maidList=require('./maidlist.js');
var address=require('./addaddress')

app.use('/otp', otp);
app.use('/address',address);
app.use('/signup', maidregister);
app.use('/login', user)
app.use('/getmaidlist', maidList)


mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
mongoose.set('useCreateIndex', true);
connection.once('open', function() {
    console.log("MongoDB database MaidLogin connection established successfully");
})
var maidModel = require('./models/maid'); 


app.post('/book', function(req,res){
  console.log(req.body);
  if(!req.body.address_id)
    return res.json({message:'error: please select the address'})
  else
    return res.json({message:''})
})


const  accessTokenSecret= 'hellouser';
app.post('/', async function(req, res) {
    console.log(req.body);
         var mobile=req.body.phonenumber;
         var password=req.body.password;
         if(!mobile && !password)
         {
             return res.json({message:"All fields are required"});
         }
             try {
                 let maid = await maidModel.findOne({
                   mobile
                 });
                 if (!maid)
                   return res.json({
                     message: "error: User does not exist"
                   });
                 const isMatch = await bcrypt.compare(password, maid.password);
                 console.log(isMatch);
                 if (!isMatch)
                   return res.json({
                     message: "Incorrect Password !"
                   });
           
                 const payload = {
                   maid: {
                     id: maid._id
                   }
                 };
              
                 await jwt.sign(
                   payload,
                   "hellouser",
                   {
                     expiresIn: 360000
                   },
                   (err, token) => {
                     if (err) throw err;
                     res.status(200).json({
                       token, mobile
                     });
                   }
                 );
               }
             catch (e) {
                 console.error(e);
                 res.status(500).json({
                   message: "Server Error"
                 });
               }
        
     });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
