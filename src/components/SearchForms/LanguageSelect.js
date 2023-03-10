import React from 'react';
import { nanoid } from 'nanoid';

/////Temporary will use some plugin bs

const languageList = ['English', 'Chinese', 'Farsi', 'Russian', 'Spanish', 'Portugese'];

const LanguageSelect = () => {
  const changeLanguage = () => {
    console.log('language preference updated');
  };

  return (
    <label htmlFor='primary-language-selector'>Select First language:
      <select id='primary-language-selector' onChange={changeLanguage}>
        {languageList.map(language => <option key={nanoid()} value={language}>{language}</option>)}
      </select>
    </label>
  );
};

export default LanguageSelect;
