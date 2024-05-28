const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');




const registerUser   = asyncHandler(async (req,res)=>{
   const {username,email , password} = req.body;
   if(!username || !password){
    res.status(400);
    throw new Error("All Fields are mendatory");
}

const availableUser = await User.findOne({email});

if (availableUser){
    res.status(400).send("User already existed");
   exit(0);
}

console.log(req.body);
const user = await User.create({
    username,
    email,
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
    console.log("in login")
    const { email , password} = req.body;
    console.log(email)
    console.log(password)
    if(!email || !password){
        res.status(400);
      throw new Error("All Fields are mandatory");
    }

    const user = await User.findOne({email});   
   if(user && user.password===password){
        console.log("verify")
       res.json({verification:true});
      }else{
        console.log("Not verify")
       res.json({verification:false});
      
   }

   
});



module.exports = {registerUser,loginUser};