import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    locations: [
        {
            location: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Location",
            },
        }
    ]
}, { timestamps: true })

export const Category = new mongoose.model("Category", categorySchema);