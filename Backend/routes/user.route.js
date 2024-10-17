import express from "express";
import { User } from "../models/user.model";

const router = express.Router();

// GET
router.get("/all", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users)
    } catch(error){
        res.status(500).json({ message: error.message }) 
    }
});

// GET ALL
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try {
        const newUser = await User.create({ ...req.body })
        await newUser.save()
        res.status(201).json({ message: "User Added" })
    } catch (error) { 
        res.status(500).json({ message: error.message }) 
    }

});

// DELETE
router.delete("/:id", async (req, res) => { 
    try{
        const user = await User.deleteOne({name:req.params.id});
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

// UPDATE


export default router