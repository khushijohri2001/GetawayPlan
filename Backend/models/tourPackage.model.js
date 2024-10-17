import mongoose from "mongoose"

const tourPackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
        required: true
    },
    duration: {
        type: Map,
        of: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

export const TourPackage = new mongoose.model("TourPackage", tourPackageSchema)