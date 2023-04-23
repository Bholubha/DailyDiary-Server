const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getPost = asyncHandler(async (req,res)=>{

    const {username} = req.body;
   
    const post = await  Post.find({username});
     
 if(post){
    res.json({
        img : post,
    })
 }else{
    res.status(400);
 }

});


const createPost = asyncHandler(async (req,res)=>{
    const {username,title ,description ,image} = req.body;
 
    const post = await Post.create({
      username,
       image ,
      title,
      description
 });
 
 if(post){
     res.json({
       img : post.image, 
       uname : post.username,
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