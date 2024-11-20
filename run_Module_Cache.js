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
// Example: