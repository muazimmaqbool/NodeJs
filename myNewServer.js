//Note: This serverfile is used after studying 25_Express_Router.txt

const express = require("express");
const app = express();
//importing database connection
const db = require("./db");

//Learn about this in 20_Body_Parser.txt file
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //here it will convert the json to js object and save it inside: req.body


const PORT=process.env.PORT || 3000

require("dotenv").config(); //means server knows that we have .env file
//importing router files for person
const personRoutes = require("./Routes/personRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const Person = require("./Modals/Person");

//learn about passport in 33_Authentication.txt
const passport=require("passport")
//using passport-local strategy, means Authenticating users via username and passport
const LocalStrategy=require("passport-local").Strategy;

//Authentication code:
//always written like this: username, password, and done: the names could be different
passport.use(new LocalStrategy(async(userName,password,done)=>{
  //authentication logic
  try{
    console.log("Received Credentials:",userName, password)
    //finding do we have any user/person with this username in person table
    const user=await Person.findOne({username:userName})
    if(!user){
      //done is a callback function provided by passport.js it gives the signal of the completion of an authentication attempt (either success or fail)
      //done() takes three parameters: error , user, info
      return done(null, false, {message:"Incorrect Username!"})
    }
    const isPasswordMatch=user.password === password?true:false
    if(isPasswordMatch){
      return done(null,user)
    }else{
      return done(null,false,{message:"Incorrect Password!"})
    }
  }catch(error){
    return done(error)
  }
}))

//initializing authenticating function:
app.use(passport.initialize())
const localAuthMiddleware=passport.authenticate('local',{session:false})


//Model name Person now can be used to do all database work for makeing changes in Person
//const Person = require("./Modals/Person"); //Now used inside personRoutes.js file
//const MenuItem = require("./Modals/MenuItem"); //Now used inside menuRoutes.js file


//Middleware function (used to log every request made to our endpoints) 
const logRquest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made To: ${req.originalUrl}`)
  //Note: the middle will always call the next(), means that we have executed this function you can move to the next phase, if there is another middleware function
  //you can execute that and if not then do rest of the things like getting data from server etc 
  next()// moving on to the next phase
}
//➡️: Learn about next function below:

//Track log of / endpoint: o/p: [5/7/2025, 10:48:00 am] Request Made To: /
// app.get("/",logRquest, (req, res) => {
//   res.send("Hello Welcome to my hotel!...");
// });

//Tracking logs in all request:
app.use(logRquest) //generally used this way

app.get("/",localAuthMiddleware, (req, res) => {
  res.send("Hello Welcome to my hotel!...");
});

app.use("/person",localAuthMiddleware, personRoutes); //using the router
app.use("/menu",localAuthMiddleware, menuRoutes);
//trackig log on menu
//app.use("/menu",logRquest,menuRoutes)


app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});

/* 
➡️ : Important on Middleware
if we don't call next() in middleware function then it won't go to the next part i.e it won't
 show the response i.e will not go to the server, it will stuck in the middleware,
 try after removig next() in logRequest function, you will see time and url in console but now the response in the screen/postman

 ->In Express.js the next() is the callback function that signal to Express.js that the current middleware function has
 completed its processing and it's time to move on to the next middleware function or route handler in the chain

  -> Understanding next() function diagram:
                         (🟢 = represents a middleware function)
                   | All middleware has access to req,res and next |
                   |                                               |
  -----Request---->|  🟢next()->🟢next()->🟢next()->🟢next()->🟢  |--- Response---> 
                   |                                               |
                   |                                               |


  -> Middleware Stack:
    
                   |                                 |
                   |                                 |
  -----Request---->|  🟢 next()->🟢  next()->   🟢  |--- Response---> 
                   |   |          |              |   |
                       |          |              |   |  
                       |          |              |  
                    Body      Authentication    Router
                    Parser 

        ->If you got to menuRoutes or personRoutes, you can see router their, router is also a third party middleware
        ->Bodyparser is also a middleware
        ->Authentication also


➡️ app.use():
    The app.use() function in Express.js is a fundamental method used to mount middleware functions to an application's
    request-processing pipeline. 
    It enables the application to execute specific functions for all incoming requests or for requests targeting specific paths.
*/