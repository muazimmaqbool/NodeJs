/*this run_localModules.js file is like index.js
but inside this file we will be using code which are inside this local modules folder
*/

//using add.js module here using require function
require('./Local Modules/1_add')
//so here require function loads add.js module into this file

//using sub function from 2_subtract.js module
//const sub: can be any name as its default export default export can be imported with any name
const sub=require(`./Local Modules/2_subtract`)
//we can call this sub any number of time
const subtract=sub(9,5);
const sub2=sub(5,20)
console.log("subtract(9,5):",subtract)
console.log("subtract(5,20):",sub2)

//Note: 3_batman.js and 4_superman.js are used to understand scope of the module
require('./Local Modules/3_batman')
require('./Local Modules/4_superman')
//In the two codes same const "superHero" is used so if we run this what will be printed, but which superHero variable will be printed?
// o/p: both Batman and Superman will be printed, this is because each module in node js has its own scope
/*
Basically: before a module's code is executed, nodejs wrapps it with a function wrapper that provides module scope.
 ->this saves us from having to worry about confliciting variables and functions
 
 In other words Each loaded module in nodejs is wrapped with an IIFE function that provides private scope of code,
  this allows you to repeat the variable and function names wihtout any conflicts

  IIFE: Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
  -> (function(){
    module code actually lives in here
  })()

*/

