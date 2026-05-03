import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    api.get('/courses').then((res) => setCourses(res.data));
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold">Video Courses</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <Link key={course._id} to={`/courses/${course._id}`} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-slate-300">{course.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
