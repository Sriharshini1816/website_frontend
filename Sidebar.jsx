import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white border-r">
      <div className="p-4">
        <div className="text-sm text-gray-700 mb-6">Navigation</div>
        <ul className="space-y-3">
          <li><Link to="/dashboard" className="block p-2 rounded hover:bg-gray-100">Recommendations</Link></li>
          <li><Link to="/courses" className="block p-2 rounded hover:bg-gray-100">Courses</Link></li>
          <li><Link to="/universities" className="block p-2 rounded hover:bg-gray-100">Universities</Link></li>
          <li><Link to="/chatbot" className="block p-2 rounded hover:bg-gray-100">Advisor Chatbot</Link></li>
          <li><Link to="/resources" className="block p-2 rounded hover:bg-gray-100">Resources</Link></li>
          <li><Link to="/profile" className="block p-2 rounded hover:bg-gray-100">Profile</Link></li>
          <li><Link to="/contact" className="block p-2 rounded hover:bg-gray-100">Support</Link></li>
        </ul>
      </div>
    </aside>
  );
}
