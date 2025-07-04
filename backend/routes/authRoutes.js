import express from 'express';
import { signinController, signupController } from '../controllers/authController.js';


const router = express.Router();

// Route for signing up
router.post('/signup', signupController);

// Route for signing in
router.post('/signin', signinController);

export default router;
