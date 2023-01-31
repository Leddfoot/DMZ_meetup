import React from 'react'

const LanguageSelect = () => {
    const changeLanguage =()=>{
        console.log('language preference updated')
    }
  return (
    <select onChange={changeLanguage}>
    <option value="English">English</option>
    <option value="Chinese">Chinese</option>
    <option value="Spanish">Spanish</option>
    <option value="Portugese">Portugese</option>
    <option value="Russian">Russian</option>
    <option value="Farsi">Farsi</option>
    </select>
  )
}

export default LanguageSelect