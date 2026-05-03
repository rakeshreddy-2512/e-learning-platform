import { Router } from 'express';
import { getMyProgress, upsertProgress } from '../controllers/progressController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/me', protect, getMyProgress);
router.post('/', protect, upsertProgress);

export default router;
