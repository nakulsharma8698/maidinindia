var mongoose = require('mongoose'); 
  
var user_bookSchema = new mongoose.Schema({ 
    mobile:{ type: String, required: true }, 
    bookings:[{
        booking_id:{ type: String,  },
        maid_id:{ type: String,  },
        maid_mobile:{type:String,},
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
  
module.exports = new mongoose.model('userBook', user_bookSchema); 
