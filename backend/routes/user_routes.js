const express = require('express')
const router=express.Router();

const User = require('../models/user_model')


router.post('/Register',(req,res)=>{
    
    const {name,username,password,gender,age,phone_no,address}=req.body
    console.log(username);
    User.findOne({username:username},(err,user)=>{
        if(user){
            res.send("User already exists")
        }
        else{
         const user = new User({name,username,password,gender,age,phone_no,address})
         user.save(err=>{
            if(err)
            res.send(err)
            else
            res.send({message:"User registered successfully"})
         })   
        }
    })
})

router.post('/Login',(req,res)=>{
    
    const {username,password}=req.body
    
    User.findOne({username:username},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login successful"})
            }
            else{
                res.send({message:"Wrong credentials"})
            }

        }
        else{
            res.send({message:"User is not registered"})
        }
    })
    

})

module.exports = router;