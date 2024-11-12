/*this run.js file is like index.js
but inside this file we will be using code which are inside this local modules folde
*/

//using add.js module here using require function
require('./Local Modules/1_add')
//so here require function loads add.js module into index.js file

//using sub function from 2_subtract.js module
//const sub: can be any name as its default export default export can be imported with any name
const sub=require(`./Local Modules/2_subtract`)
//we can call this sub any number of time
const subtract=sub(9,5);
const sub2=sub(5,20)
console.log(subtract)
console.log(sub2)
