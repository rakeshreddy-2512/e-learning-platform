import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api, withToken } from '../services/api';

export default function DashboardPage() {
  const { auth } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!auth?.token) return;
    api.get('/progress/me', withToken(auth.token)).then((res) => setItems(res.data));
  }, [auth]);

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">My Progress & Certificates</h2>
      {items.map((item) => (
        <div key={item._id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="font-semibold">{item.course?.title}</p>
          <p>{item.percentComplete}% complete</p>
          <p>{item.certificateIssued ? 'Certificate ready ✅' : 'Certificate locked 🔒'}</p>
        </div>
      ))}
    </section>
  );
}
