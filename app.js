
import express from "express";
import User from "./models/user.model.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth/auth.route.js";
import profileRouter from "./routes/profile/profile.route.js";
import requestRouer from "./routes/request/request.route.js";
import userRouter from "./routes/user/user.route.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/request", requestRouer);
app.use("/api/v1/user", userRouter);








export default app;
