var express = require('express') 
var app = express() 
var cloudinary = require('cloudinary').v2;
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
const cors = require('cors');
const PORT = 4000;
const saltRounds = 10;
const bcrypt = require('bcrypt');
app.use(cors());
var maidModel = require('./models/maid'); 
var router = express.Router();
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database Maid Registration connection established successfully");
})

var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'image_upload') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, Date.now() + '-' +file.originalname ) 
    } 
}); 




cloudinary.config({ 
    cloud_name: 'maidinindia', 
    api_key: '547393512966395', 
    api_secret: 'ntyVL25jk4sUsb8tQ4vhidUoISc' 
  });
 
//var upload = multer({ storage: storage }).single('file'); 
var upload = multer({ storage: storage }); 
router.post('/',  upload.single('pic'), (req, res) => { 
   // if(!req.body.name || req.body.email || req.body.address || req.body.location || req.body.password || req.body.expert)
     //  return res.json({message: "All fields are required"});
    console.log(req.body);
    console.log(req.file);
    const mypassword=req.body.password;
    var password;
    bcrypt.hash(mypassword, saltRounds, (err, hash) => {
       password=hash;
      });
      console.log(password);
    cloudinary.uploader.upload(req.file.path, function(error, result) {
        var obj = { 
            name: req.body.name,
            email:req.body.email,
            mobile :req.body.mobile,
            pic: result.url,
            gender: req.body.gender,
            dob :req.body.dob,
            address:{
                street1: req.body.street1,
                street2:req.body.street2,
                city:req.body.city,
                state:req.body.state,
                pincode:req.body.pincode,
            },
            location:{
                latitude:req.body.lat,
                longitude:req.body.long,
            },
            password:password,
            experience:req.body.experience,
            expert:req.body.expert
            
        }
        maidModel.findOne({'mobile':req.body.mobile})
        .then(function(ress) {
            if(!ress)
            {
                maidModel.create(obj, (err, item) => { 
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
            res.json({message:'Mobile number you have entered already exist try with different number or login with the same number'});
            //throw new Error('Mobile number you have entered already exist try with different number or login with the same number');
        });
       
    });
}); 

router.get('/', (req, res) => { 
    maidModel.find({"mobile":"8076824505"}, (err, items) => { 
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