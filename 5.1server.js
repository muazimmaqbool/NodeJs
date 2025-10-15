//see previous code first 5.0server.js file

const http=require("http");

const PORT=4000;
//import if we don't mention the port number it will go to PORT 80 i.e by default
const hostname="localhost"

//creating server
const myServer=http.createServer((req,res)=>{
    res.end("<h1>Hello Node.js</h1>")
})

//listening to the server
myServer.listen(PORT,hostname,()=>{
    console.log(`Server is on: http://${hostname}:${PORT}`);
})
//important press ctrl+c to close the server
//now see in next code 5.2server.js

//another server
const serverTwo=http.createServer((req,res)=>{
    res.end("This is second server in same file")
})
serverTwo.listen(5000,hostname,()=>{
    console.log(`second server running on: http://${hostname}:5000`)
})