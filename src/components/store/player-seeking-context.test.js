import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../../App'


test('SAMPLE-TEST-testing disabled or not disable', () => {
    const component = render(<App/>);

    // const element = screen.getByRole('main')

    // expect(component).toBeInTheDocument();
    // expect(element).toBeInTheDocument();
    // expect(element).not.toBeInTheDocument();
})


//C:\Users\leddf\Documents\react-projects\dmz_meetup

// import {NameContext, NameProvider, NameConsumer} from '../react-context'
// import {PlayerSeekingContext } from './player-seeking-context';
// import PlayerSeekingProvider from './PlayerSeekingProvider';
// import SearchForTeammateForm from '../SearchForms/SearchForTeammateForm';

///////////////////////////////////////////////////////
////////use this link to cleanup and https://dev.to/manuartero/testing-a-react-context-provider-5cfg
////////use this link to cleanup and https://dev.to/manuartero/testing-a-react-context-provider-5cfg
////////use this link to cleanup and https://dev.to/manuartero/testing-a-react-context-provider-5cfg
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////




/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
// test('NameConsumer shows default value', () => {
// //   render(<NameConsumer />)
// //   expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
// //     'My Name Is: Unknown',
// //   )
// })

// const customRender = (ui, {providerProps, ...renderOptions}) => {
    
//     return render(
//       <PlayerSeekingProvider {...providerProps}></PlayerSeekingProvider>,
//       renderOptions,
//     )
//   }

//   const testFunction = customRender(SearchForTeammateForm, {value:'test'});

//   test('NameConsumer shows value from provider', () => {
//     const providerProps = {
//       value: 'C3PO',
//     }
//     customRender(<testFunction />, {providerProps})
//     expect(1===1)
//   })
