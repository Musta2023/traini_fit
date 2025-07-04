import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List of blogs - To be implemented' });
});

router.post('/', protect, (req, res) => {
  res.json({ message: 'Blog added - To be implemented' });
});

export default router;
