//this is an exmaple of local module inside this file we write a function which calculates add of two numbers
//this function is used in inside run_localModules.js via require function
//require function: allows us to load module into another file

//when loading file via require we are basically asking V8 Engine to execute the code in that module 

const add=(a,b)=>{
    return a+b;
}
const sum=add(6,6);
console.log(sum)