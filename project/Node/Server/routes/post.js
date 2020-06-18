
const express = require("express")
const router = express.Router()
const mongo =  require("mongoose")
const requireLogin = require("../middleware/requireLogin")
const Post = mongo.model("Post")
module.exports = router

router.post("/createpost",requireLogin,(req,res)=>{
    const {title,body,image} = req.body
    if(!title || !body || !image){
        return res.status(422).json({error:"please add all the feilds"})
    }
    console.log(req.user)
    req.user.password = undefined
    const post  = new Post({
        title,
        body,
        image,
        postedBy: req.user

    })
    post.save().then(user=>{
        res.json({post:user})
    }).catch(err=>console.log(err))
})

router.get("/allpost",requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .populate("comment.postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>console.log(err))
})

router.get("/mypost",requireLogin,(req,res)=>{
    console.log
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>console.log(err))
})

router.put("/like",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{new:true}
    )
    .populate("postedBy","_id name")
    .populate("comment.postedBy","_id name")
    .exec((err,data)=>{
        if(err){
            return  res.status(422).json({error:err})
        }
        else{
            res.json(data)
        }
    })
    
})

router.put("/unlike",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{new:true}
    )
    .populate("postedBy","_id name")
    .populate("comment.postedBy","_id name")
    .exec((err,data)=>{
        if(err){
         return   res.status(422).json({error:err})
        }
        else{
            res.json(data)
        }
    })
    
})

router.delete("/deletepost/:postId",requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .populate("comment.postedBy","_id name")
    .exec((err,result)=>{
        if(err || !result){
         return   res.status(422).json({error:err})
        }
        if(result.postedBy._id.toString() === req.user._id.toString()){
            result.remove()
            .then(result=>{
                res.json(result)
            })
            .catch(err=>console.log(err))
        }
    })
})

router.put("/comment",requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comment:comment}
    },{new:true}
    )
    .populate("comment.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
         return   res.status(422).json({error:err})
        }
        res.json(result)
    })
})
