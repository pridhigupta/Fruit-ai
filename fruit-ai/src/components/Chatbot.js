import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { type: 'text', content: 'Hello! How can I assist you?', sender: 'bot', time: '10:30 AM' }
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const userMsg = {
                type: 'text',
                content: newMessage,
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prevMessages => [...prevMessages, userMsg]);
            setNewMessage('');

            try {
                const response = await fetch('http://localhost:5000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: newMessage })
                });

                const data = await response.json();

                const botMsg = {
                    type: 'text',
                    content: data.response,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };

                setMessages(prevMessages => [...prevMessages, botMsg]);

            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-header">
                <img src="https://i.imgur.com/tMQd6Wx.jpeg" alt="User Avatar" className="avatar" />
                <div className="profile-info">
                    <h4>John Doe</h4>
                    <p className="status">Online</p>
                </div>
            </div>

            <div className="chat-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.type === 'text' ? (
                            <p>{msg.content}</p>
                        ) : (
                            <div className="audio-message">
                                <audio controls src={msg.content}></audio>
                            </div>
                        )}
                        <span className="message-time">{msg.time}</span>
                    </div>
                ))}
            </div>

            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="message-input"
                />
                <button className="send-button" onClick={handleSendMessage}>
                    <p>Send</p>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
