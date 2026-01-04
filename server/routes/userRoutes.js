import express from 'express'
import { loginUser, registerUser, saveAssessment } from '../controller/userController.js';
import protect from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/assessment', protect, saveAssessment);

export default userRouter;