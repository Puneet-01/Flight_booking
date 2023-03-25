const mongoose = require('mongoose');

const transaction = new Schema({
    transaction_id:{
        type:Number,
        required:true,
        Unique:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    ticket_id:{
        type:String,
        required:true
    }
})

module.exports = transaction = mongoose.model('transaction',transaction);