
const express = require("express")
const app  = express()

const mongo = require("mongoose")
mongo.connect("mongodb+srv://ahmedshaf:GaUjihNXNFamn3mi@cluster0-s3efd.mongodb.net/Database?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// .then(()=>console.log("connect"))
// to get data
const User = require("./users")
// User.find({},(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data[0].name)
// })
// to send data
// const data = new User({
//     _id : new mongo.Types.ObjectId(),
//     name:"user2",
//     age:22,
//     place:"Mumbai",
//     mobile:72389423
// }
// )

// data.save().then((res)=>console.log(res))
// .catch(err=>console.log(err))

const bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
// api get
// api.get("/users",(req,res)=>{
//     User.find().select("name").then((data)=>{
//         res.status(200).json(data)
//     })
// })
// app.listen(4000)

// api post
app.post("/user",jsonParser,(req,res)=>{
    res.send(req.body.user)
    const data = new User({
        _id:mongo.Types.ObjectId(),
        name:req.body.name,
        age:req.body.age,
        place:req.body.place,
        mobile:req.body.mobile
    })
    data.save().then((result)=>{
        res.status(201).json(result)
    }).catch(error=>console.log(error))
})
app.listen(4000)
// api delete
api.delete("user/:id",(req,res)=>{
    User.deleteOne({_id:req.params.id}).then((data)=>{
        res.status(200).json(data)
    }).catch(error=>console.log(error))
})
// api put
api.put("user/:id",jsonParser,(req,res)=>{
    User.updateOne({_id:req.params.id},{$set:{
        name:req.body.name,
        age:req.body.age
    }}).then((data)=>{
        console.log(data)
        .catch(error=>console.log(error))
    })
})
// api search
api.get("/search/:name",(req,res)=>{
    let regex = new RegExp(req.params.name,"i")
    User.find({name:regex}).then((data)=>{
        res.status(200).json(data)
        console.log(data)
    }).catch(error=>console.log(error))
})
