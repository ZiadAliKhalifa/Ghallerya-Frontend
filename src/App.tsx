import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';
import LoginButton from "./Auth/LoginButton"
import LogoutButton from "./Auth/LogoutButton"


function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, this is Hedwig in TS!</p>
        {isAuthenticated && (<p>You are authenticated as: {user.name}!</p>)}
        {!isAuthenticated && (<p>You are not authenticated.</p>)}
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
