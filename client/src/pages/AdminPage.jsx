import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api, withToken } from '../services/api';

export default function AdminPage() {
  const { auth } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!auth?.token) return;
    api.get('/admin/dashboard', withToken(auth.token)).then((res) => setStats(res.data));
  }, [auth]);

  if (!stats) return <p>Admin data unavailable (requires admin role).</p>;
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {Object.entries(stats).map(([k, v]) => (
        <article key={k} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-slate-400">{k}</p>
          <p className="text-3xl font-bold">{v}</p>
        </article>
      ))}
    </section>
  );
}
