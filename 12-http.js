const http = require('http')
const server = http.createServer((req,res)=>{
//console.log(req)
if(req.url === '/'){
    res.end('Welcome to home page')
}
if(req.url ==='/about'){
    res.end('Here is our short history')
}
res.end(`
    <h1>oops!!!</h1>
    <p>page requested dosent exists</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)