import React, {useContext} from "react";


import AuthContext from './components/store/auth-context';

import PlayerSeekingProvider from './components/store/PlayerSeekingProvider';
import { PlayerList } from './components/PlayerList/PlayerList';

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext);

  return (
       <PlayerSeekingProvider>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}

          {ctx.isLoggedIn && <Main />}
          <PlayerList />
        </main>
      </PlayerSeekingProvider>
  );
}

export default App;
