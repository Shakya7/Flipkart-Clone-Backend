const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

exports.signup=async(req,res)=>{
    try{
    const newUser=await User.create(req.body);
    const token=jwt.sign({id:newUser._id,email:newUser.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES});
    res.status(201).json({
        status:"success",
        data:{
            user:newUser,
            token
        }
    })
    }catch(err){
        console.log(err);
    }
}

exports.login=async(req,res)=>{    
    try{
        const {email,password}=req.body;
        const user=await User.findOne({
            email:email
        }).select("+password");
        if(!user)
            throw `Please enter a valid email or password`;
        const correct=await user.compareNormalPwithHashedP(password,user.password);
        if(!correct) 
            throw `Please provide valid email or password`;   
        console.log(user);
        const token= jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES}); 
        const cookieOptions={
            expires:new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
            httpOnly:true
        }
        res.cookie("jwt",token,cookieOptions);
        res.status(200).json({
            status:"success",
            data:{
                token,
                user,
                message:"You have logged in successfully"
            }
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            status:"failed",
            message: err
        })
    }
}

exports.protectRouteWithJWT=async(req,res,next)=>{

}