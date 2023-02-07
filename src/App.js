import React, {useContext} from "react";


import AuthContext from './components/store/auth-context';

import PlayerSeekingProvider from './components/store/PlayerSeekingProvider';

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext);

  return (
       <PlayerSeekingProvider>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler} />}

          {ctx.isLoggedIn && <Main />}
        </main>
      </PlayerSeekingProvider>
  );
}

export default App;
