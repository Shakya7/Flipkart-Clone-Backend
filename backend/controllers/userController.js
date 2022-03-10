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
        //console.log("FGDFG",req.cookies);
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

exports.changeName=async(req,res)=>{
    try{
        //let token;
        //if(res.cookies.jwt)
        //    token=res.cookies.jwt;
        //if(!token)
        //    return next("Request failed...please login again");
        console.log(req.cookies.jwt);
        const user=res.user;
        console.log(user);

        const upDatedNameOfUser=await User.findByIdAndUpdate(user._id,{
            name:req.body.name,
            gender:req.body.gender
        },{new:true,runValidators:true});

        const token=jwt.sign({id:user._id,name:upDatedNameOfUser.name},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES
        })
        const cookieOptions={
            expires:new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
            httpOnly:true
        }
        /*const upDatedNameOfUser=await User.findByIdAndUpdate(user._id,{
            name:req.body.name
        },{new:true,runValidators:true});*/
        res.cookie("jwt",token,cookieOptions);
        res.status(200).json({
            status:"success",
            data:{
                user:upDatedNameOfUser
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
exports.changeEmail=async(req,res)=>{
    try{
        //let token;
        //if(res.cookies.jwt)
        //    token=res.cookies.jwt;
        //if(!token)
        //    return next("Request failed...please login again");
        console.log(req.cookies.jwt);
        const user=res.user;
        console.log(user);

        const upDatedEmailOfUser=await User.findByIdAndUpdate(user._id,{
            email:req.body.email
        },{new:true,runValidators:true});
        /*const upDatedNameOfUser=await User.findByIdAndUpdate(user._id,{
            name:req.body.name
        },{new:true,runValidatorres.cookie("jwt",token,cookieOptions);s:true});*/
        res.status(200).json({
            status:"success",
            data:{
                user:upDatedEmailOfUser
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
exports.changeMobile=async(req,res)=>{
    try{
        //let token;
        //if(res.cookies.jwt)
        //    token=res.cookies.jwt;
        //if(!token)
        //    return next("Request failed...please login again");
        console.log(req.cookies.jwt);
        const user=res.user;
        console.log(user);

        const upDatedMobileOfUser=await User.findByIdAndUpdate(user._id,{
            mobile:req.body.mobile
        },{new:true,runValidators:true});
        res.status(200).json({
            status:"success",
            data:{
                user:upDatedMobileOfUser
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
exports.addAddress=async (req,res)=>{
    try{
        const user=res.user;
        const addressUpdatedUser=await User.findByIdAndUpdate(user._id,{
            addresses:req.body.addresses
        },{new:true,runValidators:true});
        res.status(200).json({
            status:"success",
            data:{
                user:addressUpdatedUser
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
exports.addWishlist=async (req,res)=>{
    try{
        const user=res.user;
        const updatedUserWithWishlist=await User.findByIdAndUpdate(user._id,{
            wishlist:req.body.wishlist
        },{new:true,runValidators:true});
        res.status(200).json({
            status:"success",
            data:{
                user:updatedUserWithWishlist
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