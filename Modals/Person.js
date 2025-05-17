const mongoose=require('mongoose')

//Now here we will define schema(modals), generally called schema
//here we will define schema for person how will the document look like how the data will look i.e blueprint

//Docs of mongoose: https://mongoosejs.com/docs/guide.html
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true, //here required is true now 'name' has be entered in the database
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'], //now work will accept only these three values
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true, //means the email has to be unique in the entire database
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }
})