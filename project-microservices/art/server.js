const express = require('express')
const app = express()
const dotenv=require("dotenv").config()
const bodyParser=require("body-parser");
const morgan=require("morgan");
const expressValidator=require("express-validator")
const { default: mongoose } = require('mongoose');
const postRoutes = require('./routes/index.js');
//mongooose connection
mongoose.connect(process.env.MONGO_URI,{useNewURLParser: true}).then(()=>console.log("mongoose database connected"))
mongoose.connection.on('error',err => {
    console.log(`DB connection error: ${err.message}`);
})
//midlware
app.use(bodyParser.json())
app.use(expressValidator());
app.use("/" , postRoutes);
app.use(morgan("dev"))
app.use('/uploads', express.static('uploads'))













app.listen(3000,(req,res) => {
    console.log('server is running');
})