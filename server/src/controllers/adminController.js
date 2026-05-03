import User from '../models/User.js';
import Course from '../models/Course.js';
import Progress from '../models/Progress.js';

export const dashboard = async (_req, res) => {
  const [users, courses, completions] = await Promise.all([
    User.countDocuments(),
    Course.countDocuments(),
    Progress.countDocuments({ certificateIssued: true })
  ]);

  res.json({ users, courses, completions });
};
