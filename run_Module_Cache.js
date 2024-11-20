//Module Caching  
//source: https://medium.com/@interviewer.live/understanding-module-caching-in-node-js-977dab968541#:~:text=Module%20caching%20is%20a%20mechanism,module%20has%20already%20been%20loaded.

/*
-> Module Caching: Module caching is a mechanism in Node.js that allows modules to be loaded and stored in memory after
    the first time they are required. When a module is required using the require() method,
    Node.js checks if the module has already been loaded. If it has, it returns the cached module instance instead 
    of loading it again.

-> How does module caching work?
    Node.js uses the require.cache object to store the loaded modules.
    The require.cache object is a key-value pair where the key represents the absolute path of the module, 
    and the value is the cached module instance.
*/ 
// Example:  (using a file called moduleCache.js its inside Local Modules folder)
console.log("First require()");
require("./Local Modules/moduleCache") // o/p: Module Cache file is loaded

console.log("Second require()");
require("./Local Modules/moduleCache"); // 0/p: nothing
/*
In the above example, when moduleCache file is required for the first time, it logs a message indicating it is loaded.
However, when it is required the second time, there is no log message because the module is already cached.
*/