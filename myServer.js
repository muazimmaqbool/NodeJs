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

app.listen(3000,()=>{
  console.log("Server is listening on port 3000")
})