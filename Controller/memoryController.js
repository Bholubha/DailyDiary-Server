const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getPost = asyncHandler(async (req,res)=>{

    const email = req.body.email;
    console.log(email)
    const post = await  Post.find({email});
     
 if(post){
    console.log(post)
    res.json({
        img : post,
    })
 }else{
    res.status(400);
 }

});


const createPost = asyncHandler(async (req,res)=>{
    const {email,date,title ,IMG,description } = req.body;
 
    const post = await Post.create({
      email,
      date,
       title ,
      images:IMG,
      description
 });
 
 if(post){
    console.log("data uploaded successfully")
     res.json({
       img : post.images, 
       email : post.email,  
       title : post.title
     })
 }else{
    res.status(400);
     throw new Error("We Can't upload Your memory ! Sorry");
 }
});

module.exports = {
    getPost,
    createPost
}