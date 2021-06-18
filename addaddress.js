var express = require('express') 
var app = express() 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
const cors = require('cors');
app.use(cors());
var addressModel = require('./models/useraddress.js'); 
var router = express.Router();
//var fs = require('fs'); 
//var path = require('path'); 
//var multer = require('multer'); 
  

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("Address Connected successfully");
})
router.post('/', async function(req, res) {
    console.log(req.body);
         var mobile=req.body.mobile;
         var address=req.body.address;
         if(!mobile && !password)
         {
             return res.json({message:"Please enter address"});
         }
         let user = await addressModel.findOne({
            mobile
          });
          console.log(req.body.address.city);
          var newaddress = new addressModel({
            mobile :req.body.mobile,
            address:{
                street1: req.body.address.street1,
                street2:req.body.address.street2,
                city:req.body.address.city,
                state:req.body.address.state,
                pincode:req.body.address.pincode,
            },
        });
        var addAddress = new addressModel({
            address:{
                street1: req.body.address.street1,
                street2:req.body.address.street2,
                city:req.body.address.city,
                state:req.body.state,
                pincode:req.body.address.pincode,
            }
        });
        console.log(addAddress);
          if (!user)
           {
            newaddress.save(function(err, userr){
                if(err){
                  console.log(err);
                  res.json({message:`Address can't  be stored`});
                }
                else
                  res.json('Address Stored Successfully');
             });
           }
         else
         {
             addressModel.findOneAndUpdate(
                { mobile: req.body.mobile }, 
                { $push: { address: { street1: req.body.address.street1,
                    street2:req.body.address.street2,
                    city:req.body.address.city,
                    state:req.body.state,
                    pincode:req.body.address.pincode}  } },
               function (error, success) {
                     if (error) {
                         return res.json({message: "Error in Storing Address"});
                     } else {
                        return res.json({message: "Address Stored Successfully2"})
                     }
                 });
         }
        
        
     });

     router.get('/', function(req,res){
        addressModel.find({}, (err, items) => { 
          if (err) { 
              console.log(err); 
          } 
          else
          {
              res.json(items);
          }
      
          console.log(items);
      }); 
      });
module.exports = router;