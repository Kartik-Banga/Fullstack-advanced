import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, //requests to be handled from which location 
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

//routes import ---- generally done here towards the end
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter) //http://localhost:8000/api/v1/users/register

export {app}

