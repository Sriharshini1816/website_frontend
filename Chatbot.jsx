import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hello! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: "I will guide you on that!" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-lg shadow p-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">🤖 Chatbot</h2>
      <div className="flex-1 overflow-y-auto space-y-2 p-2 border rounded-lg bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded max-w-xs ${msg.from === "bot" ? "bg-indigo-100 self-start" : "bg-green-100 self-end ml-auto"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Send
        </button>
      </form>
    </div>
  );
}
