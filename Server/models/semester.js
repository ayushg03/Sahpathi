const mongoose=require("mongoose");
const semesterSchema=new mongoose.Schema({
    sem:String,
    branch:String,
    subjects:[{type:mongoose.Schema.Types.ObjectId,ref:'Subject'}]
 });
 module.exports=mongoose.model('Semester',semesterSchema);