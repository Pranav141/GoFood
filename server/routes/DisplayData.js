const express = require('express');
const router=express.Router();
// const jwt=require('jsonwebtoken');

router.get('/foodData',async (req,res)=>{
try {
    // console.log("here");
    const fetch_data = await mongoose.connection.db.collection("food_items");
            // console.log(fetch_data);
            fetch_data.find({}).toArray(async (err, data) => {
                const foodCategory=await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(async(err,catData)=>{
                    if (err) {
                        console.log(err);
                        res.send("error",error);
                    }
                    else {
                        // console.log(data);
                        global.food_items=data;
                        global.foodCategory=catData;
                    }
                })
            })
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
