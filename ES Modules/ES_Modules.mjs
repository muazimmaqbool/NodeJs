/*
ES Modules: (introduced with ES2015)
    ->Note: Node.js 14 and above versions support ES Modules
    
    ->Common JS (CommonJS is a highly functional and effective module system that is used for server-side development in Node. js)
     So far, we have learned commonjs module formatt used in Node.js
     With common js:
        ->Each file is treated as a module
        i.e Variables, functions, classes, etc. are not accessible to other files by default.
        ->You need to tell the module system Explicitly which part of your code should be exported via module.exports or exports
        (they both are available in the every commonjs module)
        ->here in common js to import a code into a file use a require() function

    Note: Although commonjs system works finem a new module system has been added to Node.js i.e ES MODULEs
    ->But why we need a new module system to import and exports modules
    ->because when node.js was created, there was no built-in module system in javascript
    ->So, Node.js defaulted to commonjs as its module system
    ->But as of ES2015, JavaScript does have a standard module system i.e Ecmascript Modules or ES Modules or ESM

    ->Note: the file extension for ES modules is .mjs and not .js

    Es Module summary:
        ->introduced with ES2015
        ->Note: Node.js 14 and above versions support ES Modules
        ->Instead of modules.exports we use exports keyword
        ->The epxort can be default or named
        ->We import the exported variable or function using the import keyword
        ->For default export, we can assign any name to it while importing
        ->If it's a named export, the import name must be same

    Note: For now we will use common js (which is for the most used  atleast for next 2-3 years)


->File used to explain is : math-esm.mjs
*/