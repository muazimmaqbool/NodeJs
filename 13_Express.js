/*
https://expressjs.com/

->Express.js:
    -Used to create servers in nodejs very easily i.e creating APIs easily
    -It's is popular framework for building web applications and APIs using Node.js

  install express.js using this command: npm i express
*/

//importing express js
const express = require('express') 
//the blue print of express() is now inside 'app' its like instance of express
const app = express() //'app' can be any name but generally all developers use 'app'

/* ->app.get takes to parameters:
      1)to which endpoint it needs to be shown  kon se endpoint pei ye show hona chahiye)   
      2)
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//3000 is port
app.listen(3000)