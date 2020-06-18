

module.exports = (req,res,next)=>{
    console.log("from other file, url is ", req.originalUrl)
    next()
}