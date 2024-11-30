//this index-esm.mjs file is used to import or run modules which are exported using ES Modules system

//importing a single variable/function
//import add from "./ES Modules/math-esm.mjs"

//importing multiple variable/function
import math from "./ES Modules/math-esm.mjs"
//here math is an object and it contains all the functions/variables which are exported

console.log("add:",math.add(6,10));
console.log("sub:",math.sub(6,10));

//we can also destructure the variables and functions
const {add,sub}=math

console.log("add:",add(6,10));
console.log("sub:",sub(6,10));