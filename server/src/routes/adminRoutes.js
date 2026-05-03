import { Router } from 'express';
import { dashboard } from '../controllers/adminController.js';
import { authorize, protect } from '../middleware/auth.js';

const router = Router();
router.get('/dashboard', protect, authorize('admin'), dashboard);

export default router;
