const mongoose = require('mongoose')

const flight_db = new mongoose.Schema({
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
    seats:{
        require:true,
        type:Number
    }
})

module.exports = flight = mongoose.model('flight',flight_db);