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
//Note: exports is the refrence to module.exports
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
//! its better to use module.exports instead of just exports (watch video #15)
//from video #15
/*
if we export two functions like this:
    -> exports.add=(a,b)=>{return(a+b)} : it will work fine
        .exports.sub=(a,b)=>a-b} : it will work fine

    ->module.exports={add,sub}  : it will work fine

    ->: if you remove exports
        const add=(..)=>{...}
        const sub=(..)=>{...}
        ->exports={add,sub} : it will not work
       
        Because from a module nodejs only returns module.exports and not the export object.
        exports is just the reference to the module.exports 
        Now if you assign a new object to export like in line 104 (exports={add,sub}) the reference is broken and exports will be
        any empty object that is exported so while importint : const math=require('./filename); 
        math will be an empty object.
        (So reference was lost(between exports and module.exports) when you assign a new object to export instead of attaching a pointer on the export object)
        To understand this better checkout: object-reference.js file and also watch video #15 of codevolution

        Now you will say how exports.add(a,b)=>{..} is working
        because here exports and module.exports point to the same location so changing exports will also change exports
        (see video #15 at 6:10 - debugging)

        ->so always use module.exports when exporting from a module

*/