import React, { useState } from 'react';
import PasswordInput from './Password';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import image from "./sitzplan.jpg"

const ProtectedPage = () => {
  const [isPasswordRequired, setIsPasswordRequired] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (enteredPassword) => {
    // Replace 'your-password' with the actual password you want to use.
    if (enteredPassword === process.env.REACT_APP_CODE) {
      setIsAuthenticated(true);
      setIsPasswordRequired(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      {isPasswordRequired ? (
        <PasswordInput onPasswordSubmit={handlePasswordSubmit} />
      ) : isAuthenticated ? (
        <div className="App">
      
      <header className="App-header">
      
        <p>
          EINLADUNG
        </p>
        <div className="p1" >
        <p>
          Ines & Martin
        </p>
        </div>
        <p>
          31.05.2024
        </p>
        <div className="p3" >
        <p>
          _________________________________
        </p>
        </div>
        <div className="p2" >
        <p>
          Prüfeninger Schlossgarten 
        </p>
        <p>
          Regensburg
        </p>
        <p>
         Beginn: 15 Uhr

        </p>
        <p>
          
         
        </p>
        <p>
        Hier gehts zum Cloud Link:
        </p>
        <button>
        <a href="https://owncloud.tewag.de/owncloud/s/ZGcCmcq8LktjJHw#/">  →  </a></button>
        
      
        
        </div>
        
          
      </header>
    </div>
      ) : null}
    </div>
  );
};

export default ProtectedPage;
