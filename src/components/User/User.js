import React, { useContext } from 'react';
import AuthContext from '../store/auth-context'

const UserInfo = () => {
  const ctx = useContext(AuthContext)
  console.log('ctx: ctx.isGuestUser ggggggggggg', ctx);

  return (
    <>
    <h3>{!ctx.isGuestUser ? <p> Not a guest Player Info here  </p> : <p>Logged in as guest</p>}</h3>
    <p>Gotta Grab isGuestUser here</p>
    </>
  )
}

export default UserInfo;