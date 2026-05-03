import { Router } from 'express';
import { createQuiz, submitQuiz } from '../controllers/quizController.js';
import { authorize, protect } from '../middleware/auth.js';

const router = Router();
router.post('/', protect, authorize('instructor', 'admin'), createQuiz);
router.post('/:id/submit', protect, submitQuiz);

export default router;
