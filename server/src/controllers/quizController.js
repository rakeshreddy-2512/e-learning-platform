import Quiz from '../models/Quiz.js';

export const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
};

export const submitQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  const { answers } = req.body;
  const score = quiz.questions.reduce((acc, q, i) => acc + (q.answerIndex === answers[i] ? 1 : 0), 0);
  res.json({ score, total: quiz.questions.length, percentage: Math.round((score / quiz.questions.length) * 100) });
};
