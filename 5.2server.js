//first see previous code
//important at 56:20

const http = require("http");

const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  //console.log(req.url) //will print url like localhost:4000/anyname here (this anyname is printed in terminal)

  if (req.url === "/") {
    //by default
    return res.end("<h1>Home Page</h1>");
  }
  if (req.url === "/about") {
    return res.end("<h1>About Page</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>Contact Page</h1>");
  }
  if (req.url === "/services") {
    return res.end("<h1>Services Page</h1>");
  }
  if(req.url==="/work"){
    return res.end("<h1>This Is The Work Page</h1>");
  } 
  else{
    return res.end("<h1>404 Page Not Found!</h1>");
    //for other urls this will be shown
  }
  //so when page loads it shows localhost:4000 and o/p: Home page
  // then type manually localhost:4000/about and o/p: About Page
  //lly for all
});

server.listen(PORT, hostname, () => {
  console.log(`Server is: http://${hostname}:${PORT}`);
});
//see example of server in  : 6ServerExample.js
