const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express();

//MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

    //GET - Retrieve data from server
app.get('/', (req, res) =>{
    res.send("Hello from Amazon")
    })
    //POST- send data from frontend
app.post('/', (req, res) =>{
    console.log(req.body.name)
    })
    //LISTEN TO PORT
app.listen(3000, (err) =>{
    if(err){
    console.log(err)
    } else {
    console.log("CONNECTED TO PORT 3000...")
    }
    })