import express from "express";
import { Category } from "../models/category.model.js";

const router = express.Router();

router.get("/all", (req, res) => {

});

router.post("/new", async (req, res) => {
    try {
        const newCategory = new Category({ ...req.body });
        await newCategory.save()
        res.status(201).json({ message: "Category Added" })
    } catch (error) { res.status(500).json({ message: "Error Creating Category" }) }

});

// router.delete()

export default router;