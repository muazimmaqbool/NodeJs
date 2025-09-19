const mongoose=require('mongoose')
const bycrypt=require("bcrypt")

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

//used to hash the password before saving it (see file 34_Password_Protection)
// next callback function will tell the mongoose/personSchema that now you can save in database
personSchema.pre('save',async function(next){
    const person=this; //basically this here is the existing records/schema of the person
    //first we will check is password being updated or now because it will be running on ever save, so if person is only updating name,address etc
    //in that case we won't hash password again if it has not being changed
    if(!person.isModified("password")) return next()
    try{
        //hash password generate

        //1: generating salt (here genSalt(10) means 10 round salt)
        const salt=await bycrypt.genSalt(10); // we can also do this: const salt="this is a salt"; but not secure at all
        // console.log("salt:",salt)

        //2: hashing password
        const hashedPassword=await bycrypt.hashedPassword(person.password,salt)

        //3: overrides the plan password with the hashed one
        person.password=hashedPassword

        next(); //means we have done processing now you can save in db/do further tasks
    }catch(err){

    }
})

//Now we create model from the schema and we use this model to do all the database operations like (creating,reading, deleting, updating etc)
const Person=mongoose.model('Person',personSchema);
module.exports=Person
//now this Person is used in myServer.js file