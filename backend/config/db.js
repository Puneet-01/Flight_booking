const mongoose = require('mongoose')
const config = require('config')


const connectDb = async () =>{
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect("mongodb://127.0.0.1:27017/flight_booking",{
            useNewUrlParser: true,
            useFindAndModify : false,
            useUnifiedTopology: true
        })
        console.log("MongoDb is connected");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectDb;