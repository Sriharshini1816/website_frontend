import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Universities from "./pages/Universities";
import Chatbot from "./pages/Chatbot";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Sidebar component
function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Career & Education Advisor</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/courses" className="hover:bg-gray-700 p-2 rounded">Courses</Link>
        <Link to="/universities" className="hover:bg-gray-700 p-2 rounded">Universities</Link>
        <Link to="/chatbot" className="hover:bg-gray-700 p-2 rounded">Chatbot</Link>
        <Link to="/resources" className="hover:bg-gray-700 p-2 rounded">Resources</Link>
        <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">Profile</Link>
        <Link to="/contact" className="hover:bg-gray-700 p-2 rounded">Contact</Link>
      </nav>
    </aside>
  );
}

// Navbar component
function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg text-indigo-700">
        One-Stop Career & Education Advisor
      </h1>
      <div className="space-x-4">
        <Link to="/login" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Login</Link>
        <Link to="/signup" className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Signup</Link>
      </div>
    </header>
  );
}

// Layout for protected pages
function MainLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
