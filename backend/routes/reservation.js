const express = require('express')
const router = express.Router()
const reservation = require('../models/reservation')

router.post('/Ticket_reservation',(req,res)=>{
    const {source,destination,travel_date,fare,flight_number,airline_company,seat_number,ticket_id,phone_number,username,name}=req.body
    
    reservation.findOne({flight_number:flight_number,seat_number:seat_number},(err,reserve)=>{
        
        if(reserve && seat_number==reserve.seat_number){
            
            res.send({message:"Seat already reserved"})
        }
        else{
            const reserve = new reservation({source,destination,travel_date,fare,flight_number,airline_company,seat_number,ticket_id,phone_number,username,name})
            reserve.save(err=>{
                if(err){
                    res.send({message:"Error while reserving"})
                }
                else{
                    res.send({message:"The seat is reserved"})
                }
            })
        }
    })

})

router.post('/Seat',(req,res)=>{
    const flight_number=req.body.flight_number
    reservation.find({flight_number:flight_number},(err,flight)=>{
        if(err) throw err;
        res.send(flight)
    })
})

module.exports = router;


