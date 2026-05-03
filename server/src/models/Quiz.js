import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  prompt: String,
  options: [String],
  answerIndex: Number
});

const quizSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    title: String,
    questions: [questionSchema]
  },
  { timestamps: true }
);

export default mongoose.model('Quiz', quizSchema);
