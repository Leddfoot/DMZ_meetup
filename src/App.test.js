import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'

import App from './App';

it('SAMPLE-TEST-sums numbers', () => {
    let x = App
    const sum = (a,b)=>{
        return +a + +b
    }
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });

it('SAMPLE-TEST-sums numbers', () => {
    let x = App
    const sum = (a,b)=>{
        return +a + +b
    }
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });


test('SAMPLE-TEST-Example 1 renders successfully', () => {
    render(<App/>);

    // const element = screen.getByText(/Total already/i);

    // expect(element).toBeInTheDocument();
})

test('SAMPLE-TEST-testing disabled or not disable', () => {
    render(<App/>);

    const element = screen.getByRole('main')

    expect(element).toBeInTheDocument();
})