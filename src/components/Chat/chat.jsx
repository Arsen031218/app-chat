

import React, { useState } from 'react';

const Chat = ({ user, setUser}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const nicknames = [
        'ShadowHunter',
        'ElectricVortex',
        'MysticWhisperer',
        'QuantumSpectre',
        'NebulaDreamer',
        'CelestialChaos',
        'StealthyPhantom',
        'EphemeralEnigma',
        'LunarEcho',
        'CrimsonPhoenix',
        'StormySorcerer',
        'RadiantRapture',
        'NexusNinja',
        'SereneCipher',
        'EnigmaticRogue'
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }


        const updatedMessages = [
            ...messages,
            { text: newMessage, timestamp: new Date(), user: user },
        ];
        setUser(`${nicknames[getRandomInt(0,14)]}`)
        setMessages(updatedMessages);
        setNewMessage('');

    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
                {messages.map((message, index) => (
                    <div key={index}>
                        <strong>{message.user} - {message.timestamp.toLocaleTimeString()}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};


export default Chat;
