const express=require("express");
const app=express();
const cors=require("cors");
const userRouter=require("./routes/userRouter")
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const paymentRouter=require("./routes/paymentRouter");
const userController=require("./controllers/userController");
const authController=require("./controllers/authController");
const compression = require("compression");


dotenv.config({path:"./config.env"});

const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}

//MIDDLEWARE
app.use(compression());
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());



app.use("/api/v1/users",userRouter);
app.use("/api/v1/payment",paymentRouter);
app.get("/api/v1/getUserDetails",authController.protectRouteWithJWT,userController.getUserDetails);

module.exports=app;