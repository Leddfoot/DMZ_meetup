import React from 'react';

import User from '../User/User';

import Card from '../UI/Card/Card';
import styles from './Main.module.css';

const Main = () => {
  return (
    <Card className={styles.main}>
    <User />


    </Card>
  );
};

export default Main;
