import express from "express";
import { Destination } from "../models/destination.model.js";

const router = express.Router();

router.get("/all", (req, res) => {

});

router.post("/new", async (req, res) => {
    try{
        const newDestination = new Destination({...req.body});
        await newDestination.save()
        res.status(201).json({ message: "Location Added" })
    } catch(error){
        res.status(500).json({ message: "Error Creating Location" })
    }
});

export default router