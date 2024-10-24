console.log("Hello Nodejs");

//we can run this file in browser as well - to check create an html file
//link (<script src="index.js"></script>)
//this js file to it and then run

//console.log(window); //will work on browser now here it will show error

/*
    therefore this js file is same for both 
    but when you type console.log(window); -> this will be seen in inspect in browser
    (window object contains everything inside javacript like onchange,onclick etc)
    ->but here window will not work (ReferenceError: window is not defined)

    ->window is object of frontend's browser its not present in backend
    ->backend has not DOM
    ->we can't use dom manipulation here in backend
 */
