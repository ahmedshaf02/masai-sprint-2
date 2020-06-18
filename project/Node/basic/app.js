
let express = require("express")

let app = express()

//use of express

// app.get("/",(req,res)=>{
//     res.send("hey using express js")
// }).listen(4000)

//routing
// app.get("/",(req,res)=>{
//     res.send("Home page ")
// })

// app.get("/about",(req,res)=>{
//     res.send("about page ")
// })

// app.get("/login",(req,res)=>{
//     res.send("login page ")
// })
// app.post("/login",(req,res)=>{
//     res.send("login page other post")
// })
// app.put("/login",(req,res)=>{
//     res.send("login page other put")
// })
// app.delete("/login",(req,res)=>{
//     res.send("login page other delete")
// })

// app.get("/contact",(req,res)=>{
//     res.send("contact page")
// })


// middleware
// const middleware = (req,res,next)=>{
//     console.log("current url is ",req.originalUrl)
//     next()
// }

// app.use(middleware)
// app.get("/",(req,res)=>{
//     res.send("Home page")
// })

// app.get("/about",(req,res)=>{
//     res.send("about page")
// })
// app.get("/login",(req,res)=>{
//     res.send("login page")
// })

// app.listen(4000)

// // router middleware
// const router = express.Router()
// const middleware = require("./middleware")

// app.get("/",(req,res)=>{
//     res.send("Home page")
// })

// router.get("/about",middleware,(req,res)=>{
//     res.send("about page")
// })
// router.get("/login",middleware,(req,res)=>{
//     res.send("login page")
// })
// app.use("/",router)


//loading html file in routes
// const router = express.Router()
// const middleware = require("./middleware")

// app.get("/",(req,res)=>{
//     // res.send("Home page")
//     res.sendFile(__dirname+"/Home.html")
// })

// router.get("/about",middleware,(req,res)=>{
//     // res.send("about page")
//     res.sendFile(__dirname+"/About.html")
// })
// router.get("/login",middleware,(req,res)=>{
//     // res.send("login page")
//     res.sendFile(__dirname+"/Login.html")
// })
// app.use("/",router)



// template engine for dynamic routing
// const express  = require("express")
// const app = express()

// app.set("view engine","ejs")
// app.get("/profile/:id",(req,res)=>{
//     console.log(req.params.id)
//     res.render("Profile",{name:req.params.id})
// })
const bodyParser= require("body-parser")
const urlencoder  = bodyParser.urlencoded()

app.use("/styles",express.static("styles"))
app.set("view engine","ejs")
app.get("/profile/:name",(req,res)=>{
    console.log(req.params.name)
    data = {email:"name@email.com",place:"mumbai",skill:["js","react","node"]}
    res.render("Profile",{name:req.params.name,data:data})
})
app.get("/about",(req,res)=>{
    res.render("About")
})
app.get("/login",(req,res)=>{
    console.log(req.query)
    res.render("Login")
    
})
app.post("/login",urlencoder,(req,res)=>{
    console.log(req.body.email)

    res.render("Home")
    
})
app.get("/",(req,res)=>{
    res.render("Home")
})
app.listen(4000)