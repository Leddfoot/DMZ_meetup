import React from 'react';

const testManipulateContext =()=>{}

const playerSeekingContext = [{
    id: Math.random() + Math.random(),
    gamerTag: 'FuknNOOBCamper',
    activisionId: null,
    gamerTagIncludesActivisionId: false,
    searchingCriteria: {
      totalInParty: 1,
      serverLocation: 'Asia Oceania',
      partySizeDesired: 3,
      primaryLanguage: 'Chinese',
      doTestFunction: testManipulateContext}
    },{
      id: Math.random() + Math.random(),
      gamerTag: 'Sniperwannabe',
      activisionId: null,
      gamerTagIncludesActivisionId: false,
      searchingCriteria: {
        totalInParty: 1,
        serverLocation: 'Europe',
        partySizeDesired: 3,
        primaryLanguage: 'Norwegian Bokmål',
        doTestFunction: testManipulateContext}
      },
      {
        id: Math.random() + Math.random(),
        gamerTag: 'stoneColdKiller',
        activisionId: null,
        gamerTagIncludesActivisionId: false,
        searchingCriteria: {
          totalInParty: 2,
          serverLocation: 'Americas',
          partySizeDesired: 3,
          primaryLanguage: 'English',
          doTestFunction: testManipulateContext}
        }
  ]
    

export const PlayerListItem = () => {
  return (
    <>
    {playerSeekingContext.length === 0 ? <li>No One Searching at the moment</li> :  playerSeekingContext.map(player=>
      <li key={player.id}>
      {player.gamerTag}
      <hr/>
      Searching For:
      <hr/>
      {`${player.searchingCriteria.partySizeDesired - player.searchingCriteria.totalInParty} other players`}
      <hr/>
      Server Location: 
      {player.searchingCriteria.serverLocation}
      <hr/>
      Language:
      {player.searchingCriteria.primaryLanguage}
      </li>
      )}
    </>

  )
}


