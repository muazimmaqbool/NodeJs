//we can also use writeFile to make new file
const fs=require("fs");

const a="This text is added via writeFile and Asynchronous";

//making file
//first argument is file name, data("hello nodejs",content/varibale, and callback function)
fs.writeFile("./newText.txt",a,()=>{  
    //new file will be created with newText.txt name and text of a is added in it
    console.log("Written");
})
//making another file
fs.writeFile("./newText2.txt","New Text Added",()=>{
    console.log("New File Added")
})
console.log("i am printed first")
//this was asynchronous 

//this is synchronous
// const b=fs.writeFileSync("./newText.txt",a);
// console.log(b);

//there are many method of file system(fs) you can see them on docs in nodejs website

//PATH : there are many more things like path
const path=require("path");

//it returns extension of the file
const val=path.extname("/NODEJS/1index.js") // try /test.txt
console.log(val); // o/p: js 

//returns basename of basefolder in which you are currently
const b=path.basename("E:/Web Development/NodeJs>");
console.log(b); //o/p: base folder name, here NodeJs>

//joind two url/strings
const str="Hello";
const strJoin=path.join("This is:"+str)
console.log(strJoin); // o/p: This is Hello

//OS: another builtin : it gives information about machine
const os=require("os");
console.log(os.freemem()); //shows total free memory in your pc i.e RAM
console.log(os.hostname()); //gives desktop name
console.log(os.type()); // type of os
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.totalmem()); //8GB
console.log(os.networkInterfaces()); 

//another important builtin module is
console.log("directory name:",__dirname); // prints directory name in which you are working
console.log("file name: ",__filename); //prints file name in which you are working


//HTTP: another builtin module , will be seen later insha'Allah



//and much more and there are many more builtin modules mentioned in nodejs website


