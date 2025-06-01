const mongoose = require("mongoose");
//before seeing this code see Person.js modal/schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["Sweet", "Spicy", "Sour"],//value should be from these, otherwise it will show error
    required:true
  },
  is_drink: {
    type: Boolean,
    default: false,//if this data is not send from client then default value will be false
  },
  ingredients: {
    type: [String],//should be array of string values
    default: [], //array, default will be empty array if not provided
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const MenuItem=mongoose.model("MenuItem",menuItemSchema);
module.exports=MenuItem