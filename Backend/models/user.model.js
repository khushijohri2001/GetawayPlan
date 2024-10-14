import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["User", "Admin"],
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = new mongoose.model("User", userSchema);