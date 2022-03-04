const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter email address"],
        lowercase:true,
        validate:[validator.isEmail,"Please enter a valid email id..."],
        unique:[true,"Please enter a different email"]
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        default:"Male"
    },
    password:{
        type:String,
        minlength:8,
        required:[true,"Please enter a password"],
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,"Please confirm your password"],
        validate:{
            validator:function(e){
                return e===this.password
            },
            message:"Passwords do not match, please try again"
        }
    },
    mobile:{
        type:String,
        validate:{
            validator:function(e){
                return e.length<=10
            },
            message:"Please provide a valid phone number"
        }
    },
    passwordChangedAt: Date,
    passwordResetToken:{
        type:String,
        select:false
    },
    passwordResetTokenExpiry:Date,
    activated:{
        type:Boolean,
        default:true,
        select:false
    },
    role: {
        type: String,
        enum: ['user', 'seller','admin'],
        default: 'user'
    },
    cart:{
        type:Array,
        default:[]
    },
    wishlist:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    notifications:{
        type:Array,
        default:[]
    },
    addresses:{
        type:Array,
        default:[]
    },
    isLoggedIn:{
        type:Boolean,
        default:true
    }
});

//INSTANCE METHODS OF userSchema model ---> doc created out of schema [ const doc=await User.findById(); this doc will have access to the instance methods]

//checking normal password with hashed password --> used in login func to check DB hashed password with form input, i.e String unecrypted pw
userSchema.methods.compareNormalPwithHashedP=async function(userPass,dbPassHashed){
    return await bcrypt.compare(userPass,dbPassHashed);
}


//PRE-MIDDLEWARES

//pre-middl for encrypting the password with bcrypt
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))     //if password is not changed, simply return
        return next();
    this.password=await bcrypt.hash(this.password,12);
    this.confirmPassword=undefined;
    this.passwordChangedAt=Date.now()-1000;
    next();
})

const User=mongoose.model("User",userSchema);

module.exports=User;