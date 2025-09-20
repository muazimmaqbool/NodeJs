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
        enum:['chef','waiter','manager','owner'], //value should be from these, otherwise it will show error
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

        //1: generating salt (here genSalt(10) means 10 round salt, generates random string)
        const salt=await bycrypt.genSalt(10); // we can also do this: const salt="this is a salt"; but not secure at all
        //console.log("salt:",salt) // $2b$10$UjvORRbdKDQVh3aXB3f6wO

        //2: hashing password
        const hashedPassword=await bycrypt.hash(person.password,salt)

        //3: overrides the plan password with the hashed one
        person.password=hashedPassword

        next(); //means we have done processing now you can save in db/do further tasks
    }catch(err){
        return next(err)
    }
})
//?Note: after hashing password change the password comparision in auth.js

//method comparePassword used to compare password entered by the user with the hashed password in db
personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        //using bycrypt to compare provided password with hashed password
        const isMatch=await bycrypt.compare(candidatePassword,this.password)
        return isMatch;
    }catch(err){
        throw err;
    }
}
/* Important - compare function
 This compare function internally extracts the salt from the stored hashed password and uses it to hash the entered password
 for comparison. It can compares the resulting hash with the stored hash. if they match, it indicates the the entered password
 is correct.
 Example:
 Suppose you save password as: sopore -----> dfgvdsfbsvfsfydhsfds (saved in db as hash+salt)
 Login: supose you entered wrong password as: barammula
 Now it will first extract salt from the stored hashed password
 dfgvdsfbsvfsfydhsfds ------ > extracts salt
 then it will add this salt to entered password: salt+baramulla------>hsydfsvfdshbfds (hash)
 Now it will compare these two hashes 
Now save a new record to person:
{
    "name": "Hashir",
    "age": 32,
    "work": "owner",
    "mobile": "234-067-8901",
    "email": "hashir@example.com",
    "address": "Qamarwari, Srinagar",
    "phone": "9123456789",
    "salary": "160000",
    "username":"owner@123",
    "password":"me@123"
  }
    Note: Before saving this data remove localAuthMiddleware  from this : app.use("/person",localAuthMiddleware, personRoutes); in myNewServer.js
    you will se password saved like this:"$2b$10$cuoO9jvUjaTea2HPdvzRKO.4neBRZV8BC14gVPsCubvvG0uVJocqu",
*/

//Now we create model from the schema and we use this model to do all the database operations like (creating,reading, deleting, updating etc)
const Person=mongoose.model('Person',personSchema);
module.exports=Person
//now this Person is used in myServer.js file