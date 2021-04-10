import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/Auth/LoginButton"
import LogoutButton from "./components/Auth/LogoutButton"
import SetUserInRedux from "./components/Auth/SetUserInRedux"

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, this is Ghallerya in TS!</p>
        <p>You are on the {process.env.NODE_ENV} environment</p>
        {isAuthenticated && (<p>You are authenticated as: {user.name}!</p>)}
        {!isAuthenticated && (<p>You are not authenticated.</p>)}
        <LoginButton />
        <LogoutButton />
        <SetUserInRedux />
      </header>
    </div>
  );
}

export default App;
