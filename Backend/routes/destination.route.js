import express from "express";
import { Destination } from "../models/destination.model.js";

const router = express.Router();

// GET ALL
router.get("/all", async (req, res) => {
    try{
        const destinations = await Destination.find();
        res.status(200).json(destinations)
    } catch(error){
        res.status(500).json({ message: "Error Fetching Destinations" }) 
    }
});

// GET
router.get("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const destination = await Destination.findOne({name:req.params.id});
        res.status(200).json(category);
    } catch(error){
        res.status(500).json({ message: "Error Fetching Category by Id" })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try{
        const newDestination = new Destination({...req.body});
        await newDestination.save()
        res.status(201).json({ message: "Destination Added" })
    } catch(error){
        res.status(500).json({ message: "Error Creating Location" })
    }
});

// DELETE
router.delete("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const destination = await Destination.deleteOne({name:req.params.id});
        res.status(200).json(destination);
    } catch(error){
        res.status(500).json({ message: "Error Deleting Destination by Id" })
    }
})

export default router