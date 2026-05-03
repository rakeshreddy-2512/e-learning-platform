import { Router } from 'express';
import { createCourse, getCourse, listCourses, updateCourse } from '../controllers/courseController.js';
import { authorize, protect } from '../middleware/auth.js';

const router = Router();
router.get('/', listCourses);
router.get('/:id', getCourse);
router.post('/', protect, authorize('instructor', 'admin'), createCourse);
router.put('/:id', protect, authorize('instructor', 'admin'), updateCourse);

export default router;
