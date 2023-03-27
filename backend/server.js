const express = require('express')
const bodyParser = require('body-parser')
const connectDb = require('./config/db')
const cors = require('cors')
const Users = require('./routes/user_routes')
const reservation = require('./routes/reservation')
const seats = require('./routes/seats_routes')
const flight = require('./routes/flight_routes')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
connectDb();

app.use('/',Users);
app.use('/',reservation)
app.use('/',seats)
app.use('/',flight)



app.listen(8080,()=>{
    console.log("Server up and running at the port 8080");
})
