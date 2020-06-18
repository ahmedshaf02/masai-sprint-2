
const express = require("express")
const router = express.Router()
const mongo =  require("mongoose")
const requireLogin = require("../middleware/requireLogin")
const Post = mongo.model("Post")
const User = mongo.model("User")



router.get("/user/:id",requireLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{

        Post.find({postedBy:req.params.id})
        .populate("postedBy","_id name")
        .exec((err,post)=>{
            if(err){
                res.status(422).json({error:err})
            }
            res.json({user,post})
        })
        
    }).catch(error=>res.status(404).json({error:"User not found"}))
})
    
       
module.exports = router