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
      (app.get() is a method in Express used to define a route that listens for GET requests on a specific URL or endpoint.)
      1)to which endpoint it needs to be shown  kon se endpoint pei ye show hona chahiye) 
        here endpoint is "/", i.e after address when the user types this "/", the user will get data

      2)a callback function that handles the request and response (req, res)
          request->request
          res->response: what response you want to send here it's "Hello Express"

*/
//app.get(path, callback)
app.get('/', (req, res) => {
  res.send('Hello Welcome to my hotel!')
})

//another get request: localhost:3000/menu
app.get('/menu',(req,res)=>{
  res.send('We currently have: Pizza, Burger, Egg Roles, Briyani, Butter Chicken, Tandori Chicken')
})

//localhost:3000/sunday_special
app.get('/sunday_special',(req,res)=>{
  res.send('Sunday Special is: Chicken Pizza + 2 burgers @499 only')
})

//3000 is port
app.listen(3000) // after running the code, go to web browser and type localhost:3000/
