const User=require("../../models/userModel");

exports.getFirstAddress=async (req,res)=>{
    try{
        const user=res.user;
        const addresses=await User.findById(user._id).select("-_id addresses");
        console.log(addresses.addresses[0]);
        res.status(200).json({
            status:"success",
            data:{
                addresses:addresses.addresses[0]
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
