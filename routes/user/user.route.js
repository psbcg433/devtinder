import express from "express";
import UserController from "./user.controller.js";
import { auuthenticateToken } from "../../middlewares/auth.js";

const userRouter = express.Router();

//API to get pending connection requests
userRouter.get("/getRequest",auuthenticateToken,UserController.getPendingRequests);

export default userRouter;