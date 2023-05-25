import React from 'react';
import { Btn } from './Btn/Btn'
import{ Input } from './Input/Input'
// import styles from './Main.module.scss';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main>
      <h2>Welcome Back!</h2>
      <div className='content'>
        <Btn></Btn>
        <Input></Input>
      </div>
    </main>
  );
};

export default Main;
