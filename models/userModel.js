const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required :[ true, "Please add the email"],

    },

    username : {
        type : String,
        required :[ true, "Please add the username"],

    },


    password : {
        type : String,
        required : [true,"Please enter the password"],
    }
    
},{
    timestamps : true,
});

module.exports = mongoose.model("User",userSchema);