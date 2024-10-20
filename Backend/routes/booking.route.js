import express from "express";
import { Booking } from "../models/booking.model.js";

const router = express.Router();

// GET ALL
router.get("/all", async (req, res) => {
    
    try{
        const bookings = await Booking.find();
        res.status(200).json(bookings)
    } catch(error){
        res.status(500).json({ message: error.message }) 
    }
});

// GET
router.get("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const booking = await Booking.findOne({name:req.params.id});
        res.status(200).json(booking);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try {
        const newBooking = new Booking({ ...req.body });
        await newBooking.save()
        res.status(201).json({ message: "Booking Added" })
    } catch (error) { 
        res.status(500).json({ message: error.message }) 
    }

});

// DELETE
router.delete("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const booking = await Booking.deleteOne({name:req.params.id});
        res.status(200).json(booking);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

export default router;
