import React from 'react';

import { PlayerListItem } from './PlayerListItem';
import Card from '../UI/Card/Card';

import styles from './PlayerList.module.css'


export const PlayerList = (props) => {
console.log('styles: ', styles);

  return (
    <Card className={styles.playerList}>
    <ul>
    <PlayerListItem />
    </ul>
    </Card>
  )
}
