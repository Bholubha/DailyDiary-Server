const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');



const registerUser   = asyncHandler(async (req,res)=>{
   const {username , password} = req.body;
   if(!username || !password){
    res.status(400);
    throw new Error("All Fields are mendatory");
}

const availableUser = await User.findOne({username});

if (availableUser){
    res.status(400).send("User already existed");
   exit(0);
}

console.log(req.body);
const user = await User.create({
    username,
  password
});

if(user){
    res.json({
        _id : user.id,
        email : user.email,
    })
}else{
    res.status(400);
    throw new Error("We Can't registered You ! Sorry");
}
     
});
 


const loginUser = asyncHandler(async (req,res)=>{
    const { username , password} = req.body;
    if(!username || !password){
        res.status(400);
      throw new Error("All Fields are mandatory");
    }

    const user = await User.findOne({username});   
   if(user && user.password===password){
      
       res.json({verification:true});
      }else{
       res.json({verification:false});
      
   }

   
});



module.exports = {registerUser,loginUser};