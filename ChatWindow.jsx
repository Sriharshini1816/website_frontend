import React, { useState } from "react";

export default function ChatWindow({ onSend }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — ask me about careers, courses or scholarships." },
  ]);

  const send = async () => {
    if (!text.trim()) return;
    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setText("");
    // call parent onSend to allow real backend call
    if (onSend) {
      const reply = await onSend(text);
      setMessages((m) => [...m, { from: "bot", text: reply || "Sorry, no response." }]);
    } else {
      // local fake reply
      setMessages((m) => [...m, { from: "bot", text: "This is a mock reply. Connect to backend for real answers." }]);
    }
  };

  return (
    <div className="bg-white border rounded-lg p-3 flex flex-col h-96">
      <div className="flex-1 overflow-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
            <div className={`inline-block p-2 rounded ${m.from === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask anything about careers, courses, scholarships..."
        />
        <button onClick={send} className="bg-blue-600 text-white px-4 rounded">Send</button>
      </div>
    </div>
  );
}
