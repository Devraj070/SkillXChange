// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { FiPhone, FiVideo, FiSettings, FiPaperclip, FiSend } from 'react-icons/fi';
// import { useSearchParams } from 'next/navigation';
// import { Suspense } from 'react'


// import demoUsers from '@/Data/DemoUsers';

// const STORAGE_KEY = "chatAppDemoConversations";

// const Chat = () => {
//     const searchParams = useSearchParams();
//     const paramId = searchParams.get('id');

//     const [selectedUserId, setSelectedUserId] = useState(() => {
//         // If URL param userId is valid and found in demoUsers, start with that user
//         // else default to first user
//         // This allows the component to initialize with the correct user based on URL params
//         // If no valid userId is found, it defaults to the first user in demoUsers
//         if (paramId && demoUsers.some(u => u.id === parseInt(paramId,
//             10))) {
//             return parseInt(paramId, 10);
//         }
//         return demoUsers[0].id;
//     });
//     const [chatData, setChatData] = useState({});
//     const [input, setInput] = useState('');
//     const [isTyping, setIsTyping] = useState(false);
//     const messagesEndRef = useRef(null);


//     // Load chat data from localStorage on mount
//     useEffect(() => {
//         const savedData = localStorage.getItem(STORAGE_KEY);
//         if (savedData) {
//             setChatData(JSON.parse(savedData));
//         }
//     }, []);

//     // Save chatData to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(chatData));
//     }, [chatData]);

//     const messages = chatData[selectedUserId] || [];

//     // Scroll chat to bottom on messages change
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     const autoReply = (userId) => {
//         const user = demoUsers.find(u => u.id === userId);
//         if (!user) return;

//         setIsTyping(true);
//         const replies = user.reviewComments?.map(r => r.comment) || ['Thanks for your message!'];
//         // Random reply with some delay
//         const replyText = replies[Math.floor(Math.random() * replies.length)];

//         setTimeout(() => {
//             setIsTyping(false);
//             setChatData(prev => ({
//                 ...prev,
//                 [userId]: [...(prev[userId] || []), {
//                     sender: 'them',
//                     text: replyText,
//                     timestamp: new Date().toISOString(),
//                     id: Date.now() + Math.random()
//                 }]
//             }));
//         }, 2000);
//     };

//     const sendMessage = () => {
//         if (!input.trim()) return;
//         const newMessage = {
//             sender: 'me',
//             text: input.trim(),
//             timestamp: new Date().toISOString(),
//             id: Date.now() + Math.random()
//         };
//         setChatData(prev => ({
//             ...prev,
//             [selectedUserId]: [...(prev[selectedUserId] || []), newMessage]
//         }));
//         setInput('');
//         autoReply(selectedUserId);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             sendMessage();
//         }
//     };

//     const selectedUser = demoUsers.find(u => u.id === selectedUserId) || demoUsers[0];

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'online': return 'bg-green-400';
//             case 'away': return 'bg-yellow-400';
//             case 'offline': return 'bg-gray-400';
//             default: return 'bg-gray-400';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-indigo-950 p-4">
//             <div className="max-w-7xl mx-auto">
//                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
//                     <div className="flex h-[700px]">
//                         {/* Sidebar */}
//                         <div className="w-80 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 flex flex-col">
//                             <div className="p-6 border-b border-gray-500">
//                                 <h1 className="text-3xl font-bold mb-2 text-blue-800">SkillXChange</h1>
//                                 <p className="text-sm text-gray-600">Connect and exchange skills</p>
//                             </div>
//                             <div className="flex-1 overflow-y-auto">
//                                 {demoUsers.map(user => (
//                                     <button
//                                         key={user.id}
//                                         onClick={() => setSelectedUserId(user.id)}
//                                         className={`w-full p-4 flex items-center gap-3 hover:bg-blue-50 transition-all duration-200 border-l-4 ${user.id === selectedUserId
//                                             ? 'bg-blue-50 border-l-blue-500'
//                                             : 'border-l-transparent hover:border-l-blue-300'
//                                             }`}
//                                     >
//                                         <div className="relative">
//                                             <img
//                                                 src={user.profileImg}
//                                                 alt={user.name}
//                                                 className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
//                                             />
//                                             <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(user.status)} rounded-full border-2 bg-green-600 border-white`}></div>
//                                         </div>
//                                         <div className="flex-1 text-left">
//                                             <h3 className="font-semibold text-gray-900 text-sm">{user.name}</h3>
//                                             <p className="text-xs text-gray-500 mb-1">{user.title}</p>
//                                             <p className="text-xs text-gray-400">{user.lastSeen}</p>
//                                         </div>
//                                         {chatData[user.id]?.length > 0 && (
//                                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                                         )}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Chat area */}
//                         <div className="flex-1 flex flex-col">
//                             {/* Header */}
//                             <div className="p-6 border-b border-gray-200 bg-white">
//                                 <div className="flex items-center gap-4">
//                                     <div className="relative">
//                                         <img
//                                             src={selectedUser.profileImg}
//                                             alt={selectedUser.name}
//                                             className="w-12 h-12 rounded-full object-cover"
//                                         />
//                                         <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(selectedUser.status)} rounded-full border-2 bg-green-600 border-white`}></div>
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="font-semibold text-gray-900 text-lg">{selectedUser.name}</h3>
//                                         <p className="text-sm text-gray-500">{selectedUser.title} • {selectedUser.status}</p>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" aria-label="Call"><FiPhone size={20} /></button>
//                                         <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" aria-label="Video Call"><FiVideo size={20} /></button>
//                                         <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" aria-label="Settings"><FiSettings size={20} /></button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Messages */}
//                             <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
//                                 {messages.length === 0 && (
//                                     <div className="flex flex-col items-center justify-center h-full text-center">
//                                         <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                                             💬
//                                         </div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a conversation</h3>
//                                         <p className="text-gray-500 max-w-md">
//                                             Begin exchanging skills and knowledge with {selectedUser.name}. Share your expertise and learn something new!
//                                         </p>
//                                     </div>
//                                 )}
//                                 <div className="space-y-4">
//                                     {messages.map((msg) => (
//                                         <div
//                                             key={msg.id}
//                                             className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
//                                         >
//                                             {msg.sender === 'them' && (
//                                                 <img
//                                                     src={selectedUser.profileImg}
//                                                     alt={selectedUser.name}
//                                                     className="w-8 h-8 rounded-full mr-3 mt-1"
//                                                 />
//                                             )}
//                                             <div className={`max-w-[70%] group ${msg.sender === 'me' ? 'order-1' : ''}`}>
//                                                 <div className={`px-4 py-3 rounded-2xl shadow-sm ${msg.sender === 'me'
//                                                     ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
//                                                     : 'bg-white border border-gray-200 text-gray-900 rounded-bl-md'
//                                                     }`}>
//                                                     <p className="text-sm leading-relaxed">{msg.text}</p>
//                                                 </div>
//                                                 <p className={`text-xs text-gray-400 mt-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity ${msg.sender === 'me' ? 'text-right' : 'text-left'
//                                                     }`}>
//                                                     {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {isTyping && (
//                                         <div className="flex justify-start">
//                                             <img
//                                                 src={selectedUser.profileImg}
//                                                 alt={selectedUser.name}
//                                                 className="w-8 h-8 rounded-full mr-3 mt-1"
//                                             />
//                                             <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
//                                                 <div className="flex space-x-1">
//                                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div ref={messagesEndRef} />
//                             </div>

//                             {/* Input */}
//                             <div className="p-6 bg-white border-t border-gray-200">
//                                 <div className="flex items-end gap-4">
//                                     <button className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" aria-label="Attach File"><FiPaperclip size={20} /></button>
//                                     <div className="flex-1 relative">
//                                         <textarea
//                                             rows={1}
//                                             value={input}
//                                             onChange={(e) => setInput(e.target.value)}
//                                             onKeyDown={handleKeyDown}
//                                             placeholder="Type your message..."
//                                             className="w-full resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 max-h-32 text-black"
//                                         />
//                                     </div>
//                                     <button
//                                         onClick={sendMessage}
//                                         disabled={!input.trim()}
//                                         className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
//                                         aria-label="Send Message"
//                                     >
//                                         <FiSend size={20} />
//                                     </button>
//                                 </div>
//                                 <div className="flex gap-2 mt-3">
//                                     <button
//                                         onClick={() => setInput("Hi! I'd love to exchange skills with you. What are you looking to learn?")}
//                                         className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
//                                     >
//                                         💡 Skill Exchange
//                                     </button>
//                                     <button
//                                         onClick={() => setInput("When would be a good time for us to connect and discuss our expertise?")}
//                                         className="px-3 py-1 text-xs bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors"
//                                     >
//                                         📅 Schedule
//                                     </button>
//                                     <button
//                                         onClick={() => setInput("Thank you for the great collaboration! I really learned a lot.")}
//                                         className="px-3 py-1 text-xs bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
//                                     >
//                                         🙏 Thank You
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default function Messages() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Chat />
//         </Suspense>
//     );
// }


'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { FiPhone, FiVideo, FiSettings, FiPaperclip, FiSend } from 'react-icons/fi';
import { useSearchParams } from 'next/navigation';

import demoUsers from '@/Data/DemoUsers';

const STORAGE_KEY = "chatAppDemoConversations";

const Chat = () => {
    const searchParams = useSearchParams();
    const paramId = searchParams.get('id');

    const [selectedUserId, setSelectedUserId] = useState(() => {
        if (paramId && demoUsers.some(u => u.id === parseInt(paramId, 10))) {
            return parseInt(paramId, 10);
        }
        return demoUsers[0].id;
    });
    const [chatData, setChatData] = useState({});
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            setChatData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chatData));
    }, [chatData]);

    const messages = chatData[selectedUserId] || [];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const autoReply = (userId) => {
        const user = demoUsers.find(u => u.id === userId);
        if (!user) return;

        setIsTyping(true);
        const replies = user.reviewComments?.map(r => r.comment) || ['Thanks for your message!'];
        const replyText = replies[Math.floor(Math.random() * replies.length)];

        setTimeout(() => {
            setIsTyping(false);
            setChatData(prev => ({
                ...prev,
                [userId]: [...(prev[userId] || []), {
                    sender: 'them',
                    text: replyText,
                    timestamp: new Date().toISOString(),
                    id: Date.now() + Math.random()
                }]
            }));
        }, 2000);
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        const newMessage = {
            sender: 'me',
            text: input.trim(),
            timestamp: new Date().toISOString(),
            id: Date.now() + Math.random()
        };
        setChatData(prev => ({
            ...prev,
            [selectedUserId]: [...(prev[selectedUserId] || []), newMessage]
        }));
        setInput('');
        autoReply(selectedUserId);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const selectedUser = demoUsers.find(u => u.id === selectedUserId) || demoUsers[0];

    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return 'bg-green-400';
            case 'away': return 'bg-yellow-400';
            case 'offline': return 'bg-gray-400';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-indigo-950 p-2 sm:p-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-auto
                ">
                    <div className="flex flex-col md:flex-row h-[calc(100vh-40px)] md:h-[700px]">
                        {/* Sidebar */}
                        <div className="w-full md:w-80 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 flex flex-col">
                            <div className="p-4 sm:p-6 border-b border-gray-500">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-blue-800">SkillXChange</h1>
                                <p className="text-xs sm:text-sm text-gray-600">Connect and exchange skills</p>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {demoUsers.map(user => (
                                    <button
                                        key={user.id}
                                        onClick={() => setSelectedUserId(user.id)}
                                        className={`w-full p-3 sm:p-4 flex items-center gap-3 hover:bg-blue-50 transition-all duration-200 border-l-4 ${user.id === selectedUserId
                                            ? 'bg-blue-50 border-l-blue-500'
                                            : 'border-l-transparent hover:border-l-blue-300'
                                            }`}
                                    >
                                        <div className="relative">
                                            <img
                                                src={user.profileImg}
                                                alt={user.name}
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-md"
                                            />
                                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="font-semibold text-gray-900 text-sm">{user.name}</h3>
                                            <p className="text-xs text-gray-500 mb-1">{user.title}</p>
                                            <p className="text-xs text-gray-400">{user.lastSeen}</p>
                                        </div>
                                        {chatData[user.id]?.length > 0 && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat area */}
                        <div className="flex-1 flex flex-col">
                            {/* Header */}
                            <div className="p-4 sm:p-6 border-b border-gray-200 bg-white">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="relative">
                                        <img
                                            src={selectedUser.profileImg}
                                            alt={selectedUser.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                        />
                                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${getStatusColor(selectedUser.status)} rounded-full border-2 border-white`}></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{selectedUser.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-500">{selectedUser.title} • {selectedUser.status}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full"><FiPhone size={18} /></button>
                                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full"><FiVideo size={18} /></button>
                                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full"><FiSettings size={18} /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white">
                                {messages.length === 0 && (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            💬
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a conversation</h3>
                                        <p className="text-gray-500 max-w-md">
                                            Begin exchanging skills and knowledge with {selectedUser.name}. Share your expertise and learn something new!
                                        </p>
                                    </div>
                                )}
                                <div className="space-y-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            {msg.sender === 'them' && (
                                                <img
                                                    src={selectedUser.profileImg}
                                                    alt={selectedUser.name}
                                                    className="w-8 h-8 rounded-full mr-3 mt-1"
                                                />
                                            )}
                                            <div className={`max-w-[70%] group ${msg.sender === 'me' ? 'order-1' : ''}`}>
                                                <div className={`px-4 py-3 rounded-2xl shadow-sm ${msg.sender === 'me'
                                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                                                    : 'bg-white border border-gray-200 text-gray-900 rounded-bl-md'
                                                    }`}>
                                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                                </div>
                                                <p className={`text-xs text-gray-400 mt-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <img
                                                src={selectedUser.profileImg}
                                                alt={selectedUser.name}
                                                className="w-8 h-8 rounded-full mr-3 mt-1"
                                            />
                                            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 sm:p-6 bg-white border-t border-gray-200">
                                <div className="flex items-end gap-2 sm:gap-4">
                                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full"><FiPaperclip size={18} /></button>
                                    <div className="flex-1">
                                        <textarea
                                            rows={1}
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Type your message..."
                                            className="w-full resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 max-h-32 text-black"
                                        />
                                    </div>
                                    <button
                                        onClick={sendMessage}
                                        disabled={!input.trim()}
                                        className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full disabled:opacity-50 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
                                    >
                                        <FiSend size={20} />
                                    </button>
                                </div>
                                <div className="flex gap-2 mt-3 flex-wrap">
                                    <button
                                        onClick={() => setInput("Hi! I'd love to exchange skills with you. What are you looking to learn?")}
                                        className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                                    >
                                        💡 Skill Exchange
                                    </button>
                                    <button
                                        onClick={() => setInput("When would be a good time for us to connect and discuss our expertise?")}
                                        className="px-3 py-1 text-xs bg-green-50 text-green-600 rounded-full hover:bg-green-100"
                                    >
                                        📅 Schedule
                                    </button>
                                    <button
                                        onClick={() => setInput("Thank you for the great collaboration! I really learned a lot.")}
                                        className="px-3 py-1 text-xs bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100"
                                    >
                                        🙏 Thank You
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Messages() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Chat />
        </Suspense>
    );
}
