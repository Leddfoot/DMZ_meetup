
import React from 'react';
import PlayerSeekingContext from './player-seeking-context';


const PlayerSeekingProvider =(props)=>{

const testManipulateContext =(name)=>{
  console.log('name: ', name);

}
const playerSeekingContext = {
  id: Math.random() + Math.random(),
  gamerTag: 'FuknNOOBCamper',
  gamerTagIncludesActivisionId: false,
  searchingCriteria: {
    totalInParty: 1,
    serverLocation: 'Asia Oceania',
    partySizeDesired: 3,
    primaryLanguage: 'ggg',
    name: 'ass',
    doTestFunction: testManipulateContext}
}

    return (
        <PlayerSeekingContext.Provider value={playerSeekingContext}>
          {props.children}
        </PlayerSeekingContext.Provider>
      );

};

export default PlayerSeekingProvider;