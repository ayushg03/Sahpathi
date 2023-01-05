const mongoose=require("mongoose");

const fileSchema=new mongoose.Schema({
    id:String,
    type:String,
    title:String,
    author:String,
    fileName:String,
    size:String,
    label:String,
    desc:String ,
    status:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('File',fileSchema);