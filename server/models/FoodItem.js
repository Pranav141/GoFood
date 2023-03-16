const mongoose = require('mongoose')

const { Schema } = mongoose;

const foodItem=new Schema({})

module.exports = mongoose.model('food_items',foodItem )