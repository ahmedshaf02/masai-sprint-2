
const http = require("http")
const data = [
    {name:"name1",age:20,email:"name1@gmail.com"},
    {name:"name2",age:22,email:"name1@gmail.com"},
    {name:"name3",age:25,email:"name1@gmail.com"}

]
http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write(JSON.stringify(data))
    res.end()
}).listen(4000)