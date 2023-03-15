const express = require('express');
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
require('dotenv').config();
User.findUserByEmail = (email) => {
    return User.findOne({ email: email })
    // or return User.findOne({ email: email })
  }
router.post("/createuser",
  body('email','Invalid email').isEmail(),
  body('email').custom(value => {
    return User.findUserByEmail(value).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }),
  body('name','name Too Short').isLength({ min: 5 }),
  body('password','Password Too Short').isLength({ min: 5 }),
  async(req,res)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors:err.array()});
    }
    else{
        const salt= await bcrypt.genSalt(10);
        let hash=await bcrypt.hash(req.body.password,salt);
        try {
            await User.create({
                name:req.body.name,
                email:req.body.email,
                password:hash,
                location:req.body.location
            })
            res.json({success:true});
        } catch (err) {
            console.log(err);
            res.json({success:false});
        }
    }
})
router.post('/loginuser',async (req,res)=>{
    try {
        const userData=await User.findOne({email:req.body.email});
        if(!userData){
            return res.status(400).json({errors:"Email Not Found",success:false});
        }
        let pwd=bcrypt.compare(req.body.password,userData.password);
        // console.log(userData.name);  
        if(pwd){
            const data={
                user:{
                    id:userData._id,
                    name:userData.name
                }
            }
            const authToken=jwt.sign(data,process.env.jwtSecret);
            res.json({success:true,authToken:authToken});
            
        }
        else{
            return res.status(400).json({errors:"Wrong Password",success:false});            
        }
    } catch (error) {
        res.json({success:false})
    }
    
})

// router.get('/getusedata',async (req,res)=>{
//     try {
//         decode=jwt.decode(req.body.)
//         await User.findOne
//     } catch (error) {
        
//     }
// })
module.exports=router
