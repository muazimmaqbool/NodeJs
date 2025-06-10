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

app.post("/person", async (req, res) => {
  /*
    If the promise is resolved, the result of the promise is returned. If the
    promise is rejected, it throws an error that can be caught using
    try...catch
    */
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    // console.log("Saved Person Data:",response)
    res.status(200).json(response);
  } catch (err) {
    console.error("Error saving person:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Method to get person data (fetching person data from database)
app.get("/person", async (req, res) => {
  try {
    //here what it will do is that it will return every record/data from "Person" collection
    const data = await Person.find();
    //console.log("Data Fetched:",data)
    res.status(200).json(data);
  } catch (err) {
    console.log("Error occured while fetching the data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//now hit this url with GET method in postman: http://localhost:3000/person or in chrome (browser generally does GET request)

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

//parametrised API call (see file 24_Parametrized_API_Calls.txt) to get person based on work type
//here using :workType - makes it a variable means anything can be inplace of work
app.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    //checking for workType, so that user enters valid worktype, and only then db validation will be done
    if (workType === "chef" || workType === "manager" || workType === "waiter") {
      //db operation, it will look for the entered workType in the work field of person
      const response = await Person.find({ work: workType });
      //console.log("fetched...");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log("Error while fetching work:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//now test it like this: http://localhost:3000/person/chef, http://localhost:3000/person/manager,...

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
