//How to make server at 46:45

const http = require("http");

//or
/* http.createServer((request,response,next)=>{

  -> 'request' is  looking for something like search data in google i.e request and google gives o/p
  thats 'response' and next is callback function for now we don't need it its generally required
  for complex projects where we have multiple routes etc (so we have removed next for now)
  these names can be anything like : r,a,n-> i.e first paramter is always request, then response, then next
  */
const server=http.createServer((request, response) => {
    response.end("working") //will be shown on screen
});

//important
server.listen(2000,"localhost",()=>{
    console.log("server is working on http://localhost:2000")
})
//hold and click on localhost:2000 in terminal it will open in browser

//we can write it in better way
//see code 5.1server.js