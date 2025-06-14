const express =require("express")
//Router is used to manager routes/endpoints
const router=express.Router()

//this router is exported in bottom and imported in myNewServer.js

/*Note: here i have removed /person in all routes of because we are adding this person in myNewSever.js file like this:
    //importing router files for person
    const personRoutes=require('./Routes/personRoutes')
    app.use('/person',personRoutes)//using the router
*/

const Person = require("../Modals/Person");

//Post route to add new person
//here in place of app we have router, i.e previously it was app.post(...)
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
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
router.get("/:workType", async (req, res) => {
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

//Updating person data via PUT request:
//this id is variable it can be any name like person_Id, _id, etc...
router.put("/:id",async(req,res)=>{
  try{
    const personID=req.params.id; //Extracting the id from the URL paramter
    const updatedPersonData=req.body; //updated given/entered by the user

    // .findByIdAndUpdated is predefined method in mongoDb
    const response=await Person.findByIdAndUpdate(personID,updatedPersonData,{
      new:true, //means it will return the updated document in response
      runValidators:true, //means it check for validation which we have put for Person Schema/Modals see Person.js file in inside Modals folder
    })
    console.log("response:",response)
    //if the person to be updated is not found i.e id is wrong and in that case response will be nothing
    if(!response){
      return res.status(404).json({error:"Person not found!"})
    }
    console.log("Data Updated:",response)
    res.status("200"),json(response)
  }catch(error){
    console.log("Error while updating person data", error);
    res.status(500).json({ error: "Internal server error" });
  }
})


module.exports=router;