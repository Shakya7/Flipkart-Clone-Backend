const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

exports.testFunct=async (req,res)=>{
    try{
        console.log("Interacted with the FE");
        console.log(req.body);
        res.status(200).json({
            status:"success1",
        })
    }catch(err){
        console.log(err);
    }
}
exports.getAllUsers=async (req,res)=>{
    try{   
        const users=await User.find();
        res.status(200).json({
            status:"success",
            results:users.length,
            data:{
                users
            }
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            status:"failed",
            message:err.message
        })

    }
}

exports.getUser=async(req,res)=>{
    try{
        const user=await User.findOne({
            email:req.body.email
        });
        if(!user)
            throw "User is not present with this email! Make sure you have entered the correct email"
        res.status(200).json({
            status:"success",
            data:{
                user
            }
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
}
exports.addToCart=async(req, res)=>{
    try{
        console.log(req.cookies);
        console.log(req.cookies.jwt);
        const id=res.user._id;
        //const cart=res.user.cart;
        //console.log(id);
        const updatedUser=await User.findByIdAndUpdate(id,{
            cart:req.body.cart
        },{
            new:true,
            runValidators:true
        });
        if(!updatedUser)
            throw "User not found...please login again"
        res.status(200).json({
            status:"success",
            data:{
                user:updatedUser
            }
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
}

