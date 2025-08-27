import express from "express";
import UserController from "./user.controller.js";
import { auuthenticateToken } from "../../middlewares/auth.js";


const userRouter = express.Router();


userRouter.get("/getRequest",auuthenticateToken,UserController.getPendingRequests);
userRouter.get("/getConnections",auuthenticateToken,UserController.getConnections);
userRouter.get("/getFeed",auuthenticateToken,UserController.getFeed);


export default userRouter;