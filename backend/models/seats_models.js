const mongoose = require('mongoose')

const seats_db = new mongoose.Schema({
    "6E-289":[],
    "6E-546":[],
    "6E-657":[],
    "6E-689":[],
    "6E-732":[],
    "6E-745":[],
    "6E-766":[],
    "6E-776":[],
    "6E-788":[],
    "6E-789":[],
    "6E-327":[]
})

module.exports = seats = mongoose.model('Seats',seats_db); 