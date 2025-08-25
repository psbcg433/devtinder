import express from 'express';
import AuthController from './auth.controller.js';
import { auuthenticateToken } from '../../middlewares/auth.js';


const authRouter = express.Router();



authRouter.post("/register", AuthController.register);
authRouter.post("/login",AuthController.login);
authRouter.post("/logout", auuthenticateToken,AuthController.logout)




export default authRouter;