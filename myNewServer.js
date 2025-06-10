//Note: This serverfile is used after studying 25_Express_Router.txt


const express = require("express");
const app = express();
//importing database connection
const db = require("./db");

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //here it will convert the json to js object and save it inside: req.body

//Model name Person now can be used to do all database work for makeing changes in Person
const Person = require("./Modals/Person");
const MenuItem = require("./Modals/MenuItem");

app.get("/", (req, res) => {
  res.send("Hello Welcome to my hotel!...");
});






//saving menuitems data
//POST METHOD to save menu item
app.post("/menuNew", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Menu Saved:", response);
    res.status(200).json(response);
  } catch (err) {
    console.error("Error saving Menu:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//Getting menu data: http://localhost:3000/menu
app.get("/menu", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while fetching menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//importing router files for person
const personRoutes=require('./Routes/personRoutes')
app.use('/',personRoutes)//using the router

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
