const connectDB=require("./config/db");
const Academic=require("./models/academic");
const Ajson=require("./academic.json");
const start=async()=>{
    try{
       connectDB();
       await Academic.create(Ajson);
       console.log("success");
    }catch(e){
        console.log(e);
    }
};
start();
