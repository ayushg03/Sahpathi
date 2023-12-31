const mongoose=require("mongoose");

const projectSchema=new mongoose.Schema({
    title:String,
    author:String,
    email:String,
    link:String,
    desc:String ,
    status:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('Project',projectSchema);