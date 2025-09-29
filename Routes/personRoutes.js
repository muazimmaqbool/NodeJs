const express = require("express");
//Router is used to manage routes/endpoints
const router = express.Router();
const{jwtAuthMiddleware,generateToken}=require("../jwt") //check file 39

//this router is exported in bottom and imported in myNewServer.js

/*Note: here i have removed /person in all routes because we are adding this person in myNewSever.js file like this:
    //importing router files for person
    const personRoutes=require('./Routes/personRoutes')
    app.use('/person',personRoutes)//using the router
*/

const Person = require("../Modals/Person");

//Post route to add new person
//here in place of app we have router, i.e previously it was app.post(...)
//Note: replace "/" with "/signup" see file 39_JWT_Implementation.txt
router.post("/signup", async (req, res) => {
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
    const payload={
      id:response.id,
      username:response.username
    }
    // console.log("payload",payload)
    //to checkout about jwt see file 39
    //getting jwt token (here payload to generateToken can be anything here i am taking username)
    //const token=generateToken(response.username)

    //taking proper payload
    const token=generateToken(payload)
    // console.log("token is:",token) past these token in jwt.io website

    // res.status(200).json(response);
    res.status(200).json({response:response,token:token}) //response and token
  } catch (err) {
    console.error("Error saving person:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Method to get person data (fetching person data from database)
router.get("/",jwtAuthMiddleware, async (req, res) => {
  try {
    //here what it will do is that it will return every record/data from "Person" collection in database
    const data = await Person.find();
    //console.log("Data Fetched:",data)
    res.status(200).json(data);
  } catch (err) {
    console.log("Error occured while fetching the data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
//now hit this url with GET method in postman: http://localhost:3000/person or in chrome (browser generally does GET request)

//parametrised API call (see file 24_Parametrized_API_Calls.txt) to get person data based on work type
//here using :workType - makes it a variable means anything can be inplace of workType
router.get("/worktype/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    //checking for workType, so that user enters valid worktype, and only then db validation will be done
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
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
//now test it like this: http://localhost:3000/person/workType/chef, http://localhost:3000/person/workType/manager,...

//Updating person data via PUT request:
//this id is variable it can be any name like person_Id, _id, etc...
router.put("/:id", async (req, res) => {
  try {
    const personID = req.params.id; //Extracting the id from the URL paramter
    const updatedPersonData = req.body; //updated given/entered by the user

    // .findByIdAndUpdated is predefined method in mongoDb
    const response = await Person.findByIdAndUpdate(
      personID,
      updatedPersonData,
      {
        new: true, //means it will return the updated document in response
        runValidators: true, //means it check for validation which we have put for Person Schema/Modals see Person.js file in inside Modals folder
      }
    );
    //if the person to be updated is not found i.e id is wrong and in that case response will be nothing
    if (!response) {
      return res.status(404).json({ error: "Person not found!" });
    }
    console.log("response:", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while updating person data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
/*Do this: Put request for this: http://localhost:3000/person/683c2461141180ddb9a43dc4 (copy valid id from /person endpoint)
 and pass data like this (suppose you want to update the name):
                                                    {
                                                      "name": "Sameer Mir"
                                                    }
*/

//Delete Operation - deleting a person record by id
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extracting the id from the URL paramter
    // .findByIdAndDelete is predefined method in mongoDb, used to delete the record which matches the id
    //Note: As of version 8 there is no more .findByIdAndRemove() in its place you will have to use .findByIdAndDelete()
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found!" });
    }
    console.log("Data deleted");
    return res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.log("Error while deleting a person record", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//getting persons by name:
//http://localhost:3000/person/name/Hilal Ahmad
router.get("/name/:name",async(req,res)=>{
  try{
    const personName=req.params.name;
    const result=await Person.find({name:personName})
    if(!result.length>0){
      return res.status(404).json({ error: "Person not found!" });
    }
    res.status(200).json(result)
  }catch(error){
     console.log("Error while fetching person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})


//Adding login route : http://localhost:3000/person/login
router.post('/login',async(req,res)=>{
  try{
    //Extract username and password from request body
    const{username,password}=req.body;

    //checking whether this username exists in your db or not
    const user=await Person.findOne({username:username});
    //if user doesn't exists or password is wrong, return error
    if(!user || !(await user.comparePassword(password))){
      return res.status(401).json({error:'Invalid username or password'})
    }

    //generate token:
    const payload={
      id:user.id,
      username:user.username
    }
    const token =generateToken(payload)

    //return token in response
    res.json({token})

  }catch(err){
    console.log(err)
    res.status(500).json({error:"Internal server error"})
  }
})

//Profile route
/*what this route will do is that when ever we hit '/person/profile' and pass it a jwt token this route will get the id from the jwt token
and will return the profile linked with that id, so when we hit 'person/login' route and give it username and password and it returns jwt token and then we pass
this jwt to the '/person/profile' route it will give you details of the user who logs in
*/
//http://localhost:3000/person/profile
router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
  try{
    const userData=req.user //basically payload from jwt token
    //console.log("userData:",userData)
    /*
    UserData is like this: userData: {
      id: '68d81928c6293a9f0c4b37de',
      username: 'shahid',
      iat: 1759163777,
      exp: 1759193777
    } //depends on payload we pass in 'login' route also see jwt.js
    */

    //getting id
    const userId=userData.id;
    //getting user details
    const user=await Person.findById(userId)
    res.status(200).json({userProfile:user})
  }catch(err){
    console.log(err)
    res.status(500).json({error:"Internal server error"})
  }
})

module.exports = router;
