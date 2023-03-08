import React from 'react';

import UserInfo from '../User/User'
import SearchForTeammateForm from '../SearchForms/SearchForTeammateForm'
import PlayerList from '../PlayerList/PlayerList'
import TempCounter from '../temp/tempCounter';

import Card from '../UI/Card/Card';
import styles from './Main.module.css';

const Main = () => {
  return (
    <Card className={styles.main}> 
    <UserInfo />
    <SearchForTeammateForm />
    <PlayerList />
    <TempCounter />


    </Card>
  );
};

export default Main;
