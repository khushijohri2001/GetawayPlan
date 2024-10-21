import express from "express";
import { Booking } from "../models/booking.model.js";

const router = express.Router();

// GET ALL
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("tourPackage");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET
router.get("/:id", async (req, res) => {
  // Here Id is Name of the category
  try {
    const booking = await Booking.findOne({ name: req.params.id });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE NEW
router.post("/new", async (req, res) => {
  try {
    const newBooking = new Booking({ ...req.body });
    await newBooking.save();
    res.status(201).json({ message: "Booking Added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  // Here Id is Name of the category
  try {
    const booking = await Booking.deleteOne({ name: req.params.id });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATED
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body;

    console.log(id);
    

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (!action || !["approved", "rejected"].includes(action)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    booking.status = action;
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
