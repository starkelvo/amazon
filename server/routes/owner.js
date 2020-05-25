    const router = require("express").Router()
    const Owner = require("../models/owner")
    

     //********* ********POST REQUEST****************//
    router.post("/owners", async(req, res) =>{
    try{
    let owner = new Owner()
    owner.name = req.body.name
    owner.about = req.body.about
    await owner.save()

    res.json({
    success: true,
    message: "A new owner has been added.."
    })
    }
    catch(err){
    res.status(500).json({
    success: false,
    message: err.message

    })

    }
    })

    //***************** GET REQUEST**************** *//
        router.get("/owners", async (req, res) =>{
        try{
        let owners = await Owner.find()
        res.json({
        success:true,
        owners: owners
        })

        }
        catch(err){
        res.status(500).json({
        success: false,
        message: err.message
        })
        }
        })

        module.exports = router