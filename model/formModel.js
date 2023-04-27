const mongoose = require('mongoose');

const formModel =  mongoose.Schema({
    firstName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    require:true
},
email: {
    type: String,
    required: true,
   
  },
  phone:{
    type: Number,
    require:true
  },
  address:{
    type: String,
    require:true
  }
})

module.exports = mongoose.model("Form", formModel);