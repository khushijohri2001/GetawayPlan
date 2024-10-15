import mongoose from "mongoose"

const tourPackageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    food: {
        type: Map,
        required: true,
    },
    tags: {
        type: [String],
        required: true
    }
})

export const TourPackage = new mongoose.model("TourPackage", tourPackageSchema)