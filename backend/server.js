const app=require("./app");
const mongoose=require("mongoose");

function connectToDB(){
    try{
    mongoose.connect(process.env.DB_CONNECTION.replace("<password>",process.env.DB_PASSWORD).replace("myFirstDatabase",process.env.DB_NAME))
    console.log("Connected to Database successfully")
    }catch(err){
        console.log(err);
        console.log("Unable to connect to database");
    }
}


app.listen(4001,()=>{
    connectToDB();
    console.log("Listening to requests");
})