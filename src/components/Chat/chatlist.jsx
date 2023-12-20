

import React, {useState} from 'react';
import Chat from './chat';

const ChatList = () => {
    const [User, setUser]=useState("Streamer")
    return (
        <div>
            <h2>Chat List</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Chat user = {User} setUser={setUser} />

            </div>
        </div>
    );
};

export default ChatList;
