import express from "express";
import { TourPackage } from "../models/tourPackage.model.js";

const router = express.Router();


// GET
router.get("/all", async (req, res) => {
    try{
        const tourPackages = await TourPackage.find().populate("category").populate("destination");
        res.status(200).json(tourPackages)
    } catch(error){
        res.status(500).json({ message: error.message }) 
    }
});

// GET ALL
router.get("/:id", async (req, res) => {
    try{
        const tourPackage = await TourPackage.findById(req.params.id);
        res.status(200).json(tourPackage);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try {
        const newTourPackage = await TourPackage.create({ ...req.body })
        await newTourPackage.save()
        res.status(201).json({ message: "Tour Package Added" })
    } catch (error) { 
        res.status(500).json({ message: error.message }) 
    }

});

// DELETE
router.delete("/:id", async (req, res) => { 
    try{
        const tourPackage = await TourPackage.deleteOne({name:req.params.id});
        res.status(200).json(tourPackage);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// UPDATE


export default router