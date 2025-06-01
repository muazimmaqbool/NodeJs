const express = require("express");
const app = express();
//importing database connection
const db = require("./db");

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //here it will convert the json to js object and save it inside: req.body

//Model name Person now can be used to do all database work for makeing changes in Person
const Person = require("./Modals/Person");

app.get("/", (req, res) => {
  res.send("Hello Welcome to my hotel!...");
});

//Creating POST method:
//req: (request) contains data which client is sending
//res: (response) contains data which you want to send back to the client

/*why commented: see in line number:58
app.post("/person", (req, res) => {
 //Important:
 // here we whoever send data to this route i.e /person , here the data which client sends needs to be saved in the database but before
 // that the data which is send via POST request and the data is processed by body parser and body parser saves it inside "req.body"
  
  const data = req.body; //Assuming the request body contains the person data

  //Now we want to create new document/data which should of person type (Person is modal/schema of db see above)
  //Creating a new person document using the mongoose model
  const newPerson = new Person(data);
  //or you can save data like this
  //  newPerson.name=data.name,
  //  newPerson.name=data.age
  //  newPerson.work=data.work,
  // newPerson.phone=data.phone,
  // ...


// Note:
// when ever their is a data transfer between client and sever, the server sends a signal called status signal
// check http status code and their meaning here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status


  //-> Now save the newPerson to the database
  //this .save function returns callBack function which contains error and saved data
 newPerson.save((error,savedPersonData)=>{  
  if(error){
    console.error('Error saving person:', error);
    res.status(500).json({ error: 'Internal server error' });
  }else{
    console.log('Data saved');
    res.status(200).json(savedPersonData);
  }
 })
});
*/
//Important:
 //using this above method from app.get() will show error like this: Model.prototype.save() no longer accepts a callback
  //Check document (day-5)
  /*this method using callback on save is removed by nodejs now we use async-await
  Because:  Whatactually callback does, callback is a function that is executed just after
  the execution of another main function, it means the callback will wait until its main function is not executed
  -Callbacks also make code but complicated
  ->To avoid callback we use Aync-await:  it easier to work with asynchronous code, such as network requests, file system operations, ordatabase queries.
  ->In industrial lever everyone uses async-await and try caktch block
  */

//Asyn-await method
app.post("/person",async(req,res)=>{
  /*
    If the promise is resolved, the result of the promise is returned. If the
    promise is rejected, it throws an error that can be caught using
    try...catch
    */
  try{
    const data=req.body
    const newPerson=new Person(data)
    const response=await newPerson.save()
    console.log("Saved Person Data:",response)
    res.status(200).json(response)
  }catch(err){
    console.error('Error saving person:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

/*
->Now Post/save below data to this endpoint: http://localhost:3000/person in postman
{
    "name": "Hilal Ahmad",
    "age": 25,
    "work": "chef",
    "mobile": "123-456-7890",
    "email": "hilalAhmad@example.com",
    "address": "chinkipora, sopore",
    "phone":"7889451263",
    "salary":"25000"
}
*/
//after saving data you will get this message:
/*
Saved Person Data: {
  name: 'Hilal Ahmad',
  age: 25,
  work: 'chef',
  phone: '7889451263',
  email: 'hilalAhmad@example.com',
  address: 'chinkipora, sopore',
  salary: 25000,
  _id: new ObjectId('683c2363806f53933b9d6cad'), //uniqueId given by mongodb
  __v: 0
}
*/
//now you can go to mongoDB compass, refress and you will see "hotels" database inside it will be "people" collection
//and inside "people" you will find this data


//Method to get person data (fetching person data from database)
app.get("/person",async(req,res)=>{
  try{
    const data=await Person.find()
    console.log("Data Fetched:",data)
    res.status(200).json(data)
  }catch(err){
    console.log("Error occured while fetching the data:",err)
    res.status(500).json({ error: 'Internal server error' });
  }
})
//now hit this url with GET method in postman: http://localhost:3000/person or in chrome

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
