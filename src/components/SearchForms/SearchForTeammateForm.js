import React, { useRef, useContext } from "react";

import PlayerSeekingContext from '../store/player-seeking-context';
import LanguageSelect from './LanguageSelect';
import MissionSelect from './MissionSelect'

import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";

import styles from "./SearchForTeammateForm.module.css";

const SearchForTeammateForm = () => {
  const ctx = useContext(PlayerSeekingContext);
  // console.log('ctx: ', ctx);

  const totalAlreadyInPartyRef = useRef();
  const serverLocationRef = useRef();
  const partySizeDesiredRef = useRef();
  
  const testSubmit =(event)=>{
    event.preventDefault();
    const test = partySizeDesiredRef.current.value;
  }


  return (
    <Card>
    <h1>Update ppu documentation!!!!</h1>
    <h1>Update ppu documentation!!!!</h1>
    <h1>Update ppu documentation!!!!</h1>
    <h1>Update ppu documentation!!!!</h1>
    <h1>Update ppu documentation!!!!</h1>
    <form className={styles.form} onSubmit={testSubmit}>
        <Input
          label="Total already in Party"
          ref={totalAlreadyInPartyRef}
          input={{ id: "players-already-in-party" }}
        />
        <hr/>
        <Input
          ref={serverLocationRef}
          label="Server Location"
          input={{
            id: "server-location",
            type: "dropDown",
            defaultValue: "Europe",
          }}
        />
        <hr/>
        <Input 
        label='Party Size Desired (Currently set by devs)' 
        ref={partySizeDesiredRef} 
        input={{
            disabled: true,
            id:'party-size-desired',
            type: "dropdown",
            defaultValue: "7",
        }}/>
        <hr/>
        <LanguageSelect/>
        <MissionSelect/>
        <button type="submit">submittemp</button>
        
      </form>
    </Card>
  );
};

export default SearchForTeammateForm;


  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  // id: Math.random() + Math.random(),
  // isLoggedInPlayerThisBrowser: false,
  // gamerTag: 'DEFAULTFORAUTOCOMPLETE',
  // activisionId: null,
  // gamerTagIncludesActivisionId: false,
  // discordHandle: null,
  // searchingCriteria: {
  //   totalInParty: 1,
  //   serverLocation: 'DEFAULTFORAUTOCOMPLETE',
  //   partySizeDesired: 3,
  //   primaryLanguage: 'DEFAULTFORAUTOCOMPLETE',
  //   doTestFunction: testManipulateContext}
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
