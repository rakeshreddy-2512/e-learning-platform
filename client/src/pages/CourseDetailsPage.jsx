import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then((res) => setCourse(res.data));
  }, [id]);

  if (!course) return <p>Loading...</p>;
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-slate-300">{course.description}</p>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Lessons</h3>
        {course.lessons?.map((lesson, i) => (
          <div key={lesson._id || i} className="rounded border border-slate-700 p-3">
            {lesson.title} • {lesson.duration} min
          </div>
        ))}
      </div>
    </div>
  );
}
