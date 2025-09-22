import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700">📊 Dashboard</h2>
      <p className="text-gray-600">Track your learning, goals, and progress here.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg">Courses Completed</h3>
          <p className="text-2xl font-bold text-indigo-600">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg">Certificates Earned</h3>
          <p className="text-2xl font-bold text-indigo-600">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg">Skills in Progress</h3>
          <p className="text-2xl font-bold text-indigo-600">3</p>
        </div>
      </div>
    </div>
  );
}
