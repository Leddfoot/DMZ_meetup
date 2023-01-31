import React from 'react';

import User from '../User/User';
import SearchForTeammateForm from '../SearchForms/SearchForTeammateForm';

import Card from '../UI/Card/Card';
import styles from './Main.module.css';

const Main = () => {
  return (
    <Card className={styles.main}>
    <User />
    <SearchForTeammateForm />
      <h1>Where all the shit goes</h1>
      <p>guest or signed in?</p>
      <h2>if signedin </h2>
      <ul>
      <li>device type</li>
      <li>language</li>
      <li>language looking for</li>
      <li>??HOW MANY IN PARTY ALREADY</li>
      <li>ability to modify choices</li>
      </ul>
      <h2>if not signedin </h2>
      <ul>
      <li>form with bullshit</li>
      <li>whatever else</li>
      </ul>

    </Card>
  );
};

export default Main;
