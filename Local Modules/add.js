//this is an exmaple of local module inside this file we write a function which calculates add of two numbers
//this function is used in inside index.js via require function
//require function: allows us to load module into another file

const add=(a,b)=>{
    return a+b;
}
const sum=add(6,6);
console.log(sum)