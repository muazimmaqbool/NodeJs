/*
 #17 importing json and watch mode
-> This file is used to run and show json data 7_Data.json  file
*/

/*
 Note:if you write 7_Data only then nodejs will first try to fint 7_Data.js before trying to find 7_Data.json
 So, if there is an 7_Data.js file in you folder then node.js will run it and not the actual json file so, its better you use 
 name with extension also like this filename.json 
*/
const data=require("./7_Data.json") // or const data=require("./7_Data")
console.log(data)
/*
o/p: { name: 'Batman', address: { street: 'Wayne Manor', city: 'Gotham' } }
->This is the default behavior in nodejs, i.e:
    if we import a json file/data the require function will parse the content in js object
    we can access name like this: data.name, etc
*/
console.log("name:",data.name)