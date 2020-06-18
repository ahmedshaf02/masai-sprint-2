
const express = require("express")
const app = express()
const PORT = 4000;
const cors = require("cors")

const middleware = (req,res,next)=>{
    console.log("middleware executed")
    next()
}


const mongo = require("mongoose")
const {mongoUrl} = require("./keys")

mongo.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongo.connection.on("connected",()=>console.log("mongoDB connected"))
mongo.connection.on("error",()=>console.log("not connected"))

require("./models/users")
require("./models/post")
app.use(cors())
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/post"))
app.use(require("./routes/user"))


app.listen(PORT,()=>{
    console.log("server is running on port ","http://localhost:"+PORT)
})