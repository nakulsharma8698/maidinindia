var mongoose = require('mongoose'); 
  
var maid_bookSchema = new mongoose.Schema({ 
    mobile:{ type: String, required: true }, 
    bookings:[{
        booking_id:{ type: String,  },
        user_id:{ type: String,  },
        user_mobile:{type: String},
        time:{ type: String,},
        amount:{ type: String,  },
        status:{ type: String,  },
        timeslot:{type:String},
        service_location:{
        street1:{ type: String,  },
        street2:{ type: String,  },
        city:{ type: String,},
        state:{ type: String,  },
        pincode:{ type: String,  }
        }
    }]

    
}); 
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('maidBook', maid_bookSchema); 
