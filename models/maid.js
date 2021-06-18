var mongoose = require('mongoose'); 
  
var maidSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    email:{ type: String, required: true }, 
    mobile:{ type: String, required: true }, 
    pic: { type: String,  },
    dob:{ type: String,  }, 
    gender:{ type: String,  }, 
    address:{
        street1:{ type: String,  },
        street2:{ type: String,  },
        city:{ type: String,},
        state:{ type: String,  },
        pincode:{ type: String,  }
    },
    location:{
        latitude:{ type: String, },
        longitude:{ type: String,  },
    },
    experience: { type: Number,  },
    password:{ type: String, required: true },
    adhar:  { type: String},
    aadhar: { type: String},
    expert: { type: String, },

    
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('Maid', maidSchema); 
