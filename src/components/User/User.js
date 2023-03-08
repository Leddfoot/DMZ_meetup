import React, { useContext } from 'react';
import AuthContext from '../store/auth-context'

import Card from '../UI/Card/Card';

import styles from './User.module.css'

const UserInfo = () => {
  const ctx = useContext(AuthContext)

  return (
    
    <Card className={styles.user}>
    <h3>{!ctx.isGuestUser ? <p> Not a guest Player Info here  </p> : <p>Logged in as guest</p>}</h3>
    <p>Gotta Grab isGuestUser here</p>
    </Card>
  )
}

export default UserInfo;