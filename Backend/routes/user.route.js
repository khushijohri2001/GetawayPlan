import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

// GET ALL
router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// GET
router.get("/singleUser/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// CREATE NEW
router.post("/new", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const newUser = await User.create({ ...req.body, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ message: "User Added", newUser })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });


        if (!user) {
            return res.status(400).json({ message: "User Not Found" })
        }


        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid Password" })
        }

        const token = generateToken(user);

        res
            .cookie("auth_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "none",
            })
            .status(201).
            json(user);


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// LOGOUT
router.get("/logout", async (req, res) => {
    try {
        res.clearCookie("auth_token").status(201).json({ message: "User Logged out" });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.deleteOne({_id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// UPDATE


export default router