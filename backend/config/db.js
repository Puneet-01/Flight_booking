const mongoose = require('mongoose')



const connectDb = async () =>{
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect("mongodb://127.0.0.1:27017/flight_booking",{
            useNewUrlParser: true,
            
            useUnifiedTopology: true
        })
        console.log("MongoDb is connected");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectDb;