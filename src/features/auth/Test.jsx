// var express = require('express')
// var mongoose = require("mongoose")

// var app = express()

// mongoose.connect("link")



// app.get("/get",async(req,res)=>{
//     var data =  await Course.find({})
//     if(data){
//         res.send(data)
//     }
//     else{
//         res.json({'msg':"no data found"})
//     }
// })


// app.post("/post",async(req,res)=>{
//     var data = req.body
//     try {
//         var dataposting = await Course.save({data})
//         res.send("course saved succesfully")
//     } 
//     catch (error) {
//         res.send(error)
//     }
    
// })


// app.put("/put/:id",async(req,res)=>{
//     try {
//         var dataudating = await Course.UpdateOne({"_id":req.params.id},{"_id":req.body})
//         res.send("courseupdated")
//     } catch (error) {
//         res.json({msg:"erron in updating course"})
//     }
    
// })

// app.delete("/delete/:id",async(req,res)=>{
//      try {
//         var dataudating = await Course.findOneAndDelete({"_id":req.params.id})
//         res.send("coursedeleted")
//      } catch (error) {
//         res.json({msg:"error in deleting course"})
//      }
// })
