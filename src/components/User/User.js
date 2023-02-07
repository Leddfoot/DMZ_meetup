import React from 'react';

const UserInfo = () => {

  return (
    <>
    <h3>{true ? <p>NotLogged? PUT Logged as GUEST OR user account info shit </p> : <p>user account info shit</p>}</h3>
    <p>Gotta Grab isGuestUser here</p>
    </>
  )
}

export default UserInfo;