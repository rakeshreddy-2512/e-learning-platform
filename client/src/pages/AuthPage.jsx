import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { login, register } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    if (isRegister) await register(form);
    else await login({ email: form.email, password: form.password });
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
      {isRegister && <input className="w-full rounded bg-slate-800 p-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />}
      <input className="w-full rounded bg-slate-800 p-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full rounded bg-slate-800 p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="w-full rounded bg-cyan-500 p-2 font-semibold text-slate-900">{isRegister ? 'Register' : 'Login'}</button>
      <button type="button" className="text-sm text-cyan-400" onClick={() => setIsRegister(!isRegister)}>Switch to {isRegister ? 'Login' : 'Register'}</button>
    </form>
  );
}
