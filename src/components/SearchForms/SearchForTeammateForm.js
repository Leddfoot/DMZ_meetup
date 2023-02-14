import React, { useRef, useContext } from "react";

import PlayerSeekingContext from '../store/player-seeking-context';

import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";

import LanguageSelect from './LanguageSelect';

import styles from "./SearchForTeammateForm.module.css";

const SearchForTeammateForm = () => {
  const ctx = useContext(PlayerSeekingContext);

  const serverLocationRef = useRef();
  const totalAlreadyInPartyRef = useRef();
  const partySizeRef = useRef();
  
  const testSubmit =(event)=>{
    event.preventDefault();
    const test = partySizeRef.current.value;
    console.log('test: ', test);
  }


  return (
    <Card>
      <form className={styles.form} onSubmit={testSubmit}>
        <Input
          label="Total already in Party"
          ref={totalAlreadyInPartyRef}
          input={{ id: "players-in-party" }}
        />
        <Input
          ref={serverLocationRef}
          label="Server Location"
          input={{
            id: "players-in-party",
            type: "dropDown",
            defaultValue: "Europe",
          }}
        />
        <Input 
        label='Party Size (Currently set by devs)' 
        ref={partySizeRef} 
        input={{
            disabled: true,
            id:'party-size',
            type: "dropdown",
            defaultValue: "7",
        }}/>
        <LanguageSelect />
        <button type="submit">submittemp</button>
        
      </form>
    </Card>
  );
};

export default SearchForTeammateForm;
