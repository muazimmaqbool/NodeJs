//see working and definition of path built-in module first

//importing path module:
const path=require("node:path"); //here we prefix it with node: to indicate that its a built-in module

//now after importing the path module we can access its various methods and properties
//Note: the path module have 14 different methods but we will focus on 7 which are regularly used

//Note: we will also use __filename and __dirname these are available in every module
//console.log("__filename:",__filename) //represents the full path to the current file
//console.log("__direname:",__dirname) //represents the full path to the current folder
/*
o/p:
__filename: C:\Users\Muazim\Documents\NodeJs\9_path_module.js
__direname: C:\Users\Muazim\Documents\NodeJs
*/

//Different methods of path module:
/*
1)basename: it returns the last portion of the path
example:
*/
console.log("path.basename():")
console.log(path.basename(__filename)) // o/p: 9_path_module.js
console.log(path.basename(__dirname)) // o/p: NodeJs

/*
2)extname: returns the extension of the path
example:
*/
console.log("path.extname():")
console.log(path.extname(__filename)) // o/p: .js
console.log(path.extname(__dirname)) // o/p: no output i.e empty string since it dosn't have . character in its path

/*
3) parse method: it returns an object whose properties represent significant elements of the path:
   like root, dir,base, ext, name  of the path
*/
console.log("path.parse():")
console.log(path.parse(__filename))

/*
o/p:
{
  root: 'C:\\',
  dir: 'C:\\Users\\Muazim\\Documents\\NodeJs',
  base: '9_path_module.js',
  ext: '.js',
  name: '9_path_module'
}

-> we can access these properties individually also:
console.log(path.parse(__filename).name) //o/p: 9_path_module
*/

/*
4)

*/