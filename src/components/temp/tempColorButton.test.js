import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import TempColorButton from './TempColorButton'

test('button has correct initial color, and correct initial text', ()=>{
    render(<TempColorButton/>)
    const colorButton = screen.getByRole('button', {name: /change to blue/i})

    
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})
    expect(colorButton).toHaveTextContent('Change to Blue')
})


test('button turns blue when clicked', ()=>{

})