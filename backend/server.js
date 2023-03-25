const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connectDb = require('./config/db')

const app = express()
app.use(bodyParser)
app.use(express.json())
connectDb();





app.listen(8080,()=>{
    console.log("Server up and running at the port 8080");
})
