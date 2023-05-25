import React from 'react';
import './Btn.style.css';
// import styles from './Btn.module.scss';

export const Btn: React.FC = () => {
  return (
    <div>
      <h3>Login with</h3>
      <div className='box'>
      <button className='facebook'><i className="bi bi-facebook"></i></button>
      <button className='google'><i className="bi bi-google"></i></button>
      <button className='twitter'><i className="bi bi-twitter"></i></button>
      </div>
    </div>
  )  
}
