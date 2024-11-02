//here we will load file on display
/* creating files html for home,about and contact to display them using 
       file system and server on web browser
*/
const http = require("http");
const fs=require("fs");

const port = 5000;
const hostname = "localhost";
//reading html files in synchronous mode
const home=fs.readFileSync('./HtmlPages/home.html',"utf-8");
const about=fs.readFileSync('./HtmlPages/about.html',"utf-8");
const contact=fs.readFileSync('./HtmlPages/contact.html',"utf-8");
const work=fs.readFileSync("./HtmlPages/work.html","utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end(about);
  }
  if (req.url === "/contact") {
    return res.end(contact);
  }
  if(req.url==="/work"){
    return res.end(work)
  }
  else {
    return res.end("<h1>404 Page Not Found!</h1>");
  }
});

server.listen(port,hostname,()=>{
    console.log(`Running server is: http://${hostname}:${port}`);
})