import React from 'react';
import PlayerList from './PlayerList';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('player list header renders with correct text', ()=>{
    const { getByTestId } = render(<PlayerList/>)

    const headerEl = getByTestId('player-list-header')

    expect(headerEl.textContent).toBe('Other players currently searching:')

})

///BELOW IS A SAMPLE BEFORE DESTRUCTURING
///BELOW IS A SAMPLE BEFORE DESTRUCTURING
///BELOW IS A SAMPLE BEFORE DESTRUCTURING
///BELOW IS A SAMPLE BEFORE DESTRUCTURING

// test('sanity check', ()=>{
//     const component = render(<PlayerList/>)

//     const headerEl = component.getByTestId('player-list-header')

//     expect(headerEl.textContent).toBe('Other players currently searching:')

// })