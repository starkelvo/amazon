     const router = require("express").Router()
     const Product = require("../models/product")
     
     const upload =  require("../middlewares/upload-photo")
     
     //**************POST REQUEST - Create a new product************//
      
    router.post("/products", upload.single("photo"), async(req, res) =>{
    try {
    let product = new Product()
    product.title = req.body.title
    product.description =req.body.description
    product.photo = req.file.location
    product.price = req.body.price
    product.stockQuantity =req.body.stockQuantity
    

    await product.save()
    res.json({
    status: true,
    message: "successfully saved..."
    })

    } catch (err) {
    res.status(500).json({
    success: false,
    message: err.message
    })
    
    }
    
    })



     //**************GET REQUEST - get all product*****************//
          router.get("/products", async (req, res) =>{
          try{
          let products = await Product.find()
          res.json({
          success:true,
          products: products
          })
  
          }
          catch(err){
          res.status(500).json({
          success: false,
          message: err.message
          })
          }
          })


     //**************GET REQUEST - get a single product************//

          router.get("/products/:id", async (req, res) =>{
          try{
          let product = await Product.findOne({_id: req.params.id})
          res.json({
          success:true,
          product: product
          })
  
          }
          catch(err){
          res.status(500).json({
          success: false,
          message: err.message
          })
          }
          })

     //**************PUT REQUEST - Update a single product*git***********//
          router.put("/products/:id", upload.single("photo"), async (req, res) =>{
          try{
          let product = await Product.findOneAndUpdate({_id: req.params.id}, {
          $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.categoryID,
          photo: req.file.location,
          description: req.body.description,
          owner: req.body.ownerID

          }
          
          },
          {upsert: true})
          res.json({
          success:true,
          updatedproduct: product
          })
  
          }
          catch(err){
          res.status(500).json({
          success: false,
          message: err.message
          })
          }
          })




     //**************DELETE REQUEST - delete a single product************//
     router.delete("/products/:id", async(req, res) =>{
     try {
     let deleteProduct = await Product.findOneAndDelete({_id: req.params.id})
     if (deleteProduct){
     res.json({
        status:true,
        message: "successfully deleted"
     })
     }

     } catch (err) {
     res.status(500).json({
     success: false,
     message: err.message
     }) 
     }
     })


     module.exports = router;