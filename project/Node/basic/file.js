
let http = require("http")
let fs = require("fs")

// http.createServer((req,res)=>{
//     fs.readFile("main.html",(err,data)=>{
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write(data)
//         res.end()
//     })
// }).listen(4000)

fs.writeFile("write.txt","console.log(data)",(err)=>{
    console.log("data saved")
})
fs.appendFile("write.txt","console.log(data1)",(err)=>{
    console.log("data saved now")
})
