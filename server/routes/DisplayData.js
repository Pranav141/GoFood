const express = require('express');
const router=express.Router();
// const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const FoodCategory = require('../models/FoodCategory');
const FoodItem = require('../models/FoodItem');
// const foodCategory = require('../models/FoodCategory')

router.get('/foodData',async (req,res)=>{
try {
    const foodCategory= await FoodCategory.find();
    const foodData=await FoodItem.find();
    res.json([foodData,foodCategory]);
} catch (err) {
    console.error(err)
}
})

// router.post('/getName',(req,res)=>{
//     console.log(req.body.authToken);
//     console.log(jwt.decode(req.body.authToken));
//     res.json("hello");
// })
module.exports=router
