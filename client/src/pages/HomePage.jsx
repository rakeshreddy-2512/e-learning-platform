import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-10">
      <h1 className="text-4xl font-bold">Build Skills with Expert-Led Courses</h1>
      <p className="max-w-2xl text-slate-300">Modern e-learning with secure auth, HD video lessons, adaptive quizzes, progress analytics, and downloadable certificates.</p>
      <Link to="/courses" className="inline-block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950">Explore Courses</Link>
    </section>
  );
}
