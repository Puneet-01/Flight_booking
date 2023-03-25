const mongoose = require('mongoose')

const reservation_db = new mongoose.Schema({
    source:{
        require:true,
        type:String
    },
    destination:{
        require:true,
        type:String
    },
    travel_date:{
        require:true,
        type:Date
    },
    
    fare:{
        require:true,
        type: Number
    },
    flight_number:{
        require:true,
        type:String
    },
    airline_company:{
        require:true,
        type:String
    },
    seat_number:{
        require:true,
        type:Number
    },
    ticket_id:{
        required:true,
        type:Number
    },
    phone_number : {
        required:true,
        type : String
    },
    username:{
        type: String,
        required :true
    },
    name:{
        type:String,
        required : true
    }
})

module.exports = reservation = mongoose.model('reservation',reservation_db);