
import express from "express";
import User from "./models/user.model.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth/auth.route.js";
import profileRouter from "./routes/profile/profile.route.js";
import requestRouer from "./routes/request/request.route.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/request", requestRouer);




// Fetch user by email
app.get("/user", async (req, res) => {
    const { email } = req.query;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all users
app.get("/feed", async (req, res) => {
    try {
        const feed = await User.find({});
        if (feed.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(feed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





export default app;
