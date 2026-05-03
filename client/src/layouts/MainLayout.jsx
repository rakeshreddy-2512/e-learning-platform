import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  );
}
