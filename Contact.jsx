import React from "react";

export default function Contact() {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">📞 Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Message</label>
          <textarea placeholder="Write your message..." rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
