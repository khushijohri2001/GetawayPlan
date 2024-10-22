import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    status:{
        type: String, 
        enum: ['pending', 'rejected', 'accepted'],
        default: 'pending'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    tourPackage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TourPackage",
        required: true
    }
}, {timestamps: true})

export const Booking = mongoose.model('Booking', bookingSchema);