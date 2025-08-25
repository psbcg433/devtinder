import express from 'express';
import { auuthenticateToken } from '../../middlewares/auth.js';
import ProfileController from './profile.controller.js';

const profileRouter = express.Router();

profileRouter.get("/getProfile", auuthenticateToken, ProfileController.getProfile )
profileRouter.patch("/setProfile", auuthenticateToken, ProfileController.setProfile )
profileRouter.patch("/setPassword", auuthenticateToken, ProfileController.setPassword )
profileRouter.delete("/deleteProfile", auuthenticateToken, ProfileController.deleteProfile );


export default profileRouter;