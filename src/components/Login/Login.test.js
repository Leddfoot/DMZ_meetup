import React from 'react'


import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Login from './Login'
import {Button} from '../UI/Button/Button'
const bypassSubmit = jest.fn

test('Login is removed from DOM after the guest login button is clicked. NOTE: This test is not good!! It should be .not.toBeInTheDocument. Must BE FIXED!', async () => {    
    
const { getByTestId } = render(<Login bypassSubmit={bypassSubmit}/>)
const guestButtonEl = getByTestId('wtf')

await(()=>{
    userEvent.click(guestButtonEl)
    const loginElement = screen.getByTestId('login')
    expect(loginElement).not.toBeInTheDocument();
    expect(bypassSubmit).toHaveBeenCalledTimes(1)
})

 


screen.debug()
  
})




