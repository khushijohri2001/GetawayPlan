import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import categoryRouter from "./routes/category.route.js";
import destinationRouter from "./routes/destination.route.js";
import tourPackageRouter from "./routes/tourPackage.route.js";
import bookingRouter from "./routes/booking.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Update mongo password in env = khushijohri2001, ZkjRqdeIT5cEarwX, WioL4io4n9N8XLhi

dotenv.config();
const app = express();

const connect = async () => {   
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173/",
    credentials:true,
    sameSite:"None"
}));

app.use(express.json())

// Middleware
app.use("/auth", authRouter)

app.use("/category", categoryRouter);

app.use("/destination", destinationRouter);

app.use("/tour-package", tourPackageRouter);

app.use("/booking", bookingRouter);

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("hello this is server")
})

app.listen(8800, () => {
    connect();
    console.log("Connected")
})