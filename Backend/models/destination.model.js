import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    tourPackages: [
        {
            tourPackage: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "TourPackage"
            }
        }
    ]
}, {timestamps: true})

export const Destination = new mongoose.model("Destination", destinationSchema);