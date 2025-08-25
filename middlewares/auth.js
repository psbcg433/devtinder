import User from "../models/user.model.js";
import { verifyToken } from "../utils/helper.js";


export const auuthenticateToken = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Access denied, token missing!" });
    }

    try {
        const decoded = verifyToken(token);
        const {id} = decoded;
        const user = await User.findById(id).select("-password -createdAt -updatedAt -__v");
        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        req.user = user; 
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
}