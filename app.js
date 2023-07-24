const b=require("./4.0modules"); //importing b from 4.0modules.js file
const name=require("./4.0modules");
const obj=require("./4.0modules");


//another way of importing : 
//import b from "./4.0modules"; //but to use this make sure file extension is .njs

//printing variable b which is inside 4modlues.js
console.log(b);
console.log(name)
//now if you change value of b in 4.0modules file it will also change here

//obj is defined in 4modules
obj.average(10,20);
obj.percent(15,20);
obj.sum(10,15,5)

