//this module will be used inside index.js via exports
const sub=(a,b)=>{
    return a-b;
}

module.exports=sub; 
//this is default export it any be imported with any name

//now we will use this inside any file and we export like this: const sub=require('./subtract.js)
//using this run_localModules.js