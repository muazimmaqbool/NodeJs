const mongoose=require('mongoose')

//Now here we will define schema(modals), generally called schema
//here we will define schema for person how will the document look like how the data will look i.e blueprint

//Docs of mongoose: https://mongoosejs.com/docs/guide.html
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true, //here required is true now 'name' has be entered in the database
    }
})