import React, { useContext } from 'react';

import AuthContext from './components/store/auth-context';

import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  const ctx = useContext(AuthContext);

  return (
    <div data-testid='app'>
    <MainHeader />

    
    {!ctx.isLoggedIn ? <Login /> : <Main />}


    </div>
  );
}

export default App;
