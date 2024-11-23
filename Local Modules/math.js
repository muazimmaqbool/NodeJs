//There are different patterns/ways while importing and exporting modules.
//use index.js file with this file 

const add=(a,b)=>{
    return a+b
}

//? Ist pattern ( when we have to export and import a single variable of function)
//module.exports=add;

    //use it in index.js like this:
    /*
    const add=require('./Local Modules/math');
    console.log(add(5,6))
    */

//? If their is only function/variable you want to export you can directly use like this:
/*
module.exports =(a,b)=>{
    return a+b
}
   -> use it in index.js like this:
    
    const add=require('./Local Modules/math');
    console.log(add(5,6))

    ->to this this comment out first code
*/