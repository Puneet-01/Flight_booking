const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    username:{
        type:String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    phone_no : {
        type : String,
        required : true
    },
    address : {
        type :String,
        required :true
    }
})

module.exports = User = mongoose.model('users',userSchema);