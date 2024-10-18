import jwt from "jsonwebtoken";
import "dotenv";

export function generateToken(user) {
    return jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
        isVerified: true,
    },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}

