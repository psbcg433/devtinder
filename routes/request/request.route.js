import express from 'express';
import { auuthenticateToken } from '../../middlewares/auth.js';
import RequestController from './request.controller.js';


const requestRouer = express.Router();

requestRouer.post('/send/:status/:toUserId',auuthenticateToken,RequestController.sendRequest)
requestRouer.post('/review/:status/:requestId',auuthenticateToken,RequestController.reviewRequest)


export default requestRouer;