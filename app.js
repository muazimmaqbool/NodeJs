const b=require("./4modules"); //importing b form 4modules.js file
const obj=require("./4modules");

//another way of importing : 
//import b from "./4modules"; //but to use this make sure file extension is .njs

//printing variable b which is inside 4modlues.js
console.log(b);

//now if you change value of b in 4modules file it will also change here

//obj is defined in 4modules
obj.average(10,20);
obj.percent(15,20);