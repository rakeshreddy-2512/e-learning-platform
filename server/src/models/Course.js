import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  duration: Number
});

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: String,
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    lessons: [lessonSchema],
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    published: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Course', courseSchema);
