const express = require('express');
const router=express.Router();
// const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
router.get('/foodData',async (req,res)=>{
try {
    res.json([global.food_items,global.foodCategory]);
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
