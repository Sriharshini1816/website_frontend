import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold">Career & Education Advisor</h1>
          <nav className="hidden md:flex gap-3">
            <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/courses" className="text-sm text-gray-600 hover:text-gray-900">Courses</Link>
            <Link to="/universities" className="text-sm text-gray-600 hover:text-gray-900">Universities</Link>
            <Link to="/resources" className="text-sm text-gray-600 hover:text-gray-900">Resources</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {token ? (
            <>
              <Link to="/dashboard" className="text-sm text-gray-700">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-blue-600">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
