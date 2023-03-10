import React, { useState, useEffect, useReducer, useContext } from 'react';

import AuthContext from '../store/auth-context';

import Card from '../UI/Card/Card';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const guestReducer = (state, action) => {
  console.log('stateadsfdfdsafdsafads: ', state);
  if(action.type === 'GUEST_BUTTON_CLICK'){
    
  console.log('action: ', action);
    return {isValid: true}
  }
  return {isValid: false}
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });
  const [guestState, dispatchGuest] = useReducer(guestReducer, {
    isValid: false,
  });

  const { isValid: passwordIsValid } = passwordState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: guestIsValid } = guestState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(guestIsValid || emailIsValid + passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid, guestIsValid]);



  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const bypassSubmit =()=>{
    dispatchGuest({type: 'GUEST_BUTTON_CLICK'})
  }


  

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(guestState.isValid);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type='submit'
            className={`styles.btn btn.guest`}
            onClick={bypassSubmit}
          >
            Hang out as a guest
          </Button>
          <hr />
          <Button type='submit' className={styles.btn} disabled={!formIsValid}>
            Create a new account
          </Button>
          <Button type='submit' className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
