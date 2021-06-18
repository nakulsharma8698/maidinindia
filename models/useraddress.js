var mongoose = require('mongoose'); 
  
var addressSchema = new mongoose.Schema({ 
    mobile:{ type: String, required: true }, 
    address:[{
        street1:{ type: String,  },
        street2:{ type: String,  },
        city:{ type: String,},
        state:{ type: String,  },
        pincode:{ type: String,  }
    }]

    
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('Address', addressSchema); 
