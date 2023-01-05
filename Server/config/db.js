require('dotenv').config();
const mongoose=require('mongoose');

function connectDB(){
  //DB Connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL);
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('Database Connected.')
}).on('error', function (err) {
    console.log(err);
  });

}

module.exports=connectDB;