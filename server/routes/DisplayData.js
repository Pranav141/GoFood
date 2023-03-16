const express = require('express');
const router=express.Router();
// const jwt=require('jsonwebtoken');

router.get('/foodData',(req,res)=>{
try {
    // console.log("here");
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
