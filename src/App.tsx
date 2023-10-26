import React, { useEffect } from 'react';

import logo from './logo.svg';
import Logo from './Bohowild42.png';
import Logo2 from './Bohowild31.png';
import './App.css';
import stroke from './Pipe.svg'
import PasswordInput from './components/Password';
import ProtectedPage from './components/ProtectedPage';

function App() {
  useEffect(() => {
    if (navigator.userAgent.indexOf('iPhone') > -1) {
      const viewportMeta = document.querySelector("[name=viewport]");
      if (viewportMeta) {
        viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");
      }
    }
  }, []);
  return (
    <div>
      <ProtectedPage />
    </div>
  );
}

export default App;
