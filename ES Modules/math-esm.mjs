// we will use this file inside index-esm.mjs

const add=(a,b)=>{
    return a+b;
}
//1 -> exporting single a variable/function
export default add;
   //import it like this in index-esm.mjs file: import add from "./ES Modules/math-esm.mjs"
    /*
    or do this : export default(a,b)=>{...}
    */

//2-> exporting multiple  variables/functions