const express = require('express') 
const app = express() 
//importing database connection
const db=require('./db')

app.get('/', (req, res) => {
  res.send('Hello Welcome to my hotel!...')
})

app.listen(3000,()=>{
  console.log("Server is listening on port 3000")
})