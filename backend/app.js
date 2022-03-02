const express=require("express");
const app=express();
const cors=require("cors");
const userRouter=require("./routes/userRouter")
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");


dotenv.config({path:"./config.env"});

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/v1/users",userRouter);

module.exports=app;