const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoDb=require('./db');
require('dotenv').config();
mongoDb;
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api',require('./routes/CreateUser'))
app.use('/api',require('./routes/DisplayData'))
app.use('/api',require('./routes/OrderData'))

app.get('/',(req,res)=>{
    res.send("hello Pranav")
})
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
})