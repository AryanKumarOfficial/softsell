'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoSend, IoTime } from 'react-icons/io5';
import { BiMessageDetail } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdOutlineChat, MdOutlineStarPurple500 } from 'react-icons/md';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with your software license questions today? 👋',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Questions and their canned responses
  const cannedResponses = {
    "how do i sell my license": 
      "To sell your software license on SoftSell, follow these 3 simple steps: 1) Create an account and verify your identity, 2) List your license with all relevant details (purchase date, edition, seats available), 3) Once verified by our team, your license will be listed on our marketplace. When sold, we'll guide you through the secure transfer process.",
    
    "is this legal": 
      "Yes, selling unused software licenses is legal in most cases, particularly for perpetual licenses. SoftSell ensures compliance with all applicable laws and software publisher policies. Our verification team confirms that each license is legitimate and transferable before listing.",
    
    "how much can i sell for": 
      "License resale values typically range from 30-70% of the original retail price, depending on factors like software popularity, remaining subscription time, and number of seats. Our platform shows recent sale prices for similar licenses to help you price competitively.",
    
    "how long does it take": 
      "The verification process typically takes 24-48 hours. Once verified, licenses are listed immediately. The time to sell varies by demand, but popular software often sells within a week. After a sale, the transfer process usually takes 1-3 business days to complete.",
    
    "is it secure": 
      "Absolutely! Security is our top priority. We use bank-level encryption, secure our transactions through an escrow system, verify all licenses and users, and provide documentation for every transfer. Our platform is fully compliant with data protection regulations.",
    
    "what software can i sell": 
      "SoftSell supports the transfer of most major enterprise and productivity software licenses, including Microsoft, Adobe, Autodesk, Oracle, SAP, and many others. Some restrictions apply for subscription-based services. Contact us if you're unsure about a specific product."
  };

  // Scroll to bottom of messages on update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Process user message and respond with canned response or fallback
  const processMessage = (userMessage: string) => {
    const normalizedInput = userMessage.toLowerCase().trim();
    
    // Add artificial delay to simulate thinking
    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = "I don't have information on that specific topic. For detailed assistance, please contact our support team at support@softsell.com.";
      
      // Check for matching canned responses
      for (const [key, response] of Object.entries(cannedResponses)) {
        if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
          botResponse = response;
          break;
        }
      }
      
      // Add bot response
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + '-bot',
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      
      setIsTyping(false);
    }, 1200);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString() + '-user',
      text: inputValue,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Process and respond to the message
    processMessage(inputValue);
  };

  // Quick question buttons for common queries
  const quickQuestions = [
    { text: "How do I sell my license?", key: "how do i sell my license" },
    { text: "Is it legal?", key: "is this legal" },
    { text: "How much can I sell for?", key: "how much can i sell for" }
  ];

  const handleQuickQuestion = (key: string) => {
    // Set input value and submit the form programmatically
    setInputValue(key);
    // Use setTimeout to ensure state is updated before submission
    setTimeout(() => {
      const userMessage = {
        id: Date.now().toString() + '-user',
        text: key,
        sender: 'user' as const,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      
      // Process and respond to the message
      processMessage(key);
    }, 0);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed z-50 bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with support"
      >
        {isOpen ? (
          <IoClose className="w-6 h-6" />
        ) : (
          <MdOutlineChat className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat widget container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 bottom-20 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="bg-primary-600 dark:bg-primary-700 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                      <RiCustomerService2Line className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SoftSell Assistant</h3>
                    <p className="text-xs text-white/70">Ask me about software licenses</p>
                  </div>
                </div>
                {/* New close button */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="rounded-full p-1 hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-primary-600 text-white dark:bg-primary-700'
                        : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70 flex items-center gap-1">
                      <IoTime className="inline-block w-3 h-3" />
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="mb-4 flex">
                  <div className="rounded-lg px-4 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick questions */}
              {messages.length <= 2 && !isTyping && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Frequently asked questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickQuestion(q.key)}
                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs py-1 px-2 rounded-full transition-colors flex items-center gap-1"
                      >
                        <BiMessageDetail className="w-3 h-3" /> {q.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white p-2 rounded-r-lg hover:bg-primary-700 focus:outline-none dark:bg-primary-700 dark:hover:bg-primary-600 flex items-center justify-center"
                >
                  <IoSend className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center flex items-center justify-center gap-1">
                <MdOutlineStarPurple500 className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                Try asking about selling licenses, legality, or pricing
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}