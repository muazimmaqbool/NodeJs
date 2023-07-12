/*
Build In: those modules which didn't need to download to use them, they are already builtin by default
      example. const fs=require("fs");
               console.log(fs); // see its o/p 
     
     To check more buildin modules: https://nodejs.org/api/ : there is list of buildin modules
     
        //the above code is fs i.e file system, its used to read any file   
        //to learn more about fs or any module go to nodejs website : https://nodejs.org/api/fs.html then search fs.read
*/
const fs=require("fs"); //fs module is used to read any file
//or import like this const {readFile,...} from = require("fs");
   // the we can write like this const a= readFile("path","utf-8",callbackfunction)  
//console.log(fs); // long o/p

//to check lets read a sample file test.txt from this

// fs.readFile("./test.txt","utf-8",(err,data)=>{
//     if(err){
//         return err // or throw err
//     }
//     console.log(data);
// });

//means read a file when done then run this call back function so if error accours it will show error
//otherwise data and second argument means we want read basic text, otherwise it show strange error
//try without utf-8 o/p is like this : <Buffer 48 65 79 20 74 68 69 73 20 69 73 20>
//so always use "utf-8"

//console.log("I am printed first"); 
//it will be printed before data from fs.readFile  , //at30:00
//because this readFile is an asynchornous function (runs in background)

//Note: what if we want the data inside readFile to be printed first then for that we use synchronous i.e
const a=fs.readFileSync("test.txt","utf-8"); //here we don't give callback function
console.log(a);
console.log("I am printed Last");
//now its running synchronously means finsih code line by line

//now see next code 4.2builtin.js

