import Logo from './Bohowild54.png';
import React, { useState } from 'react';

const PasswordInput = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className="Form">
      <img src={Logo} className="my-image" alt="My Image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p></p>
        <button className="button-12" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordInput;