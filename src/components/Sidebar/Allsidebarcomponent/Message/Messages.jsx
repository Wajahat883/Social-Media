import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Video, MoreHorizontal, X } from 'lucide-react';
import { useMessage } from '../../../../Context/Messagecontext';

const Messages = () => {
  const { setShowMessages } = useMessage(); // to close the drawer

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Waji',
      text: "Hey there! How are you doing today?",
      timestamp: new Date(Date.now() - 60000),
      isOwn: false
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const generateResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return "Hi there! 👋";
    if (lower.includes('how are you')) return "I'm good, thanks! How about you?";
    if (lower.includes('sad')) return "I'm here if you want to talk. ❤️";
    return "That's interesting! Tell me more.";
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'You',
      text: newMessage,
      timestamp: new Date(),
      isOwn: true
    };

    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: 'Sarah',
        text: generateResponse(userMsg.text),
        timestamp: new Date(),
        isOwn: false
      };
      setIsTyping(false);
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed top-16 right-4 w-[350px] h-[520px] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col z-50 border">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-black font-semibold">M</span>
          </div>
          <div>
            <h3 className="font-semibold">WAJI-MIR</h3>
            <p className="text-xs text-blue-100">Active now</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <Phone className="w-5 h-5 cursor-pointer hover:text-blue-200 transition" />
          <Video className="w-5 h-5 cursor-pointer hover:text-blue-200 transition" />
          <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-blue-200 transition" />
          <X className="w-5 h-5 cursor-pointer hover:text-red-400 transition" onClick={() => setShowMessages(false)} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-xs">
              <div className={`px-4 py-2 rounded-2xl shadow-sm ${
                msg.isOwn
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md border'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">{formatTime(msg.timestamp)}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs">
              <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md border shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={isTyping || newMessage.trim() === ''}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
