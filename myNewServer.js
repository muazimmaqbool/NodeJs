//Note: This serverfile is used after studying 25_Express_Router.txt

const express = require("express");
const app = express();
//importing database connection
const db = require("./db");
require("dotenv").config(); //means server knows that we have .env file
const PORT=process.env.PORT || 3000

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //here it will convert the json to js object and save it inside: req.body

//Model name Person now can be used to do all database work for makeing changes in Person
//const Person = require("./Modals/Person"); //Now used inside personRoutes.js file
//const MenuItem = require("./Modals/MenuItem"); //Now used inside menuRoutes.js file


//Middleware function (used to log every request made to our endpoints) 
const logRquest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made To: ${req.originalUrl}`)
  //Note: the middle will always call the next(), means that we have executed this function you can move to the next phase, if there is another middleware function
  //you can execute that and if not then do rest of the things like getting data from server etc 
  next()// moving on to the next phase
}

//Track log of / endpoint: o/p: [5/7/2025, 10:48:00 am] Request Made To: /
// app.get("/",logRquest, (req, res) => {
//   res.send("Hello Welcome to my hotel!...");
// });

//Tracking logs in all request:
app.use(logRquest)

app.get("/", (req, res) => {
  res.send("Hello Welcome to my hotel!...");
});

//importing router files for person
const personRoutes = require("./Routes/personRoutes");
const menuRoutes = require("./Routes/menuRoutes");

app.use("/person", personRoutes); //using the router
app.use("/menu", menuRoutes);
//trackig log on menu
//app.use("/menu",logRquest,menuRoutes)


app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});