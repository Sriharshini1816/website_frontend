import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Go Home
      </Link>
    </div>
  );
}
