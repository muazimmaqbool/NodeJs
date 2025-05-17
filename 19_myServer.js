const express = require('express') 
const app = express() 
//importing database connection
const db=require('./db')

//Model name Person now can be used to do all database work for makeing changes in Person
const Person=require("./Modals/Person")

app.get('/', (req, res) => {
  res.send('Hello Welcome to my hotel!...')
})

app.listen(3000,()=>{
  console.log("Server is listening on port 3000")
})