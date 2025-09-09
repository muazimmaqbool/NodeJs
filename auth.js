//contains all the code related to the authentication
//first check myNewServerfile and watch video at 38:20
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
module.exports=passport; //used inside myNewServer