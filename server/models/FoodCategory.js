const mongoose = require('mongoose')

const { Schema } = mongoose;

const foodCategroy = new Schema({});

module.exports = mongoose.model('food_category', foodCategroy)