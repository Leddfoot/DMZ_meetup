import React from 'react';

import { PlayerListItem } from './PlayerListItem';
import Card from '../UI/Card/Card';

import styles from './PlayerList.module.css'


const PlayerList = () => {

  return (
    <Card className={styles.playerList}>
    <ul>
    <PlayerListItem />
    </ul>
    </Card>
  )
}

export default PlayerList;
