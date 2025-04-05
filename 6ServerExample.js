//first see previous codes: 5.0server.js, 5.1server.js and 5.2server.js

//here we will load file on display:
//Creating html pages for home, about and contact to display them using file system and server on web browser
//These files are inside HtmlPages folder

const http = require("http"); //used to work with servers
const fs=require("fs"); //used to work with files

const port = 5000;
const hostname = "localhost";
//reading html files in synchronous mode 
//in synchronous mode because i want the files to load first
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