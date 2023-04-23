const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    username : {
        type : String,
        // required :[ true, "Please add the Username"],

    },

    image : {
        type : String,
       
    },

    title :{
        type : String,
    },

    description : {
        type : String,
    }

},{
    timestamps : true,
});

module.exports = mongoose.model("Post",postSchema);