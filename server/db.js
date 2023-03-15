const mongoose = require('mongoose');
require('dotenv').config();

const mongoDb = async () => {

    await mongoose.connect(process.env.MONGOURI,async (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("connected to db");
            const fetch_data = await mongoose.connection.db.collection("food_items");
            // console.log(fetch_data);
            fetch_data.find({}).toArray(async (err, data) => {
                const foodCategory=await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(async(err,catData)=>{
                    if (err) {
                        console.log(err);
                    }
                    else {
                        // console.log(data);
                        global.food_items=data;
                        global.foodCategory=catData;
                    }
                })
            })
        }
    });
}

module.exports = mongoDb();