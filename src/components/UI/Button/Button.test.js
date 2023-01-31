import Button from './Button';
import React from 'react';



import { render, screen } from '@testing-library/react'


describe('The button tests:', ()=>{
    test("SAMPLE-TEST-testing that button gets rendered", () => {
        render(<Button/>);
    
        const element = screen.getByRole('button')
    
        expect(element).toBeInTheDocument();
    })
    
    test("SAMPLE-TEST-testing that button is not disabled", () => {
        render(<Button/>);
    
        const element = screen.getByRole('button')
    
        expect(element).not.toBeDisabled();
    })

})



