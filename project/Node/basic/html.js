
let http = require("http")

let page = `
<h1>heading from server</h1>
<button>from server</button>
`

http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(page)
    res.end()
}).listen(4000)