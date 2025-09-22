import React from "react";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    bio: "Aspiring Data Scientist passionate about AI & Machine Learning.",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
      <div className="flex items-center gap-6">
        <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full shadow" />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{user.bio}</p>
      <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Edit Profile
      </button>
    </div>
  );
}
