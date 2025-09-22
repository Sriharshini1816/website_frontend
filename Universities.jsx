import React from "react";

export default function Universities() {
  const universities = [
    { name: "Harvard University", location: "USA", rank: 1 },
    { name: "Oxford University", location: "UK", rank: 2 },
    { name: "Stanford University", location: "USA", rank: 3 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">🎓 Universities</h2>
      <table className="w-full border-collapse bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Rank</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Location</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((u, idx) => (
            <tr key={idx} className="text-center hover:bg-gray-50">
              <td className="p-3 border font-bold">{u.rank}</td>
              <td className="p-3 border">{u.name}</td>
              <td className="p-3 border">{u.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
