//#15 module.exports v/s exports
//Why its better to use module.exports instead of just exports

const obj1={
    name:"Batman"
}

//assigning obj1 to obj2 object
let obj2=obj1;
/*In JS, when you assign one object to another object both objects point at the same address in memory
modifying one will lead to modifying the other object as well so here when we modify obj2 it also modifies the obj1 as well
i.e why console.log(obj1) will show Superman.
*/
//obj2.name="Superman";
//console.log(obj1); // o/p: Superman

/*
Here is intresting part if you assign a new object to obj2 instead of modifying the properties on the existent object that reference is
broken.
NOTE: before assigning a new object to obj2 make sure its let and not const i.e its let obj2 and not const obj2
*/
//assigning new object to obj2
obj2={
    name:"Spiderman",
}
console.log(obj1); //o/p: Batman
/*
Now modifying the obj2 will not longer effect the obj1  
*/

//here: obj1 is module.exports and obj2 is just exports, now lets go back to math.js file (inside local modules folder)

