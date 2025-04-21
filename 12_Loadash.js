/*
->Loadash Package:
  -Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. 
    Lodash's modular methods are great for: Iterating arrays, objects, & strings. Manipulating & testing values.
  -It provides a wide range of helper functions to simplify common programming tasks.
     This in turn can help increase code efficiency and make code easier to read.
    
  - Installing loadash: npm i loadash
  - Docs: https://lodash.com/ or https://lodash.com/docs/4.17.15
*/
//importing loadash
var _ =require("lodash")
/*
->why we used imported it using underscore"_" here, infact we can use any name and that will work fine eg. var myLoadash=require("lodash")
    we use underscore because its used everywhere like every developer used it like this and also lodash docs also user underscore
*/

//Example
var data=["Laptop","Hp","Mobile","hp",1,"hp",2,1,1,1,2,"Laptop"]
/*From the above data array i wanted to print the unique elements from it and with the help of lodash it can be done quickly
  using it various methods and if we don't use lodash it will take us time to write logic and lots of calculations

  Loadash have lots of methods (see docs) that are used to deal with the data and it reduces lot of work
*/
console.log("data:",data)
const filterValues=_.uniq(data)
console.log("Getting Unique Elements from data:",filterValues)

console.log("isString:",_.isString("Hi"))

console.log("isString:",_.isString(66))

//See more its methods from its docs : https://lodash.com/docs/4.17.15