//How to make a servers in node.js

/*
->What is server?
  A server is a computer program that is responsible for preparing and delivering data to other computers (clients)
  server listens to the client and fulfills the needs of the client

  (think of server as the waiter to listens to the customer in the resturant and then goes to kitchen to get food (kitchen here is database/data))

  Example: device(mobile/laptop)<------>Internet<------->Server<------>Database
           here we connect to server through internet

  ->The data which is returned by the server is in JSON format (learn json from : https://github.com/muazimmaqbool/Json-tutorials)
    (json helps to transfer data over the internet easily as it's lightwigth, it's in string format)
    -to convert json string to js object use parse method of json : JSON.parse(jsonString)
    -to convert js object to js string use stringify method of json : JSON.stringify(jsObject)
    -The type of json is string, example: if you take json string like this const json=JSON.stringify(jsObject)
                                                             then do console.log(typeof json) o/p is string
*/

const http = require("http");

/* 
  http.createServer((request,response,next)=>{...}

->'request' is  looking for something like search data in google i.e request and google gives o/p
  that's the 'response' and next is callback function for now we don't need it it's generally required
  for complex projects where we have multiple routes etc (so we have removed 'next' for now)
  these names can be anything like : r,a,n-> i.e first paramter is always request, then response, then next
*/
const server=http.createServer((request, response) => {
    response.end("sever is working fine") //will be shown on screen
});

//important
server.listen(2000,"localhost",()=>{
    console.log("server is working on http://localhost:2000")
})
//hold and click on http://localhost:2000 in terminal it will open in browser

//we can write it in better way see next code 5.1server.js