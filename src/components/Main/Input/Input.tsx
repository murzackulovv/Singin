import React, { useState } from 'react';
import './Input.style.css';

export const Input: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationColor, setNotificationColor] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (email.length < 5 || password.length < 5) {
      setNotification('Введите как минимум 5 символов для каждого поля.');
      setNotificationColor('red');
    } else if (!isEmailValid || !email.endsWith('@gmail.com')) {
      setNotification('Введите действительный адрес электронной почты');
      setNotificationColor('red');
    } else {
      setNotification('Успешная авторизация!');
      setNotificationColor('green');
      window.location.href = 'https://akspic.ru/album/priroda/7680x4320';
    }
  };

  return (
    <div>
      <h3>Or</h3>
      <div className='inputBox'>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginBtn' onClick={handleLogin}>
          Login
        </button>
        <p style={{ color: notificationColor }}>{notification}</p>
      </div>
    </div>
  );
};
