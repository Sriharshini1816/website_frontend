import React from "react";

export default function Courses() {
  const courses = [
    { id: 1, title: "React for Beginners", level: "Beginner", duration: "6 weeks" },
    { id: 2, title: "Data Science with Python", level: "Intermediate", duration: "8 weeks" },
    { id: 3, title: "AI & Machine Learning", level: "Advanced", duration: "12 weeks" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">📚 Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">{course.title}</h3>
            <p className="text-gray-600">{course.level} • {course.duration}</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
