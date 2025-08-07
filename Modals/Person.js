const mongoose=require('mongoose')

//Learn modal from 18.1_Modals.txt
//Now here we will define schema(modals), generally called schema
//here we will define schema for person how will the document look like how the data will look i.e blueprint

//Docs of mongoose: https://mongoosejs.com/docs/guide.html
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true, //here required is true now 'name' has to be entered in the database
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'], //value should be from these, otherwise it will show error
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true, //means the phone has to be unique in the entire database
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    //added after learning 33_Authentication.txt
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

//Now we create model from the schema and we use this model to do all the database operations like (creating,reading, deleting, updating etc)
const Person=mongoose.model('Person',personSchema);
module.exports=Person
//now this Person is used in myServer.js file