
const mongo = require("mongoose")

const userSchema = new mongo.Schema({
    _id:mongo.Schema.Types.ObjectId,
    name:String,
    place:String,
    mobile:Number,
    age:Number
})

module.exports = mongo.model("users",userSchema)