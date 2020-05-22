    const express = require("express");
    const morgan = require("morgan");
    const bodyParser = require("body-parser");
    const mongoose = require("mongoose");
    const dotenv = require("dotenv");
    const User = require("./models/user");


    dotenv.config();
    const app = express();
    mongoose.connect(
    process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if(err){
    console.log(err)
    }else{
    console.log("CONNECED TO DATABASE...")
    }
    });

    //************MIDDLEWARE*****************************//
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))


    //*********GET - Retrieve data from server************//
    app.get('/', (req, res) =>{
    res.send("Hello from Amazon")
    })

    //***********POST- send data from frontend*************//
    app.post('/', (req, res) =>{
    let user = new User();
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.save((err) =>{
    if(err){
    res.json(err)
    }else{
    res.json("Successfully Saved...")
        }
    })

    })

    
    //**************** LISTEN TO PORT *********************//
    app.listen(3000, (err) =>{
    if(err){
    console.log(err)
    } else {
    console.log("CONNECTED TO PORT 3000...")
    }
    })