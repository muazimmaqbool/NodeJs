//Module Caching  
//source: https://medium.com/@interviewer.live/understanding-module-caching-in-node-js-977dab968541#:~:text=Module%20caching%20is%20a%20mechanism,module%20has%20already%20been%20loaded.

/*
-> Module Caching: Module caching is a mechanism in Node.js that allows modules to be loaded and stored in memory after
    the first time they are required. When a module is required using the "require()" method,
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

/*
->Caching limitations and clearing the cache:
    It’s important to note that module caching in Node.js is limited to the current session. 
    If the server is restarted or the application is redeployed, the module cache is cleared, and modules are reloaded.

    However, in some cases, you may want to clear the module cache manually during the execution of your application. 
    Node.js provides a method called "delete require.cache[moduleName]" to remove a specific module from the cache. 
    You can use this method to force a module to be reloaded if required.
*/
//Example:
console.log("Third require()");
require("./Local Modules/moduleCache") // o/p: nothing

console.log("Clearing Cache!");
delete require.cache[require.resolve("./Local Modules/moduleCache")]

console.log("Fourth require()");
require("./Local Modules/moduleCache"); //o/p: Module Cache file is loaded