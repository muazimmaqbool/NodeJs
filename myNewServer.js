//Note: This serverfile is used after studying 25_Express_Router.txt

const express = require("express");
const app = express();
//importing database connection
const db = require("./db");

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //here it will convert the json to js object and save it inside: req.body

//Model name Person now can be used to do all database work for makeing changes in Person
//const Person = require("./Modals/Person"); //Now used inside personRoutes.js file
//const MenuItem = require("./Modals/MenuItem"); //Now used inside menuRoutes.js file

app.get("/", (req, res) => {
  res.send("Hello Welcome to my hotel!...");
});

//importing router files for person
const personRoutes = require("./Routes/personRoutes");
const menuRoutes = require("./Routes/menuRoutes");

app.use("/person", personRoutes); //using the router
app.use("/menu", menuRoutes);


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});