const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    email : {
        type : String,
        // required :[ true, "Please add the Username"],

    },

    date : {
        type : String,
    },

    images : [{
        type : String,
    }],

    title :{
        type : String,
    },

    description : {
        type : String,
    }

},{
    timestamps : true,
});

module.exports = mongoose.model("diary",postSchema);