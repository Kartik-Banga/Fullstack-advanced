//import express from "express"
import mongoose, { mongo } from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`\n MongoDB connected !! DB Host: ${connectInstance.connection.host}`)
    } catch(error) {
        console.error("MongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB