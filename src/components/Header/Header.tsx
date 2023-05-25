import React from 'react';
import './Header.css';
// import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header>
      <p className='headerTime'>9:41</p>
      <ul className='settings'>
        <li><i className="bi bi-reception-4"></i></li>
        <li><i className="bi bi-wifi"></i></li>
        <li><i className="bi bi-battery-half charge"></i></li>
      </ul>
    </header>
  );
};

export default Header;
