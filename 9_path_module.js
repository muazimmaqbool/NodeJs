//see working and definition of path built-in module first

//importing path module:
const path=require("node:path"); //here we prefix it with node: to indicate that its a built-in module

//now after importing the path module we can access its various methods and properties
//Note: the path module have 14 different methods but we will focus on 7 which are regularly used

//Note: we will also use __filename and __dirname these are available in every module
console.log("__filename:",__filename) //represents the full path to the current file
console.log("__direname:",__dirname) //represents the full path to the current folder
/*
o/p:
__filename: C:\Users\Muazim\Documents\NodeJs\9_path_module.js
__direname: C:\Users\Muazim\Documents\NodeJs
*/