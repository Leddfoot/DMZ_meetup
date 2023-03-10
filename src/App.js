import React, { useContext } from 'react';

import AuthContext from './components/store/auth-context';


import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MainHeader from './components/MainHeader/MainHeader';
import PlayerList from './components/PlayerList/PlayerList';
import SearchForTeammateForm from './components/SearchForms/SearchForTeammateForm';
import TempColorButton from './components/temp/TempColorButton';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
    <MainHeader />
    <main>
      {!ctx.isLoggedIn && <Login />}

      {ctx.isLoggedIn && <Main />}
      <SearchForTeammateForm />
      <TempColorButton />
      <PlayerList />
    </main>
    </>
  );
}

export default App;
