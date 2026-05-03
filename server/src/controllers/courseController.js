import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  const course = await Course.create({ ...req.body, instructor: req.user._id });
  res.status(201).json(course);
};

export const listCourses = async (_req, res) => {
  const courses = await Course.find({ published: true }).populate('instructor', 'name');
  res.json(courses);
};

export const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('quizzes');
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};
