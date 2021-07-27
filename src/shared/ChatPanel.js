import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import axios from 'axios'

require('dotenv').config();

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user] = useState(
    JSON.parse(localStorage.getItem('auth'))
  );

  useEffect(() => {
    console.log('hello');
    fetch(`${process.env.REACT_APP_BACKEND}/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const addMessage = () => {
    if (!message.length || !user) {
      alert(user ? 'message vide !':'WHO ARE YOU ?!!');
    } else {
      setMessages((old) => [
        ...old,
        { content: message, username: user.username },
      ]);
      setMessage('');
      setTimeout(function () {
        var myDiv = document.querySelector(
          '.chat-messages'
        );
        myDiv.scrollTop = myDiv.scrollHeight;
      }, 800);
      axios.post(`${process.env.REACT_APP_BACKEND}/messages`,{content:message,username:user?.username})
    }
  };
  return (
    <>
      <div
        className='mt-2 chat-messages'
        style={{ scrollBehavior: 'smooth' }}>
        {messages?.map((e) => (
          <SingleMessage message={e} />
        ))}
      </div>
      <div className='xchat d-flex'>
        <input
          className='x-chat-input'
          type='text'
          placeholder='chat here...'
          value={message}
          onChange={({ target: { value } }) => {
            setMessage(value);
          }}
        />
        <i
          onClick={() => addMessage()}
          className='x-chat-send'
          style={{
            fontSize: '25px',
            textAlign: 'center',
            cursor: 'pointer',
            margin: 'auto',
            position: 'absolute',
            right: '15px',
          }}
          class='far fa-paper-plane'></i>
      </div>
    </>
  );
}
