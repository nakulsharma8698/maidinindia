var express = require('express') 
var app = express() 
//var cloudinary = require('cloudinary').v2;
var bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose') 
const cors = require('cors');
const PORT = 4000;
const saltRounds = 10;
const bcrypt = require('bcrypt');
app.use(cors());
var userModel = require('./models/user'); 
var router = express.Router();
//var fs = require('fs'); 
//var path = require('path'); 
//var multer = require('multer'); 
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database User Registration connection established successfully");
})

//var upload = multer({ storage: storage }).single('file'); 
//var upload = multer({ storage: storage }); 
router.post('/', async (req, res) => { 
    console.log(req.body);
    const mypassword=req.body.password;
    await bcrypt.hash(mypassword, saltRounds,(err, hash) => {
        var newuser = new userModel({
            name: req.body.name,
            email:req.body.email,
            mobile :req.body.mobile,
            password: hash
        });
        newuser.save(function(err, userr){
            if(err){
              console.log(err);
              res.json({message:'User already exists'});
            }
            else
              res.json({message: 'Registered Successfully'});
         });
        //console.log(obj);
      });

     /* userModel.findOne({'mobile':req.body.mobile})
      .then(function(ress) {
         
          if(!ress)
          {
              userModel.create(obj, (err, item) => { 
                  if (err) { 
                      console.log(err);
                      res.json(err); 
                  } 
                  else { 
                     console.log(req.body);
                     res.json({message:'Registered Successfully'});
                  } 
              }); 
          }
      else
          res.json({message:'User already exists'});
      });*/
}); 
const  accessTokenSecret= 'hellouser';
router.post('/user', async function(req, res) {
    console.log(req.body);
         var mobile=req.body.phonenumber;
         var password=req.body.password;
         if(!mobile && !password)
         {
             return res.json({message:"All fields are required"});
         }
             try {
                 var user = await userModel.findOne({
                   mobile
                 });
                 var name=user.name.split(" ")[0];
                 console.log(name);
                 if (!user)
                   return res.json({
                     message: "error: User does not exist"
                   });
                 const isMatch = await bcrypt.compare(password, user.password);
                 console.log(isMatch);
                 if (!isMatch)
                   return res.json({
                     message: "Incorrect Password !"
                   });
           
                 const payload = {
                   user: {
                     id: user._id
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
                       token, mobile, name
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
router.get('/', (req, res) => { 
    console.log(req.body);
    userModel.find({"mobile": req.body.mobile}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else
        {
            res.json(items);
        }
    
        console.log(items);
            //res.render('app', { items: items });  
    }); 
});
module.exports = router;