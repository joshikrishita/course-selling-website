require('dotenv').config()
console.log(process.env.MONGO_URL)
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const {userRouter}=require("./routes/user");
const {courseRouter}=require ("./routes/course");
const {adminRouter}=require("./routes/admin");
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://joshikrishita:krishu1804@cluster0.mil13.mongodb.net/")
    app.listen(3000);
    console.log("running successfully")
}
main()