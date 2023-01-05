const mongoose=require("mongoose");
const subjectSchema=new mongoose.Schema({
    subname:String,
    files:[{type:mongoose.Schema.Types.ObjectId,ref:'File'}]
 });
 module.exports=mongoose.model('Subject',subjectSchema);