import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { auth, logout } = useAuth();
  return (
    <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-cyan-400">LearnPro</Link>
        <div className="flex gap-4 text-sm">
          <Link to="/courses">Courses</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin">Admin</Link>
          {auth ? <button onClick={logout}>Logout</button> : <Link to="/auth">Login</Link>}
        </div>
      </nav>
    </header>
  );
}
