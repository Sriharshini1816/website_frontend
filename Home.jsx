import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-white p-8 rounded-lg shadow flex items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Your One-Stop Personalized Career & Education Advisor</h2>
          <p className="text-gray-600 max-w-xl">Discover tailored career paths, compare degrees and certifications, and track the skills that unlock your next opportunity.</p>
          <div className="mt-4 flex gap-3">
            <Link to="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded">Find My Career Path</Link>
            <Link to="/resources" className="bg-gray-100 px-4 py-2 rounded">Explore Features</Link>
          </div>
        </div>
        <div className="w-1/3">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=60" alt="career" className="rounded-lg shadow" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="AI-driven career guidance" subtitle="Personalized learning & job recommendations">
          <p className="text-sm text-gray-600">Get career matches and learning paths based on your profile.</p>
        </Card>
        <Card title="Course & university matching" subtitle="Compare programs and costs">
          <p className="text-sm text-gray-600">Search and filter courses and programs worldwide.</p>
        </Card>
        <Card title="Skill tracking & progress" subtitle="Track progress and milestones">
          <p className="text-sm text-gray-600">Save goals and track milestones on your dashboard.</p>
        </Card>
      </section>
    </div>
  );
}
