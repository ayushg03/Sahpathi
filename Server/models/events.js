const mongoose=require("mongoose");

const eventSchema=new mongoose.Schema({
    id:String,
    title:String,
    author:String,
    email:String,
    link:String,
    category:String,
    desc:String ,
    status:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('Event',eventSchema);