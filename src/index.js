import mongoose from "mongoose";
import { DB_NAME } from "./constants";





/* import express from "express"
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {                  //listner in express to test DB connection
        console.log("Error: Unable to connect to DB", error)
        throw error
    })

    app.listen(process.env.PORT, () => {  //port connection and declaration
        console.log(`App is listening on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.error("Error: ", error);
    throw error
  }
})(); */

