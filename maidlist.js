var express = require('express') 
//var app = express() 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose') 
//const cors = require('cors');
//app.use(cors());
var maidModel = require('./models/maid'); 
var router = express.Router();
  

router.use(bodyParser.urlencoded({extended: false}))
router.use(express.json());

mongoose.connect('mongodb://localhost/maidinIndia', { useNewUrlParser: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MaidList Connected");
});


router.get('/', function(req,res){
    maidModel.find({}, (err, items) => { 
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