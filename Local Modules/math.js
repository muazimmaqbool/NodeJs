//There are different patterns/ways while importing and exporting modules.
//use index.js file with this file 

const add=(a,b)=>{
    return a+b
}

//->importing/exporting one variable or function:

//? 1: Ist pattern ( when we have to export and import a single variable of function)
//module.exports=add;

    //use it in index.js like this:
    /*
    const add=require('./Local Modules/math');
    console.log(add(5,6))
    */

//? 2: If their is only function/variable you want to export you can directly use like this:
/*
module.exports =(a,b)=>{
    return a+b
}
   -> use it in index.js like this:
    
    const add=require('./Local Modules/math');
    console.log(add(5,6))

    ->to this this comment out first code
*/

//importing/exporting more than one variable/function
const sub=(a,b)=>{
    return(a-b);
}

//? 3: Now to export both add and sub function do this:
// module.exports={
//     add:add,
//     sub:sub,
// }
// or (with ES-2015 features we specify just add and sub if the key and value are the same i.e module.exports={add,sub} )
module.exports={add,sub} //this is preffered

/*
import it like this: in index.js file:

    const math=require('./Local Modules/math');
    console.log(math.add(5,6))
    console.log(math.sub(5,6))

    ->math can be any name
    ->Note: instead of using math.add or math.sub we can destructure the math object:
    (destructuring is again an ES-2015 feature)

    const math=require('./Local Modules/math');
    const{add,sub}=math; //here we destructure the functions from the object
    console.log(add(5,6))
    console.log(sub(5,6))
*/
//? 4: or use module.exports on both the functions:
/*
module.exports.add=(a,b)=>{
    return(a+b);
}
module.exports.sub=(a,b)=>{
    return(a-b);
}
->the import remains the same:
 const math=require('./Local Modules/math');
    const{add,sub}=math; 
    console.log(add(5,6))
    console.log(sub(5,6))

*/
//? 5: Or just use exports instead of module.exports:
/*
exports.add=(a,b)=>{
    return(a+b);
}
.exports.sub=(a,b)=>{
    return(a-b);
}
->the import remains the same:
 const math=require('./Local Modules/math');
    const{add,sub}=math; 
    console.log(add(5,6))
    console.log(sub(5,6))

*/