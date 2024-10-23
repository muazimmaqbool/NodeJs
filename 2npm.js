const a=6655;
console.log(a);
// node .\2npm.js : type this to run this in terminal

//npm : node package manager -> used to install and download packages
  // package -> ready to use code / package is a bundle of code
  //nodejs has indefinite number of packages but we only need to know few
  // search on goole best packages of npm/nodejs

//to initilize npm  type: npm init then type app-name description etc others are optional
//now after completing it you will see package.js file in your folder

//why this file?
 // this file is used to tracks records, like whenever we download new package it will be added inside
 // this file to keep track of our files/packages/depdenciesclea in our project

 //now downloading a package: npm intall or i packagename
 //for now we will download express : its framework of nodejs  with the help of express we can do our work quickly
 // we don't use it now but later for now lets download it as example: npm install or i express

 // now you will see we got two more files in our folder package-lock.json and node-modules
 // -> package-lock.json : contains dependencies of dependency (i.e express is an dependencies it contains
 // many dependencies and those are mentioned inside this folder package-lock.json)
 // -> node_modules: contains all of our dependencies (this file is important)

 //Note-> Here we don't need express so we will uninstall it -> npm uninstall express (or delete its files)
         //now package-lock.json is empty

 //A dependency is any external resource a program needs to work.

 //A framework is a foundation over which programmers can build their software. In a similar way,
    // a JavaScript framework provides a base for the convenience of the programmers. 
    //It helps by providing a set of pre-written codes so the programmers would not need to 
    //start from scratch.

//Javascript libraries include pre-written JavaScript code that simplifies the completion of common 
    //and complicated tasks. For example, DOM manipulation, framework setup, and AJAX handling 
    //are all common targets for JavaScript libraries.



