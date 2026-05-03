import Progress from '../models/Progress.js';

export const upsertProgress = async (req, res) => {
  const { courseId, completedLessons, quizScores, percentComplete } = req.body;
  const progress = await Progress.findOneAndUpdate(
    { user: req.user._id, course: courseId },
    { completedLessons, quizScores, percentComplete, certificateIssued: percentComplete >= 100 },
    { new: true, upsert: true }
  );
  res.json(progress);
};

export const getMyProgress = async (req, res) => {
  const list = await Progress.find({ user: req.user._id }).populate('course', 'title');
  res.json(list);
};
