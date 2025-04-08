//see working and definition of path built-in module first

//importing path module:
const path=require("node:path"); //here we prefix it with node: to indicate that its a built-in module
//or const path = require("path"); 
//here the node: prefix is optional

/*
->although using node: prefix has some benefits:
    1)Indicates its an built-in module
    2)Makes the import identifier a valid absolute URL
    3)Avoid conflicts for futur node.js built-in modules

    Note: node: prefix was added to node recently
*/

//now after importing the path module we can access its various methods and properties
//Note: the path module have 14 different methods but we will focus on 7 which are regularly used

//Note: we will also use __filename and __dirname these are available in every module
console.log("__filename:",__filename) //represents the full path to the current file
console.log("__direname:",__dirname) //represents the full path to the current folder
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
*/
//-> we can access these properties individually also:
console.log("path.parse(__filename).name:",path.parse(__filename).name) //o/p: 9_path_module


/*
4)format method: it returns a path string given in object:
  basically it takes an object of path as input and gives back it in a string format
  here in exmaple we will give it obejct of path which we will get by path.parse 
example:
*/
console.log("path.format():")
console.log(path.format(path.parse(__filename))) // o/p: C:\Users\Muazim\Documents\NodeJs\9_path_module.js

/*
5) isAbsolute method; returns whether the path is absolute or not
example:
*/
console.log("path.isAbsolute():")
console.log(path.isAbsolute(__filename)) // o/p: true (because __filename is an absolute path)
console.log(path.isAbsolute("./data.json")) // o/p: false (because ./ is relative path)
console.log(path.isAbsolute("/data.json"))  // o/p: true (because ./ is not an relative path)

/*
6)join method: this method joins all give path segments together using the platform specific seperator as a delimiter and 
        then normalizes the resulting path
        ->platform specific seperator means / for mac and \ for windows
        -> path.join(): accepts one or more strings as arguments
example:
*/
console.log("path.join():")
console.log(path.join("folder1","folder2","index.html"))//o/p: folder1\folder2\index.html

//Note: it will convert / to \ as i'am using windows)
console.log(path.join("/folder1","folder2","index.html"))//o/p: \folder1\folder2\index.html 
console.log(path.join("/folder1","//folder2","index.html")) 
//o/p: \folder1\folder2\index.html (here it removes one \ on folder2 to normalize it)
console.log(path.join("/folder1","//folder2","../index.html")) 
//o/p: \folder1\index.html (means ../ means we are saying from folder2 jump one folder1 up and then concatenate index.html)

console.log(path.join(__dirname,"test.html")) 
//o/p:C:\Users\Muazim\Documents\NodeJs\test.html

//->Note path.join() might be confusing and also its not used regularly

/*
7) resolve: this method resolves a sequence of paths of path segments into an absolute path
example:
*/

console.log("path.resolve():")
console.log(path.resolve("folder1","folder2","index.html"))
//o/p1: C:\Users\Muazim\Documents\NodeJs\folder1\folder2\index.html
console.log(path.resolve("/folder1","folder2","index.html"))
//o/p2: C:\folder1\folder2\index.html
console.log(path.resolve("/folder1","//folder2","index.html")) 
// o/p3: C:\folder2\index.html
console.log(path.resolve("/folder1","//folder2","../index.html")) 
//o/p4: C:\index.html
console.log(path.resolve(__dirname,"test.html")) 
//o/p5: C:\Users\Muazim\Documents\NodeJs\test.html

/*
Explanation:
->every o/p starts with \ or / indicating an absolute path
o/p1: here folder1 doesn't have an absolute path / so resolve will add it with the current absolute path
o/p2: here /folder1 have forward slash, the resolve will return absolute path from that / which you added
o/p3: if you add double // resolve consider that as a root and ignore the previous part
o/p4: if you add .../index.html here // folder2 is the root but we go up one folder so it directly prints index.html
o/p5: its already an absolute path
*/