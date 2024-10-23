import express from "express";
import { Category } from "../models/category.model.js";

const router = express.Router();

// GET ALL
router.get("/all", async (req, res) => {
    
    try{
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch(error){
        res.status(500).json({ message: error.message }) 
    }
});

// GET
router.get("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const category = await Category.findOne({name:req.params.id});
        res.status(200).json(category);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try {
        const newCategory = new Category({ ...req.body });
        await newCategory.save()
        res.status(201).json({ message: "Category Added", newCategory })
    } catch (error) { 
        res.status(500).json({ message: error.message }) 
    }

});

// DELETE
router.delete("/:id", async (req, res) => {  // Here Id is Name of the category
    try{
        const category = await Category.deleteOne({name:req.params.id});
        res.status(200).json(category);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

export default router;
