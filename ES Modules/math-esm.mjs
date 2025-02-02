// we will use this file inside index-esm.mjs

//two make 1 and 2 methos work comment code of mehtod 3

//1 -> exporting single a variable/function
// const add=(a,b)=>{
//     return a+b;
// }
/*
    or do this : export default(a,b)=>{...}
    but then remove this : export default add;
    */

//export default add;

   //import it like this in index-esm.mjs file: import add from "./ES Modules/math-esm.mjs"
    

//2-> exporting multiple  variables/functions
// const sub=(a,b)=>{
//     return a-b;
// }

//export default {add,sub}
/*
->Import it like this:
    import math from "./ES Modules/math-esm.mjs"
->here math is an object and it contains all the functions/variables which are exported
->here math can be any name
then use like this : math.sub , math.add 
 or destructure:
 const {add,sub}=math


*/

//Note: comment all the active code above for checking method 3

/*3-> In es modules we also have what is known as named exports, where the varaible or function name being
exported must match while importing it.
so here while defining a function or variable we can add export keyword at the start
*/
export const add=(a,b)=>{
    return a+b;
}
export const sub=(a,b)=>{
    return a-b;
}

//import then like this:
/*
import * as math from "./filename" //math is an object and it contains all the exports
const {add,sub}=math or math.add, math.sub

or import like this (this is commonly used)
import {add,sub} from "./ES Modules/math-esm.mjs" 
->here we are basically destructuring while importing
console.log("add:",add(10,10));
console.log("sub:",sub(10,10)); 



*/