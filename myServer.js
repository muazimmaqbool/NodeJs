const express = require('express') 
const app = express() 
//importing database connection
const db=require('./db')

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require('body-parser');
app.use(bodyParser.json())//here it will convert the json to js object and save it inside: req.body

//Model name Person now can be used to do all database work for makeing changes in Person
const Person=require("./Modals/Person")

app.get('/', (req, res) => {
  res.send('Hello Welcome to my hotel!...')
})

//Creating POST method:
//req: (request) contains data which client is sending
//res: (response) contains data which you want to send back to the client
app.post('/person',(req,res)=>{
  /*Important:
  here we whoever send data to this route i.e /person , here the data which client sends needs to be saved in the database but before
  that the data which is send via POST request and the data is processed by body parser and body parser saves it inside "req.body"
  */
 const data=req.body //Assuming the request body contains the person data

 //Now we want to create new document/data which should of person type (Person is modal/schema of db see above)
 //Creating a new person document using the mongoose model
 const newPerson=new Person(data)
 //or you can save data like this
//  newPerson.name=data.name,
//  newPerson.name=data.age
//  newPerson.work=data.work,
// newPerson.phone=data.phone,
// ...

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

})
//when ever their is a data transfer between client and sever, the server sends a signal called status signal
//check http status code and their meaning here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

app.listen(3000,()=>{
  console.log("Server is listening on port 3000")
})