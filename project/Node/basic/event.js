
let fs = require("fs")
let rs = fs.createReadStream("./demo.txt")
rs.on("open",()=>{
    console.log("file is open")
})
rs.on("close",()=>{
    console.log("file ")
})

let events = require("events")
let eventEmmiter = new events.EventEmitter()

eventEmmiter.on("make",(name)=>{
    console.log(name, "making food")
})

eventEmmiter.emit("make","name1")


