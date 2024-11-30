// we will use this file inside index-esm.mjs

const add=(a,b)=>{
    return a+b;
}
/*
    or do this : export default(a,b)=>{...}
    but then remove this : export default add;
    */
//1 -> exporting single a variable/function
//export default add;

   //import it like this in index-esm.mjs file: import add from "./ES Modules/math-esm.mjs"
    

//2-> exporting multiple  variables/functions
const sub=(a,b)=>{
    return a-b;
}

export default {add,sub}