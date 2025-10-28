const mongoose=require('mongoose')
const { on } = require('./Person')

const onlineItems=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    size:{
        type:String,
        enum:['small','medium','large','extra large'],
        default:"large"
    },
    isAvailable:{
        type:Boolean,
        default:true
    }
})
const OnlineItems=mongoose.model('OnlineItems',onlineItems)
module.exports=OnlineItems