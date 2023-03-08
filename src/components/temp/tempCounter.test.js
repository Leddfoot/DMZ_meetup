import React from 'react';

import TempCounter from './tempCounter';

import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

test('counter initializes with value of 0', ()=>{
    const { getByTestId } = render(<TempCounter/>)
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
})

test('input initializes with value of 1', ()=>{
    const { getByTestId } = render(<TempCounter/>)
    const inputEl = getByTestId('input')

    expect(inputEl.value).toBe('1')
})

test('add button renders with +', ()=>{
    const { getByTestId } = render(<TempCounter/>)
    const addEl = getByTestId('add')

    expect(addEl.textContent).toBe('+')
})

test('subtract button renders with -', ()=>{
    const { getByTestId } = render(<TempCounter/>)
    const subtractEl = getByTestId('subtract')

    expect(subtractEl.textContent).toBe('-')
})

test('input initializes with value of 1', ()=>{
    const { getByTestId } = render(<TempCounter/>)
    const inputEl = getByTestId('input')

    expect(inputEl.value).toBe('1')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })   
  
    expect(inputEl.value).toBe('5')
})

test('counter increments by the value in the input element, when using the add button',()=>{
    const { getByTestId } = render(<TempCounter/>)
    const counterEl = getByTestId('counter')
    const addEl = getByTestId('add')

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(addEl)

    expect(counterEl.textContent).toBe('1')

})

test('add button should add the amount in the input to the counter when clicked',()=>{
    const { getByTestId } = render(<TempCounter/>)
    const counterEl = getByTestId('counter')
    const addEl = getByTestId('add')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(addEl)

    expect(counterEl.textContent).toBe('5')

})