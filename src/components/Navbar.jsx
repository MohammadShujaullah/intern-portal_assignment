// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
    </nav>
  );
}
