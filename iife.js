//IIFE: Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.

(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");

(function(message,name){
  const superHero=name;
  console.log(message,name)
})("Hi","Spiderman")

//here is the module code inside 3_batman and 4_superman:
/*
const superHero="Batman";
console.log("SuperHero:",superHero)
*/

//here is the same code wrapped in IIFE function:
/*
(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})
*/

//here is the final code with parameters there are 5 in total
/*
(function (exports,require,module, __filename,__dirname) {
  const superHero = "Batman";
  console.log(message, superHero);
})
*/ //now watch #11 at 2:43 