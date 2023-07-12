//see previous code first

const http=require("http");

const PORT=4000;
//import if we don't mention port number it will go to PORT 80 i.e by default
const hostname="localhost"

const server=http.createServer((req,res)=>{
    res.end("<h1>Hello Node.js</h1>")
})

server.listen(PORT,hostname,()=>{
    console.log(`Server is: http://${hostname}:${PORT}`);
})
//import press ctrl+c to close the server
//now see in next code 5.2server.js