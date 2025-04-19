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
console.log("extension of current file:",val); // o/p: .js 

//returns basename of basefolder in which you are currently
const b=path.basename("E:/Web Development/NodeJs>");
console.log(b); //o/p: base folder name, here NodeJs>

//joind two url/strings
const str="Hello";
const strJoin=path.join("This is "+str)
console.log(strJoin); // o/p: This is Hello

//OS: another builtin : it gives information about machine
const os=require("os");
console.log(os.freemem()); //shows total free memory in your pc i.e RAM
console.log("Desktop Name:",os.hostname()); //gives desktop name
console.log("OS Type:",os.type()); // type of os
console.log(os.uptime());
console.log("User Info:",os.userInfo());
console.log(os.totalmem()); //8GB
console.log(os.networkInterfaces()); 
const user=os.userInfo()
console.log("User info:",user)
console.log("user name:",user.username)

//now lets sending greetings to the username via fs
fs.appendFile("greeting.txt","Aslamualikum "+user.username+"!\n",()=>{
    console.log("greeting file is added");
})
/*so everytime you run this file the text "Aslamualikum + username" will be added to the greeting.txt(if file is not there then it will first create this file)
    and then will keeping on adding text to it file like this:
        Aslamualikum Muazim!Aslamualikum Muazim!Aslamualikum Muazim!Aslamualikum Muazim! ...
        so we can put \n in order to make new text in next line
*/

//Important
//To see all functionalities of OS and FS just console them or see there documentation
console.log("os:",os)//long output
console.log("fs:",fs)//long output


//another important builtin module is
console.log("directory name:",__dirname); // prints directory name in which you are working
console.log("file name: ",__filename); //prints file name in which you are working


//HTTP: another builtin module , will be seen later insha'Allah
//and much more and there are many more builtin modules mentioned in nodejs website
