const mongoose = require('mongoose'); 

const Products = mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true},
   price:{type:Number,required:true},
   image:{type:String,required:true},
})

module.exports = mongoose.model('Products', Products)