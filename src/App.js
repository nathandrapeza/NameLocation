import './App.css'
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import CountryCard from './CountryCard';


const country1 = {
"name":"michael",
"country":[{"country_id":"US","probability":0.08986482266532715},{"country_id":"AU","probability":0.05976757527083082},{"country_id":"NZ","probability":0.04666974820852911},{"country_id":"US","probability":0.08986482266532715},,{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715}]};

function App() {

  const [countries, setCountries] = useState([]);
  const [searchName, setSearchName] = useState('');
  function changeBackgroundHover(e) {
    e.target.style.background = '#444';
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = '#999';
  }

  return (
    <>
      <h1>Name Location</h1>
      <h2>Enter a name, and we'll try to guess where it's from!</h2>
      
      <div className="searchbar">
        <input
          className="textInput"
          type="text" name="name"
          placeholder='...'
          onChange={() => {}}
        />
        <button onMouseEnter={changeBackgroundHover} onMouseLeave={changeBackgroundLeave} onClick={() => {}}>
          <AiOutlineSearch ></AiOutlineSearch>

        </button>
      </div>
      <p>(Powered by nationalize.io)</p>
      
      <div className='container'>
        {country1.country.map((country) => (<CountryCard country={country}></CountryCard>))}
        
      </div>
      <ReactCountryFlag
        className="emojiFlag"
        countryCode="US"
        style={{
            fontSize: '5em',
        }}
      />
      <ReactCountryFlag
        className="emojiFlag"
        countryCode="KR"
        style={{
            fontSize: '5em',
            
        }}
      />

    </>
  );
}

export default App;
