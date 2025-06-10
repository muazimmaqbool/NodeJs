const express =require("express")
const router=express.Router()

//this router is exported in bottom and imported in myNewServer.js

//Post route to add new person
//here in place of app we have router, i.e previously it was app.post(...)
router.post("/person", async (req, res) => {
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
router.get("/person", async (req, res) => {
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

//parametrised API call (see file 24_Parametrized_API_Calls.txt) to get person based on work type
//here using :workType - makes it a variable means anything can be inplace of work
router.get("/person/:workType", async (req, res) => {
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


module.exports=router;