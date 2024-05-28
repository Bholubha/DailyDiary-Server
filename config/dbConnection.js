const { ClientSession } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectDb = async ()=>{
    try{

       const connect =  mongoose.connect(process.env.CONNECTION_STRING);
      
    }
    catch(err){
console.log(err);
process.exit(1);

    }
    console.log("connect to database")
}

module.exports = connectDb;