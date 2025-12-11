import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://WahiduzJaman:584821@cluster0.xoip7ut.mongodb.net/food-del').then(()=>{
        console.log("DB Connected")
    })
}