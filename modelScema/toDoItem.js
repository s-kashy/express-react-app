const mongoose =require('mongoose');

const {Schema}=mongoose

const item=new Schema({
 name:String,
 message:String,
 
})

module.exports=mongoose.model("items",item)