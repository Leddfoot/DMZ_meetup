import React, { useState, useEffect } from "react";


import AuthContext from "./components/store/auth-context";
import PlayerSeekingProvider from './components/store/PlayerSeekingProvider';

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");

    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const signInGuestUser =()=>{
    console.log('signing in guest')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onGuestSignIn: signInGuestUser
      }}        
    >
      <PlayerSeekingProvider>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}

          {isLoggedIn && <Main />}
        </main>
      </PlayerSeekingProvider>
    </AuthContext.Provider>
  );
}

export default App;
