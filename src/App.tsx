import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './Bohowild42.png';
import Logo2 from './Bohowild31.png';
import './App.css';
import stroke from './Pipe.svg'
import PasswordInput from './components/Password';
import ProtectedPage from './components/ProtectedPage';

function App() {

  return (
    <div>
      <ProtectedPage />
    </div>
  );
}

export default App;
