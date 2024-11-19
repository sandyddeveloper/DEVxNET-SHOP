"use client";
import { useState, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const [displayedText, setDisplayedText] = useState<string>("");
  const typingText = "I’m DEVxNET BOT (Customer Service 24x7)";
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(typingText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === typingText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 80); // Adjust typing speed
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: "user" }]);
      setInput("");

      // Simulate bot response after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "I’m here to help. Can you clarify?", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Typing Animation */}
      {!isOpen && !isTyping && (
        <div className="fixed bottom-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce-in">
          {displayedText}
        </div>
      )}

      {/* Chat Toggle Icon */}
      {!isOpen && (
        <button
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 hover:bg-green-600 focus:outline-none animate-bounce"
          onClick={() => setIsOpen(true)}
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white shadow-lg rounded-lg border border-gray-200 animate-scale-in">
          <header className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Support Chat</h2>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </header>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                  } p-2 rounded-lg max-w-xs shadow-md`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-500 transition duration-200"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 shadow-md hover:scale-105 transition-transform duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
