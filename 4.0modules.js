const b=10;
console.log(b);
/*
->Note: nodejs main hum jo b cheez banaye ge wo har ek cheez module hogi like
        const a=10; is module
        const a;  is module
        const a=()=>{
            ...
        }; is module
        functions, variables, objects they are all modules

->Module in Nodejs: its a simple or complex functionality organized in single or multiple javascript files 
  which can be resued throughout the code.

->Node modules provide a way to re-use code in your Node application. In some ways, they're similar to a class in other languages

->Types of Modules:
   1) File based module: which can be transferred from one file to another. Eg above we have b=10; 
      ->To print it in different file just add module.exports = b;
      ->To import this in other file where you want to print its value:
              do this const b= require('./filename');

   2) Built In: those modules which we don't need to download to use them.
       ->They are alreadybuiltin inside nodejs by default see in code 4.1builtin.js
    
   3) Third Party Modules: these modules are written by someone else but we can download them and use them in our project
         ->These modules can be installed in the project folder or globally
         ->Example of best thrid party modules: 
                express, gulp, lodash, async, scoket.io, mongoose, underscore, pm2, bower, q, debug, react, mocha etc
        
        see example in 4.3ThirdPar tyModules.js
    
*/

//object example in file based module
//using it in app.js
const obj={
    average:(a,b)=>{
        console.log((a+b)/2);
    },
    percent:(a,b)=>{
        console.log((a/b)*100);
    },
    sum:(a,b,c)=>{
        console.log(a+b+c)
    }
}
const name="VScode is cool";
console.log("name inside 4.0module file:",name)
obj.average(40,76)

module.exports = b; 
module.exports=name;
module.exports=obj;
//now it can be used in any file just import it there say inside app.js
/*
they can be imported like this:
const b=require("./4.0modules"); 
const name=require("./4.0modules");
const obj=require("./4.0modules");
*/


