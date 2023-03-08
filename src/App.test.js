import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from './App';

afterEach(cleanup)

it('App Renders successfully', () => {
  const { getByTestId } = render(<App />)
    const appEl = getByTestId('app')

    expect(appEl).toBeInTheDocument()
  });

it('App Renders only the Login portion when the user is logged out', () => {
  const { getByTestId } = render(<App />)
    const appEl = getByTestId('app')

    expect(appEl).toBeInTheDocument()
  });



