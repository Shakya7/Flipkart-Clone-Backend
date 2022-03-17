const express=require("express");
const app=express();
const cors=require("cors");
const userRouter=require("./routes/userRouter")
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const paymentRouter=require("./routes/paymentRouter");


dotenv.config({path:"./config.env"});

const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}

//MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());



app.use("/api/v1/users",userRouter);
app.use("/api/v1/payment",paymentRouter);

module.exports=app;