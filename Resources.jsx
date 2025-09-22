import React from "react";

export default function Resources() {
  const resources = [
    { title: "Career Guide 2025", link: "#", type: "PDF" },
    { title: "Top 10 Online Courses", link: "#", type: "Article" },
    { title: "Scholarship Opportunities", link: "#", type: "Web" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">📂 Resources</h2>
      <ul className="space-y-4">
        {resources.map((res, idx) => (
          <li key={idx} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold text-lg">{res.title}</h3>
            <p className="text-sm text-gray-500">{res.type}</p>
            <a href={res.link} className="text-indigo-600 hover:underline">
              View Resource
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
